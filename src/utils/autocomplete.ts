/**
 * Monaco Editor Autocomplete and Snippet Registration Engine
 * Provides custom, smart language autocompletions and live templates for students.
 */

export function registerAutocomplete(monaco: any) {
  if (typeof window === 'undefined' || !monaco) return;

  if (!(window as any).__monaco_providers_registered) {
    (window as any).__monaco_providers_registered = {};
  }

  const registered = (window as any).__monaco_providers_registered;

  // Helper to create range for completion
  const getRange = (model: any, position: any) => {
    const word = model.getWordUntilPosition(position);
    return {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    };
  };

  // 1. HTML Autocompletions
  if (!registered['html']) {
    registered['html'] = monaco.languages.registerCompletionItemProvider('html', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'a',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Anchor (link) tag / តំណភ្ជាប់',
            detail: 'HTML Link Element',
            insertText: '<a href="${1:https://}">\${2:Link Text}</a>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'h1',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Heading 1 tag / ចំណងជើងធំទី១',
            detail: 'HTML Heading 1',
            insertText: '<h1>\${1:សួស្តី កម្ពុជា}</h1>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'h2',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Heading 2 tag / ចំណងជើងធំទី២',
            detail: 'HTML Heading 2',
            insertText: '<h2>\${1:ចំណងជើង}</h2>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'h3',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Heading 3 tag / ចំណងជើងធំទី៣',
            detail: 'HTML Heading 3',
            insertText: '<h3>\${1:ចំណងជើងតូច}</h3>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'p',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Paragraph tag / កថាខណ្ឌអក្សរ',
            detail: 'HTML Paragraph Element',
            insertText: '<p>\${1:ខ្ញុំកំពុងរៀនកូដ!}</p>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'img',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Image tag / រូបភាព',
            detail: 'HTML Image Element',
            insertText: '<img src="\${1:logo.png}" alt="\${2:ស្លាកសញ្ញា}" />',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'ul',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Unordered List tag / បញ្ជីរាយនាម',
            detail: 'HTML Unordered List',
            insertText: '<ul>\n  <li>\${1:HTML}</li>\n  <li>\${2:CSS}</li>\n</ul>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'li',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'List Item tag / ធាតុក្នុងបញ្ជី',
            detail: 'HTML List Item',
            insertText: '<li>\${1:Item}</li>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'div',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Division Container tag / ប្រអប់ផ្ទុក',
            detail: 'HTML Block Container',
            insertText: '<div class="\${1:box}">\n  \${2:រៀន CSS}\n</div>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'style',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Embedded Style tag / កូដរចនា CSS',
            detail: 'HTML Style Element',
            insertText: '<style>\n  \${1}\n</style>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'script',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'JavaScript Code Block / កូដបញ្ជាបញ្ញាសិប្បនិម្មិត',
            detail: 'HTML Script Element',
            insertText: '<script>\n  \${1}\n</script>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'html5',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'HTML5 Starter Template / រចនាសម្ព័ន្ធដំបូង',
            detail: 'HTML5 Boilerplate',
            insertText: '<!DOCTYPE html>\n<html>\n<head>\n  <title>\${1:Page Title}</title>\n</head>\n<body>\n  \${2}\n</body>\n</html>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 2. CSS Autocompletions
  if (!registered['css']) {
    registered['css'] = monaco.languages.registerCompletionItemProvider('css', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'margin',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Margin outer spacing / គម្លាតខាងក្រៅ',
            detail: 'Outer Spacing Property',
            insertText: 'margin: \${1:0px};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'padding',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Padding inner spacing / គម្លាតខាងក្នុង',
            detail: 'Inner Spacing Property',
            insertText: 'padding: \${1:20px};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'background-color',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Background Color / ពណ៌ផ្ទៃក្រោយ',
            detail: 'Element Background Color',
            insertText: 'background-color: \${1:#e0f2fe};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'border',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Border styling / បន្ទាត់ព័ទ្ធជុំវិញ',
            detail: 'Outline Border Property',
            insertText: 'border: \${1:2px} \${2:solid} \${3:#0284c7};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'font-family',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Font Family / ពុម្ពអក្សរ',
            detail: 'Typography Font',
            insertText: 'font-family: \${1:sans-serif};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'text-align',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Text Alignment / តម្រឹមអក្សរ',
            detail: 'Text Alignment Property',
            insertText: 'text-align: \${1:center};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'color',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Text Color / ពណ៌អក្សរ',
            detail: 'Typography Color',
            insertText: 'color: \${1:#0284c7};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'display-flex',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Flexbox alignment / តម្រឹមធាតុរហ័ស',
            detail: 'Flex Container layout',
            insertText: 'display: flex;\njustify-content: \${1:center};\nalign-items: \${2:center};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'border-radius',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'CSS Border radius curves / ជ្រុងមូល',
            detail: 'Corner Roundness Property',
            insertText: 'border-radius: \${1:8px};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 3. JavaScript / TypeScript Autocompletions
  const registerJsLike = (langId: string) => {
    if (!registered[langId]) {
      registered[langId] = monaco.languages.registerCompletionItemProvider(langId, {
        provideCompletionItems: (model: any, position: any) => {
          const range = getRange(model, position);
          const suggestions = [
            {
              label: 'clg',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Console output log / បង្ហាញព័ត៌មានលទ្ធផល',
              detail: 'console.log()',
              insertText: 'console.log(\${1:studentName});',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'log',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Console output log shortcut / បង្ហាញព័ត៌មានលទ្ធផល',
              detail: 'console.log() Shortcut',
              insertText: 'console.log(\${1:studentName});',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'const',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Constant variable declaration / ប្រកាសអថេរថេរ',
              detail: 'const declaration',
              insertText: 'const \${1:studentName} = "\${2:បុប្ផា}";',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'let',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Mutable variable declaration / ប្រកាសអថេរប្រែប្រួល',
              detail: 'let declaration',
              insertText: 'let \${1:score} = \${2:75};',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'function',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Function declaration block / បង្កើតអនុគមន៍',
              detail: 'Standard function',
              insertText: 'function \${1:calculateTotal}(\${2:price}, \${3:quantity}) {\n  return \${4:price * quantity};\n}',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'if',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Condition check statement / លក្ខខណ្ឌ',
              detail: 'if block',
              insertText: 'if (\${1:score >= 50}) {\n  \${2:console.log("ជាប់");}\n}',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'ifelse',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Branching condition blocks / លក្ខខណ្ឌពីរជ្រើសរើស',
              detail: 'if-else structure',
              insertText: 'if (\${1:score >= 50}) {\n  console.log("\${2:ជាប់}");\n} else {\n  console.log("\${3:ធ្លាក់}");\n}',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            },
            {
              label: 'for',
              kind: monaco.languages.CompletionItemKind.Snippet,
              documentation: 'Standard iterative loop / ការវិលជុំ For Loop',
              detail: 'for loop',
              insertText: 'for (let \${1:i} = 1; \${1:i} <= \${2:5}; \${1:i}++) {\n  console.log(\${1:i});\n}',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range
            }
          ];
          return { suggestions };
        }
      });
    }
  };
  registerJsLike('javascript');
  registerJsLike('typescript');

  // 4. Python Autocompletions
  if (!registered['python']) {
    registered['python'] = monaco.languages.registerCompletionItemProvider('python', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'print',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python printing tool / បង្ហាញសារនៅលើអេក្រង់',
            detail: 'print() function',
            insertText: 'print("\${1:សួស្តីពិភពលោក}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'def',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python function structure / បង្កើតអនុគមន៍ Python',
            detail: 'def function_name():',
            insertText: 'def \${1:calculate_total}(\${2:price}, \${3:quantity}):\n    return \${4:price * quantity}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python decision block / លក្ខខណ្ឌ',
            detail: 'if block',
            insertText: 'if \${1:grade >= 90}:\n    print("\${2:A}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'elif',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python secondary condition / លក្ខខណ្ឌបន្ថែម',
            detail: 'elif statement',
            insertText: 'elif \${1:grade >= 80}:\n    print("\${2:B}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'else',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python default condition branch / ក្រៅពីនេះ',
            detail: 'else branch',
            insertText: 'else:\n    print("\${1:C}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'for',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Python item loop iterator / វិលជុំបញ្ជី',
            detail: 'for-in list iterator',
            insertText: 'for \${1:skill} in \${2:skills}:\n    print(\${1:skill})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 5. C# Autocompletions
  if (!registered['csharp']) {
    registered['csharp'] = monaco.languages.registerCompletionItemProvider('csharp', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'cw',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Console WriteLine shortcut / បង្ហាញព័ត៌មាន C#',
            detail: 'Console.WriteLine()',
            insertText: 'Console.WriteLine(\${1:message});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'using',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Import namespace directive / នាំចូល namespace',
            detail: 'using System;',
            insertText: 'using \${1:System};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'class',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'C# blueprint template / រចនាសម្ព័ន្ធ class',
            detail: 'class structure',
            insertText: 'class \${1:Program} {\n    \${2}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'main',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Main application entry / វិធីសាស្ត្រដំណើរការដំបូង',
            detail: 'static void Main()',
            insertText: 'static void Main() {\n    \${1}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'C# decision structure / លក្ខខណ្ឌ if-else C#',
            detail: 'if block',
            insertText: 'if (\${1:speed > 60}) {\n    Console.WriteLine("\${2:Fast}");\n} else {\n    Console.WriteLine("\${3:Slow}");\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 6. Java Autocompletions
  if (!registered['java']) {
    registered['java'] = monaco.languages.registerCompletionItemProvider('java', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'sout',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'System output printing shortcut / បង្ហាញសារ Java',
            detail: 'System.out.println()',
            insertText: 'System.out.println(\${1:message});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'psvm',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Main entry method / វិធីសាស្ត្រដំណើរការ Java',
            detail: 'public static void main',
            insertText: 'public static void main(String[] args) {\n    \${1}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'class',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Java public class outline / រចនាសម្ព័ន្ធ class',
            detail: 'public class Main',
            insertText: 'public class \${1:Main} {\n    \${2}\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Java logical check / លក្ខខណ្ឌ if-else Java',
            detail: 'if branch',
            insertText: 'if (\${1:number % 2 == 0}) {\n    System.out.println("Even");\n} else {\n    System.out.println("Odd");\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 7. C++ Autocompletions
  if (!registered['cpp']) {
    registered['cpp'] = monaco.languages.registerCompletionItemProvider('cpp', {
      provideCompletionItems: (model: any, position: any) => {
        const range = getRange(model, position);
        const suggestions = [
          {
            label: 'cout',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'C++ stdout console stream / បង្ហាញព័ត៌មាន C++',
            detail: 'std::cout << ...',
            insertText: 'std::cout << \${1:message} << std::endl;',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'include',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'Header inclusion preprocessor / នាំចូលបណ្ណាល័យ',
            detail: '#include <...>',
            insertText: '#include <\${1:iostream}>',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'main',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'C++ entry main function / អនុគមន៍មេ',
            detail: 'int main()',
            insertText: 'int main() {\n    \${1}\n    return 0;\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          },
          {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            documentation: 'C++ conditional block / លក្ខខណ្ឌ if-else C++',
            detail: 'if logic',
            insertText: 'if (\${1:temperature > 30}) {\n    std::cout << "Hot" << std::endl;\n} else {\n    std::cout << "Cool" << std::endl;\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range
          }
        ];
        return { suggestions };
      }
    });
  }

  // 8. Custom Hover Providers & Explanations (IntelliSense)
  const hoverDict: Record<string, { title: string, descEn: string, descKh: string, example: string }> = {
    'a': {
      title: 'HTML <a> Element',
      descEn: 'Creates a hyperlink to web pages, files, email addresses, or locations in the same page.',
      descKh: 'បង្កើតតំណភ្ជាប់ទៅកាន់គេហទំព័រ ឯកសារ អាសយដ្ឋានអ៊ីមែល ឬទីតាំងផ្សេងទៀត។',
      example: '<a href="https://google.com">Google</a>'
    },
    'h1': {
      title: 'HTML <h1> Element',
      descEn: 'Represents the highest level section heading (Heading 1). Should be used once per page.',
      descKh: 'តំណាងឱ្យចំណងជើងធំលំដាប់ទី១ (ខ្ពស់ជាងគេបំផុត)។ គួរប្រើតែម្ដងគត់ក្នុងមួយទំព័រ។',
      example: '<h1>Welcome to Cambodia</h1>'
    },
    'h2': {
      title: 'HTML <h2> Element',
      descEn: 'Represents a level 2 section heading (Heading 2). Used for major page subsections.',
      descKh: 'តំណាងឱ្យចំណងជើងរងលំដាប់ទី២។ ប្រើសម្រាប់ផ្នែកសំខាន់ៗនៃគេហទំព័រ។',
      example: '<h2>About Us</h2>'
    },
    'h3': {
      title: 'HTML <h3> Element',
      descEn: 'Represents a level 3 section heading (Heading 3). Used for smaller subsections.',
      descKh: 'តំណាងឱ្យចំណងជើងរងលំដាប់ទី៣។ ប្រើសម្រាប់ផ្នែករងតូចៗ។',
      example: '<h3>Our Skills</h3>'
    },
    'p': {
      title: 'HTML <p> Element',
      descEn: 'Defines a paragraph of text. Automatically adds margin before and after the block.',
      descKh: 'កំណត់កថាខណ្ឌអក្សរ។ វានឹងបង្កើតគម្លាតខាងលើនិងខាងក្រោមដោយស្វ័យប្រវត្តិ។',
      example: '<p>Learning to code is fun and empowering!</p>'
    },
    'img': {
      title: 'HTML <img> Element',
      descEn: 'Embeds an image into the document. Requires "src" (source) and "alt" (alternate text) attributes.',
      descKh: 'បញ្ចូលរូបភាពទៅក្នុងគេហទំព័រ។ ត្រូវការគុណលក្ខណៈ "src" (ប្រភពរូបភាព) និង "alt" (ការពិពណ៌នារូបភាព)។',
      example: '<img src="logo.png" alt="My Logo" />'
    },
    'ul': {
      title: 'HTML <ul> Element',
      descEn: 'Represents an unordered list of items, typically rendered with bullet points.',
      descKh: 'បង្កើតបញ្ជីរាយនាមគ្មានលំដាប់លេខ (បង្ហាញជាចំណុចមូលៗ)។',
      example: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>'
    },
    'li': {
      title: 'HTML <li> Element',
      descEn: 'Defines a list item inside an ordered (<ol>) or unordered (<ul>) list.',
      descKh: 'កំណត់ធាតុនីមួយៗនៅក្នុងបញ្ជីរាយនាម (<ul> ឬ <ol>)។',
      example: '<li>Web Development</li>'
    },
    'div': {
      title: 'HTML <div> Element',
      descEn: 'A generic block container for grouping and styling contents using CSS.',
      descKh: 'ប្រអប់ផ្ទុកទូទៅ (Block Container) សម្រាប់ចងក្រងធាតុ និងរចនាវាដោយប្រើ CSS។',
      example: '<div class="card">\n  <h3>Title</h3>\n</div>'
    },
    'style': {
      title: 'HTML <style> Element',
      descEn: 'Contains style information for a document, written in CSS syntax.',
      descKh: 'ផ្ទុកព័ត៌មានរចនារបស់គេហទំព័រ ដែលសរសេរដោយប្រើរចនាសម្ព័ន្ធកូដ CSS។',
      example: '<style>\n  body { background: white; }\n</style>'
    },
    'script': {
      title: 'HTML <script> Element',
      descEn: 'Embeds executable client-side JavaScript code to make webpages interactive.',
      descKh: 'បង្កប់កូដបញ្ជា JavaScript ដើម្បីធ្វើឱ្យគេហទំព័រមានភាពរស់រវើក និងមានអន្តរកម្ម។',
      example: '<script>\n  console.log("Hello!");\n</script>'
    },
    'margin': {
      title: 'CSS margin Property',
      descEn: 'Sets the margin area on all four sides of an element to create space outside its border.',
      descKh: 'កំណត់ទំហំគម្លាតខាងក្រៅនៃធាតុទាំង៤ជ្រុង ដើម្បីបង្កើតគម្លាតពីធាតុដទៃ។',
      example: 'margin: 20px;'
    },
    'padding': {
      title: 'CSS padding Property',
      descEn: 'Sets the padding area on all four sides of an element to create space inside its border.',
      descKh: 'កំណត់ទំហំគម្លាតខាងក្នុងនៃធាតុទាំង៤ជ្រុង ដើម្បីបង្កើតគម្លាតរវាងមាតិកានិងបន្ទាត់ទ្រនាប់។',
      example: 'padding: 15px;'
    },
    'background-color': {
      title: 'CSS background-color Property',
      descEn: 'Sets the background color of an element using color names, hex, rgb, or hsl values.',
      descKh: 'កំណត់ពណ៌ផ្ទៃក្រោយរបស់ធាតុ ដោយប្រើឈ្មោះពណ៌ កូដពណ៌ Hex, RGB ឬ HSL។',
      example: 'background-color: #f3f4f6;'
    },
    'border': {
      title: 'CSS border Property',
      descEn: 'Shorthand property to set an element\'s border width, style, and color.',
      descKh: 'កំណត់បន្ទាត់ទ្រនាប់ជុំវិញធាតុ (កម្រាស់ ប្រភេទបន្ទាត់ និងពណ៌) ក្នុងពេលតែមួយ។',
      example: 'border: 2px solid #10b981;'
    },
    'font-family': {
      title: 'CSS font-family Property',
      descEn: 'Specifies a prioritized list of one or more font family names for the selected element.',
      descKh: 'កំណត់ពុម្ពអក្សរ (Font) សម្រាប់បង្ហាញតួអក្សរនៃធាតុដែលបានជ្រើសរើស។',
      example: 'font-family: "Inter", sans-serif;'
    },
    'text-align': {
      title: 'CSS text-align Property',
      descEn: 'Specifies the horizontal alignment of inline or text content in its block container.',
      descKh: 'កំណត់ទីតាំងតម្រឹមអក្សរតាមផ្ដេក (ឆ្វេង ស្ដាំ កណ្ដាល ឬសងខាង)។',
      example: 'text-align: center;'
    },
    'color': {
      title: 'CSS color Property',
      descEn: 'Sets the foreground color of an element\'s text content.',
      descKh: 'កំណត់ពណ៌តួអក្សររបស់ធាតុ។',
      example: 'color: #2563eb;'
    },
    'display': {
      title: 'CSS display Property',
      descEn: 'Sets whether an element is treated as a block or inline box and the layout used for its children, such as flex, grid, or none.',
      descKh: 'កំណត់ទម្រង់បង្ហាញរបស់ធាតុ (ដូចជា block, inline, flex, grid ឬលាក់លែងបង្ហាញ none)។',
      example: 'display: flex;'
    },
    'border-radius': {
      title: 'CSS border-radius Property',
      descEn: 'Defines the roundness of the element\'s outer border corners.',
      descKh: 'កំណត់ភាពមូលនៃជ្រុងទាំង៤ របស់ធាតុ។',
      example: 'border-radius: 8px;'
    },
    'console': {
      title: 'JavaScript Console Object',
      descEn: 'Provides access to the browser\'s debugging console for outputting diagnostic messages.',
      descKh: 'ផ្ដល់លទ្ធភាពក្នុងការប្រើប្រាស់ផ្ទាំង Debugging ដើម្បីបង្ហាញសារត្រួតពិនិត្យដំណើរការកូដ។',
      example: 'console.log("Success");'
    },
    'console.log': {
      title: 'console.log() Method',
      descEn: 'Outputs a message to the web or development console. Perfect for displaying test outputs and variables.',
      descKh: 'បង្ហាញសារ ឬតម្លៃអថេរនៅលើផ្ទាំងលទ្ធផល (Console Screen) ដើម្បីត្រួតពិនិត្យតម្លៃកូដ។',
      example: 'console.log(studentName);'
    },
    'const': {
      title: 'JavaScript const Keyword',
      descEn: 'Declares a block-scoped constant variable whose value cannot be reassigned or redeclared.',
      descKh: 'ប្រកាសអថេរថេរ (Constant) ដែលតម្លៃរបស់វាមិនអាចប្ដូរ ឬប្រកាសសារជាថ្មីបានឡើយ។',
      example: 'const pi = 3.14159;'
    },
    'let': {
      title: 'JavaScript let Keyword',
      descEn: 'Declares a block-scoped mutable local variable, allowing its value to be changed later.',
      descKh: 'ប្រកាសអថេរមូលដ្ឋានដែលអាចកែប្រែតម្លៃបាន (Mutable Variable) ក្នុងវិសាលភាព Block របស់វា។',
      example: 'let score = 95;'
    },
    'function': {
      title: 'JavaScript Function Keyword',
      descEn: 'Declares a reusable block of code designed to perform a particular task when executed.',
      descKh: 'ប្រកាសប្លុកកូដដែលអាចយកមកប្រើឡើងវិញបាន ដើម្បីបំពេញភារកិច្ចជាក់លាក់ណាមួយនៅពេលហៅប្រើ។',
      example: 'function greet() {\n  return "សួស្តី";\n}'
    },
    'if': {
      title: 'Conditional statement (if)',
      descEn: 'Specifies a block of code to be executed if a specified condition evaluates to true.',
      descKh: 'កំណត់ប្លុកកូដឱ្យដំណើរការ លុះត្រាតែលក្ខខណ្ឌដែលបានកំណត់នោះពិត (true)។',
      example: 'if (score >= 50) {\n  console.log("Passed");\n}'
    },
    'else': {
      title: 'Conditional statement (else)',
      descEn: 'Specifies a block of code to be executed if the initial condition in the "if" statement is false.',
      descKh: 'កំណត់ប្លុកកូដឱ្យដំណើរការ ក្នុងករណីដែលលក្ខខណ្ឌ "if" ខាងលើមិនពិត (false)។',
      example: 'if (score >= 50) {\n  // pass\n} else {\n  console.log("Fail");\n}'
    },
    'for': {
      title: 'For Loop Iterator',
      descEn: 'Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.',
      descKh: 'បង្កើតការវិលជុំកូដ (Loop) តាមចំនួនដងជាក់លាក់មួយ។',
      example: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}'
    },
    'print': {
      title: 'Python print() Function',
      descEn: 'Prints the specified message to the screen, or other standard output device.',
      descKh: 'បង្ហាញសារ ឬតម្លៃលទ្ធផលនៅលើអេក្រង់ (Terminal/Console Screen)។',
      example: 'print("Hello from Python")'
    },
    'def': {
      title: 'Python def Keyword',
      descEn: 'Used to define (create) a function, which is a block of organized, reusable code.',
      descKh: 'ប្រើដើម្បីបង្កើត ឬកំណត់អនុគមន៍ (Function) នៅក្នុងភាសា Python។',
      example: 'def add_numbers(a, b):\n    return a + b'
    },
    'elif': {
      title: 'Python elif Keyword',
      descEn: 'Short for "else if". Allows you to check multiple conditional expressions sequentially.',
      descKh: 'មកពីពាក្យ "else if"។ ប្រើដើម្បីត្រួតពិនិត្យលក្ខខណ្ឌបន្ថែមបន្តបន្ទាប់គ្នា។',
      example: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")'
    },
    'Console.WriteLine': {
      title: 'C# Console.WriteLine() Method',
      descEn: 'Writes the specified data, followed by the current line terminator, to the standard output stream.',
      descKh: 'បង្ហាញសារ ឬព័ត៌មានលទ្ធផលនៅលើអេក្រង់ រួចចុះបន្ទាត់ថ្មីដោយស្វ័យប្រវត្ត។',
      example: 'Console.WriteLine("Hello C#");'
    },
    'using': {
      title: 'C# using Directive',
      descEn: 'Allows you to use types defined in a namespace without specifying the fully qualified namespace.',
      descKh: 'អនុញ្ញាតឱ្យប្រើប្រាស់ Class នៅក្នុង Namespace ណាមួយដោយមិនបាច់សរសេរឈ្មោះពេញរបស់វា។',
      example: 'using System;'
    },
    'System.out.println': {
      title: 'Java System.out.println() Method',
      descEn: 'Prints the argument passed to it and then terminates the line.',
      descKh: 'បង្ហាញសារ ឬព័ត៌មានលទ្ធផលនៅលើអេក្រង់ រួចចុះបន្ទាត់ថ្មីនៅក្នុងភាសា Java។',
      example: 'System.out.println("Hello Java");'
    },
    'std::cout': {
      title: 'C++ std::cout Stream',
      descEn: 'Represents the standard output stream in C++, used to output data to the screen.',
      descKh: 'តំណាងឱ្យចរន្តបញ្ចេញលទ្ធផលស្តង់ដារ (Standard Output Stream) សម្រាប់បង្ហាញសារលើអេក្រង់ C++។',
      example: 'std::cout << "Hello C++" << std::endl;'
    }
  };

  const registerHoverProviders = () => {
    const languages = ['html', 'css', 'javascript', 'typescript', 'python', 'csharp', 'java', 'cpp'];
    languages.forEach(lang => {
      const hoverKey = `hover_${lang}`;
      if (!registered[hoverKey]) {
        registered[hoverKey] = monaco.languages.registerHoverProvider(lang, {
          provideHover: (model: any, position: any) => {
            const wordInfo = model.getWordAtPosition(position);
            if (!wordInfo) return null;
            
            const word = wordInfo.word;
            const lineContent = model.getLineContent(position.lineNumber);
            
            let matchedKey = '';
            if (lineContent.includes('Console.WriteLine')) {
              matchedKey = 'Console.WriteLine';
            } else if (lineContent.includes('System.out.println')) {
              matchedKey = 'System.out.println';
            } else if (lineContent.includes('console.log')) {
              matchedKey = 'console.log';
            } else if (hoverDict[word]) {
              matchedKey = word;
            } else if (hoverDict[word.toLowerCase()]) {
              matchedKey = word.toLowerCase();
            }
            
            if (matchedKey && hoverDict[matchedKey]) {
              const info = hoverDict[matchedKey];
              return {
                range: new monaco.Range(
                  position.lineNumber,
                  wordInfo.startColumn,
                  position.lineNumber,
                  wordInfo.endColumn
                ),
                contents: [
                  { value: `**${info.title}**` },
                  { value: `🇬🇧 ${info.descEn}\n\n🇰🇭 ${info.descKh}` },
                  { value: `\`\`\`${lang}\n${info.example}\n\`\`\`` }
                ]
              };
            }
            return null;
          }
        });
      }
    });
  };
  registerHoverProviders();

  // 9. Document Formatting Support (VS Code extension standard)
  const formatCodeWithSimpleBeautifier = (text: string, lang: string): string => {
    const lines = text.split('\n');
    let formatted = '';
    let indent = 0;
    const isBraceLanguage = ['javascript', 'typescript', 'java', 'csharp', 'cpp', 'css', 'html'].includes(lang);
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (!line) {
        formatted += '\n';
        continue;
      }
      
      if (isBraceLanguage) {
        if (line.startsWith('}') || line.startsWith('</') || line.startsWith(']')) {
          indent = Math.max(0, indent - 1);
        }
      }
      
      formatted += '  '.repeat(indent) + line + '\n';
      
      if (isBraceLanguage) {
        if (line.endsWith('{') || (line.startsWith('<') && !line.startsWith('</') && !line.endsWith('/>') && !line.startsWith('<!') && !['img', 'br', 'hr', 'input', 'meta', 'link'].some(self => line.toLowerCase().startsWith('<' + self))) || line.endsWith('[')) {
          indent++;
        }
      } else if (lang === 'python') {
        if (line.endsWith(':')) {
          indent++;
        } else if (i < lines.length - 1) {
          const nextLine = lines[i + 1].trim();
          if (nextLine.startsWith('elif ') || nextLine.startsWith('else:') || nextLine.startsWith('except ') || nextLine.startsWith('finally:')) {
            indent = Math.max(0, indent - 1);
          }
        }
      }
    }
    return formatted.trim();
  };

  const registerFormatters = () => {
    const languages = ['html', 'css', 'javascript', 'typescript', 'python', 'csharp', 'java', 'cpp'];
    languages.forEach(lang => {
      const formatKey = `format_${lang}`;
      if (!registered[formatKey]) {
        registered[formatKey] = monaco.languages.registerDocumentFormattingEditProvider(lang, {
          provideDocumentFormattingEdits(model: any) {
            const text = model.getValue();
            const formatted = formatCodeWithSimpleBeautifier(text, lang);
            return [
              {
                range: model.getFullModelRange(),
                text: formatted,
              }
            ];
          }
        });
      }
    });
  };
  registerFormatters();
}
