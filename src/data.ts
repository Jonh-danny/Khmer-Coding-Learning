import { LearningPath, Course, Lesson } from './types';

// Helper function to easily construct a Lesson
function makeLesson(id: string, opts: Partial<Lesson>): Lesson {
  return {
    id,
    title: opts.title || { en: 'Lesson', kh: 'មេរៀន' },
    description: opts.description || { en: '', kh: '' },
    instructions: opts.instructions || { en: '', kh: '' },
    task: opts.task || { en: '', kh: '' },
    language: opts.language || 'html',
    files: opts.files || [],
    activeFileName: opts.activeFileName || (opts.files && opts.files[0]?.name) || 'index.html',
    solutionCheck: opts.solutionCheck || { type: 'html-contains', targetFile: 'index.html' },
    ...opts
  };
}

// -----------------------------------------------------------------------------
// 1. HTML Lessons (4 Lessons)
// -----------------------------------------------------------------------------
const htmlLessons: Lesson[] = [
  makeLesson('html-1', {
    title: { en: '1. Headings & Paragraphs', kh: '១. ចំណងជើង និងកថាខណ្ឌ' },
    description: { en: 'Structure web pages with h1 and p tags.', kh: 'រៀនប្រើប្រាស់ tags h1 និង p ដើម្បីបង្កើតអត្ថបទ។' },
    instructions: {
      en: `### HTML Basics
HTML is used to structure webpages.
* \`<h1>\` defines the largest heading.
* \`<p>\` defines a text paragraph.`,
      kh: `### មូលដ្ឋានគ្រឹះ HTML
HTML ត្រូវបានប្រើដើម្បីរៀបចំរចនាសម្ព័ន្ធគេហទំព័រ។
* \`<h1>\` ប្រើសម្រាប់ចំណងជើងធំបំផុត។
* \`<p>\` ប្រើសម្រាប់កថាខណ្ឌអត្ថបទ។`
    },
    task: {
      en: 'In the `body` tag, write an `<h1>` with the text `"សួស្តី កម្ពុជា"` and a `<p>` tag with `"ខ្ញុំកំពុងរៀនកូដ!"`.',
      kh: 'នៅក្នុង tag `body` សូមសរសេរ `<h1>` ដាក់អត្ថបទ `"សួស្តី កម្ពុជា"` និង `<p>` ដាក់អត្ថបទ `"ខ្ញុំកំពុងរៀនកូដ!"`។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- សរសេរកូដនៅទីនេះ / Write here -->\n\n</body>\n</html>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasH1 = /<h1>\s*សួស្តី\s*កម្ពុជា\s*<\/h1>/i.test(c);
        const hasP = /<p>\s*ខ្ញុំកំពុងរៀនកូដ!\s*<\/p>/i.test(c);
        return hasH1 && hasP 
          ? { success: true, feedback: 'Great job! HTML headers and paragraphs are perfect.' }
          : { success: false, feedback: 'Please double-check your tags and Khmer text spelling.' };
      }
    }
  }),
  makeLesson('html-2', {
    title: { en: '2. Creating Links (Anchor)', kh: '២. ការបង្កើតតំណភ្ជាប់ (Links)' },
    description: { en: 'Connect pages using anchor links with href attributes.', kh: 'រៀនបង្កើតតំណភ្ជាប់ដោយប្រើប្រាស់ anchor tag និង href attribute។' },
    instructions: {
      en: `### HTML Links
Use the \`<a>\` tag to create hyperlinks:
\`\`\`html
<a href="https://example.com">Visit site</a>
\`\`\``,
      kh: `### តំណភ្ជាប់ HTML
ប្រើប្រាស់ tag \`<a>\` និង attribute \`href\` ដើម្បីបង្កើតតំណភ្ជាប់៖
\`\`\`html
<a href="https://example.com">ចូលទៅកាន់វេបសាយ</a>
\`\`\``
    },
    task: {
      en: 'Create a link pointing to `"https://www.w3schools.com"` with the clickable text `"រៀននៅ W3Schools"`.',
      kh: 'សូមបង្កើត link ទៅកាន់ `"https://www.w3schools.com"` ដោយមានអក្សរចុចថា `"រៀននៅ W3Schools"`។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- បង្កើត link នៅទីនេះ / Create link here -->\n\n</body>\n</html>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasUrl = c.includes('https://www.w3schools.com');
        const hasText = c.includes('រៀននៅ W3Schools');
        return hasUrl && hasText
          ? { success: true, feedback: 'Excellent! Your link is active.' }
          : { success: false, feedback: 'Make sure href matches "https://www.w3schools.com" and text says "រៀននៅ W3Schools".' };
      }
    }
  }),
  makeLesson('html-3', {
    title: { en: '3. Adding Images', kh: '៣. ការបញ្ចូលរូបភាព' },
    description: { en: 'Learn to embed visual images using self-closing tags.', kh: 'រៀនពីរបៀបបញ្ចូលរូបភាពដោយប្រើ tag ពិសេសមិនបាច់មាន tag បិទ។' },
    instructions: {
      en: `### HTML Images
Images use the \`<img>\` tag. It is self-closing and requires \`src\` and \`alt\`:
\`\`\`html
<img src="pic.jpg" alt="Description">
\`\`\``,
      kh: `### រូបភាព HTML
រូបភាពប្រើប្រាស់ tag \`<img>\`។ វាជាប្រភេទ self-closing tag (មិនបាច់មាន tag បិទ) ដោយត្រូវការ attribute \`src\` និង \`alt\`៖
\`\`\`html
<img src="pic.jpg" alt="អត្ថបទជំនួស">
\`\`\``
    },
    task: {
      en: 'Add an image with src `"logo.png"` and alt attribute `"ស្លាកសញ្ញា"`.',
      kh: 'សូមបញ្ចូលរូបភាពដែលមាន src `"logo.png"` និង alt `"ស្លាកសញ្ញា"`។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- បញ្ចូលរូបភាពនៅទីនេះ / Insert image here -->\n\n</body>\n</html>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasSrc = /src\s*=\s*['"]logo\.png['"]/i.test(c);
        const hasAlt = /alt\s*=\s*['"]ស្លាកសញ្ញា['"]/i.test(c);
        return hasSrc && hasAlt
          ? { success: true, feedback: 'Wonderful! The image is configured correctly.' }
          : { success: false, feedback: 'Ensure src is "logo.png" and alt is exactly "ស្លាកសញ្ញា".' };
      }
    }
  }),
  makeLesson('html-4', {
    title: { en: '4. Lists & Containers', kh: '៤. បញ្ជីរាយនាម (Lists)' },
    description: { en: 'Create organized lists using ul and li tags.', kh: 'រៀនរៀបចំបញ្ជីរាយនាមដោយប្រើ tag ul និង li។' },
    instructions: {
      en: `### HTML Lists
Create bulleted lists with \`<ul>\` (unordered list) and \`<li>\` (list item):
\`\`\`html
<ul>
  <li>Apple</li>
</ul>
\`\`\``,
      kh: `### បញ្ជីរាយនាម HTML
បង្កើតបញ្ជីរាយនាមគ្មានលំដាប់ដោយប្រើប្រាស់ \`<ul>\` និង \`<li>\` សម្រាប់ធាតុនីមួយៗ៖
\`\`\`html
<ul>
  <li>ផ្លែប៉ោម</li>
</ul>
\`\`\``
    },
    task: {
      en: 'Create a `<ul>` containing two `<li>` items: `"HTML"` and `"CSS"`.',
      kh: 'សូមបង្កើត `<ul>` មួយដែលមាន `<li>` ពីរគឺ៖ `"HTML"` និង `"CSS"`។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- សរសេរបញ្ជីរាយនាមនៅទីនេះ / Write lists here -->\n\n</body>\n</html>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasUl = /<ul>/i.test(c) && /<\/ul>/i.test(c);
        const hasHtml = /<li>\s*HTML\s*<\/li>/i.test(c);
        const hasCss = /<li>\s*CSS\s*<\/li>/i.test(c);
        return hasUl && hasHtml && hasCss
          ? { success: true, feedback: 'Great job! Your lists are clean and organized.' }
          : { success: false, feedback: 'Make sure you have an opening <ul>, closing </ul>, and both <li>HTML</li> and <li>CSS</li>.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 2. CSS Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const cssLessons: Lesson[] = [
  makeLesson('css-1', {
    title: { en: '1. CSS Margins & Padding', kh: '១. Margin និង Padding ក្នុង CSS' },
    description: { en: 'Control spacing outside and inside elements.', kh: 'គ្រប់គ្រងគម្លាតខាងក្នុង និងខាងក្រៅរបស់ធាតុកូដ។' },
    instructions: {
      en: `### CSS Spacing
* \`margin\`: Spacing outside of elements.
* \`padding\`: Spacing inside of elements.`,
      kh: `### គម្លាតក្នុង CSS
* \`margin\`: បង្កើតគម្លាតនៅក្រៅបន្ទាត់ធាតុ។
* \`padding\`: បង្កើតគម្លាតនៅខាងក្នុងបន្ទាត់ធាតុ។`
    },
    task: {
      en: 'Add a style rule for body: `margin: 0px;` and `padding: 20px;`.',
      kh: 'បន្ថែមរបៀបរចនាសម្រាប់ body ៖ `margin: 0px;` និង `padding: 20px;`។'
    },
    language: 'html',
    files: [{
      name: 'style.html',
      content: `<style>\nbody {\n  /* កែសម្រួលនៅទីនេះ / Edit here */\n\n}\n</style>\n<p>CSS Box Spacing</p>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'style.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasM = /margin\s*:\s*0(px)?\s*;/i.test(c);
        const hasP = /padding\s*:\s*20px\s*;/i.test(c);
        return hasM && hasP
          ? { success: true, feedback: 'Superb! Spacing borders configured perfectly.' }
          : { success: false, feedback: 'Ensure body stylesheet has margin: 0px; and padding: 20px;' };
      }
    }
  }),
  makeLesson('css-2', {
    title: { en: '2. Backgrounds & Borders', kh: '២. ផ្ទៃក្រោយ និងបន្ទាត់ជុំវិញ' },
    description: { en: 'Style colors and custom border outlines.', kh: 'រចនាពណ៌ផ្ទៃក្រោយ និងបន្ទាត់ព័ទ្ធជុំវិញរបស់ធាតុ។' },
    instructions: {
      en: `### Borders & Backgrounds
Set page visual elements using simple styling rules:
\`\`\`css
background-color: lightblue;
border: 1px solid black;
\`\`\``,
      kh: `### ផ្ទៃក្រោយ និងបន្ទាត់
កំណត់លក្ខណៈសោភ័ណភាពដោយប្រើ៖
\`\`\`css
background-color: lightblue;
border: 1px solid black;
\`\`\``
    },
    task: {
      en: 'Style the `.box` class selector to have `background-color: #e0f2fe;` and `border: 2px solid #0284c7;`.',
      kh: 'សូមរចនា class `.box` ឱ្យមានពណ៌ផ្ទៃក្រោយ `background-color: #e0f2fe;` និងបន្ទាត់ `border: 2px solid #0284c7;`។'
    },
    language: 'html',
    files: [{
      name: 'style.html',
      content: `<style>\n.box {\n  /* រចនានៅទីនេះ / Style here */\n\n}\n</style>\n<div class="box">រៀន CSS</div>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'style.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasBg = /background-color\s*:\s*#e0f2fe/i.test(c);
        const hasBorder = /border\s*:\s*2px\s+solid\s+#0284c7/i.test(c);
        return hasBg && hasBorder
          ? { success: true, feedback: 'Brilliant! The background box looks lovely.' }
          : { success: false, feedback: 'Please verify the class styling: background-color: #e0f2fe; and border: 2px solid #0284c7;' };
      }
    }
  }),
  makeLesson('css-3', {
    title: { en: '3. Fonts & Text Alignments', kh: '៣. របៀបរៀបចំអក្សរ និងតម្រឹម' },
    description: { en: 'Manage typography and center text alignment.', kh: 'គ្រប់គ្រងពុម្ពអក្សរ និងរបៀបរៀបចំតម្រឹមអក្សរ។' },
    instructions: {
      en: `### CSS Typography
Control how text looks inside HTML headers and tags:
* \`font-family\`: Select specific styling fonts.
* \`text-align\`: Position text blocks (left, center, right, justify).`,
      kh: `### អក្សរ និងតម្រឹមក្នុង CSS
រចនារូបរាងអក្សរនៅក្នុងវេបសាយ៖
* \`font-family\`: កំណត់ពុម្ពអក្សរ។
* \`text-align\`: កំណត់ទីតាំងអក្សរ (ឆ្វេង កណ្តាល ស្តាំ)។`
    },
    task: {
      en: 'Apply styling inside `h1` to have `font-family: sans-serif;` and `text-align: center;`.',
      kh: 'សូមរចនា `h1` ឱ្យមាន `font-family: sans-serif;` និង `text-align: center;`។'
    },
    language: 'html',
    files: [{
      name: 'style.html',
      content: `<style>\nh1 {\n  /* សរសេរនៅទីនេះ / Write here */\n\n}\n</style>\n<h1>អក្សរកណ្តាល</h1>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'style.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasFont = /font-family\s*:\s*sans-serif/i.test(c);
        const hasAlign = /text-align\s*:\s*center/i.test(c);
        return hasFont && hasAlign
          ? { success: true, feedback: 'Awesome alignment! Typography looks professional.' }
          : { success: false, feedback: 'Make sure you styled h1 with font-family: sans-serif; and text-align: center;' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 3. JavaScript Lessons (4 Lessons)
// -----------------------------------------------------------------------------
const jsLessons: Lesson[] = [
  makeLesson('js-1', {
    title: { en: '1. Variables & Strings', kh: '១. អថេរ និង ខ្សែអក្សរ' },
    description: { en: 'Declare memory variables using const and let.', kh: 'រៀនប្រកាសអថេរដើម្បីរក្សាទុកតម្លៃទិន្នន័យ។' },
    instructions: {
      en: `### JavaScript Variables
Use \`const\` for constants (values that don't change), and \`let\` for variables that can be modified.
Use \`console.log()\` to output details:
\`\`\`js
const fruit = "Mango";
console.log(fruit);
\`\`\``,
      kh: `### អថេរ JavaScript
ប្រើប្រាស់ \`const\` សម្រាប់តម្លៃថេរ និង \`let\` សម្រាប់តម្លៃដែលអាចប្រែប្រួលបាន។
បង្ហាញលទ្ធផលដោយប្រើ \`console.log()\`៖
\`\`\`js
const fruit = "ស្វាយ";
console.log(fruit);
\`\`\``
    },
    task: {
      en: 'Declare a const variable named `studentName` set to `"បុប្ផា"`. Print it using `console.log(studentName)`.',
      kh: 'សូមបង្កើតអថេរ `studentName` ស្មើនឹង `"បុប្ផា"` ដោយប្រើ `const`។ បន្ទាប់មកបង្ហាញវាដោយប្រើ `console.log(studentName)`។'
    },
    language: 'javascript',
    files: [{
      name: 'script.js',
      content: `// សរសេរកូដនៅទីនេះ / Write here\n`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'script.js',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasVar = /const\s+studentName\s*=\s*['"`]បុប្ផា['"`]/i.test(c);
        const correctPrint = output.trim() === 'បុប្ផា';
        return hasVar && correctPrint
          ? { success: true, feedback: 'Perfect variables! You loaded "បុប្ផា" successfully.' }
          : { success: false, feedback: 'Make sure const studentName = "បុប្ផា"; and you output console.log(studentName);' };
      }
    }
  }),
  makeLesson('js-2', {
    title: { en: '2. Writing Functions', kh: '២. ការសរសេរអនុគមន៍' },
    description: { en: 'Declare block statements that can be run repeatedly.', kh: 'រៀនបង្កើតប្លុកកូដដែលអាចហៅដំណើរការជាច្រើនដង។' },
    instructions: {
      en: `### JavaScript Functions
Functions run code blocks when called, and return computed variables:
\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\``,
      kh: `### អនុគមន៍ JavaScript
អនុគមន៍ជួយសន្សំសំចៃការសរសេរកូដដោយអនុញ្ញាតឱ្យហៅប្រើប្រាស់ឡើងវិញ៖
\`\`\`js
function add(a, b) {
  return a + b;
}
\`\`\``
    },
    task: {
      en: 'Write a function named `calculateTotal` taking parameters `price` and `quantity`. It should return `price * quantity`. Test it with `console.log(calculateTotal(500, 3));`.',
      kh: 'សូមសរសេរអនុគមន៍ `calculateTotal` ដែលទទួលប៉ារ៉ាម៉ែត្រ `price` និង `quantity` រួចបង្វិលតម្លៃ `price * quantity` ត្រឡប់មកវិញ។ រួចហៅ `console.log(calculateTotal(500, 3));`។'
    },
    language: 'javascript',
    files: [{
      name: 'script.js',
      content: `// សរសេរអនុគមន៍នៅទីនេះ / Write function here\n`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'script.js',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasFn = /function\s+calculateTotal/i.test(c) || /const\s+calculateTotal\s*=\s*/i.test(c);
        const correctResult = output.includes('1500');
        return hasFn && correctResult
          ? { success: true, feedback: 'Wonderful! The total is exactly 1500.' }
          : { success: false, feedback: 'Check function spelling and verify that you printed console.log(calculateTotal(500, 3)).' };
      }
    }
  }),
  makeLesson('js-3', {
    title: { en: '3. Conditionals (if/else)', kh: '៣. លក្ខខណ្ឌកូដ (if/else)' },
    description: { en: 'Branch your code flows using comparisons.', kh: 'រៀនប្រើប្រាស់លក្ខខណ្ឌដើម្បីបំបែកលំហូរការងាររបស់កម្មវិធី។' },
    instructions: {
      en: `### JavaScript Conditions
Use \`if\` and \`else\` to run different instructions based on values:
\`\`\`js
if (age >= 18) {
  console.log("Allowed");
} else {
  console.log("Denied");
}
\`\`\``,
      kh: `### លក្ខខណ្ឌប្រៀបធៀប
ប្រើ \`if\` និង \`else\` ដើម្បីសាកល្បងលក្ខខណ្ឌប្រែប្រួល៖
\`\`\`js
if (age >= 18) {
  console.log("អនុញ្ញាត");
} else {
  console.log("មិនអនុញ្ញាត");
}
\`\`\``
    },
    task: {
      en: 'Let `score = 75;`. Write an `if` condition to check if `score >= 50`. If true, print `"ជាប់"`. Otherwise, print `"ធ្លាក់"`.',
      kh: 'សូមបង្កើតអថេរ `let score = 75;`។ បន្ទាប់មកបង្កើតលក្ខខណ្ឌ `if` ប្រសិនបើ `score >= 50` ឱ្យបង្ហាញពាក្យ `"ជាប់"` ក្រៅពីនោះបង្ហាញពាក្យ `"ធ្លាក់"`។'
    },
    language: 'javascript',
    files: [{
      name: 'script.js',
      content: `let score = 75;\n// សរសេរកូដលក្ខខណ្ឌនៅទីនេះ / Write if-else condition here\n`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'script.js',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasIf = /if\s*\(/i.test(c);
        const hasElse = /else/i.test(c);
        const pass = output.includes('ជាប់');
        return hasIf && hasElse && pass
          ? { success: true, feedback: 'Terrific! Your conditional evaluated correctly.' }
          : { success: false, feedback: 'Ensure score is tested >= 50, printing "ជាប់" if true and "ធ្លាក់" if false.' };
      }
    }
  }),
  makeLesson('js-4', {
    title: { en: '4. Repeating with Loops', kh: '៤. ជុំវិលវល់ (Loops)' },
    description: { en: 'Execute statements multiple times using for loops.', kh: 'រៀនដំណើរការប្លុកកូដដដែលៗដោយប្រើប្រាស់វិលជុំ For Loop។' },
    instructions: {
      en: `### JavaScript Loops
Loops are used to run a block of code multiple times.
A standard \`for\` loop runs like this:
\`\`\`js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
\`\`\``,
      kh: `### រង្វង់ជុំវិលជុំ
រង្វង់ជុំ For loop ជួយដំណើរការកូដជាច្រើនដងរហូតលក្ខខណ្ឌលែងត្រូវ៖
\`\`\`js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
\`\`\``
    },
    task: {
      en: 'Write a `for` loop that logs the numbers from `1` to `5` (inclusive) using `console.log(i)`.',
      kh: 'សូមសរសេរ For loop មួយដើម្បីបង្ហាញលេខពី `1` ដល់ `5` ទៅកាន់ console។'
    },
    language: 'javascript',
    files: [{
      name: 'script.js',
      content: `// សរសេរ loop នៅទីនេះ / Write loop here\n`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'script.js',
      validationFn: (files, output) => {
        const clean = output.replace(/\s+/g, ' ');
        const matched = clean.includes('1 2 3 4 5');
        return matched
          ? { success: true, feedback: 'Splendid! Your loop ran from 1 to 5.' }
          : { success: false, feedback: 'Make sure your loop condition goes from 1 to 5 and prints with console.log().' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 4. Python Lessons (4 Lessons)
// -----------------------------------------------------------------------------
const pythonLessons: Lesson[] = [
  makeLesson('python-1', {
    title: { en: '1. Hello Python World', kh: '១. សេចក្តីផ្តើមអំពី Python' },
    description: { en: 'Print texts instantly without semicolons.', kh: 'បង្ហាញសារដំបូងដោយប្រើអនុគមន៍ print()។' },
    instructions: {
      en: `### Python Print
Python uses clean syntax without semicolons or curly braces:
\`\`\`python
print("Hello Developers")
\`\`\``,
      kh: `### ការបង្ហាញសារក្នុង Python
Python មានទម្រង់កូដសាមញ្ញនិងស្អាត ដោយមិនត្រូវការសញ្ញា semicolon ឬគ្នាបឡើយ៖
\`\`\`python
print("សួស្តី អ្នកអភិវឌ្ឍន៍")
\`\`\``
    },
    task: {
      en: 'Write a Python script that outputs `"សួស្តីពិភពលោក"`.',
      kh: 'សូមសរសេរកម្មវិធី Python បង្ហាញពាក្យ `"សួស្តីពិភពលោក"`។'
    },
    language: 'python',
    files: [{
      name: 'main.py',
      content: `# សរសេរនៅទីនេះ / Write here\n`,
      language: 'python'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.py',
      validationFn: (files, output) => {
        return output.trim() === 'សួស្តីពិភពលោក'
          ? { success: true, feedback: 'Superb print! Python executed successfully.' }
          : { success: false, feedback: 'Please print exactly "សួស្តីពិភពលោក".' };
      }
    }
  }),
  makeLesson('python-2', {
    title: { en: '2. Python Variables', kh: '២. ការប្រើប្រាស់អថេរ' },
    description: { en: 'Store and calculate numbers in Python.', kh: 'រៀនបង្កើតអថេរគណនាលេខក្នុងភាសា Python។' },
    instructions: {
      en: `### Python Variables
You declare variables directly without const or let keywords:
\`\`\`python
price = 500
total = price * 2
\`\`\``,
      kh: `### អថេរ Python
យើងគ្រាន់តែសរសេរឈ្មោះអថេរ និងផ្តល់តម្លៃតែម្តង មិនបាច់ប្រើពាក្យ let ឬ const ឡើយ៖
\`\`\`python
price = 500
total = price * 2
\`\`\``
    },
    task: {
      en: 'Set `apple_price = 1200` and `orange_price = 800`. Add them and print the total sum.',
      kh: 'សូមកំណត់ `apple_price = 1200` និង `orange_price = 800`។ រួចបូកពួកវាបញ្ចូលគ្នា ហើយបង្ហាញលទ្ធផលផលបូក។'
    },
    language: 'python',
    files: [{
      name: 'main.py',
      content: `# បង្កើតអថេរគណនានៅទីនេះ / Write here\n`,
      language: 'python'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.py',
      validationFn: (files, output) => {
        const has2000 = output.includes('2000');
        const c = files[0].content;
        const hasA = c.includes('apple_price');
        const hasO = c.includes('orange_price');
        return has2000 && hasA && hasO
          ? { success: true, feedback: 'Perfect calculations! Total is 2000.' }
          : { success: false, feedback: 'Make sure apple_price = 1200, orange_price = 800 and you print their sum.' };
      }
    }
  }),
  makeLesson('python-3', {
    title: { en: '3. Python Conditions', kh: '៣. លក្ខខណ្ឌ IF-ELSE' },
    description: { en: 'Control flow with if, elif, and else.', kh: 'រៀនប្រើប្រាស់លក្ខខណ្ឌ IF, ELIF និង ELSE។' },
    instructions: {
      en: `### Python Indentation
Python uses indentation (4 spaces) instead of curly braces to define code scopes:
\`\`\`python
if x > 10:
    print("Large")
else:
    print("Small")
\`\`\``,
      kh: `### ឃ្លាគម្លាតក្នុង Python
Python ប្រើប្រាស់ការខំខិតបន្ទាត់ (indentation) ជំនួសឱ្យគ្នាបដើម្បីចងកូដជាក្រុម៖
\`\`\`python
if x > 10:
    print("ធំ")
else:
    print("តូច")
\`\`\``
    },
    task: {
      en: 'Let `grade = 85`. If `grade >= 90` print `"A"`. If `grade >= 80` print `"B"`. Otherwise print `"C"`.',
      kh: 'សូមកំណត់ `grade = 85`។ ប្រសិនបើ `grade >= 90` បង្ហាញ `"A"` ប្រសិនបើ `grade >= 80` បង្ហាញ `"B"` ក្រៅពីនេះបង្ហាញ `"C"`។'
    },
    language: 'python',
    files: [{
      name: 'main.py',
      content: `grade = 85\n# សរសេរលក្ខខណ្ឌនៅទីនេះ / Write conditions here\n`,
      language: 'python'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.py',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasElif = c.includes('elif');
        return hasElif && output.trim() === 'B'
          ? { success: true, feedback: 'Terrific Python logic! Code outputs B successfully.' }
          : { success: false, feedback: 'Ensure your elif condition checks grade >= 80 and prints B.' };
      }
    }
  }),
  makeLesson('python-4', {
    title: { en: '4. Lists & Iterations', kh: '៤. បញ្ជី និងការវិលជុំ' },
    description: { en: 'Work with lists and iterate items using for-in.', kh: 'ស្វែងយល់ពីបញ្ជី (lists) និងការប្រើប្រាស់ For Loop លើធាតុបញ្ជី។' },
    instructions: {
      en: `### Python Lists
Define arrays with square brackets and loop with \`for item in list\`:
\`\`\`python
names = ["Alice", "Bob"]
for name in names:
    print(name)
\`\`\``,
      kh: `### បញ្ជីក្នុង Python
បង្កើតបញ្ជី (Lists) ដោយប្រើប្រាស់សញ្ញា அடைកង់ [] ហើយរាប់ដំណើរការដោយប្រើ for-in៖
\`\`\`python
names = ["Alice", "Bob"]
for name in names:
    print(name)
\`\`\``
    },
    task: {
      en: 'Create a list named `skills` with elements `"HTML"`, `"CSS"`. Loop and print each skill.',
      kh: 'សូមបង្កើតបញ្ជី `skills` ដែលមានតម្លៃ `"HTML"` និង `"CSS"`។ បន្ទាប់មកប្រើ loop បង្ហាញធាតុនីមួយៗ។'
    },
    language: 'python',
    files: [{
      name: 'main.py',
      content: `# បង្កើតបញ្ជី និង loop នៅទីនេះ / Write here\n`,
      language: 'python'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.py',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasList = c.includes('HTML') && c.includes('CSS') && c.includes('[');
        const printed = output.includes('HTML') && output.includes('CSS');
        return hasList && printed
          ? { success: true, feedback: 'Fantastic! Loop iteration printed each skill correctly.' }
          : { success: false, feedback: 'Define skills = ["HTML", "CSS"] and use a for loop to print each.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 5. C# Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const csharpLessons: Lesson[] = [
  makeLesson('csharp-1', {
    title: { en: '1. Hello C# Console', kh: '១. ការចាប់ផ្តើមក្នុង C#' },
    description: { en: 'Build basic C# applications using System namespace.', kh: 'រៀនរៀបចំរចនាសម្ព័ន្ធកម្មវិធី Console របស់ C#។' },
    instructions: {
      en: `### C# Applications
Every program starts inside a Class Main function in C#:
\`\`\`csharp
using System;
class Program {
  static void Main() {
    Console.WriteLine("Welcome");
  }
}
\`\`\``,
      kh: `### កម្មវិធី C#
រាល់កូដ C# ត្រូវរត់នៅក្នុង method Main របស់ Class ណាមួយ៖
\`\`\`csharp
using System;
class Program {
  static void Main() {
    Console.WriteLine("ស្វាគមន៍");
  }
}
\`\`\``
    },
    task: {
      en: 'Change the output inside `Console.WriteLine` to display exactly `"សួស្តី វិទ្យាស្ថានកូដឌីងខ្មែរ"`.',
      kh: 'សូមកែសម្រួល `Console.WriteLine` ដើម្បីបង្ហាញពាក្យ `"សួស្តី វិទ្យាស្ថានកូដឌីងខ្មែរ"`។'
    },
    language: 'csharp',
    files: [{
      name: 'Program.cs',
      content: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("...");\n  }\n}`,
      language: 'csharp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Program.cs',
      validationFn: (files, output) => {
        return output.trim() === 'សួស្តី វិទ្យាស្ថានកូដឌីងខ្មែរ'
          ? { success: true, feedback: 'Superb C# compilation!' }
          : { success: false, feedback: 'Verify you wrote "សួស្តី វិទ្យាស្ថានកូដឌីងខ្មែរ" exactly.' };
      }
    }
  }),
  makeLesson('csharp-2', {
    title: { en: '2. C# Types & Variables', kh: '២. ប្រភេទតម្លៃ និងអថេរ' },
    description: { en: 'Learn strongly typed variables in C#.', kh: 'យល់ដឹងពីការកំណត់ប្រភេទតម្លៃអថេរច្បាស់លាស់។' },
    instructions: {
      en: `### Strongly Typed C#
Variables must define their exact type on creation:
\`\`\`csharp
string city = "Phnom Penh";
int year = 2026;
\`\`\``,
      kh: `### ប្រភេទតម្លៃច្បាស់លាស់
C# ទាមទារឱ្យប្រកាសប្រភេទតម្លៃអថេរជានិច្ច ដូចជា string ឬ int ៖
\`\`\`csharp
string city = "Phnom Penh";
int year = 2026;
\`\`\``
    },
    task: {
      en: 'Declare an int variable named `score` and assign it the value `100`. Output it using `Console.WriteLine(score);`.',
      kh: 'សូមបង្កើតអថេរ int មួយឈ្មោះ `score` ស្មើ `100`។ រួចបង្ហាញវានៅលើអេក្រង់។'
    },
    language: 'csharp',
    files: [{
      name: 'Program.cs',
      content: `using System;\n\nclass Program {\n  static void Main() {\n    // សរសេរកូដនៅទីនេះ / Write here\n\n  }\n}`,
      language: 'csharp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Program.cs',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasScore = /int\s+score\s*=\s*100\s*;/i.test(c);
        const correct = output.trim() === '100';
        return hasScore && correct
          ? { success: true, feedback: 'Outstanding job!' }
          : { success: false, feedback: 'Declare: int score = 100; and call Console.WriteLine(score);' };
      }
    }
  }),
  makeLesson('csharp-3', {
    title: { en: '3. C# Conditionals', kh: '៣. លក្ខខណ្ឌបញ្ជា' },
    description: { en: 'Direct application branches using if and else.', kh: 'រៀបចំលំហូរកូដតាមរយៈលក្ខខណ្ឌ if និង else ក្នុង C#។' },
    instructions: {
      en: `### C# Conditions
Use comparisons inside boolean conditions to route code blocks:
\`\`\`csharp
if (total >= 50) {
    Console.WriteLine("Pass");
}
\`\`\``,
      kh: `### លក្ខខណ្ឌក្នុង C#
សាកល្បងតម្លៃអថេរដោយប្រើ block ដូចខាងក្រោម៖
\`\`\`csharp
if (total >= 50) {
    Console.WriteLine("Pass");
}
\`\`\``
    },
    task: {
      en: 'Let `int speed = 80;`. Write a conditional check: if `speed > 60` write `"Fast"`, else write `"Slow"`.',
      kh: 'សូមសរសេរកូដ៖ បង្កើតអថេរ `int speed = 80;` រួចប្រើប្រាស់ if-else ដើម្បីពិនិត្យ បើ speed > 60 បង្ហាញ `"Fast"` ក្រៅពីនេះបង្ហាញ `"Slow"`។'
    },
    language: 'csharp',
    files: [{
      name: 'Program.cs',
      content: `using System;\n\nclass Program {\n  static void Main() {\n    int speed = 80;\n    // កូដលក្ខខណ្ឌនៅទីនេះ / Write conditional here\n\n  }\n}`,
      language: 'csharp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Program.cs',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasIf = c.includes('if') && c.includes('else');
        return hasIf && output.includes('Fast')
          ? { success: true, feedback: 'Brilliant C# logic!' }
          : { success: false, feedback: 'Make sure your if checks speed > 60 and prints "Fast".' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 6. Java Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const javaLessons: Lesson[] = [
  makeLesson('java-1', {
    title: { en: '1. Class & Main Method', kh: '១. រចនាសម្ព័ន្ធកម្មវិធី Java' },
    description: { en: 'Create java structures with main entry points.', kh: 'រៀនបង្កើត class និង main method ក្នុងភាសា Java។' },
    instructions: {
      en: `### Java Applications
All Java scripts must sit inside a public Class:
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
\`\`\``,
      kh: `### កម្មវិធី Java
រាល់កូដ Java ទាំងអស់ត្រូវស្ថិតនៅក្នុង public class ៖
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
\`\`\``
    },
    task: {
      en: 'Edit System.out.println to print `"សួស្តី ភាសា Java"`.',
      kh: 'កែសម្រួល System.out.println ឱ្យបង្ហាញពាក្យ `"សួស្តី ភាសា Java"`។'
    },
    language: 'java',
    files: [{
      name: 'Main.java',
      content: `public class Main {\n    public static void main(String[] args) {\n        // កែសម្រួលនៅទីនេះ / Edit here\n        System.out.println("...");\n    }\n}`,
      language: 'java'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Main.java',
      validationFn: (files, output) => {
        return output.trim() === 'សួស្តី ភាសា Java'
          ? { success: true, feedback: 'Great Java application compilation!' }
          : { success: false, feedback: 'Please print exactly "សួស្តី ភាសា Java".' };
      }
    }
  }),
  makeLesson('java-2', {
    title: { en: '2. Java Variables', kh: '២. ការប្រកាសអថេរក្នុង Java' },
    description: { en: 'Work with floats, doubles and standard variable formats.', kh: 'រៀនប្រកាសអថេរសម្រាប់លេខទសភាគ និងលេខចំនួនគត់។' },
    instructions: {
      en: `### Java Data Types
Java variables require explicit declarations:
\`\`\`java
int score = 95;
double gpa = 3.95;
\`\`\``,
      kh: `### ប្រភេទអថេរ Java
Java ទាមទារឱ្យកំណត់ប្រភេទអថេរឱ្យច្បាស់លាស់៖
\`\`\`java
int score = 95;
double gpa = 3.95;
\`\`\``
    },
    task: {
      en: 'Declare a double variable named `gpa = 3.8;` and output it using System.out.println.',
      kh: 'សូមបង្កើតអថេរ double មួយឈ្មោះ `gpa` ស្មើនឹង `3.8` រួចបង្ហាញវានៅលើអេក្រង់។'
    },
    language: 'java',
    files: [{
      name: 'Main.java',
      content: `public class Main {\n    public static void main(String[] args) {\n        // សរសេរកូដនៅទីនេះ / Write here\n\n    }\n}`,
      language: 'java'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Main.java',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasDouble = /double\s+gpa\s*=\s*3\.8\s*;/i.test(c);
        return hasDouble && output.trim() === '3.8'
          ? { success: true, feedback: 'Well done! Double variables handled correctly.' }
          : { success: false, feedback: 'Ensure double gpa = 3.8; is declared and displayed.' };
      }
    }
  }),
  makeLesson('java-3', {
    title: { en: '3. Java Conditionals', kh: '៣. លក្ខខណ្ឌបញ្ជា IF-ELSE' },
    description: { en: 'Branch Java flow based on comparisons.', kh: 'ប្រើប្រាស់លក្ខខណ្ឌប្រៀបធៀបក្នុងកម្មវិធី Java។' },
    instructions: {
      en: `### Java Logical Operators
Evaluate expressions using logical checks inside if statement:
\`\`\`java
if (num % 2 == 0) {
    System.out.println("Even");
}
\`\`\``,
      kh: `### លក្ខខណ្ឌក្នុង Java
សរសេរលក្ខខណ្ឌសម្រេចចិត្តក្នុង Java៖
\`\`\`java
if (num % 2 == 0) {
    System.out.println("Even");
}
\`\`\``
    },
    task: {
      en: 'Create an int variable `number = 15;`. Write an if-else block. If `number % 2 == 0` print `"Even"`, otherwise print `"Odd"`.',
      kh: 'សូមបង្កើតអថេរ `int number = 15;`។ បន្ទាប់មកបង្កើតលក្ខខណ្ឌ if-else បើលេខចែកដាច់នឹង ២ បង្ហាញ `"Even"` ក្រៅពីនេះបង្ហាញ `"Odd"`។'
    },
    language: 'java',
    files: [{
      name: 'Main.java',
      content: `public class Main {\n    public static void main(String[] args) {\n        // សរសេរកូដនៅទីនេះ / Write here\n\n    }\n}`,
      language: 'java'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'Main.java',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasCheck = c.includes('%') && c.includes('if');
        return hasCheck && output.includes('Odd')
          ? { success: true, feedback: 'Perfect Java logic check!' }
          : { success: false, feedback: 'Make sure your code declares number = 15, checks division, and prints "Odd".' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 7. C++ Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const cppLessons: Lesson[] = [
  makeLesson('cpp-1', {
    title: { en: '1. Hello C++ World', kh: '១. ការសរសេរកម្មវិធីក្នុង C++' },
    description: { en: 'Learn standard cout streaming and stream operators.', kh: 'រៀនប្រើប្រាស់ std::cout ដើម្បីបង្ហាញព័ត៌មាន។' },
    instructions: {
      en: `### C++ Templates
Import the iostream header and use cout to stream messages:
\`\`\`cpp
#include <iostream>
int main() {
    std::cout << "Hello" << std::endl;
    return 0;
}
\`\`\``,
      kh: `### ទម្រង់កូដ C++
នាំចូលបណ្ណាល័យ iostream និងប្រើ cout ដើម្បីបង្ហាញអត្ថបទ៖
\`\`\`cpp
#include <iostream>
int main() {
    std::cout << "សួស្តី" << std::endl;
    return 0;
}
\`\`\``
    },
    task: {
      en: 'Modify main block to stream out exactly `"Hello C++ Khmer"`.',
      kh: 'សូមកែសម្រួលដើម្បីបង្ហាញពាក្យ `"Hello C++ Khmer"` ទៅកាន់អេក្រង់។'
    },
    language: 'cpp',
    files: [{
      name: 'main.cpp',
      content: `#include <iostream>\n\nint main() {\n    // កែសម្រួលនៅទីនេះ / Edit here\n    std::cout << "..." << std::endl;\n    return 0;\n}`,
      language: 'cpp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.cpp',
      validationFn: (files, output) => {
        return output.trim() === 'Hello C++ Khmer'
          ? { success: true, feedback: 'Excellent C++ stream!' }
          : { success: false, feedback: 'Ensure output matches exactly "Hello C++ Khmer".' };
      }
    }
  }),
  makeLesson('cpp-2', {
    title: { en: '2. C++ Variables', kh: '២. ការប្រើប្រាស់អថេរក្នុង C++' },
    description: { en: 'Create integer variables and perform arithmetic.', kh: 'រៀនប្រកាសអថេរលេខចំនួនគត់ និងធ្វើប្រមាណវិធី។' },
    instructions: {
      en: `### C++ Variable Logic
Declare and set integer numbers easily:
\`\`\`cpp
int a = 5;
int b = 10;
\`\`\``,
      kh: `### អថេរក្នុង C++
បង្កើតអថេរលេខចំនួនគត់ និងប្រើប្រាស់ស្ទីល static typing ៖
\`\`\`cpp
int a = 5;
int b = 10;
\`\`\``
    },
    task: {
      en: 'Declare integer variables `x` and `y` with values `10` and `20`. Display their multiplied product (`x * y`).',
      kh: 'សូមបង្កើតអថេរ `x` និង `y` ដែលមានតម្លៃ `10` និង `20` រួចបង្ហាញផលគុណរបស់ពួកវា (`x * y`)។'
    },
    language: 'cpp',
    files: [{
      name: 'main.cpp',
      content: `#include <iostream>\n\nint main() {\n    // សរសេរកូដនៅទីនេះ / Write here\n\n    return 0;\n}`,
      language: 'cpp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.cpp',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasMul = c.includes('*');
        return hasMul && output.trim() === '200'
          ? { success: true, feedback: 'Great arithmetic operations in C++!' }
          : { success: false, feedback: 'Ensure variables x=10 and y=20 are declared and printed output is 200.' };
      }
    }
  }),
  makeLesson('cpp-3', {
    title: { en: '3. C++ If-Else Conditionals', kh: '៣. លក្ខខណ្ឌកូដ C++' },
    description: { en: 'Control layout branches using conditional templates.', kh: 'រៀបចំលក្ខខណ្ឌសម្រេចចិត្តដោយប្រើប្រាស់ If-Else ក្នុង C++។' },
    instructions: {
      en: `### C++ Comparisons
Standard logic comparisons map closely to common guidelines:
\`\`\`cpp
if (temperature > 30) {
    std::cout << "Hot";
}
\`\`\``,
      kh: `### ការប្រៀបធៀបក្នុង C++
សរសេរលក្ខខណ្ឌប្រៀបធៀបដូចភាសាដទៃទៀតដែរ៖
\`\`\`cpp
if (temperature > 30) {
    std::cout << "Hot";
}
\`\`\``
    },
    task: {
      en: 'Declare `int temperature = 35;`. Write a condition: if `temperature > 30` output `"Hot"`, else output `"Cool"`.',
      kh: 'សូមបង្កើតអថេរ `int temperature = 35;` រួចសរសេរលក្ខខណ្ឌ បើ temperature > 30 ឱ្យបង្ហាញ `"Hot"` ក្រៅពីនេះបង្ហាញ `"Cool"`។'
    },
    language: 'cpp',
    files: [{
      name: 'main.cpp',
      content: `#include <iostream>\n\nint main() {\n    // សរសេរលក្ខខណ្ឌនៅទីនេះ / Write condition here\n\n    return 0;\n}`,
      language: 'cpp'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.cpp',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasIf = c.includes('if') && c.includes('else');
        return hasIf && output.includes('Hot')
          ? { success: true, feedback: 'Marvelous! Conditional branching works perfectly.' }
          : { success: false, feedback: 'Verify you set temperature = 35 and printed "Hot".' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 8. TypeScript Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const tsLessons: Lesson[] = [
  makeLesson('ts-1', {
    title: { en: '1. Type Annotations', kh: '១. ការកំណត់ប្រភេទតម្លៃ (TypeScript)' },
    description: { en: 'Establish static type annotations for robust compilation.', kh: 'បន្ថែមប្រភេទតម្លៃជាក់លាក់ទៅឱ្យអថេរ JavaScript។' },
    instructions: {
      en: `### Static Typing
TypeScript requires declaring properties with static type identifiers to secure compiler outcomes:
\`\`\`ts
let username: string = "Dara";
\`\`\``,
      kh: `### ប្រព័ន្ធស្ទាទិក
TypeScript ជួយបន្ថែមសុវត្ថិភាពកូដដោយបង្ខំឱ្យកំណត់ប្រភេទតម្លៃអថេរ៖
\`\`\`ts
let username: string = "Dara";
\`\`\``
    },
    task: {
      en: 'Declare a string variable `academy: string = "Khmer Dev";` and print it using `console.log(academy);`.',
      kh: 'សូមបង្កើតអថេរ string មួយឈ្មោះ `academy` កំណត់តម្លៃ `"Khmer Dev"` រួចបង្ហាញវានៅលើកុងសូល។'
    },
    language: 'typescript',
    files: [{
      name: 'main.ts',
      content: `// សរសេរកូដនៅទីនេះ / Write here\n`,
      language: 'typescript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.ts',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasType = /academy\s*:\s*string/i.test(c);
        return hasType && output.includes('Khmer Dev')
          ? { success: true, feedback: 'Excellent TypeScript! Static typing succeeded.' }
          : { success: false, feedback: 'Check if you declared `academy: string = "Khmer Dev";`' };
      }
    }
  }),
  makeLesson('ts-2', {
    title: { en: '2. TS Interfaces', kh: '២. ការប្រើប្រាស់ Interfaces' },
    description: { en: 'Structure clear object shapes.', kh: 'រៀនកំណត់រចនាសម្ព័ន្ធវត្ថុ (Object) ដោយប្រើប្រាស់ Interfaces។' },
    instructions: {
      en: `### TS Interfaces
Define structured templates for objects:
\`\`\`ts
interface Book {
    title: string;
    price: number;
}
\`\`\``,
      kh: `### Interface ក្នុង TypeScript
រចនាទម្រង់គំរូនៃទិន្នន័យវត្ថុ (Objects)៖
\`\`\`ts
interface Book {
    title: string;
    price: number;
}
\`\`\``
    },
    task: {
      en: 'Create an interface named `User` with `id: number` and `name: string`. Then declare `let user: User = { id: 1, name: "សុខា" };` and print `console.log(user.name);`.',
      kh: 'សូមបង្កើត interface ឈ្មោះ `User` ដែលមាន `id: number` និង `name: string`។ រួចបង្កើតអថេរ `user` និងបង្ហាញ `user.name`។'
    },
    language: 'typescript',
    files: [{
      name: 'main.ts',
      content: `// បង្កើត Interface និង អថេរនៅទីនេះ / Write here\n`,
      language: 'typescript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.ts',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasInterface = c.includes('interface User') && c.includes('id') && c.includes('name');
        return hasInterface && output.includes('សុខា')
          ? { success: true, feedback: 'Fantastic! Interfaces structure validated perfectly.' }
          : { success: false, feedback: 'Ensure interface User is declared correctly with id and name, and you print user.name.' };
      }
    }
  }),
  makeLesson('ts-3', {
    title: { en: '3. TS Enums', kh: '៣. ប្រភេទបញ្ជី Enums' },
    description: { en: 'Group related numeric or string constants securely.', kh: 'រៀនប្រើប្រាស់ Enums ដើម្បីចងក្រងសំណុំតម្លៃថេរច្បាស់លាស់។' },
    instructions: {
      en: `### TS Enums
Enums allow developers to define a set of named constants:
\`\`\`ts
enum Direction {
    Up,
    Down
}
\`\`\``,
      kh: `### Enums ក្នុង TS
Enums ជួយប្រមូលផ្តុំទិន្នន័យថេរដែលមានទំនាក់ទំនងគ្នា៖
\`\`\`ts
enum Direction {
    Up,
    Down
}
\`\`\``
    },
    task: {
      en: 'Declare an enum named `Role` with items `Admin`, `User`. Define a variable `myRole` and set it to `Role.Admin`. Print `console.log(myRole);` (which outputs `0`).',
      kh: 'សូមបង្កើត enum ឈ្មោះ `Role` ដែលមាន `Admin` និង `User`។ រួចបង្កើតអថេរ `myRole` ស្មើនឹង `Role.Admin` រួចបង្ហាញវានៅលើ Console។'
    },
    language: 'typescript',
    files: [{
      name: 'main.ts',
      content: `// បង្កើត Enum Role និងអថេរនៅទីនេះ / Write here\n`,
      language: 'typescript'
    }],
    solutionCheck: {
      type: 'console-match',
      targetFile: 'main.ts',
      validationFn: (files, output) => {
        const c = files[0].content;
        const hasEnum = c.includes('enum Role');
        const correct = output.includes('0');
        return hasEnum && correct
          ? { success: true, feedback: 'Spectacular enum structures created!' }
          : { success: false, feedback: 'Verify Role enum declaration and print out Role.Admin.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 9. React.js Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const reactLessons: Lesson[] = [
  makeLesson('react-1', {
    title: { en: '1. React Components', kh: '១. សមាសភាគនៅក្នុង React' },
    description: { en: 'Create reusable UI components with JSX and styling.', kh: 'បង្កើតសមាសភាគ UI ឡើងវិញយ៉ាងលឿនជាមួយ JSX។' },
    instructions: {
      en: `### React Components
Components are self-contained logical boxes rendering responsive markup:
\`\`\`jsx
export default function Card() {
  return <div className="p-4 bg-white rounded-lg shadow-md">Card Content</div>;
}
\`\`\``,
      kh: `### React Component
សមាសភាគ UI ជំនួយការសរសេរកូដ៖
\`\`\`jsx
export default function Card() {
  return <div className="p-4 bg-white rounded-lg shadow-md">មាតិកា</div>;
}
\`\`\``
    },
    task: {
      en: 'Edit `App.jsx` to return a `div` with Tailwind class `"p-6 bg-gradient-to-r from-teal-400 to-emerald-500 text-white shadow-lg rounded-xl text-center text-xl"` containing `"ស្វាគមន៍មកកាន់ React!"`.',
      kh: 'សូមកែសម្រួលសមាសភាគក្នុង `App.jsx` ឱ្យបង្ហាញអក្សរ `"ស្វាគមន៍មកកាន់ React!"` ក្នុង container gradient ពណ៌បៃតងស្អាត។'
    },
    language: 'javascript',
    files: [{
      name: 'App.jsx',
      content: `export default function App() {\n  return (\n    // កែសម្រួលនៅទីនេះ / Edit here\n    <div></div>\n  );\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'App.jsx',
      validationFn: (files) => {
        const c = files[0].content;
        const hasText = c.includes('ស្វាគមន៍មកកាន់ React!');
        const hasTeal = c.includes('from-teal-400');
        const hasEmerald = c.includes('to-emerald-500');
        return hasText && hasTeal && hasEmerald
          ? { success: true, feedback: 'Awesome component visual structures!' }
          : { success: false, feedback: 'Ensure correct Tailwind classes and Khmer spelling.' };
      }
    }
  }),
  makeLesson('react-2', {
    title: { en: '2. React useState Hook', kh: '២. ការប្រើប្រាស់ useState Hook' },
    description: { en: 'Control local states inside interactive modules.', kh: 'គ្រប់គ្រងបំរែបំរួលតម្លៃអន្តរកម្មក្នុង Component។' },
    instructions: {
      en: `### React State
Use useState hooks to monitor changing values and re-render updates instantly:
\`\`\`jsx
import { useState } from 'react';
const [count, setCount] = useState(0);
\`\`\``,
      kh: `### state ក្នុង React
ប្រើប្រាស់ useState ដើម្បីផ្ទុកទិន្នន័យប្រែប្រួល៖
\`\`\`jsx
import { useState } from 'react';
const [count, setCount] = useState(0);
\`\`\``
    },
    task: {
      en: 'Bind an `onClick` parameter to the button to increment `count` by 1. Ensure the button displays `"ចំនួនចុច៖ "` followed by `{count}`.',
      kh: 'សូមបន្ថែម onClick ទៅឱ្យប៊ូតុងដើម្បីបង្កើន count ម្តងមួយ និងបង្ហាញអត្ថបទ `"ចំនួនចុច៖ {count}"`។'
    },
    language: 'javascript',
    files: [{
      name: 'App.jsx',
      content: `import { useState } from 'react';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className="p-8 text-center bg-slate-50">\n      {/* កែសម្រួលប៊ូតុងខាងក្រោម / Edit button below */}\n      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">\n        ចំនួនចុច៖ {count}\n      </button>\n    </div>\n  );\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'App.jsx',
      validationFn: (files) => {
        const c = files[0].content;
        const hasClick = c.includes('onClick') && c.includes('setCount');
        return hasClick
          ? { success: true, feedback: 'Superb! State-bound click listeners are configured.' }
          : { success: false, feedback: 'Please add onClick={() => setCount(count + 1)} inside the button.' };
      }
    }
  }),
  makeLesson('react-3', {
    title: { en: '3. React Mapping Lists', kh: '៣. បង្ហាញបញ្ជីទិន្នន័យ (Lists)' },
    description: { en: 'Render array items dynamically using JSX.', kh: 'រៀនប្រើប្រាស់ map() ដើម្បីបង្ហាញបញ្ជីទិន្នន័យ។' },
    instructions: {
      en: `### Rendering Lists
We render lists in React using standard JavaScript \`.map()\` expression:
\`\`\`jsx
const items = ['A', 'B'];
return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
\`\`\``,
      kh: `### ការបង្ហាញបញ្ជី
យើងប្រើប្រាស់ \`.map()\` ដើម្បីបង្ហាញធាតុជាច្រើនចេញពី array៖
\`\`\`jsx
const items = ['A', 'B'];
return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
\`\`\``
    },
    task: {
      en: 'Implement array map expression inside list container `<ul>` to display each item of `skills` array inside a `<li>` tag.',
      kh: 'សូមសរសេរកូដរៀបចំបកស្រាយទិន្នន័យ array `skills` ដោយប្រើ map() ក្នុង tag `<ul>` ដើម្បីបង្ហាញធាតុនីមួយៗក្នុង tag `<li>`។'
    },
    language: 'javascript',
    files: [{
      name: 'App.jsx',
      content: `export default function App() {\n  const skills = ['React', 'Next.js', 'Tailwind'];\n  return (\n    <div className="p-4">\n      <ul>\n        {/* សរសេរកូដ mapping ទីនេះ / Write mapping here */}\n\n      </ul>\n    </div>\n  );\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'App.jsx',
      validationFn: (files) => {
        const c = files[0].content;
        const hasMap = c.includes('skills.map') && c.includes('<li>');
        return hasMap
          ? { success: true, feedback: 'Fabulous listing elements!' }
          : { success: false, feedback: 'Ensure skills.map is integrated inside the <ul> tags to return <li> elements.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 10. Next.js Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const nextjsLessons: Lesson[] = [
  makeLesson('next-1', {
    title: { en: '1. App Router Page', kh: '១. ការបង្កើតទំព័រក្នុង Next.js' },
    description: { en: 'Learn standard routing inside app folder layouts.', kh: 'ស្វែងយល់ពីរបៀបរៀបចំប្រព័ន្ធលំហូរ Route ក្នុង App Router។' },
    instructions: {
      en: `### Next.js Routing
Next.js structures routes directly from folder names containing \`page.tsx\` scripts.`,
      kh: `### ប្រព័ន្ធ Route Next.js
Next.js កំណត់ផ្លូវតភ្ជាប់ទំព័រដោយស្វ័យប្រវត្តិតាមរយៈថតឯកសារដែលមានឈ្មោះ \`page.tsx\`។`
    },
    task: {
      en: 'Return a simple `<main>` container with exact text `"Next.js in Cambodia"`.',
      kh: 'សូមកំណត់ឱ្យ component ត្រឡប់មកវិញនូវ tag `<main>` ដែលមានពាក្យ `"Next.js in Cambodia"`។'
    },
    language: 'javascript',
    files: [{
      name: 'app/page.tsx',
      content: `export default function Page() {\n  return (\n    <main className="p-8">\n      {/* សរសេរនៅទីនេះ / Write here */}\n\n    </main>\n  );\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'app/page.tsx',
      validationFn: (files) => {
        const c = files[0].content;
        return c.includes('Next.js in Cambodia')
          ? { success: true, feedback: 'Perfect Next.js core page structures!' }
          : { success: false, feedback: 'Ensure you write "Next.js in Cambodia" inside the main container.' };
      }
    }
  }),
  makeLesson('next-2', {
    title: { en: '2. Client vs Server Components', kh: '២. ការប្រើប្រាស់ "use client"' },
    description: { en: 'Enable client behaviors with specific declarations.', kh: 'រៀនប្រើប្រាស់ directive "use client" សម្រាប់ដំណើរការ hooks។' },
    instructions: {
      en: `### Client Directives
To implement state mechanisms (useState, useEffect) in Next.js Server-by-default environment, append the directive at the exact top:
\`\`\`js
"use client";
import { useState } from 'react';
\`\`\``,
      kh: `### បញ្ជា Client
ដើម្បីអាចសរសេរ Hooks (useState, useEffect) ក្នុង Next.js យើងត្រូវបន្ថែមឃ្លានៅបន្ទាត់ដំបូងបង្អស់៖
\`\`\`js
"use client";
import { useState } from 'react';
\`\`\``
    },
    task: {
      en: 'Add the exact `"use client";` string directive at the first line of `Counter.tsx` file to enable the count state.',
      kh: 'សូមបន្ថែមឃ្លា `"use client";` នៅបន្ទាត់ដំបូងបង្អស់នៃឯកសារ `Counter.tsx` ដើម្បីអនុញ្ញាតឱ្យប្រើប្រាស់ count state។'
    },
    language: 'javascript',
    files: [{
      name: 'Counter.tsx',
      content: `// បន្ថែមនៅបន្ទាត់ទី ១ / Add here at line 1\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [clicks, setClicks] = useState(0);\n  return <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>;\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'Counter.tsx',
      validationFn: (files) => {
        const c = files[0].content.trim();
        const hasUseClient = c.startsWith('"use client"') || c.startsWith("'use client'");
        return hasUseClient
          ? { success: true, feedback: 'Perfect! The Client component is activated successfully.' }
          : { success: false, feedback: 'Please add "use client"; on the very first line of Counter.tsx.' };
      }
    }
  }),
  makeLesson('next-3', {
    title: { en: '3. Next.js Navigation', kh: '៣. របៀបប្តូរទំព័រដោយមិនរRefresh' },
    description: { en: 'Link routing safely across SPA views.', kh: 'ប្រើប្រាស់ Link Component ដើម្បីប្តូរទំព័របានរហ័សគ្មានការរអាក់រអួល។' },
    instructions: {
      en: `### Next.js Link
Use next/link module to allow lightning fast transition:
\`\`\`jsx
import Link from 'next/link';
<Link href="/about">About Us</Link>
\`\`\``,
      kh: `### Next.js Link
នាំចូល link module ដើម្បីផ្លាស់ប្តូរទំព័របានយ៉ាងរហ័ស៖
\`\`\`jsx
import Link from 'next/link';
<Link href="/about">អំពីយើង</Link>
\`\`\``
    },
    task: {
      en: 'Complete the JSX block to import `Link` from `"next/link"`, and place a `<Link href="/dashboard">` around text `"ទៅកាន់ Dashboard"`.',
      kh: 'សូមសរសេរកូដនាំចូល `Link` ពី `"next/link"` និងបង្កើត `<Link href="/dashboard">` ជុំវិញពាក្យ `"ទៅកាន់ Dashboard"`។'
    },
    language: 'javascript',
    files: [{
      name: 'Navigation.tsx',
      content: `// នាំចូល Link នៅទីនេះ / Import Link here\n\nexport default function Navigation() {\n  return (\n    <nav>\n      {/* សរសេរ Link នៅទីនេះ / Write Link here */}\n\n    </nav>\n  );\n}`,
      language: 'javascript'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'Navigation.tsx',
      validationFn: (files) => {
        const c = files[0].content;
        const hasImport = c.includes("import Link from 'next/link'") || c.includes('import Link from "next/link"');
        const hasLink = c.includes('<Link href="/dashboard">') && c.includes('ទៅកាន់ Dashboard');
        return hasImport && hasLink
          ? { success: true, feedback: 'Spectacular link navigation setup!' }
          : { success: false, feedback: 'Please import Link and set up the Link container correctly.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 11. Tailwind CSS Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const tailwindLessons: Lesson[] = [
  makeLesson('tailwind-1', {
    title: { en: '1. Flexbox Alignments', kh: '១. ការតម្រឹមជាមួយ Flexbox' },
    description: { en: 'Center webpage components using inline flex utilities.', kh: 'រៀនប្រើប្រាស់ class flex items-center justify-between។' },
    instructions: {
      en: `### Tailwind Layouts
Manage responsive alignments using basic utility classes:
\`\`\`html
<div class="flex justify-between items-center p-4">
\`\`\``,
      kh: `### Layout របស់ Tailwind
គ្រប់គ្រងការតម្រឹមលឿនៗដោយផ្ទាល់លើ HTML class៖
\`\`\`html
<div class="flex justify-between items-center p-4">
\`\`\``
    },
    task: {
      en: 'Add classes `"flex justify-between items-center p-4 bg-emerald-500 text-white"` inside the parent `div` container.',
      kh: 'សូមបន្ថែម class `"flex justify-between items-center p-4 bg-emerald-500 text-white"` ទៅក្នុង parent `div` ខាងក្រោម។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<div class="">\n  <span class="font-bold">Khmer Learning</span>\n  <button class="bg-white text-emerald-500 px-3 py-1 rounded">Login</button>\n</div>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasFlex = c.includes('flex');
        const hasBet = c.includes('justify-between');
        const hasCol = c.includes('bg-emerald-500');
        return hasFlex && hasBet && hasCol
          ? { success: true, feedback: 'Stunning aligned navbar container!' }
          : { success: false, feedback: 'Make sure classes "flex justify-between items-center p-4 bg-emerald-500 text-white" are set.' };
      }
    }
  }),
  makeLesson('tailwind-2', {
    title: { en: '2. Responsive Grid', kh: '២. ប្រព័ន្ធក្រឡា Grid' },
    description: { en: 'Build beautiful multi-column layouts across devices.', kh: 'រៀនរៀបចំប្លង់ជួរឈរប្រែប្រួលតាមទំហំអេក្រង់ទូរស័ព្ទ និងកុំព្យូទ័រ។' },
    instructions: {
      en: `### Tailwind Grid Layouts
Define grids dynamically. E.g. 1 column on mobile, 3 columns on medium screens:
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
\`\`\``,
      kh: `### របៀបប្រើប្រាស់ Grid
រៀបចំប្លង់ជួរឈរប្រែប្រួលតាមទំហំអេក្រង់៖
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
\`\`\``
    },
    task: {
      en: 'Apply classes `"grid grid-cols-1 md:grid-cols-3 gap-6"` to the container div.',
      kh: 'សូមកំណត់ class `"grid grid-cols-1 md:grid-cols-3 gap-6"` ទៅកាន់ div ខាងក្រោម។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<div class="">\n  <div class="bg-gray-100 p-4">Card 1</div>\n  <div class="bg-gray-100 p-4">Card 2</div>\n  <div class="bg-gray-100 p-4">Card 3</div>\n</div>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasGrid = c.includes('grid') && c.includes('grid-cols-1') && c.includes('md:grid-cols-3');
        return hasGrid
          ? { success: true, feedback: 'Brilliant responsive grid layout configuration!' }
          : { success: false, feedback: 'Please add classes "grid grid-cols-1 md:grid-cols-3 gap-6" to the main div.' };
      }
    }
  }),
  makeLesson('tailwind-3', {
    title: { en: '3. Hovers & Transitions', kh: '៣. ផលប៉ះពាល់ Hover' },
    description: { en: 'Make elements interactive with hover animation states.', kh: 'រៀនរចនាចលនាកម្រើកប៊ូតុងនៅពេលដាក់កៅស៊ូ Mouse ពីលើ។' },
    instructions: {
      en: `### Tailwind Transitions
Style interactive buttons cleanly:
\`\`\`html
<button class="transition duration-300 hover:scale-105 hover:bg-black">
\`\`\``,
      kh: `### ចលនាប្រែប្រួលក្នុង Tailwind
រចនាប៊ូតុងឱ្យមានចលនាទន់ភ្លន់៖
\`\`\`html
<button class="transition duration-300 hover:scale-105 hover:bg-black">
\`\`\``
    },
    task: {
      en: 'Apply class classes `"transition-all duration-300 hover:bg-emerald-600 hover:scale-105"` to the button.',
      kh: 'សូមបន្ថែម class `"transition-all duration-300 hover:bg-emerald-600 hover:scale-105"` ទៅលើប៊ូតុងខាងក្រោម។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<button class="px-4 py-2 bg-emerald-500 text-white rounded-lg ">\n  ចុចទីនេះ\n</button>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasTrans = c.includes('transition-all') && c.includes('hover:scale-105') && c.includes('hover:bg-emerald-600');
        return hasTrans
          ? { success: true, feedback: 'Excellent interactive hover animations!' }
          : { success: false, feedback: 'Make sure class has transition-all duration-300 hover:bg-emerald-600 hover:scale-105.' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// 12. Bootstrap Lessons (3 Lessons)
// -----------------------------------------------------------------------------
const bootstrapLessons: Lesson[] = [
  makeLesson('bootstrap-1', {
    title: { en: '1. Navigation & Badges', kh: '១. របាររុករក និងផ្លាកសញ្ញា' },
    description: { en: 'Style buttons with bootstrap badge classes.', kh: 'រៀនបន្ថែមពណ៌ប៊ូតុង និងផ្លាកសញ្ញារបស់ Bootstrap។' },
    instructions: {
      en: `### Bootstrap Buttons
Utilize ready-made responsive layout states:
\`\`\`html
<button class="btn btn-success">Save</button>
\`\`\``,
      kh: `### ប៊ូតុងរបស់ Bootstrap
រចនាប៊ូតុងរហ័សដោយប្រើប្រាស់ class ស្រាប់ៗ៖
\`\`\`html
<button class="btn btn-success">រក្សាទុក</button>
\`\`\``
    },
    task: {
      en: 'Give the button a success color style by adding bootstrap class `"btn btn-success"`.',
      kh: 'សូមរចនាប៊ូតុងឱ្យមានពណ៌បៃតងស្អាតដោយបន្ថែម class `"btn btn-success"`។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<button class="">រក្សាទុក / Save</button>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        return c.includes('btn-success')
          ? { success: true, feedback: 'Perfect bootstrap badges added!' }
          : { success: false, feedback: 'Make sure classes "btn btn-success" are present.' };
      }
    }
  }),
  makeLesson('bootstrap-2', {
    title: { en: '2. Grid columns', kh: '២. ការចែកជួរឈរក្នុង Bootstrap' },
    description: { en: 'Define grid columns utilizing rows and grid systems.', kh: 'ស្វែងយល់ពីរបៀបបែងចែកជួរឈរដោយប្រើ row និង col-md-4។' },
    instructions: {
      en: `### Bootstrap Columns
Nest columns inside a row element using bootstrap col rules:
\`\`\`html
<div class="row">
  <div class="col-md-6">Column 1</div>
</div>
\`\`\``,
      kh: `### ប្រព័ន្ធជួរឈរ Bootstrap
តម្រៀបធាតុចំហៀងគ្នាដោយប្រើ row និង col៖
\`\`\`html
<div class="row">
  <div class="col-md-6">ជួរឈរ ១</div>
</div>
\`\`\``
    },
    task: {
      en: 'Create a row containing three equally-spaced columns by wrapping each column with class `"col-md-4"`.',
      kh: 'សូមបែងចែកជួរឈរជា ៣ ស្មើគ្នា ដោយបន្ថែម class `"col-md-4"` ទៅកាន់ div ទាំង ៣ ខាងក្រោម។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<div class="row">\n  <div class="">ជួរឈរ ១</div>\n  <div class="">ជួរឈរ ២</div>\n  <div class="">ជួរឈរ ៣</div>\n</div>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const count = (c.match(/col-md-4/g) || []).length;
        return count >= 3
          ? { success: true, feedback: 'Stellar grid layout setup!' }
          : { success: false, feedback: 'Ensure each inside div has the class "col-md-4".' };
      }
    }
  }),
  makeLesson('bootstrap-3', {
    title: { en: '3. Bootstrap Cards', kh: '៣. សមាសភាគកាត (Cards)' },
    description: { en: 'Display structured visual cards.', kh: 'រៀបចំកាតបង្ហាញមាតិកា និងរូបភាពដ៏ស្រស់ស្អាត។' },
    instructions: {
      en: `### Bootstrap Cards
Assemble modular boxes with headers, bodies and footers:
\`\`\`html
<div class="card">
  <div class="card-body">Card details</div>
</div>
\`\`\``,
      kh: `### សមាសភាគកាត
បង្កើតប្រអប់ព័ត៌មានយ៉ាងងាយស្រួលជាមួយ class card ៖
\`\`\`html
<div class="card">
  <div class="card-body">ព័ត៌មានលម្អិត</div>
</div>
\`\`\``
    },
    task: {
      en: 'Apply bootstrap styling class `"card"` to parent div, and class `"card-body"` to child div.',
      kh: 'សូមកំណត់ class `"card"` ទៅឱ្យ div ខាងក្រៅ និង class `"card-body"` ទៅឱ្យ div ខាងក្នុង។'
    },
    language: 'html',
    files: [{
      name: 'index.html',
      content: `<div class="">\n  <div class="">\n    <h5 class="card-title">មេរៀនថ្មី</h5>\n    <p class="card-text">រៀនកូដជាមួយគ្នា</p>\n  </div>\n</div>`,
      language: 'html'
    }],
    solutionCheck: {
      type: 'html-contains',
      targetFile: 'index.html',
      validationFn: (files) => {
        const c = files[0].content;
        const hasCard = c.includes('class="card"') || c.includes("class='card'");
        const hasBody = c.includes('class="card-body"') || c.includes("class='card-body'");
        return hasCard && hasBody
          ? { success: true, feedback: 'Excellent bootstrap card structure!' }
          : { success: false, feedback: 'Make sure parent div has "card" class, and nested div has "card-body".' };
      }
    }
  })
];

// -----------------------------------------------------------------------------
// Additional Expanded Lessons (W3Schools / Codecademy style)
// -----------------------------------------------------------------------------
const htmlLesson5 = makeLesson('html-5', {
  title: { en: '5. Forms & Inputs', kh: '៥. ទម្រង់បញ្ចូលទិន្នន័យ (Forms & Inputs)' },
  description: { en: 'Create interactive HTML input forms and buttons.', kh: 'រៀនបង្កើតទម្រង់ទិន្នន័យ (Forms) សម្រាប់ឱ្យអ្នកប្រើប្រាស់វាយបញ្ចូល។' },
  instructions: {
    en: `### HTML Forms
HTML forms are used to collect user input.
* \`<form>\` acts as a container for input fields.
* \`<input>\` is a self-closing tag for input fields (e.g., text, password, submit).
* \`<button>\` defines a clickable button.
\`\`\`html
<form>
  <input type="text" placeholder="Enter name">
  <button>Submit</button>
</form>
\`\`\``,
    kh: `### ទម្រង់បញ្ចូលទិន្នន័យ HTML Forms
យើងប្រើប្រាស់ Forms ដើម្បីទទួលទិន្នន័យពីអ្នកប្រើប្រាស់៖
* \`<form>\` ជាប្រអប់ក្តោបសម្រាប់ធាតុបញ្ចូលព័ត៌មាន។
* \`<input>\` ជា tag (គ្មាន tag បិទ) សម្រាប់បញ្ចូលអត្ថបទ ឬលេខ។
* \`<button>\` ជាប៊ូតុងសម្រាប់ចុចបញ្ជូនទិន្នន័យ។
\`\`\`html
<form>
  <input type="text" placeholder="បញ្ចូលឈ្មោះ">
  <button>បញ្ជូន</button>
</form>
\`\`\``
  },
  task: {
    en: 'Create a `<form>` containing an `<input>` of type `"text"` with placeholder `"បញ្ចូលឈ្មោះរបស់អ្នក"`, and a `<button>` tag with the text `"ផ្ញើទិន្នន័យ"`.',
    kh: 'សូមបង្កើត `<form>` មួយ ដែលមាន `<input>` ប្រភេទ `"text"` មាន placeholder `"បញ្ចូលឈ្មោះរបស់អ្នក"` និងមាន `<button>` ដាក់អក្សរថា `"ផ្ញើទិន្នន័យ"`។'
  },
  language: 'html',
  files: [{
    name: 'index.html',
    content: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- សរសេរ Form នៅទីនេះ / Write Form here -->\n\n</body>\n</html>`,
    language: 'html'
  }],
  solutionCheck: {
    type: 'html-contains',
    targetFile: 'index.html',
    validationFn: (files) => {
      const c = files[0].content;
      const hasForm = /<form>/i.test(c) && /<\/form>/i.test(c);
      const hasInput = /<input\s+[^>]*type=["']text["'][^>]*placeholder=["']បញ្ចូលឈ្មោះរបស់អ្នក["']/i.test(c) || 
                       /<input\s+[^>]*placeholder=["']បញ្ចូលឈ្មោះរបស់អ្នក["'][^>]*type=["']text["']/i.test(c);
      const hasBtn = /<button>[^<]*ផ្ញើទិន្នន័យ[^<]*<\/button>/i.test(c);
      return hasForm && hasInput && hasBtn
        ? { success: true, feedback: 'Incredible form layout! That matches real-world web inputs!' }
        : { success: false, feedback: 'Verify form containment, exact input type="text", placeholder="បញ្ចូលឈ្មោះរបស់អ្នក", and button text="ផ្ញើទិន្នន័យ".' };
    }
  }
});

const cssLesson4 = makeLesson('css-4', {
  title: { en: '4. CSS Flexbox Layout', kh: '៤. របៀបរៀបចំ Flexbox Layout' },
  description: { en: 'Learn to align elements horizontally using Flexbox.', kh: 'រៀបចំទីតាំង និងតម្រឹមធាតុចំហៀងគ្នាដោយប្រើ CSS Flexbox។' },
  instructions: {
    en: `### CSS Flexbox
Flexbox layout makes it easy to align child elements inside a container.
* \`display: flex;\` turns the container into a flex container.
* \`justify-content: space-around;\` distributes child elements with equal space around them.
\`\`\`css
.container {
  display: flex;
  justify-content: space-around;
}
\`\`\``,
    kh: `### CSS Flexbox Layout
Flexbox ជួយរៀបចំប្លង់ធាតុឱ្យតម្រៀបគ្នាបានយ៉ាងងាយស្រួល និងរហ័ស៖
* \`display: flex;\` កំណត់ប្រអប់ខាងក្រៅជា flexbox container។
* \`justify-content: space-around;\` បែងចែកគម្លាតស្មើៗគ្នានៅជុំវិញធាតុខាងក្នុង។
\`\`\`css
.container {
  display: flex;
  justify-content: space-around;
}
\`\`\``
  },
  task: {
    en: 'Style the `.flex-container` class to have `display: flex;` and `justify-content: space-around;` to align the items.',
    kh: 'សូមរចនា class `.flex-container` ឱ្យមាន `display: flex;` និង `justify-content: space-around;` ដើម្បីតម្រៀបធាតុខាងក្នុង។'
  },
  language: 'html',
  files: [{
    name: 'style.html',
    content: `<style>\n.flex-container {\n  /* រចនា Flexbox នៅទីនេះ / Style Flexbox here */\n\n}\n</style>\n<div class="flex-container">\n  <div style="background: #ef4444; color: white; padding: 10px;">ប្រអប់ ១</div>\n  <div style="background: #3b82f6; color: white; padding: 10px;">ប្រអប់ ២</div>\n</div>`,
    language: 'html'
  }],
  solutionCheck: {
    type: 'html-contains',
    targetFile: 'style.html',
    validationFn: (files) => {
      const c = files[0].content;
      const hasFlex = /display\s*:\s*flex\s*;/i.test(c);
      const hasSpace = /justify-content\s*:\s*space-around\s*;/i.test(c);
      return hasFlex && hasSpace
        ? { success: true, feedback: 'Superb CSS Flexbox alignment! Layout behaves wonderfully.' }
        : { success: false, feedback: 'Verify flex-container rules: display: flex; and justify-content: space-around;' };
    }
  }
});

const jsLesson5 = makeLesson('js-5', {
  title: { en: '5. Arrays & Push', kh: '៥. វិធីសាស្ត្របញ្ជីទិន្នន័យ (Arrays & Push)' },
  description: { en: 'Declare arrays and append items dynamically.', kh: 'រៀនបង្កើតបញ្ជីទិន្នន័យ Arrays និងវិធីបន្ថែមធាតុទៅក្នុងបញ្ជី។' },
  instructions: {
    en: `### JavaScript Arrays
Arrays store a list of multiple values inside a single variable:
\`\`\`js
let fruits = ['Mango', 'Banana'];
fruits.push('Orange'); // adds to the end
console.log(fruits);
\`\`\``,
    kh: `### បញ្ជីទិន្នន័យ JavaScript Arrays
Arrays ប្រើដើម្បីរក្សាទុកសំណុំព័ត៌មានជាច្រើនក្នុងអថេរតែមួយ៖
\`\`\`js
let fruits = ['ស្វាយ', 'ចេក'];
fruits.push('ក្រូច'); // បន្ថែមទៅខាងចុងបញ្ជី
console.log(fruits);
\`\`\``
  },
  task: {
    en: 'Declare an array `let scores = [80, 90, 85];`. Push a new score `95` into it. Then output the array using `console.log(scores);`.',
    kh: 'សូមបង្កើតអថេរ array `let scores = [80, 90, 85];` រួចប្រើប្រាស់ scores.push(95); ដើម្បីបន្ថែមលេខ ៩៥ ទៅចុងបញ្ជី រួចបង្ហាញវាដោយប្រើ `console.log(scores);`។'
  },
  language: 'javascript',
  files: [{
    name: 'script.js',
    content: `// សរសេរកូដនៅទីនេះ / Write here\n`,
    language: 'javascript'
  }],
  solutionCheck: {
    type: 'console-match',
    targetFile: 'script.js',
    validationFn: (files, output) => {
      const c = files[0].content;
      const hasPush = c.includes('push(95)');
      const correctLog = output.includes('80') && output.includes('90') && output.includes('85') && output.includes('95');
      return hasPush && correctLog
        ? { success: true, feedback: 'Excellent array operations! Scores array is modified perfectly.' }
        : { success: false, feedback: 'Make sure let scores = [80, 90, 85];, you push 95, and you call console.log(scores);' };
    }
  }
});

const pythonLesson5 = makeLesson('python-5', {
  title: { en: '5. Python Dictionaries', kh: '៥. វចនានុក្រម Dictionaries' },
  description: { en: 'Store data in key-value format in Python.', kh: 'រៀនរក្សាទុកទិន្នន័យជាប្រភេទ សោ-តម្លៃ (Key-Value) ក្នុងភាសា Python។' },
  instructions: {
    en: `### Python Dictionaries
Dictionaries store data values in key:value pairs inside curly braces:
\`\`\`python
user = {
    "name": "Seyha",
    "role": "editor"
}
print(user["name"])
\`\`\``,
    kh: `### វចនានុក្រម Python (Dictionaries)
Dictionaries ប្រើសម្រាប់រក្សាទុកទិន្នន័យជាគូ សោ និងតម្លៃ (Key-Value)៖
\`\`\`python
user = {
    "name": "Seyha",
    "role": "editor"
}
print(user["name"])
\`\`\``
  },
  task: {
    en: 'Create a dictionary named `user` with keys `"name": "សីហា"` and `"role": "admin"`. Print the name value using `print(user["name"])`.',
    kh: 'សូមបង្កើត dictionary ឈ្មោះ `user` ដែលមាន `"name": "សីហា"` និង `"role": "admin"`។ រួចបង្ហាញតម្លៃឈ្មោះដោយប្រើ `print(user["name"])`។'
  },
  language: 'python',
  files: [{
    name: 'main.py',
    content: `# បង្កើត dictionary និងបង្ហាញនៅទីនេះ / Write here\n`,
    language: 'python'
  }],
  solutionCheck: {
    type: 'console-match',
    targetFile: 'main.py',
    validationFn: (files, output) => {
      const c = files[0].content;
      const hasName = c.includes('name') && c.includes('សីហា');
      const hasRole = c.includes('role') && c.includes('admin');
      const printed = output.trim() === 'សីហា';
      return hasName && hasRole && printed
        ? { success: true, feedback: 'Perfect Python dictionary retrieval!' }
        : { success: false, feedback: 'Declare user = {"name": "សីហា", "role": "admin"} and call print(user["name"]).' };
    }
  }
});

// Push the new lessons into the arrays
htmlLessons.push(htmlLesson5);
cssLessons.push(cssLesson4);
jsLessons.push(jsLesson5);
pythonLessons.push(pythonLesson5);

// -----------------------------------------------------------------------------
// Curated 5 Courses
// -----------------------------------------------------------------------------
export const courses: Course[] = [
  {
    id: 'course-html-css',
    title: {
      en: 'HTML & CSS Fundamentals',
      kh: 'មូលដ្ឋានគ្រឹះ HTML និង CSS'
    },
    description: {
      en: 'Master building and styling stunning responsive websites from scratch, following step-by-step interactive structures.',
      kh: 'គ្រោងឆ្អឹងនិងការរចនានៃការអភិវឌ្ឍគេហទំព័រ។ បង្កើតនិងរចនាគេហទំព័រដ៏ស្រស់ស្អាតដោយគ្មានមូលដ្ឋានសោះ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    duration: '6 hours',
    durationKh: '៦ ម៉ោង',
    icon: 'layout',
    lessons: [htmlLessons[0], htmlLessons[1], htmlLessons[2], htmlLessons[3], htmlLessons[4], cssLessons[0], cssLessons[1], cssLessons[2], cssLessons[3]]
  },
  {
    id: 'course-js-essentials',
    title: {
      en: 'JavaScript Essentials',
      kh: 'ភាសា JavaScript សំខាន់ៗ'
    },
    description: {
      en: 'Bring your sites to life! Add logic, variables, math, branching conditionals, and loops.',
      kh: 'ធ្វើឱ្យគេហទំព័ររបស់អ្នកមានជីវិត! បន្ថែមតក្កវិទ្យា អថេរ ក្បួនដោះស្រាយ និងសកម្មភាពអន្តរកម្មផ្សេងៗ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    duration: '8 hours',
    durationKh: '៨ ម៉ោង',
    icon: 'code-2',
    lessons: [jsLessons[0], jsLessons[1], jsLessons[2], jsLessons[3], jsLessons[4]]
  },
  {
    id: 'course-react-tailwind',
    title: {
      en: 'React.js & Tailwind CSS',
      kh: 'ការរៀន React.js និង Tailwind CSS'
    },
    description: {
      en: 'Build high-performance web pages using reusable stateful components and ultra-fast styling.',
      kh: 'សាងសង់ផ្ទាំងកម្មវិធីទំនើបជាមួយបណ្ណាល័យ UI ពេញនិយមបំផុតរបស់ពិភពលោក និងការរចនាបែប Tailwind CSS។'
    },
    difficulty: 'Intermediate',
    difficultyKh: 'កម្រិតមធ្យម',
    duration: '10 hours',
    durationKh: '១០ ម៉ោង',
    icon: 'atom',
    lessons: [reactLessons[0], reactLessons[1], reactLessons[2], tailwindLessons[0], tailwindLessons[1], tailwindLessons[2]]
  },
  {
    id: 'course-python-beginners',
    title: {
      en: 'Python for Beginners',
      kh: 'ភាសា Python សម្រាប់អ្នកចាប់ផ្តើម'
    },
    description: {
      en: 'Learn to code using Python. Discover loops, algorithms, variables, and automated conditionals.',
      kh: 'ចាប់ផ្តើមសរសេរកូដជាមួយ Python។ រៀនពីរបៀបគិតបែបឡូហ្សិក វាក្យសព្ទ និងការបង្កើតស្គ្រីបស្វ័យប្រវត្ត។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    duration: '5 hours',
    durationKh: '៥ ម៉ោង',
    icon: 'terminal',
    lessons: [pythonLessons[0], pythonLessons[1], pythonLessons[2], pythonLessons[3], pythonLessons[4]]
  },
  {
    id: 'course-csharp-fundamentals',
    title: {
      en: 'C# for Beginners',
      kh: 'ភាសា C# សម្រាប់អ្នកចាប់ផ្តើម'
    },
    description: {
      en: 'Master Microsoft C# syntax to develop desktop, server, game, and cloud applications.',
      kh: 'រៀនភាសា C# របស់ក្រុមហ៊ុន Microsoft ដើម្បីអភិវឌ្ឍកម្មវិធីគេហទំព័រ កុំព្យូទ័រ និងហ្គេមអន្តរកម្មផ្សេងៗ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    duration: '7 hours',
    durationKh: '៧ ម៉ោង',
    icon: 'hash',
    lessons: [csharpLessons[0], csharpLessons[1], csharpLessons[2]]
  }
];

// -----------------------------------------------------------------------------
// Complete Learning Paths
// -----------------------------------------------------------------------------
export const learningPaths: LearningPath[] = [
  {
    id: 'path-html',
    name: 'HTML',
    icon: 'html',
    category: 'languages',
    description: {
      en: 'Learn HyperText Markup Language, the structural cornerstone of every website on the internet.',
      kh: 'រៀនភាសា HTML ដែលជាគ្រោងឆ្អឹងសំណង់ស្នូលនៃរាល់គេហទំព័រទាំងអស់នៅលើប្រព័ន្ធអ៊ីនធឺណិត។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    recommended: true,
    lessons: [htmlLessons[0], htmlLessons[1], htmlLessons[2], htmlLessons[3], htmlLessons[4]]
  },
  {
    id: 'path-css',
    name: 'CSS',
    icon: 'css',
    category: 'languages',
    description: {
      en: 'Style your web documents. Master typography, page colors, layouts, margins, paddings and borders.',
      kh: 'រចនាគេហទំព័ររបស់អ្នកឱ្យមានសោភ័ណភាព។ ស្ទាត់ជំនាញផ្នែកអក្សរ ពណ៌ ប្លង់តម្រឹម និងគម្លាតផ្សេងៗ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    recommended: true,
    lessons: [cssLessons[0], cssLessons[1], cssLessons[2], cssLessons[3]]
  },
  {
    id: 'path-javascript',
    name: 'JavaScript',
    icon: 'js',
    category: 'languages',
    description: {
      en: 'Add dynamic, interactive programming behaviors, conditions, arithmetic, loops, and page logics.',
      kh: 'បន្ថែមដំណើរការប្រែប្រួល លក្ខខណ្ឌ ល្បែងតក្កវិទ្យា វិធីសាស្ត្រគណនា និងរចនាសម្ព័ន្ធវិលជុំទៅកាន់ទំព័រ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    lessons: [jsLessons[0], jsLessons[1], jsLessons[2], jsLessons[3], jsLessons[4]]
  },
  {
    id: 'path-python',
    name: 'Python',
    icon: 'python',
    category: 'languages',
    description: {
      en: 'An elegant, high-level, human-readable coding syntax that serves as the gold standard for Artificial Intelligence.',
      kh: 'ភាសាសរសេរកូដដែលស្រស់ស្អាត ងាយយល់ និងជាភាសាគោលដ៏សំខាន់សម្រាប់ AI និងការវិភាគទិន្នន័យ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    lessons: [pythonLessons[0], pythonLessons[1], pythonLessons[2], pythonLessons[3], pythonLessons[4]]
  },
  {
    id: 'path-java',
    name: 'Java',
    icon: 'java',
    category: 'languages',
    description: {
      en: 'Write once, run anywhere. Secure and robust enterprise server software, Android apps, and databases.',
      kh: 'សរសេរតែម្តង ដំណើរការគ្រប់ទីកន្លែង។ ភាសាដែលមានសុវត្ថិភាពសម្រាប់ប្រព័ន្ធធំៗ កម្មវិធី Android និងប្រព័ន្ធទិន្នន័យ។'
    },
    difficulty: 'Intermediate',
    difficultyKh: 'កម្រិតមធ្យម',
    lessons: [javaLessons[0], javaLessons[1], javaLessons[2]]
  },
  {
    id: 'path-cpp',
    name: 'C / C++',
    icon: 'cpp',
    category: 'languages',
    description: {
      en: 'The industry-standard high performance compilation systems used to build operating systems, engines, and compilers.',
      kh: 'ភាសាដែលមានល្បឿនលឿនកម្រិតខ្ពស់សម្រាប់ការសរសេរប្រព័ន្ធប្រតិបត្តិការ ម៉ាស៊ីនហ្គេម និងកម្មវិធីធំៗ។'
    },
    difficulty: 'Advanced',
    difficultyKh: 'កម្រិតខ្ពស់',
    lessons: [cppLessons[0], cppLessons[1], cppLessons[2]]
  },
  {
    id: 'path-csharp',
    name: 'C#',
    icon: 'csharp',
    category: 'languages',
    description: {
      en: 'Power interactive game development with Unity, robust back-ends, and powerful desktop application engines.',
      kh: 'ភាសាសម្បូរបែបសម្រាប់បង្កើតហ្គេមក្នុងកម្មវិធី Unity ប្រព័ន្ធម៉ាស៊ីនបម្រើ និងកម្មវិធីកុំព្យូទ័រ។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    lessons: [csharpLessons[0], csharpLessons[1], csharpLessons[2]]
  },
  {
    id: 'path-typescript',
    name: 'TypeScript',
    icon: 'typescript',
    category: 'languages',
    description: {
      en: 'A typed superset of JavaScript that compiles to plain JavaScript, providing industry-grade refactoring stability.',
      kh: 'ភាសាបន្ថែមលើ JavaScript ដោយមានការកំណត់ប្រភេទតម្លៃច្បាស់លាស់ ជួយឱ្យកូដមានរបៀបរៀបរយ។'
    },
    difficulty: 'Intermediate',
    difficultyKh: 'កម្រិតមធ្យម',
    lessons: [tsLessons[0], tsLessons[1], tsLessons[2]]
  },
  {
    id: 'path-react',
    name: 'React.js',
    icon: 'react',
    category: 'frameworks',
    description: {
      en: 'Master building reusable component state machines and client-side single page web structures.',
      kh: 'រៀនបង្កើតសមាសភាគដែលអាចប្រើឡើងវិញបាន និងការគ្រប់គ្រង state នៃគេហទំព័រទោល (SPA)។'
    },
    difficulty: 'Intermediate',
    difficultyKh: 'កម្រិតមធ្យម',
    lessons: [reactLessons[0], reactLessons[1], reactLessons[2]]
  },
  {
    id: 'path-nextjs',
    name: 'Next.js',
    icon: 'nextjs',
    category: 'frameworks',
    description: {
      en: 'Learn server-side rendering, API optimization routes, static file generation, and optimized enterprise routing.',
      kh: 'រៀនពីរបៀបដំណើរការកូដនៅលើម៉ាស៊ីនមេ (Server-Side Rendering) ផ្លូវ API និងការបង្កើនប្រសិទ្ធភាពគេហទំព័រ។'
    },
    difficulty: 'Intermediate',
    difficultyKh: 'កម្រិតមធ្យម',
    lessons: [nextjsLessons[0], nextjsLessons[1], nextjsLessons[2]]
  },
  {
    id: 'path-tailwind',
    name: 'Tailwind CSS',
    icon: 'tailwind',
    category: 'frameworks',
    description: {
      en: 'A utility-first CSS framework for rapid modern element building and styling directly within your HTML code.',
      kh: 'បណ្ណាល័យជំនួយសរសេរ CSS បានយ៉ាងលឿនដោយផ្ទាល់នៅក្នុងឯកសារ HTML ដោយមិនបាច់បង្កើតឯកសារ CSS ផ្សេង។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    lessons: [tailwindLessons[0], tailwindLessons[1], tailwindLessons[2]]
  },
  {
    id: 'path-bootstrap',
    name: 'Bootstrap',
    icon: 'bootstrap',
    category: 'frameworks',
    description: {
      en: 'The classic HTML and CSS responsive framework featuring robust structural margins and layouts.',
      kh: 'បណ្ណាល័យបុរាណដែលជួយឱ្យគេហទំព័ររបស់អ្នកប្រែប្រួលរាងតាមអេក្រង់ទូរស័ព្ទ និងកុំព្យូទ័របានយ៉ាងលឿន។'
    },
    difficulty: 'Beginner',
    difficultyKh: 'កម្រិតដំបូង',
    lessons: [bootstrapLessons[0], bootstrapLessons[1], bootstrapLessons[2]]
  }
];
