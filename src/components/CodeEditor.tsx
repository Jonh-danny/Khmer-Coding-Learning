import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, CheckCircle, RotateCcw, AlertTriangle, Terminal, Eye, FileCode, Check, Sparkles } from 'lucide-react';
import { LessonFile, Language } from '../types';
import { t } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { registerAutocomplete } from '../utils/autocomplete';

const MOCK_DB: Record<string, any[]> = {
  customers: [
    { CustomerID: 1, CustomerName: "Alfreds Futterkiste", ContactName: "Maria Anders", City: "Berlin", Country: "Germany" },
    { CustomerID: 2, CustomerName: "Ana Trujillo Emparedados", ContactName: "Ana Trujillo", City: "México D.F.", Country: "Mexico" },
    { CustomerID: 3, CustomerName: "Antonio Moreno Taquería", ContactName: "Antonio Moreno", City: "México D.F.", Country: "Mexico" },
    { CustomerID: 4, CustomerName: "Around the Horn", ContactName: "Thomas Hardy", City: "London", Country: "UK" },
    { CustomerID: 5, CustomerName: "Sok & San Co.", ContactName: "Sok", City: "Phnom Penh", Country: "Cambodia" },
  ],
  products: [
    { ProductID: 1, ProductName: "Chais", SupplierID: 1, CategoryID: 1, Unit: "10 boxes", Price: 18.00 },
    { ProductID: 2, ProductName: "Chang", SupplierID: 1, CategoryID: 1, Unit: "24 bottles", Price: 19.00 },
    { ProductID: 3, ProductName: "Aniseed Syrup", SupplierID: 1, CategoryID: 2, Unit: "12 bottles", Price: 10.00 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", SupplierID: 2, CategoryID: 2, Unit: "48 jars", Price: 22.00 },
    { ProductID: 5, ProductName: "Angkor Beer", SupplierID: 3, CategoryID: 1, Unit: "24 cans", Price: 12.50 },
  ],
  orders: [
    { OrderID: 10248, CustomerID: 1, EmployeeID: 5, OrderDate: "1996-07-04", ShipperID: 3 },
    { OrderID: 10249, CustomerID: 2, EmployeeID: 6, OrderDate: "1996-07-05", ShipperID: 1 },
    { OrderID: 10250, CustomerID: 3, EmployeeID: 4, OrderDate: "1996-07-08", ShipperID: 2 },
    { OrderID: 10251, CustomerID: 4, EmployeeID: 3, OrderDate: "1996-07-08", ShipperID: 1 },
    { OrderID: 10252, CustomerID: 5, EmployeeID: 4, OrderDate: "1996-07-09", ShipperID: 2 },
  ]
};

interface CodeEditorProps {
  files: LessonFile[];
  onFilesChange: (files: LessonFile[]) => void;
  language: string; // 'html' | 'css' | 'javascript' | 'python' | 'cpp' | 'java' | 'csharp' | 'typescript'
  activeFileName: string;
  onActiveFileChange: (name: string) => void;
  currentLang: Language;
  darkMode: boolean;
  onVerify: (consoleOutput: string) => void;
  onReset: () => void;
  trackId?: string;
}

export default function CodeEditor({
  files,
  onFilesChange,
  language,
  activeFileName,
  onActiveFileChange,
  currentLang,
  darkMode,
  onVerify,
  onReset,
  trackId
}: CodeEditorProps) {
  const editorRef = useRef<any>(null);
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'console'>(
    ['html', 'css'].includes(language) || ['angular', 'vue', 'sql', 'mysql'].includes(trackId || '') ? 'preview' : 'console'
  );
  const [iframeSrcDoc, setIframeSrcDoc] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState<string>('');
  const [sqlResult, setSqlResult] = useState<{ columns: string[]; rows: any[]; count: number; error?: string } | null>(null);

  const activeFile = files.find(f => f.name === activeFileName) || files[0];

  // Map file extensions to Monaco supported names
  const getEditorLanguage = (fileName: string) => {
    if (fileName.endsWith('.html')) return 'html';
    if (fileName.endsWith('.css')) return 'css';
    if (fileName.endsWith('.js') || fileName.endsWith('.jsx')) return 'javascript';
    if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) return 'typescript';
    if (fileName.endsWith('.py')) return 'python';
    if (fileName.endsWith('.cpp') || fileName.endsWith('.h')) return 'cpp';
    if (fileName.endsWith('.java')) return 'java';
    if (fileName.endsWith('.cs')) return 'csharp';
    if (fileName.endsWith('.php')) return 'php';
    if (fileName.endsWith('.sql')) return 'sql';
    return 'plaintext';
  };

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
    const updatedFiles = files.map(f => 
      f.name === activeFileName ? { ...f, content: value } : f
    );
    onFilesChange(updatedFiles);
  };

  const runSqlInterpreter = (query: string) => {
    const clean = query.trim().replace(/\s+/g, ' ').replace(/;$/, '');
    const lower = clean.toLowerCase();

    if (!lower.startsWith('select')) {
      return {
        columns: [],
        rows: [],
        error: "Only SELECT queries are supported in this simulated editor.",
        count: 0
      };
    }

    // Determine Table
    let tableName = '';
    if (lower.includes('from customers')) tableName = 'customers';
    else if (lower.includes('from products')) tableName = 'products';
    else if (lower.includes('from orders')) tableName = 'orders';
    else {
      return {
        columns: [],
        rows: [],
        error: "Table not found. Available tables are: Customers, Products, Orders.",
        count: 0
      };
    }

    let sourceData = JSON.parse(JSON.stringify(MOCK_DB[tableName]));

    // Handle WHERE filters
    const whereIndex = lower.indexOf('where ');
    if (whereIndex !== -1) {
      let whereClause = clean.substring(whereIndex + 6);
      // Remove ORDER BY or LIMIT from where clause
      const orderIndex = whereClause.toLowerCase().indexOf('order by');
      const limitIndex = whereClause.toLowerCase().indexOf('limit');
      if (orderIndex !== -1) whereClause = whereClause.substring(0, orderIndex);
      else if (limitIndex !== -1) whereClause = whereClause.substring(0, limitIndex);

      const condition = whereClause.trim();
      // Parse basic conditions like Country = 'USA' or CategoryID = 1
      const eqMatch = condition.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*['"](.*?)['"]/i) || condition.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([0-9.]+)/i);
      if (eqMatch) {
        const col = eqMatch[1].trim();
        const val = eqMatch[2].trim();
        sourceData = sourceData.filter((r: any) => {
          const actualKey = Object.keys(r).find(k => k.toLowerCase() === col.toLowerCase());
          if (!actualKey) return false;
          return String(r[actualKey]).toLowerCase() === val.toLowerCase();
        });
      }
    }

    // Handle ORDER BY
    const orderIndex = lower.indexOf('order by ');
    if (orderIndex !== -1) {
      let orderClause = clean.substring(orderIndex + 9).trim();
      const limitIndex = orderClause.toLowerCase().indexOf('limit');
      if (limitIndex !== -1) orderClause = orderClause.substring(0, limitIndex).trim();

      const parts = orderClause.split(' ');
      const colName = parts[0].trim();
      const direction = parts[1] ? parts[1].toLowerCase() : 'asc';

      sourceData.sort((a: any, b: any) => {
        const actualKey = Object.keys(a).find(k => k.toLowerCase() === colName.toLowerCase());
        if (!actualKey) return 0;
        const valA = a[actualKey];
        const valB = b[actualKey];
        if (typeof valA === 'number' && typeof valB === 'number') {
          return direction === 'desc' ? valB - valA : valA - valB;
        }
        return direction === 'desc' 
          ? String(valB).localeCompare(String(valA)) 
          : String(valA).localeCompare(String(valB));
      });
    }

    // Handle columns: SELECT Column1, Column2
    const selectParts = clean.match(/select\s+(.*?)\s+from/i);
    let columnsToShow: string[] = [];
    if (selectParts) {
      const colStr = selectParts[1].trim();
      if (colStr === '*') {
        if (sourceData.length > 0) {
          columnsToShow = Object.keys(sourceData[0]);
        } else {
          columnsToShow = tableName === 'customers' 
            ? ['CustomerID', 'CustomerName', 'ContactName', 'City', 'Country']
            : tableName === 'products'
              ? ['ProductID', 'ProductName', 'SupplierID', 'CategoryID', 'Unit', 'Price']
              : ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'ShipperID'];
        }
      } else {
        columnsToShow = colStr.split(',').map(s => s.trim());
      }
    }

    // Filter column fields
    let rows = sourceData.map((r: any) => {
      const filteredRow: any = {};
      columnsToShow.forEach(col => {
        const actualKey = Object.keys(r).find(k => k.toLowerCase() === col.toLowerCase());
        filteredRow[col] = actualKey !== undefined ? r[actualKey] : '';
      });
      return filteredRow;
    });

    // Handle LIMIT
    const limitIndex = lower.indexOf('limit ');
    if (limitIndex !== -1) {
      const limitVal = parseInt(clean.substring(limitIndex + 6).trim());
      if (!isNaN(limitVal)) {
        rows = rows.slice(0, limitVal);
      }
    }

    return {
      columns: columnsToShow,
      rows,
      count: rows.length
    };
  };

  // Run the code
  const handleRun = () => {
    setIsRunning(true);
    setConsoleOutput('');
    setErrorFeedback('');

    if (trackId === 'sql' || trackId === 'mysql') {
      setActiveTab('preview');
      try {
        const res = runSqlInterpreter(activeFile.content);
        setSqlResult(res);
      } catch (err: any) {
        setSqlResult({
          columns: [],
          rows: [],
          count: 0,
          error: err.message
        });
      }
      setTimeout(() => setIsRunning(false), 300);
    }
    else if (trackId === 'vue') {
      setActiveTab('preview');
      const code = activeFile.content;
      const templateMatch = code.match(/<template>([\s\S]*?)<\/template>/i);
      const scriptMatch = code.match(/<script>([\s\S]*?)<\/script>/i);
      const styleMatch = code.match(/<style>([\s\S]*?)<\/style>/i);

      const templateContent = templateMatch ? templateMatch[1] : `
        <div class="p-4 bg-white rounded-lg shadow border">
          <h3 class="text-sm font-bold text-gray-800">Vue Sandbox Live Preview</h3>
          <p class="text-xs text-gray-500 mt-1">Please write a valid &lt;template&gt; block.</p>
        </div>
      `;
      let scriptContent = scriptMatch ? scriptMatch[1] : '';
      scriptContent = scriptContent.replace(/export\s+default/gi, 'const componentConfig =');

      const mergedDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { font-family: ui-sans-serif, system-ui, sans-serif; padding: 16px; background-color: #f9fafb; color: #111827; }
          #app { padding: 16px; border-radius: 12px; border: 1px solid #e5e7eb; background: #ffffff; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); }
          ${styleMatch ? styleMatch[1] : ''}
        </style>
      </head>
      <body>
        <div id="app">
          ${templateContent}
        </div>
        <script>
          try {
            ${scriptContent}
            const { createApp } = Vue;
            const app = createApp(typeof componentConfig !== 'undefined' ? componentConfig : {});
            app.mount('#app');
          } catch (err) {
            document.body.innerHTML = \`
              <div class="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl font-sans text-xs">
                <h4 class="font-bold uppercase tracking-wider mb-1">Vue Compilation Error:</h4>
                <pre class="whitespace-pre-wrap font-mono mt-1 bg-red-100/50 p-2 rounded border border-red-200/50">\${err.message}</pre>
              </div>
            \`;
          }
        </script>
      </body>
      </html>
      `;
      setIframeSrcDoc(mergedDoc);
      setTimeout(() => setIsRunning(false), 500);
    }
    else if (trackId === 'angular') {
      setActiveTab('preview');
      const code = activeFile.content;
      const templateMatch = code.match(/template:\s*`([\s\S]*?)`/i) || code.match(/template:\s*'([\s\S]*?)'/i) || code.match(/template:\s*"([\s\S]*?)"/i);
      const stylesMatch = code.match(/styles:\s*\[\s*`([\s\S]*?)`\s*\]/i) || code.match(/styles:\s*\[\s*'([\s\S]*?)'\s*\]/i);

      const template = templateMatch ? templateMatch[1] : `
        <div class="p-4 bg-white rounded-lg shadow border">
          <h3 class="text-sm font-bold text-gray-800">Angular Component Preview</h3>
          <p class="text-xs text-gray-500 mt-1">Please define a valid template inside @Component().</p>
        </div>
      `;
      const styles = stylesMatch ? stylesMatch[1] : '';

      // Class Properties Extraction
      const classBodyMatch = code.match(/export\s+class\s+AppComponent\s*\{([\s\S]*?)\}/i);
      let classProps: any = {};
      if (classBodyMatch) {
        const body = classBodyMatch[1];
        const propRegex = /([a-zA-Z_][a-zA-Z0-9_]*)\s*(?::\s*[a-zA-Z_]+)?\s*=\s*(['"`])(.*?)\2\s*;/g;
        let match;
        while ((match = propRegex.exec(body)) !== null) {
          classProps[match[1]] = match[3];
        }
      }

      // Bind properties to template interpolation {{ prop }}
      let renderedTemplate = template;
      for (const [k, v] of Object.entries(classProps)) {
        const regex = new RegExp(`{{\\s*${k}\\s*}}`, 'g');
        renderedTemplate = renderedTemplate.replace(regex, String(v));
      }

      const mergedDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { font-family: ui-sans-serif, system-ui, sans-serif; padding: 16px; background-color: #f9fafb; color: #111827; }
          app-root { display: block; padding: 16px; border-radius: 12px; border: 1px solid #e5e7eb; background: #ffffff; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); }
          ${styles}
        </style>
      </head>
      <body>
        <app-root>
          ${renderedTemplate}
        </app-root>
      </body>
      </html>
      `;
      setIframeSrcDoc(mergedDoc);
      setTimeout(() => setIsRunning(false), 500);
    }
    // If web, compile standard index.html + style.css + script.js
    else if (['html', 'css'].includes(language)) {
      setActiveTab('preview');
      
      const htmlFile = files.find(f => f.name.endsWith('.html')) || files[0];
      const cssFile = files.find(f => f.name.endsWith('.css'));
      const jsFile = files.find(f => f.name.endsWith('.js') || f.name.endsWith('.jsx'));
      
      let mergedDoc = htmlFile ? htmlFile.content : '';

      // Inject custom styling to prevent scrollbar clutter inside preview
      const scrollStyle = `
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
          /* Custom clean preview look */
        </style>
      `;
      mergedDoc = mergedDoc.replace('</head>', `${scrollStyle}</head>`);

      if (cssFile) {
        const injectedCss = `<style>${cssFile.content}</style>`;
        if (mergedDoc.includes('</head>')) {
          mergedDoc = mergedDoc.replace('</head>', `${injectedCss}</head>`);
        } else {
          mergedDoc = injectedCss + mergedDoc;
        }
      }

      if (jsFile) {
        const injectedJs = `
          <script>
            try {
              ${jsFile.content}
            } catch (err) {
              console.error(err);
              window.parent.postMessage({ type: 'CONSOLE_LOG', text: "Error: " + err.message }, '*');
            }
          </script>
        `;
        if (mergedDoc.includes('</body>')) {
          mergedDoc = mergedDoc.replace('</body>', `${injectedJs}</body>`);
        } else {
          mergedDoc = mergedDoc + injectedJs;
        }
      }

      setIframeSrcDoc(mergedDoc);
      setTimeout(() => setIsRunning(false), 600);
    } else {
      // Non-web compiler simulator
      setActiveTab('console');
      const compiledText = executeCode(language, files);
      setConsoleOutput(compiledText);
      setTimeout(() => setIsRunning(false), 400);
    }
  };

  // Interpreter function for Python, C#, C++, Java, JS/TS Console outputs
  const executeCode = (lang: string, allFiles: LessonFile[]): string => {
    const file = allFiles[0];
    if (!file) return 'No files found';
    const code = file.content;

    let outputLines: string[] = [];
    const timestamp = new Date().toLocaleTimeString();
    
    outputLines.push(`[Running] compiling ${file.name}...`);

    if (lang === 'python') {
      const lines = code.split('\n');
      const vars: Record<string, any> = {};
      let printed = false;

      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        // Variable assignment: x = 1200
        const varMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
        if (varMatch) {
          const varName = varMatch[1];
          let expr = varMatch[2];
          try {
            // Replace existing variables
            for (const [k, v] of Object.entries(vars)) {
              const regex = new RegExp(`\\b${k}\\b`, 'g');
              expr = expr.replace(regex, String(v));
            }
            // evaluate mathematical expressions
            const value = Function(`"use strict"; return (${expr})`)();
            vars[varName] = value;
          } catch {
            vars[varName] = expr.replace(/['"`]/g, '');
          }
          continue;
        }

        // Print Statement: print(apple_price + orange_price) or print("Hello")
        const printMatch = trimmed.match(/^print\s*\((.*)\)$/);
        if (printMatch) {
          printed = true;
          let inside = printMatch[1].trim();
          if ((inside.startsWith('"') && inside.endsWith('"')) || (inside.startsWith("'") && inside.endsWith("'"))) {
            outputLines.push(inside.slice(1, -1));
          } else {
            try {
              // Replace variables
              for (const [k, v] of Object.entries(vars)) {
                const regex = new RegExp(`\\b${k}\\b`, 'g');
                inside = inside.replace(regex, String(v));
              }
              const value = Function(`"use strict"; return (${inside})`)();
              outputLines.push(String(value));
            } catch {
              outputLines.push(`NameError: name '${inside}' is not defined`);
            }
          }
        }
      }
      if (!printed) {
        outputLines.push('(Program exited with no output)');
      }
    } 
    else if (lang === 'javascript' || lang === 'typescript') {
      const oldLog = console.log;
      let logs: string[] = [];
      console.log = (...args) => {
        logs.push(args.join(' '));
      };
      try {
        let exec = code;
        if (lang === 'typescript') {
          // Strip type annotations
          exec = code
            .replace(/:\s*string\b/g, '')
            .replace(/:\s*number\b/g, '')
            .replace(/:\s*boolean\b/g, '');
        }
        const runFn = new Function(exec);
        runFn();
        if (logs.length > 0) {
          outputLines.push(...logs);
        } else {
          outputLines.push('(Program exited with no output)');
        }
      } catch (e: any) {
        outputLines.push(`TypeError: ${e.message}`);
      } finally {
        console.log = oldLog;
      }
    }
    else if (lang === 'csharp' || lang === 'java') {
      const isCSharp = lang === 'csharp';
      const lines = code.split('\n');
      const vars: Record<string, any> = {};
      let printed = false;

      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('using')) continue;

        // Variables: int score = 100;
        const varMatch = trimmed.match(/^(int|string|double|bool|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^;]+);/);
        if (varMatch) {
          const name = varMatch[2];
          let val = varMatch[3].trim();
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          }
          vars[name] = val;
          continue;
        }

        // Print matches
        const printRegex = isCSharp 
          ? /Console\.WriteLine\s*\(\s*([^)]+)\s*\)\s*;/ 
          : /System\.out\.println\s*\(\s*([^)]+)\s*\)\s*;/;
        const printMatch = trimmed.match(printRegex);
        
        if (printMatch) {
          printed = true;
          let inside = printMatch[1].trim();
          if (inside.startsWith('"') && inside.endsWith('"')) {
            outputLines.push(inside.slice(1, -1));
          } else {
            if (vars[inside] !== undefined) {
              outputLines.push(String(vars[inside]));
            } else {
              outputLines.push(isCSharp 
                ? `CS0103: The name '${inside}' does not exist in the current context`
                : `Error: cannot find symbol: variable ${inside}`
              );
            }
          }
        }
      }
      if (!printed) {
        outputLines.push('(Program exited with no output)');
      }
    }
    else if (lang === 'cpp') {
      const lines = code.split('\n');
      let printed = false;
      const vars: Record<string, any> = {};

      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('using')) continue;

        // Variables: int x = 10; or string name = "Seyha";
        const varMatch = trimmed.match(/^(int|string|double|bool|float)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^;]+);/);
        if (varMatch) {
          const name = varMatch[2];
          let val = varMatch[3].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          vars[name] = val;
          continue;
        }

        // matches std::cout or cout
        if (trimmed.includes('cout')) {
          const matches = trimmed.match(/(std::)?cout\s*<<\s*([^;]+);/);
          if (matches) {
            printed = true;
            let parts = matches[2].split('<<').map(p => p.trim());
            let printBuffer = '';
            for (let p of parts) {
              if (p === 'endl' || p === 'std::endl' || p === '"\\n"') {
                printBuffer += '\n';
              } else if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
                printBuffer += p.slice(1, -1);
              } else if (vars[p] !== undefined) {
                printBuffer += String(vars[p]);
              } else {
                printBuffer += p;
              }
            }
            // Replace escaped double backslashes or newlines
            printBuffer = printBuffer.replace(/\\n/g, '\n');
            outputLines.push(printBuffer);
          }
        }
      }
      if (!printed) {
        outputLines.push('(Program exited with no output)');
      }
    }
    else if (lang === 'php') {
      const lines = code.split('\n');
      let printed = false;
      const vars: Record<string, any> = {};

      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('<?') || trimmed.startsWith('?>')) continue;

        // Variables: $name = "Seyha";
        const varMatch = trimmed.match(/^\$([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([^;]+);/);
        if (varMatch) {
          const name = varMatch[1];
          let val = varMatch[2].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          vars[name] = val;
          continue;
        }

        // Echo/Print: echo "Hello"; or echo $name;
        if (trimmed.startsWith('echo') || trimmed.startsWith('print')) {
          const echoMatch = trimmed.match(/^(echo|print)\s+([^;]+);/);
          if (echoMatch) {
            printed = true;
            let inside = echoMatch[2].trim();
            // Handle concatenation with dots, e.g. "Hello " . $name
            let parts = inside.split('.').map(p => p.trim());
            let printBuffer = '';
            for (let p of parts) {
              if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
                printBuffer += p.slice(1, -1);
              } else if (p.startsWith('$')) {
                const varName = p.slice(1);
                if (vars[varName] !== undefined) {
                  printBuffer += String(vars[varName]);
                } else {
                  printBuffer += ``;
                }
              } else {
                printBuffer += p;
              }
            }
            printBuffer = printBuffer.replace(/\\n/g, '\n');
            outputLines.push(printBuffer);
          }
        }
      }
      if (!printed) {
        outputLines.push('(Server executed successfully with no output)');
      }
    }

    outputLines.push(`\n[Done] exited in 0.051s`);
    return outputLines.join('\n');
  };

  // Verify Solution
  const handleVerify = () => {
    // Run the code first to ensure console matches
    const finalConsole = ['html', 'css'].includes(language) 
      ? '' 
      : executeCode(language, files);
    
    onVerify(finalConsole);
  };

  // Reset starter code with confirm
  const handleResetClick = () => {
    if (confirm(t('resetConfirm', currentLang))) {
      onReset();
    }
  };

  // Add event listener to capture messages from sandbox iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'CONSOLE_LOG') {
        setConsoleOutput(prev => prev + '\n' + e.data.text);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!activeFile) {
    return (
      <div className="flex items-center justify-center h-full bg-neutral-50 dark:bg-neutral-950 text-gray-500 font-sans text-xs">
        <span>{currentLang === 'en' ? 'Loading file...' : 'កំពុងផ្ទុកឯកសារ...'}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-inner">
      {/* Tab Navigation/File Bar */}
      <div className="flex justify-between items-center bg-gray-100 dark:bg-neutral-900 px-4 h-11 border-b border-gray-200 dark:border-neutral-800">
        <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
          {files.map(file => (
            <button
              id={`tab-file-${file.name}`}
              key={file.name}
              onClick={() => onActiveFileChange(file.name)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeFileName === file.name
                  ? 'bg-white dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FileCode className="h-3.5 w-3.5" />
              <span>{file.name}</span>
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {/* Format button */}
          <button
            id="btn-editor-format"
            onClick={() => {
              if (editorRef.current) {
                editorRef.current.trigger('editor', 'editor.action.formatDocument', null);
              }
            }}
            className="p-1.5 text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-neutral-800 rounded-lg transition"
            title={currentLang === 'en' ? 'Format Code (Alt+Shift+F)' : 'រៀបចំកូដឱ្យមានរបៀប (Alt+Shift+F)'}
          >
            <Sparkles className="h-3.5 w-3.5" />
          </button>

          {/* Reset button */}
          <button
            id="btn-editor-reset"
            onClick={handleResetClick}
            className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 rounded-lg transition"
            title={t('reset', currentLang)}
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Code Editor Workspace */}
      <div className="flex-1 min-h-[300px] relative">
        <Editor
          height="100%"
          language={getEditorLanguage(activeFile.name)}
          theme={darkMode ? 'vs-dark' : 'light'}
          value={activeFile.content}
          onChange={handleEditorChange}
          onMount={(editor, monaco) => {
            editorRef.current = editor;
            registerAutocomplete(monaco);
          }}
          options={{
            fontSize: 14,
            fontFamily: 'JetBrains Mono, Menlo, Monaco, Courier New, monospace',
            minimap: { enabled: false },
            automaticLayout: true,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            padding: { top: 12, bottom: 12 },
            lineNumbers: 'on',
            roundedSelection: true,
            cursorBlinking: 'smooth',
            autoClosingBrackets: 'always',
            autoClosingQuotes: 'always',
            autoClosingDelete: 'always',
            autoClosingOvertype: 'always',
            autoSurround: 'languageDefined',
            tabSize: 2,
            insertSpaces: true,
            bracketPairColorization: { enabled: true },
            formatOnType: true,
            formatOnPaste: true,
            cursorSmoothCaretAnimation: 'on',
            folding: true,
            fontLigatures: true,
            dragAndDrop: true,
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: 'on',
            snippetSuggestions: 'top',
            quickSuggestions: { other: true, comments: true, strings: true },
            wordBasedSuggestions: "allDocuments",
          }}
        />
      </div>

      {/* Output Panel Section */}
      <div className="h-1/2 border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col min-h-[220px]">
        {/* Output Header */}
        <div className="flex justify-between items-center bg-gray-50 dark:bg-neutral-900/50 px-4 h-10 border-b border-gray-200 dark:border-neutral-800">
          <div className="flex space-x-2">
            {(['html', 'css'].includes(language) || ['angular', 'vue', 'sql', 'mysql'].includes(trackId || '')) && (
              <button
                id="btn-panel-preview"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'preview'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>{trackId === 'sql' || trackId === 'mysql' ? (currentLang === 'en' ? 'Database Results' : 'លទ្ធផលតារាង SQL') : t('preview', currentLang)}</span>
              </button>
            )}
            <button
              id="btn-panel-console"
              onClick={() => setActiveTab('console')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition ${
                activeTab === 'console'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>{t('console', currentLang)}</span>
            </button>
          </div>

          {/* Compile/Run/Verify actions */}
          <div className="flex items-center space-x-2">
            <button
              id="btn-action-run"
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-white rounded-lg text-xs font-semibold transition active:scale-95 disabled:opacity-50"
            >
              <Play className="h-3 w-3 text-emerald-600 fill-emerald-600" />
              <span>{trackId === 'sql' || trackId === 'mysql' ? (currentLang === 'en' ? 'Run SQL' : 'ដំណើរការកូដ SQL') : t('runCode', currentLang)}</span>
            </button>
            <button
              id="btn-action-verify"
              onClick={handleVerify}
              className="flex items-center space-x-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition shadow-md shadow-emerald-500/10 active:scale-95"
            >
              <CheckCircle className="h-3 w-3" />
              <span>{t('checkCode', currentLang)}</span>
            </button>
          </div>
        </div>

        {/* Output Body Container */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-neutral-950 p-4 font-mono text-sm leading-relaxed text-gray-800 dark:text-neutral-300">
          {activeTab === 'preview' && (trackId === 'sql' || trackId === 'mysql') ? (
            <div className="flex flex-col md:flex-row h-full min-h-[160px] bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-gray-250 dark:border-neutral-800 font-sans">
              {/* DB Tables Sidebar */}
              <div className="w-full md:w-48 bg-gray-50 dark:bg-neutral-950 border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-800 p-3 select-none shrink-0">
                <div className="text-[10px] font-black text-gray-400 dark:text-neutral-500 uppercase tracking-widest mb-2">
                  {currentLang === 'en' ? 'Database Tables' : 'តារាងទិន្នន័យ'}
                </div>
                <div className="space-y-1">
                  {['Customers', 'Products', 'Orders'].map(tbl => {
                    const rowCount = MOCK_DB[tbl.toLowerCase()].length;
                    return (
                      <button
                        key={tbl}
                        onClick={() => {
                          const newCode = `SELECT * FROM ${tbl};`;
                          const updatedFiles = files.map(f => 
                            f.name === activeFileName ? { ...f, content: newCode } : f
                          );
                          onFilesChange(updatedFiles);
                          // Trigger run
                          setTimeout(() => {
                            const res = runSqlInterpreter(newCode);
                            setSqlResult(res);
                          }, 50);
                        }}
                        className="w-full text-left px-2 py-1 rounded-md text-xs hover:bg-emerald-500/10 dark:hover:bg-emerald-500/5 text-gray-700 dark:text-neutral-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] flex items-center justify-between transition group"
                      >
                        <span className="font-bold group-hover:underline">{tbl}</span>
                        <span className="bg-gray-200/60 dark:bg-neutral-800/60 text-gray-500 dark:text-neutral-400 text-[9px] font-mono px-1.5 py-0.2 rounded">
                          {rowCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid Area */}
              <div className="flex-1 overflow-auto p-4 bg-white dark:bg-neutral-900">
                {sqlResult ? (
                  sqlResult.error ? (
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg text-red-700 dark:text-red-400 flex items-start space-x-2 text-xs">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-extrabold uppercase tracking-wide">SQL Error</h4>
                        <p className="mt-1 leading-relaxed">{sqlResult.error}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-neutral-500">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {currentLang === 'en' ? 'Query Result' : 'លទ្ធផលសំណួរកូដ'}
                        </span>
                        <span>
                          {sqlResult.count === 1 ? '1 row returned' : `${sqlResult.count} rows returned`}
                        </span>
                      </div>
                      <div className="overflow-x-auto border border-gray-150 dark:border-neutral-800 rounded-lg">
                        <table className="w-full text-xs text-left text-gray-700 dark:text-neutral-300">
                          <thead className="text-[10px] uppercase font-bold bg-[#04AA6D] text-white border-b border-[#038F5B]">
                            <tr>
                              {sqlResult.columns.map(col => (
                                <th key={col} className="px-3 py-2 font-bold whitespace-nowrap">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {sqlResult.rows.map((row, idx) => (
                              <tr 
                                key={idx} 
                                className={`hover:bg-gray-50/50 dark:hover:bg-neutral-850/30 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-gray-50/20 dark:bg-neutral-850/10'}`}
                              >
                                {sqlResult.columns.map(col => (
                                  <td key={col} className="px-3 py-2 font-medium whitespace-nowrap">
                                    {String(row[col] !== undefined ? row[col] : '')}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-neutral-500 text-xs py-4">
                    <Play className="h-8 w-8 mb-2 text-[#04AA6D] opacity-40 fill-[#04AA6D]" />
                    <span>{currentLang === 'en' ? 'Click "Run SQL" to execute your query' : 'សូមចុច "Run SQL" ដើម្បីបង្ហាញលទ្ធផលសំណួរកូដ'}</span>
                  </div>
                )}
              </div>
            </div>
          ) : activeTab === 'preview' && (['html', 'css'].includes(language) || ['angular', 'vue'].includes(trackId || '')) ? (
            <div className="w-full h-full min-h-[120px] bg-white rounded-lg border border-gray-100 dark:border-neutral-800 overflow-hidden relative">
              {iframeSrcDoc ? (
                <iframe
                  id="sandbox-preview-iframe"
                  title="live-preview-sandbox"
                  srcDoc={iframeSrcDoc}
                  sandbox="allow-scripts allow-modals"
                  className="w-full h-full bg-white"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs">
                  <Play className="h-8 w-8 mb-2 opacity-30 text-emerald-500" />
                  <span>{currentLang === 'en' ? 'Click "Run Code" to load preview' : 'សូមចុច "Run Code" ដើម្បីបង្ហាញលទ្ធផលមេរៀន'}</span>
                </div>
              )}
            </div>
          ) : (
            <pre className="whitespace-pre-wrap text-xs select-text">
              {consoleOutput || '> Ready to run...'}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
