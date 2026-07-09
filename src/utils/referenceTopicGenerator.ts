import { ReferenceTopic } from './referenceData';
import { 
  getCppTopic, 
  getCsharpTopic, 
  getPhpTopic, 
  getJavaTopic, 
  getBootstrapTopic, 
  getJqueryTopic 
} from './newTracksTopicGenerator';
import {
  getAngularTopic,
  getSqlTopic,
  getMySqlTopic,
  getVueTopic
} from './fourMoreTracksGenerator';

export interface SidebarSection {
  sectionLabel: string;
  links: string[];
}

export const cppSidebarItems = [
  "C++ Home", "C++ Intro", "C++ Get Started", "C++ Syntax", "C++ Output", "C++ Comments", 
  "C++ Variables", "C++ User Input", "C++ Data Types", "C++ Operators", "C++ Strings", 
  "C++ Math", "C++ Booleans", "C++ If...Else", "C++ Switch", "C++ While Loop", "C++ For Loop", 
  "C++ Break/Continue", "C++ Arrays", "C++ Structures", "C++ Enums", "C++ References", 
  "C++ Pointers", "C++ Memory Mgmt.",
  "C++ Functions", "C++ Function Parameters", "C++ Function Overloading", "C++ Scope",
  "C++ OOP", "C++ Classes/Objects", "C++ Class Methods", "C++ Constructors", "C++ Access Specifiers", 
  "C++ Encapsulation", "C++ Friend Functions", "C++ Inheritance", "C++ Polymorphism", "C++ Templates", 
  "C++ Files", "C++ Date"
];

export const csharpSidebarItems = [
  "C# Home", "C# Intro", "C# Get Started", "C# Syntax", "C# Output", "C# Comments", 
  "C# Variables", "C# Data Types", "C# Type Casting", "C# User Input", "C# Operators", 
  "C# Math", "C# Strings", "C# Booleans", "C# If...Else", "C# Switch", "C# While Loop", 
  "C# For Loop", "C# Break/Continue", "C# Arrays",
  "C# Methods", "C# Method Parameters", "C# Method Overloading",
  "C# OOP", "C# Classes/Objects", "C# Class Members"
];

export const phpSidebarItems = [
  "PHP Home", "PHP Intro", "PHP Install", "PHP Syntax", "PHP Comments", "PHP Variables", 
  "PHP Echo / Print", "PHP Data Types", "PHP Strings", "PHP Numbers", "PHP Casting", 
  "PHP Math", "PHP Constants", "PHP Magic Constants", "PHP Operators", "PHP If...Else...Elseif", 
  "PHP Switch", "PHP Match", "PHP Loops", "PHP Functions", "PHP Arrays", "PHP Superglobals", 
  "PHP RegEx", "PHP RegEx Functions"
];

export const javaSidebarItems = [
  "Java Home", "Java Intro", "Java Get Started", "Java Syntax", "Java Output", "Java Comments", 
  "Java Variables", "Java Data Types", "Java Type Casting", "Java Operators", "Java Strings", 
  "Java Math", "Java Booleans", "Java If...Else", "Java Switch", "Java While Loop", "Java For Loop", 
  "Java Break/Continue", "Java Arrays",
  "Java Methods", "Java Method Challenge", "Java Method Parameters", "Java Method Overloading", 
  "Java Scope", "Java Recursion",
  "Java OOP", "Java Classes/Objects", "Java Class Attributes", "Java Class Methods", "Java Class Challenge", 
  "Java Constructors", "Java this Keyword", "Java Modifiers", "Java Encapsulation", "Java Packages / API", 
  "Java Inheritance", "Java Polymorphism", "Java super Keyword", "Java Inner Classes", "Java Abstraction", 
  "Java Interface", "Java Anonymous", "Java Enum", "Java User Input", "Java Date"
];

export const bootstrapSidebarItems = [
  "BS5 Home", "BS5 Get Started", "BS5 Containers", "BS5 Grid Basic", "BS5 Typography", 
  "BS5 Colors", "BS5 Tables", "BS5 Images", "BS5 Jumbotron", "BS5 Alerts", "BS5 Buttons", 
  "BS5 Button Groups", "BS5 Badges", "BS5 Progress Bars", "BS5 Spinners", "BS5 Pagination", 
  "BS5 List Groups", "BS5 Cards", "BS5 Dropdowns", "BS5 Collapse", "BS5 Navs", "BS5 Navbar", 
  "BS5 Carousel", "BS5 Modal", "BS5 Tooltip", "BS5 Popover", "BS5 Toast", "BS5 Scrollspy", 
  "BS5 Offcanvas", "BS5 Utilities"
];

export const jquerySidebarItems = [
  "jQuery Home", "jQuery Intro", "jQuery Get Started", "jQuery Syntax", "jQuery Selectors", "jQuery Events",
  "jQuery Hide/Show", "jQuery Fade", "jQuery Slide", "jQuery Animate", "jQuery stop()", "jQuery Callback", "jQuery Chaining",
  "jQuery Get", "jQuery Set", "jQuery Add", "jQuery Remove", "jQuery CSS Classes", "jQuery css()", "jQuery Dimensions",
  "jQuery Traversing", "jQuery Ancestors", "jQuery Descendants", "jQuery Siblings", "jQuery Filtering"
];

export const angularSidebarItems = [
  "Angular Home", "Angular Intro", "Angular Get Started", "Angular First App", "Angular Templates", "Angular Components", "Angular Data Binding", "Angular Directives", "Angular Events", "Angular Conditional", "Angular Lists", "Angular Forms", "Angular Router", "Angular Services & DI", "Angular HTTP Client", "Angular Pipes", "Angular Lifecycle Hooks", "Angular Styling"
];

export const sqlSidebarItems = [
  "SQL Home", "SQL Intro", "SQL Syntax", "SQL Select", "SQL Select Distinct", "SQL Where", "SQL Order By", "SQL And", "SQL Or", "SQL Not", "SQL Insert Into", "SQL Null Values", "SQL Update", "SQL Delete", "SQL Select Top", "SQL Aggregate Functions", "SQL Min()", "SQL Max()", "SQL Count()", "SQL Sum()", "SQL Avg()", "SQL Like", "SQL Wildcards", "SQL In", "SQL Between", "SQL Aliases", "SQL Joins", "SQL Inner Join", "SQL Left Join", "SQL Right Join", "SQL Full Join", "SQL Self Join", "SQL Union", "SQL Union All", "SQL Group By", "SQL Having", "SQL Exists", "SQL Any", "SQL All", "SQL Select Into", "SQL Insert Into Select", "SQL Case", "SQL Null Functions", "SQL Stored Procedures", "SQL Comments", "SQL Operators",
  "SQL Create DB", "SQL Drop DB", "SQL Backup DB", "SQL Create Table", "SQL Drop Table", "SQL Alter Table", "SQL Constraints", "SQL Not Null", "SQL Unique", "SQL Primary Key", "SQL Foreign Key", "SQL Check", "SQL Default", "SQL Create Index", "SQL Auto Increment", "SQL Dates", "SQL Views", "SQL Injection", "SQL Parameters", "SQL Prepared Statements", "SQL Hosting",
  "SQL Certificate",
  "SQL Data Types", "SQL Keywords Reference", "SQL Operators Reference"
];

export const mysqlSidebarItems = [
  "MySQL Home", "MySQL Intro", "MySQL RDBMS",
  "MySQL SQL", "MySQL SELECT", "MySQL SELECT DISTINCT", "MySQL WHERE", "MySQL ORDER BY", "MySQL AND", "MySQL OR", "MySQL NOT", "MySQL INSERT INTO", "MySQL NULL Values", "MySQL UPDATE", "MySQL DELETE", "MySQL LIMIT", "MySQL Aggregate Functions", "MySQL MIN()", "MySQL MAX()", "MySQL COUNT()", "MySQL SUM()", "MySQL AVG()", "MySQL LIKE", "MySQL Wildcards", "MySQL IN", "MySQL BETWEEN", "MySQL Aliases", "MySQL Joins", "MySQL Inner Join", "MySQL Left Join", "MySQL Right Join", "MySQL Union", "MySQL Group By", "MySQL Having", "MySQL Exists", "MySQL Any/All", "MySQL Select Into", "MySQL Insert Into Select", "MySQL Case", "MySQL Null Functions", "MySQL Stored Procedures", "MySQL Comments", "MySQL Operators"
];

export const vueSidebarItems = [
  "Vue Home", "Vue Intro", "Vue Directives", "Vue v-bind", "Vue v-if", "Vue v-show", "Vue v-for", "Vue Events", "Vue v-on", "Vue Methods", "Vue Event Modifiers", "Vue Forms", "Vue v-model", "Vue CSS Binding", "Vue Computed Properties", "Vue Watchers", "Vue Templates",
  "Vue Why, How and Setup", "Vue First SFC Page", "Vue Components", "Vue Props", "Vue v-for Components", "Vue $emit()", "Vue Fallthrough Attributes", "Vue Scoped Styling", "Vue Local Components", "Vue Slots", "Vue Scoped Slots", "Vue Dynamic Components", "Vue Teleport", "Vue HTTP Request", "Vue Template Refs", "Vue Lifecycle Hooks", "Vue Provide/Inject", "Vue Routing", "Vue Form Inputs", "Vue Animations", "Vue Animations with v-for", "Vue Build", "Vue Composition API"
];

export const htmlSidebarItems = [
  "HTML HOME", "HTML Introduction", "HTML Editors", "HTML Basic", "HTML Elements", 
  "HTML Attributes", "HTML Headings", "HTML Paragraphs", "HTML Styles", "HTML Formatting", 
  "HTML Quotations", "HTML Comments", "HTML Colors", "HTML CSS", "HTML Links", 
  "HTML Images", "HTML Project", "HTML Favicon", "HTML Page Title", "HTML Tables", 
  "HTML Lists", "HTML Block & Inline", "HTML Div", "HTML Classes", "HTML Id", "HTML Buttons",
  "HTML Iframes", "HTML JavaScript", "HTML File Paths"
];

export const cssSidebarItems = [
  "CSS HOME", "CSS Introduction", "CSS Syntax", "CSS Selectors", "CSS How To", 
  "CSS Comments", "CSS Errors", "CSS Colors", "CSS Backgrounds", "CSS Borders", 
  "CSS Margins", "CSS Padding", "CSS Height / Width", "CSS Box Model", "CSS Outline", 
  "CSS Text", "CSS Fonts", "CSS Icons", "CSS Links", "CSS Lists", "CSS Tables", 
  "CSS Display", "CSS Max-width", "CSS Position", "CSS Position Offsets", "CSS Z-index", 
  "CSS Overflow", "CSS Float", "CSS Inline-block"
];

export const jsSidebarItems = [
  "JS Home", "JS Introduction", "JS Where To", "JS Output", "JS Syntax", 
  "JS Operators", "JS If Conditions", "JS Loops", "JS Strings", "JS Numbers", 
  "JS Functions", "JS Objects", "JS Scope", "JS Dates", "JS Temporal", 
  "JS Arrays", "JS Sets", "JS Maps", "JS Iterations", "JS Math", 
  "JS RegExp", "JS Data Types", "JS Errors", "JS Debugging", "JS Style Guide", 
  "JS Reference", "JS Projects", "JS Versions", "JS HTML DOM"
];

export const pythonSidebarItems = [
  "Python HOME", "Python Intro", "Python Get Started", "Python Syntax", "Python Output", 
  "Python Comments", "Python Variables", "Python Data Types", "Python Numbers", "Python Casting", 
  "Python Strings", "Python Booleans", "Python Operators", "Python Lists", "Python Tuples", 
  "Python Sets", "Python Dictionaries", "Python If...Else", "Python Match", "Python While Loops", 
  "Python For Loops", "Python Functions", "Python Range", "Python Arrays", "Python Iterators", 
  "Python Modules", "Python Dates", "Python Math", "Python JSON"
];

export const reactSidebarItems = [
  "React Home", "React Intro", "React Get Started", "React First App", "React Render HTML", 
  "React Upgrade", "React ES6", "React JSX Intro", "React JSX Expressions", "React JSX Attributes", 
  "React JSX If Statements", "React Components", "React Class", "React Props", "React Props Destructuring", 
  "React Props Children", "React Events", "React Conditionals", "React Lists", "React Forms", 
  "React Forms Submit", "React Textarea", "React Select", "React Multiple Inputs", "React Checkbox", 
  "React Radio", "React Portals", "React Suspense"
];

export const tsSidebarItems = [
  "TS HOME", "TS Introduction", "TS Get Started", "TS Simple Types", "TS Explicit & Inference", 
  "TS Special Types", "TS Arrays", "TS Tuples", "TS Object Types", "TS Enums", 
  "TS Aliases & Interfaces", "TS Union Types", "TS Functions", "TS Casting", "TS Classes", 
  "TS Basic Generics", "TS Utility Types", "TS Keyof", "TS Null", "TS Definitely Typed", 
  "TS 5 Updates", "TS Configuration", "TS with Node.js", "TS with React", "TS Tooling", 
  "TS Advanced Types", "TS Type Guards", "TS Conditional Types", "TS Mapped Types"
];

export function getSidebarItems(langId: string): string[] {
  switch (langId) {
    case 'html': return htmlSidebarItems;
    case 'css': return cssSidebarItems;
    case 'js': return jsSidebarItems;
    case 'python': return pythonSidebarItems;
    case 'react': return reactSidebarItems;
    case 'typescript': return tsSidebarItems;
    case 'cpp': return cppSidebarItems;
    case 'csharp': return csharpSidebarItems;
    case 'php': return phpSidebarItems;
    case 'java': return javaSidebarItems;
    case 'bootstrap5': return bootstrapSidebarItems;
    case 'jquery': return jquerySidebarItems;
    case 'angular': return angularSidebarItems;
    case 'sql': return sqlSidebarItems;
    case 'mysql': return mysqlSidebarItems;
    case 'vue': return vueSidebarItems;
    default: return htmlSidebarItems;
  }
}

export function getSidebarSections(langId: string): SidebarSection[] {
  switch (langId) {
    case 'html':
      return [{ sectionLabel: 'HTML TUTORIAL', links: htmlSidebarItems }];
    case 'css':
      return [{ sectionLabel: 'CSS TUTORIAL', links: cssSidebarItems }];
    case 'js':
      return [{ sectionLabel: 'JS TUTORIAL', links: jsSidebarItems }];
    case 'python':
      return [{ sectionLabel: 'PYTHON TUTORIAL', links: pythonSidebarItems }];
    case 'react':
      return [{ sectionLabel: 'REACT TUTORIAL', links: reactSidebarItems }];
    case 'typescript':
      return [{ sectionLabel: 'TYPESCRIPT TUTORIAL', links: tsSidebarItems }];
    case 'cpp':
      return [
        {
          sectionLabel: 'C++ TUTORIAL',
          links: [
            "C++ Home", "C++ Intro", "C++ Get Started", "C++ Syntax", "C++ Output", "C++ Comments", 
            "C++ Variables", "C++ User Input", "C++ Data Types", "C++ Operators", "C++ Strings", 
            "C++ Math", "C++ Booleans", "C++ If...Else", "C++ Switch", "C++ While Loop", "C++ For Loop", 
            "C++ Break/Continue", "C++ Arrays", "C++ Structures", "C++ Enums", "C++ References", 
            "C++ Pointers", "C++ Memory Mgmt."
          ]
        },
        {
          sectionLabel: 'C++ FUNCTIONS',
          links: ["C++ Functions", "C++ Function Parameters", "C++ Function Overloading", "C++ Scope"]
        },
        {
          sectionLabel: 'C++ CLASSES',
          links: [
            "C++ OOP", "C++ Classes/Objects", "C++ Class Methods", "C++ Constructors", "C++ Access Specifiers", 
            "C++ Encapsulation", "C++ Friend Functions", "C++ Inheritance", "C++ Polymorphism", "C++ Templates", 
            "C++ Files", "C++ Date"
          ]
        }
      ];
    case 'csharp':
      return [
        {
          sectionLabel: 'C# TUTORIAL',
          links: [
            "C# Home", "C# Intro", "C# Get Started", "C# Syntax", "C# Output", "C# Comments", 
            "C# Variables", "C# Data Types", "C# Type Casting", "C# User Input", "C# Operators", 
            "C# Math", "C# Strings", "C# Booleans", "C# If...Else", "C# Switch", "C# While Loop", 
            "C# For Loop", "C# Break/Continue", "C# Arrays"
          ]
        },
        {
          sectionLabel: 'C# METHODS',
          links: ["C# Methods", "C# Method Parameters", "C# Method Overloading"]
        },
        {
          sectionLabel: 'C# CLASSES',
          links: ["C# OOP", "C# Classes/Objects", "C# Class Members"]
        }
      ];
    case 'php':
      return [{ sectionLabel: 'PHP TUTORIAL', links: phpSidebarItems }];
    case 'java':
      return [
        {
          sectionLabel: 'JAVA TUTORIAL',
          links: [
            "Java Home", "Java Intro", "Java Get Started", "Java Syntax", "Java Output", "Java Comments", 
            "Java Variables", "Java Data Types", "Java Type Casting", "Java Operators", "Java Strings", 
            "Java Math", "Java Booleans", "Java If...Else", "Java Switch", "Java While Loop", "Java For Loop", 
            "Java Break/Continue", "Java Arrays"
          ]
        },
        {
          sectionLabel: 'JAVA METHODS',
          links: [
            "Java Methods", "Java Method Challenge", "Java Method Parameters", "Java Method Overloading", 
            "Java Scope", "Java Recursion"
          ]
        },
        {
          sectionLabel: 'JAVA CLASSES',
          links: [
            "Java OOP", "Java Classes/Objects", "Java Class Attributes", "Java Class Methods", "Java Class Challenge", 
            "Java Constructors", "Java this Keyword", "Java Modifiers", "Java Encapsulation", "Java Packages / API", 
            "Java Inheritance", "Java Polymorphism", "Java super Keyword", "Java Inner Classes", "Java Abstraction", 
            "Java Interface", "Java Anonymous", "Java Enum", "Java User Input", "Java Date"
          ]
        }
      ];
    case 'bootstrap5':
      return [{ sectionLabel: 'BOOTSTRAP 5 TUTORIAL', links: bootstrapSidebarItems }];
    case 'jquery':
      return [
        {
          sectionLabel: 'JQUERY TUTORIAL',
          links: ["jQuery Home", "jQuery Intro", "jQuery Get Started", "jQuery Syntax", "jQuery Selectors", "jQuery Events"]
        },
        {
          sectionLabel: 'JQUERY EFFECTS',
          links: ["jQuery Hide/Show", "jQuery Fade", "jQuery Slide", "jQuery Animate", "jQuery stop()", "jQuery Callback", "jQuery Chaining"]
        },
        {
          sectionLabel: 'JQUERY HTML',
          links: ["jQuery Get", "jQuery Set", "jQuery Add", "jQuery Remove", "jQuery CSS Classes", "jQuery css()", "jQuery Dimensions"]
        },
        {
          sectionLabel: 'JQUERY TRAVERSING',
          links: ["jQuery Traversing", "jQuery Ancestors", "jQuery Descendants", "jQuery Siblings", "jQuery Filtering"]
        }
      ];
    case 'angular':
      return [{ sectionLabel: 'ANGULAR TUTORIAL', links: angularSidebarItems }];
    case 'sql':
      return [
        {
          sectionLabel: 'SQL TUTORIAL',
          links: [
            "SQL Home", "SQL Intro", "SQL Syntax", "SQL Select", "SQL Select Distinct", "SQL Where", "SQL Order By", "SQL And", "SQL Or", "SQL Not", "SQL Insert Into", "SQL Null Values", "SQL Update", "SQL Delete", "SQL Select Top", "SQL Aggregate Functions", "SQL Min()", "SQL Max()", "SQL Count()", "SQL Sum()", "SQL Avg()", "SQL Like", "SQL Wildcards", "SQL In", "SQL Between", "SQL Aliases", "SQL Joins", "SQL Inner Join", "SQL Left Join", "SQL Right Join", "SQL Full Join", "SQL Self Join", "SQL Union", "SQL Union All", "SQL Group By", "SQL Having", "SQL Exists", "SQL Any", "SQL All", "SQL Select Into", "SQL Insert Into Select", "SQL Case", "SQL Null Functions", "SQL Stored Procedures", "SQL Comments", "SQL Operators"
          ]
        },
        {
          sectionLabel: 'SQL DATABASE',
          links: [
            "SQL Create DB", "SQL Drop DB", "SQL Backup DB", "SQL Create Table", "SQL Drop Table", "SQL Alter Table", "SQL Constraints", "SQL Not Null", "SQL Unique", "SQL Primary Key", "SQL Foreign Key", "SQL Check", "SQL Default", "SQL Create Index", "SQL Auto Increment", "SQL Dates", "SQL Views", "SQL Injection", "SQL Parameters", "SQL Prepared Statements", "SQL Hosting"
          ]
        },
        {
          sectionLabel: 'SQL CERT',
          links: ["SQL Certificate"]
        },
        {
          sectionLabel: 'SQL REFERENCES',
          links: ["SQL Data Types", "SQL Keywords Reference", "SQL Operators Reference"]
        }
      ];
    case 'mysql':
      return [
        {
          sectionLabel: 'MYSQL TUTORIAL',
          links: ["MySQL Home", "MySQL Intro", "MySQL RDBMS"]
        },
        {
          sectionLabel: 'MYSQL SQL',
          links: [
            "MySQL SQL", "MySQL SELECT", "MySQL SELECT DISTINCT", "MySQL WHERE", "MySQL ORDER BY", "MySQL AND", "MySQL OR", "MySQL NOT", "MySQL INSERT INTO", "MySQL NULL Values", "MySQL UPDATE", "MySQL DELETE", "MySQL LIMIT", "MySQL Aggregate Functions", "MySQL MIN()", "MySQL MAX()", "MySQL COUNT()", "MySQL SUM()", "MySQL AVG()", "MySQL LIKE", "MySQL Wildcards", "MySQL IN", "MySQL BETWEEN", "MySQL Aliases", "MySQL Joins", "MySQL Inner Join", "MySQL Left Join", "MySQL Right Join", "MySQL Union", "MySQL Group By", "MySQL Having", "MySQL Exists", "MySQL Any/All", "MySQL Select Into", "MySQL Insert Into Select", "MySQL Case", "MySQL Null Functions", "MySQL Stored Procedures", "MySQL Comments", "MySQL Operators"
          ]
        }
      ];
    case 'vue':
      return [
        {
          sectionLabel: 'VUE TUTORIAL',
          links: [
            "Vue Home", "Vue Intro", "Vue Directives", "Vue v-bind", "Vue v-if", "Vue v-show", "Vue v-for", "Vue Events", "Vue v-on", "Vue Methods", "Vue Event Modifiers", "Vue Forms", "Vue v-model", "Vue CSS Binding", "Vue Computed Properties", "Vue Watchers", "Vue Templates"
          ]
        },
        {
          sectionLabel: 'SCALING UP',
          links: [
            "Vue Why, How and Setup", "Vue First SFC Page", "Vue Components", "Vue Props", "Vue v-for Components", "Vue $emit()", "Vue Fallthrough Attributes", "Vue Scoped Styling", "Vue Local Components", "Vue Slots", "Vue Scoped Slots", "Vue Dynamic Components", "Vue Teleport", "Vue HTTP Request", "Vue Template Refs", "Vue Lifecycle Hooks", "Vue Provide/Inject", "Vue Routing", "Vue Form Inputs", "Vue Animations", "Vue Animations with v-for", "Vue Build", "Vue Composition API"
          ]
        }
      ];
    default:
      return [{ sectionLabel: 'HTML TUTORIAL', links: htmlSidebarItems }];
  }
}

// Generates high quality bilingual tutorials for any sidebar topic on-the-fly
export function generateTopic(langId: string, name: string): ReferenceTopic {
  const id = `${langId}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  // Standard lookups for high-fidelity fallbacks
  switch (langId) {
    case 'html':
      return getHtmlTopic(id, name);
    case 'css':
      return getCssTopic(id, name);
    case 'js':
      return getJsTopic(id, name);
    case 'python':
      return getPythonTopic(id, name);
    case 'react':
      return getReactTopic(id, name);
    case 'typescript':
      return getTsTopic(id, name);
    case 'cpp':
      return getCppTopic(id, name);
    case 'csharp':
      return getCsharpTopic(id, name);
    case 'php':
      return getPhpTopic(id, name);
    case 'java':
      return getJavaTopic(id, name);
    case 'bootstrap5':
      return getBootstrapTopic(id, name);
    case 'jquery':
      return getJqueryTopic(id, name);
    case 'angular':
      return getAngularTopic(id, name);
    case 'sql':
      return getSqlTopic(id, name);
    case 'mysql':
      return getMySqlTopic(id, name);
    case 'vue':
      return getVueTopic(id, name);
    default:
      return {
        id,
        name,
        title: { en: name, kh: name },
        description: { en: `Learn about ${name} in HTML.`, kh: `ស្វែងយល់អំពី ${name} ក្នុងភាសា HTML។` },
        concept: { en: 'Basic programming concept.', kh: 'គោលគំនិតគ្រឹះនៃការសរសេរកូដ។' },
        code: `<!-- Example of ${name} -->\n<div>\n  <h3>${name}</h3>\n</div>`,
        task: { en: `Experiment with ${name}.`, kh: `សាកល្បងសរសេរកូដជាមួយ ${name}។` }
      };
  }
}

function getHtmlTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("HOME")) {
    title = { en: "HTML HOME", kh: "HTML HOME - ទំព័រដើម HTML" };
    description = { en: "Welcome to HTML, the language for building web pages.", kh: "សូមស្វាគមន៍មកកាន់ HTML ដែលជាភាសាសម្រាប់ស្ថាបនាគេហទំព័រ។" };
    concept = { en: "HTML structures website layouts semantically.", kh: "HTML រៀបចំរចនាសម្ព័ន្ធប្លង់គេហទំព័រតាមអត្ថន័យ។" };
    code = `<!DOCTYPE html>\n<html>\n<body>\n  <h1>សួស្តីពី W3Schools Khmer!</h1>\n  <p>ចាប់ផ្តើមរៀនសរសេរកូដជាមួយគ្នា។</p>\n</body>\n</html>`;
    task = { en: "Change the text to 'Welcome!' and run.", kh: "សូមប្តូរអត្ថបទទៅជា 'Welcome!' រួចដំណើរការ។" };
  } else if (name.includes("Introduction")) {
    title = { en: "HTML Introduction", kh: "HTML Intro - ការណែនាំគ្រឹះ" };
    description = { en: "HTML is the standard markup language for creating Web pages.", kh: "HTML គឺជាភាសាស្តង់ដារសម្រាប់បង្កើតគេហទំព័រ។" };
    concept = { en: "It stands for Hyper Text Markup Language.", kh: "វាមានន័យពេញថា Hyper Text Markup Language។" };
    code = `<h1>ស្គាល់ពី HTML</h1>\n<p>HTML ងាយស្រួលរៀនខ្លាំងណាស់!</p>`;
    task = { en: "Add another paragraph below the first one.", kh: "សូមបន្ថែម tag <p> ថ្មីមួយទៀតនៅខាងក្រោម។" };
  } else if (name.includes("Editors")) {
    title = { en: "HTML Editors", kh: "HTML Editors - កម្មវិធីសរសេរកូដ" };
    description = { en: "Use Notepad, VS Code, or our built-in Sandbox editor.", kh: "ប្រើប្រាស់ Notepad, VS Code ឬកម្មវិធី Sandbox របស់ពួកយើង។" };
    concept = { en: "A simple text editor is all you need to start web coding.", kh: "កម្មវិធីកែសម្រួលអត្ថបទធម្មតាគឺគ្រប់គ្រាន់ដើម្បីចាប់ផ្តើមហើយ។" };
    code = `<p>កូដនេះត្រូវបានដំណើរការនៅលើ Sandbox online!</p>`;
    task = { en: "Modify the text inside the paragraph tag.", kh: "សូមផ្លាស់ប្តូរអត្ថបទនៅក្នុងកថាខណ្ឌ។" };
  } else if (name.includes("Basic")) {
    title = { en: "HTML Basic", kh: "HTML Basic - ឧទាហរណ៍មូលដ្ឋាន" };
    description = { en: "Basic HTML tags include headings, paragraphs, links, and images.", kh: "Tag គ្រឹះៗរួមមាន ចំណងជើង កថាខណ្ឌ តំណភ្ជាប់ និងរូបភាព។" };
    concept = { en: "All HTML documents must start with <!DOCTYPE html>.", kh: "រាល់ឯកសារ HTML ត្រូវផ្តើមដោយ <!DOCTYPE html> ជានិច្ច។" };
    code = `<!DOCTYPE html>\n<html>\n<body>\n  <h2>មេរៀនគ្រឹះ</h2>\n</body>\n</html>`;
    task = { en: "Add a paragraph below the header tag.", kh: "សូមបន្ថែម tag <p> នៅពីក្រោម h2។" };
  } else if (name.includes("Elements")) {
    title = { en: "HTML Elements", kh: "HTML Elements - ធាតុរបស់ HTML" };
    description = { en: "An HTML element is defined by a start tag, some content, and an end tag.", kh: "ធាតុ HTML ត្រូវបានកំណត់ដោយ tag បើក មាតិកា និង tag បិទ។" };
    concept = { en: "Syntax: <tagname>Content goes here...</tagname>", kh: "ទម្រង់៖ <tagname>មាតិកា...</tagname>" };
    code = `<p>នេះជាគំរូនៃ HTML Element មួយ។</p>`;
    task = { en: "Wrap the word 'Element' inside <strong> tag.", kh: "សូមដាក់ពាក្យ 'Element' នៅក្នុង tag <strong>។" };
  } else if (name.includes("Attributes")) {
    title = { en: "HTML Attributes", kh: "HTML Attributes - គុណលក្ខណៈបន្ថែម" };
    description = { en: "Attributes provide additional information about elements.", kh: "Attributes ផ្តល់ព័ត៌មានលម្អិតបន្ថែមសម្រាប់ធាតុ HTML។" };
    concept = { en: "They are always specified in the start tag, like href, src, width, height.", kh: "ពួកវាត្រូវបានសរសេរនៅក្នុង tag បើកជានិច្ច ដូចជា href, src, class, id។" };
    code = `<a href="https://www.w3schools.com" target="_blank">W3Schools Site</a>`;
    task = { en: "Change target attribute to '_self'.", kh: "សូមប្តូរ target attribute ទៅជា '_self'។" };
  } else if (name.includes("Headings")) {
    title = { en: "HTML Headings", kh: "HTML Headings - ចំណងជើងធំ" };
    description = { en: "HTML headings are titles or subtitles that you want to display on a webpage.", kh: "Headings គឺជាចំណងជើង ឬចំណងជើងរងនៅលើទំព័រវេបសាយ។" };
    concept = { en: "Defined with <h1> to <h6> tags.", kh: "កំណត់ឡើងពី tag <h1> ដល់ <h6>។" };
    code = `<h1>ចំណងជើង H1</h1>\n<h2>ចំណងជើង H2</h2>`;
    task = { en: "Add an <h3> tag with the text 'Heading 3'.", kh: "សូមបន្ថែម tag <h3> ជាមួយអត្ថបទ 'Heading 3'។" };
  } else if (name.includes("Paragraphs")) {
    title = { en: "HTML Paragraphs", kh: "HTML Paragraphs - កថាខណ្ឌ" };
    description = { en: "The HTML <p> element defines a paragraph.", kh: "tag <p> របស់ HTML ប្រើសម្រាប់កំណត់កថាខណ្ឌអត្ថបទ។" };
    concept = { en: "Browsers automatically add margin spacing before and after paragraphs.", kh: "Browser បន្ថែមគម្លាតស្វ័យប្រវត្តមុននិងក្រោយកថាខណ្ឌ។" };
    code = `<p>នេះជាកថាខណ្ឌដំបូង។</p>\n<p>នេះជាកថាខណ្ឌទីពីរ។</p>`;
    task = { en: "Add a third paragraph to the webpage.", kh: "សូមបន្ថែមមេកថាខណ្ឌទីបី។" };
  } else if (name.includes("Styles")) {
    title = { en: "HTML Styles", kh: "HTML Styles - ការតុបតែងម៉ូត" };
    description = { en: "The style attribute is used to add styles to an element.", kh: "style attribute ត្រូវបានប្រើដើម្បីកំណត់ម៉ូតពណ៌ ទំហំទៅឱ្យធាតុ។" };
    concept = { en: "Syntax: <tagname style=\"property:value;\">", kh: "រូបមន្ត៖ <tagname style=\"property:value;\">" };
    code = `<p style="color:blue; font-size:18px;">អត្ថបទពណ៌ខៀវ</p>`;
    task = { en: "Change the text color in the style to 'red'.", kh: "សូមប្តូរពណ៌អត្ថបទក្នុង style ទៅជា 'red'។" };
  } else if (name.includes("Formatting")) {
    title = { en: "HTML Formatting", kh: "HTML Formatting - ទម្រង់អក្សរ" };
    description = { en: "HTML defines special elements for formatting text.", kh: "HTML ផ្តល់ tag ពិសេសៗសម្រាប់កំណត់ទម្រង់អក្សរ។" };
    concept = { en: "Examples: <b> for bold, <i> for italic, <mark> for highlighted.", kh: "ឧទាហរណ៍៖ <b> អក្សរដិត, <i> អក្សរទ្រេត, <mark> ហាយឡាយ។" };
    code = `<p>អត្ថបទនេះមាន <b>អក្សរដិត</b> និង <mark>ហាយឡាយ</mark>។</p>`;
    task = { en: "Change the <b> tag to <strong> tag.", kh: "សូមប្តូរ tag <b> ទៅជា <strong>។" };
  } else if (name.includes("Quotations")) {
    title = { en: "HTML Quotations", kh: "HTML Quotations - ការស្រង់សម្តី" };
    description = { en: "HTML quotation elements: <blockquote> and <q>.", kh: "ធាតុសម្រាប់សម្រង់សម្តីរបស់ HTML រួមមាន <blockquote> និង <q>។" };
    concept = { en: "<blockquote> is for long quotes, <q> is for inline quotes.", kh: "<blockquote> សម្រាប់សម្រង់សម្តីវែង, <q> សម្រាប់សម្រង់សម្តីខ្លី។" };
    code = `<blockquote cite="W3S">\n  "កូដស្អាត ធ្វើឱ្យជីវិតរលូន។"\n</blockquote>`;
    task = { en: "Put a citation URL in the blockquote's cite attribute.", kh: "សូមដាក់ URL ក្នុង attribute cite នៃ blockquote។" };
  } else if (name.includes("Comments")) {
    title = { en: "HTML Comments", kh: "HTML Comments - ចំណាំកូដ" };
    description = { en: "HTML comments are not displayed by browsers, but help document code.", kh: "Comments មិនបង្ហាញលើអេក្រង់ទេ តែវាជួយពន្យល់កូដ។" };
    concept = { en: "Syntax: <!-- Comment here -->", kh: "ទម្រង់៖ <!-- សរសេរពន្យល់ -->" };
    code = `<!-- នេះជា comment -->\n<p>អត្ថបទនេះបង្ហាញធម្មតា</p>`;
    task = { en: "Comment out the entire paragraph.", kh: "សូមបិទកូដកថាខណ្ឌទាំងមូលដោយប្រើ comment។" };
  } else if (name.includes("Colors")) {
    title = { en: "HTML Colors", kh: "HTML Colors - ពណ៌" };
    description = { en: "HTML colors can be specified using HEX, RGB, or color names.", kh: "ពណ៌នៅក្នុង HTML អាចកំណត់តាមឈ្មោះ ឬលេខកូដ HEX, RGB។" };
    concept = { en: "Use background-color and color styling properties.", kh: "ប្រើប្រាស់ background-color និង color ក្នុងរចនាបទ។" };
    code = `<h4 style="background-color:orange; color:white; padding:10px;">ពណ៌ទឹកក្រូច</h4>`;
    task = { en: "Change background color to 'MediumSeaGreen'.", kh: "សូមប្តូរពណ៌ផ្ទៃក្រោយទៅជា 'MediumSeaGreen'។" };
  } else if (name.includes("CSS")) {
    title = { en: "HTML CSS", kh: "HTML CSS - ការរចនាប្លង់" };
    description = { en: "Use CSS to style your HTML documents.", kh: "ប្រើប្រាស់ CSS ដើម្បីរចនាពណ៌ ប្លង់ និងម៉ូតគេហទំព័រ។" };
    concept = { en: "CSS stands for Cascading Style Sheets.", kh: "CSS តំណាងឱ្យ Cascading Style Sheets។" };
    code = `<style>\n  h2 { color: teal; font-family: sans-serif; }\n</style>\n<h2>ចំណងជើងរចនាដោយ CSS</h2>`;
    task = { en: "Add a styling rule for paragraph tag to have red color.", kh: "សូមបន្ថែមការរចនា p ឱ្យមានពណ៌ក្រហម។" };
  } else if (name.includes("Links")) {
    title = { en: "HTML Links", kh: "HTML Links - តំណភ្ជាប់" };
    description = { en: "HTML links are defined with the <a> tag.", kh: "តំណភ្ជាប់នៅក្នុង HTML ត្រូវបានកំណត់ឡើងដោយ tag <a>។" };
    concept = { en: "The href attribute specifies the destination URL.", kh: "href attribute សម្រាប់បញ្ជាក់ពី URL ទិសដៅ។" };
    code = `<a href="https://www.google.com" target="_blank">ស្វែងរកជាមួយ Google</a>`;
    task = { en: "Change destination URL to 'https://www.wikipedia.org'.", kh: "សូមប្តូរ URL ទៅជា 'https://www.wikipedia.org'។" };
  } else if (name.includes("Images")) {
    title = { en: "HTML Images", kh: "HTML Images - រូបភាព" };
    description = { en: "HTML images are defined with the <img> tag.", kh: "រូបភាពនៅក្នុង HTML ត្រូវបានកំណត់ឡើងដោយ tag <img>។" };
    concept = { en: "Attributes: src (path to image), alt (alternate description).", kh: "ត្រូវការ src (ប្រភពរូបភាព) និង alt (ការពន្យល់ជំនួស)។" };
    code = `<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809" alt="Gradient Background" style="width:100%; max-width:300px; border-radius:8px;">`;
    task = { en: "Set the style width attribute of the image to '200px'.", kh: "សូមប្តូរទទឹងរូបភាពទៅជា '200px' នៅក្នុង style។" };
  } else if (name.includes("Project")) {
    title = { en: "HTML Project", kh: "HTML Project - គម្រោងសាកល្បង" };
    description = { en: "Combine what you have learned to make a webpage module.", kh: "រួមបញ្ចូលអ្វីដែលអ្នកបានរៀនដើម្បីបង្កើតសមាសភាគគេហទំព័រមួយ។" };
    concept = { en: "Using structured div nesting and inline styling rules.", kh: "ការប្រើប្រាស់ div និងម៉ូតរចនាដើម្បីរៀបចំរចនាសម្ព័ន្ធ។" };
    code = `<div style="padding:20px; border:2px solid #ccc; border-radius:10px; max-width:300px; margin:auto;">\n  <h3>My Small Project</h3>\n  <p>This is styled completely with inline styles!</p>\n</div>`;
    task = { en: "Change border-color to emerald-green '#10b981'.", kh: "សូមប្តូរពណ៌បន្ទាត់ទៅជាពណ៌បៃតង '#10b981'។" };
  } else if (name.includes("Favicon")) {
    title = { en: "HTML Favicon", kh: "HTML Favicon - រូបតំណាង Tab" };
    description = { en: "A favicon is a small image displayed in the browser tab.", kh: "Favicon គឺជារូបតំណាងតូចនៅលើ Tab នៃកម្មវិធីរុករក។" };
    concept = { en: "Set using link rel='icon' tag in head.", kh: "កំណត់ដោយប្រើ tag link rel='icon' នៅក្នុងផ្នែក head។" };
    code = `<link rel="icon" type="image/x-icon" href="https://www.w3schools.com/favicon.ico">\n<p>Favicon is configured inside the HEAD block.</p>`;
    task = { en: "Observe the link tag structures.", kh: "សូមសង្កេតមើលទម្រង់ tag link ខាងលើ។" };
  } else if (name.includes("Page Title")) {
    title = { en: "HTML Page Title", kh: "HTML Page Title - ចំណងជើងទំព័រ" };
    description = { en: "The <title> tag defines the title of the document.", kh: "tag <title> ប្រើសម្រាប់កំណត់ចំណងជើងនៃគេហទំព័រ។" };
    concept = { en: "Crucial for browser bookmarks and Google SEO rankings.", kh: "មានសារៈសំខាន់ខ្លាំងសម្រាប់ការកត់ចំណាំ Tab និង SEO របស់ Google។" };
    code = `<!DOCTYPE html>\n<html>\n<head>\n  <title>រៀនកូដខ្មែរ - Home</title>\n</head>\n<body>\n  <p>ពិនិត្យមើលកូដ Title ក្នុង Head block។</p>\n</body>\n</html>`;
    task = { en: "Change the title element text to 'W3Schools Cambodia'.", kh: "សូមប្តូរអត្ថបទក្នុង title ទៅជា 'W3Schools Cambodia'។" };
  } else if (name.includes("Tables")) {
    title = { en: "HTML Tables", kh: "HTML Tables - តារាង" };
    description = { en: "HTML tables allow web developers to arrange data into rows and columns.", kh: "តារាង HTML អនុញ្ញាតឱ្យយើងរៀបចំចងក្រងទិន្នន័យជាជួរដេក និងជួរឈរ។" };
    concept = { en: "Tags: <table>, <tr> (row), <th> (header), <td> (cell).", kh: "ប្រើប្រាស់ tag: <table>, <tr> (ជួរដេក), <th> (ក្បាលតារាង), <td> (ប្រអប់ទិន្នន័យ)។" };
    code = `<table style="width:100%; border:1px solid black; border-collapse:collapse;">\n  <tr>\n    <th>Name</th>\n    <th>Skill</th>\n  </tr>\n  <tr>\n    <td>Seyha</td>\n    <td>HTML</td>\n  </tr>\n</table>`;
    task = { en: "Add another row to the table with your details.", kh: "សូមបន្ថែមជួរដេកថ្មីមួយទៀត <tr> ដាក់ព័ត៌មានរបស់អ្នក។" };
  } else if (name.includes("Lists")) {
    title = { en: "HTML Lists", kh: "HTML Lists - បញ្ជីរាយនាម" };
    description = { en: "HTML lists are used to group sets of related items.", kh: "បញ្ជីរាយនាម HTML ប្រើសម្រាប់ប្រមូលផ្តុំព័ត៌មានជាជួរៗ។" };
    concept = { en: "Use <ul> for bullet lists, and <ol> for numbered lists.", kh: "ប្រើ <ul> សម្រាប់បញ្ជីសញ្ញាចុច, <ol> សម្រាប់បញ្ជីមានលំដាប់លេខ។" };
    code = `<ul>\n  <li>ភាសា HTML</li>\n  <li>ភាសា CSS</li>\n</ul>`;
    task = { en: "Change ul tag to ol tag.", kh: "សូមប្តូរ tag ul ទៅជា ol។" };
  } else if (name.includes("Block & Inline")) {
    title = { en: "HTML Block & Inline", kh: "HTML Block & Inline - ទម្រង់បង្ហាញ" };
    description = { en: "Block elements take full width, inline elements only take content width.", kh: "Block elements ទាញយកទទឹងពេញមួយជួរ ចំណែក Inline elements យកតាមទំហំអក្សរ។" };
    concept = { en: "Block: <div>, <p>. Inline: <span>, <a>.", kh: "Block រួមមាន <div>, <p>។ Inline រួមមាន <span>, <a>។" };
    code = `<div style="background-color:cyan;">Block Element</div>\n<span style="background-color:yellow;">Inline Element</span>`;
    task = { en: "Create another span element next to the first one.", kh: "សូមបង្កើត span element មួយទៀតនៅចំហៀងគ្នា។" };
  } else if (name.includes("Div")) {
    title = { en: "HTML Div", kh: "HTML Div - ប្រអប់ចែកផ្នែក" };
    description = { en: "The <div> tag is used as a container for other HTML elements.", kh: "tag <div> ប្រើជាប្រអប់ផ្ទុក ឬចែកផ្នែកសម្រាប់ក្តោបធាតុផ្សេងៗ។" };
    concept = { en: "It has no meaning, but is styled easily using CSS class or ID.", kh: "វាមិនមានន័យអ្វីទេ តែងាយស្រួលរៀបចំម៉ូតដោយភ្ជាប់ CSS class ឬ ID។" };
    code = `<div style="background-color:lightgray; padding:15px; border-radius:10px;">\n  <h3>ខាងក្នុង Div</h3>\n</div>`;
    task = { en: "Add border style to the div: 'border: 2px solid green;'.", kh: "សូមបន្ថែមស្ទីលបន្ទាត់ទៅឱ្យ div៖ 'border: 2px solid green;'។" };
  } else if (name.includes("Classes")) {
    title = { en: "HTML Classes", kh: "HTML Classes - ថ្នាក់សម្គាល់" };
    description = { en: "The class attribute is used to specify a class for an HTML element.", kh: "class attribute ប្រើសម្រាប់កំណត់ឈ្មោះក្រុមទៅឱ្យធាតុ HTML ដើម្បីងាយហៅរចនា CSS។" };
    concept = { en: "Multiple elements can share the same class name.", kh: "ធាតុច្រើនអាចមានឈ្មោះ class ដូចគ្នានៅក្នុងទំព័រតែមួយ។" };
    code = `<style>\n  .alert { color: red; font-weight: bold; }\n</style>\n<p class="alert">ការព្រមាន៖ កូដនេះខុស!</p>`;
    task = { en: "Add the class 'alert' to another paragraph.", kh: "សូមបន្ថែម class 'alert' ទៅកាន់កថាខណ្ឌមួយទៀត។" };
  } else if (name.includes("Id")) {
    title = { en: "HTML Id", kh: "HTML Id - ឧបករណ៍សម្គាល់" };
    description = { en: "The id attribute is used to specify a unique id for an HTML element.", kh: "id attribute ប្រើសម្រាប់កំណត់ឈ្មោះសម្គាល់តែមួយគត់សម្រាប់ធាតុតែមួយ។" };
    concept = { en: "You cannot have more than one element with the same id.", kh: "យើងមិនអាចមានធាតុលើសពីមួយដែលមាន ID ដូចគ្នានោះទេ។" };
    code = `<style>\n  #main-heading { font-family: sans-serif; text-align: center; }\n</style>\n<h2 id="main-heading">ចំណងជើងធំ ID</h2>`;
    task = { en: "Add color: purple; to the #main-heading style block.", kh: "សូមបន្ថែម color: purple; ទៅកាន់ style #main-heading។" };
  } else if (name.includes("Buttons")) {
    title = { en: "HTML Buttons", kh: "HTML Buttons - ប៊ូតុង" };
    description = { en: "The <button> element defines a clickable button.", kh: "tag <button> ប្រើសម្រាប់បង្កើតប៊ូតុងដែលអាចចុចបញ្ជាការងារបាន។" };
    concept = { en: "Can be styled beautifully and used with JavaScript on-click.", kh: "អាចតុបតែងម៉ូតយ៉ាងស្រស់ស្អាត និងភ្ជាប់ជាមួយ JavaScript onclick។" };
    code = `<button style="background:emerald; color:white; padding:10px; border-radius:5px; cursor:pointer;" onclick="console.log('Button clicked')">ចុចខ្ញុំ</button>`;
    task = { en: "Change background style color to '#3b82f6' (blue).", kh: "សូមប្តូរពណ៌ background របស់ប៊ូតុងទៅជា '#3b82f6' (ពណ៌ខៀវ)។" };
  }

  return { id, name, title, description, concept, code, task };
}

function getCssTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("HOME")) {
    title = { en: "CSS HOME", kh: "CSS HOME - ទំព័រដើម CSS" };
    description = { en: "CSS stands for Cascading Style Sheets. It is used to style webpages.", kh: "CSS គឺជាភាសាសម្រាប់តុបតែងម៉ូត និងរៀបចំប្លង់របស់គេហទំព័រ។" };
    concept = { en: "CSS saves a lot of work by controlling the layout of multiple webpages at once.", kh: "CSS ជួយសន្សំសំចៃការងារបានច្រើនដោយគ្រប់គ្រងប្លង់ទំព័រច្រើនក្នុងពេលតែមួយ។" };
    code = `body {\n  background-color: #f3f4f6;\n}\nh1 {\n  color: #10b981;\n  text-align: center;\n}`;
    task = { en: "Change body background-color to '#fee2e2' and run.", kh: "សូមប្តូរ body background-color ទៅជា '#fee2e2' រួចចុច Run។" };
  } else if (name.includes("Syntax")) {
    title = { en: "CSS Syntax", kh: "CSS Syntax - ទម្រង់កូដ" };
    description = { en: "A CSS rule-set consists of a selector and a declaration block.", kh: "សំណុំក្បួន CSS រួមមាន Selector និងប្លុកប្រកាសការរចនា។" };
    concept = { en: "The selector points to the element; declaration contains properties.", kh: "Selector ចង្អុលទៅធាតុ ចំណែក Declaration ផ្ទុកលក្ខណៈតុបតែង។" };
    code = `p {\n  color: red;\n  font-size: 14px;\n}`;
    task = { en: "Change text color property to blue.", kh: "សូមប្តូរលក្ខណៈ color ទៅជា blue។" };
  } else if (name.includes("Selectors")) {
    title = { en: "CSS Selectors", kh: "CSS Selectors - វិធីជ្រើសរើស" };
    description = { en: "CSS selectors are used to select HTML elements for styling.", kh: "selectors ប្រើសម្រាប់ជ្រើសរើសធាតុ HTML ដើម្បីរចនាម៉ូត។" };
    concept = { en: "Categories: element selector, class selector, ID selector.", kh: "ប្រភេទ៖ selector តាមធាតុ, តាម class (.), តាម ID (#)។" };
    code = `.highlight-text {\n  background-color: yellow;\n  font-weight: bold;\n}`;
    task = { en: "Add color: red; to the .highlight-text selector block.", kh: "សូមបន្ថែម color: red; ទៅកាន់ .highlight-text block។" };
  } else if (name.includes("Padding")) {
    title = { en: "CSS Padding", kh: "CSS Padding - គម្លាតក្នុង" };
    description = { en: "Padding is used to generate space around element content inside border.", kh: "Padding ប្រើសម្រាប់បង្កើតគម្លាតជុំវិញអត្ថបទនៅខាងក្នុងបន្ទាត់ជុំវិញ។" };
    concept = { en: "Can be top, right, bottom, left or shorthand padding: 20px.", kh: "អាចកំណត់ top, right, bottom, left ឬសរសេរកាត់ padding: 20px។" };
    code = `<div style="border: 2px solid red; padding: 30px;">\n  ប្រអប់មាន Padding ៣០px\n</div>`;
    task = { en: "Change padding spacing value to '10px' and observe changes.", kh: "សូមប្តូរគម្លាត padding ទៅជា '10px' រួចពិនិត្យមើលភាពខុសគ្នា។" };
  } else if (name.includes("Margins")) {
    title = { en: "CSS Margins", kh: "CSS Margins - គម្លាតក្រៅ" };
    description = { en: "Margins generate space around elements, outside of any borders.", kh: "Margins ប្រើសម្រាប់បង្កើតគម្លាតជុំវិញខាងក្រៅបន្ទាត់នៃធាតុ។" };
    concept = { en: "Shorthand: margin: 15px; sets all 4 sides.", kh: "កូដកាត់៖ margin: 15px; កំណត់ទាំង ៤ ទិសដៅ។" };
    code = `<div style="border: 1px solid black; margin: 40px; background-color: yellow;">\n  ប្រអប់មាន Margin ៤០px ខាងក្រៅ\n</div>`;
    task = { en: "Change margin space value to '20px'.", kh: "សូមប្តូរគម្លាត margin ទៅជា '20px'។" };
  } else {
    // Dynamic fallback for remaining CSS lessons
    title = { en: name, kh: `${name} - ការរចនាប្លង់` };
    description = { en: `Learn how to configure ${name} to build modern layouts.`, kh: `រៀនពីរបៀបកំណត់ ${name} ដើម្បីរៀបចំប្លង់វេបសាយទំនើប។` };
    concept = { en: `Understanding ${name} styling properties in web development.`, kh: `ការយល់ដឹងពីលក្ខណៈសម្បត្តិរចនាម៉ូត ${name} ក្នុងការបង្កើតវេបសាយ។` };
    code = `<div style="background-color:#eff6ff; border:1px solid #3b82f6; padding:15px; border-radius:8px;">\n  <h4 style="color:#2563eb; margin:0 0 5px 0;">រៀន៖ ${name}</h4>\n  <p style="margin:0; font-size:14px;">ពិសោធន៍និងកែសម្រួលកូដស្ទីលទីនេះ។</p>\n</div>`;
    task = { en: "Add 'font-family: sans-serif;' inline style to the div.", kh: "សូមបន្ថែមស្ទីល 'font-family: sans-serif;' ទៅក្នុង div ខាងលើ។" };
  }

  return { id, name, title, description, concept, code, task };
}

function getJsTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("Home")) {
    title = { en: "JS Home", kh: "JS Home - ទំព័រដើម JavaScript" };
    description = { en: "JavaScript is the world's most popular lightweight scripting language.", kh: "JavaScript គឺជាភាសាកូដដែលមានឥទ្ធិពលបំផុតសម្រាប់បង្កើតភាពរស់រវើកលើគេហទំព័រ។" };
    concept = { en: "It is the standard programming language of the Web.", kh: "វាជាភាសាកូដស្តង់ដារសម្រាប់ដំណើរការកម្មវិធីលើ Web browser។" };
    code = `console.log("ស្វាគមន៍មកកាន់ W3Schools JS!");\nlet total = 5 + 10;\nconsole.log("លទ្ធផល ៥ បូក ១០ ស្មើនឹង៖", total);`;
    task = { en: "Print your name using console.log()", kh: "សូមបង្ហាញឈ្មោះរបស់អ្នកដោយប្រើ console.log()" };
  } else if (name.includes("Introduction")) {
    title = { en: "JS Introduction", kh: "JS Introduction - ស្គាល់ពី JS" };
    description = { en: "JavaScript can update and change both HTML and CSS dynamically.", kh: "JavaScript អាចកែប្រែមាតិកា HTML និងស្ទីល CSS បានភ្លាមៗតាមតម្រូវការ។" };
    concept = { en: "JS enables interactive controls and handles browser events.", kh: "JS អនុញ្ញាតឱ្យយើងបញ្ជាកម្មវិធី និងគ្រប់គ្រងរាល់សកម្មភាពចុច (Events)។" };
    code = `let name = "សីហា";\nconsole.log("សួស្តីសិស្ស " + name + "!");`;
    task = { en: "Modify variable name value to your name and run.", kh: "សូមប្តូរតម្លៃអថេរ name ទៅជាឈ្មោះរបស់អ្នក រួចដំណើរការកូដ។" };
  } else if (name.includes("Functions")) {
    title = { en: "JS Functions", kh: "JS Functions - មុខងារកូដចងក្រង" };
    description = { en: "A JavaScript function is a block of code designed to perform a particular task.", kh: "Function គឺជាប្លុកកូដដែលបង្កើតឡើងដើម្បីបំពេញការងារជាក់លាក់ណាមួយ។" };
    concept = { en: "Executed when 'something' invokes (calls) it.", kh: "វានឹងដំណើរការនៅពេលដែលមានផ្នែកណាមួយហៅប្រើប្រាស់វា (Invoke/Call)។" };
    code = `function greeting(user) {\n  return "សួស្តី " + user + "! រីករាយការរៀនកូដ។";\n}\n\nconsole.log(greeting("មិត្តភក្តិ"));`;
    task = { en: "Call the function greeting with the argument 'Seyha'.", kh: "សូមហៅ function greeting ដោយបញ្ជូនតម្លៃ 'Seyha' ទៅឱ្យវា។" };
  } else if (name.includes("Arrays")) {
    title = { en: "JS Arrays", kh: "JS Arrays - បញ្ជីទិន្នន័យ" };
    description = { en: "JavaScript arrays are used to store multiple values in a single variable.", kh: "Arrays ត្រូវបានប្រើប្រាស់សម្រាប់រក្សាទុកសំណុំតម្លៃច្រើននៅក្នុងអថេរតែមួយ។" };
    concept = { en: "Each element is zero-indexed: first item is array[0].", kh: "ធាតុនីមួយៗរៀបតាមលេខលំដាប់ (Index) ចាប់ពីលេខ ០ ឡើងទៅ។" };
    code = `let fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"];\nconsole.log("ផ្លែឈើទី១ គឺ៖", fruits[0]);\nconsole.log("ចំនួនសរុប៖", fruits.length);`;
    task = { en: "Push 'Mango' to the fruits array using fruits.push('ស្វាយ') and log fruits.", kh: "សូមបន្ថែម 'ស្វាយ' ទៅកាន់ fruits រួចបង្ហាញ fruits ទាំងអស់លើ console។" };
  } else {
    // Dynamic fallback for other JS lessons
    title = { en: name, kh: `${name} - មេរៀន JS` };
    description = { en: `Understand how to use ${name} in modern JavaScript development.`, kh: `ស្វែងយល់ពីរបៀបប្រើប្រាស់ ${name} ក្នុងការសរសេរកូដ JavaScript ទំនើប។` };
    concept = { en: `Mastering ${name} is key to programming robust interactive web apps.`, kh: `ការចេះច្បាស់ពី ${name} ជាគន្លឹះដើម្បីសរសេរកម្មវិធីវេបសាយមានប្រសិទ្ធភាព។` };
    code = `// សាកល្បង៖ ${name}\nlet topic = "${name}";\nconsole.log("កំពុងរៀនមេរៀន៖", topic);\n\n// សរសេរកូដសាកល្បងរបស់អ្នកនៅខាងក្រោម / Write below\n`;
    task = { en: "Write a console.log statement showing a custom text.", kh: "សូមសរសេរ console.log បង្ហាញសារផ្ទាល់ខ្លួនរបស់អ្នក។" };
  }

  return { id, name, title, description, concept, code, task };
}

function getPythonTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("HOME")) {
    title = { en: "Python HOME", kh: "Python HOME - ទំព័រដើម Python" };
    description = { en: "Python is a high-level, general-purpose programming language.", kh: "Python គឺជាភាសាកូដកម្រិតខ្ពស់ដែលមានភាពបត់បែន និងពេញនិយមខ្លាំង។" };
    concept = { en: "Indentation-based layout makes code incredibly neat.", kh: "ការប្រើប្រាស់ការឃ្លាតចំហ (Indentation) ធ្វើឱ្យកូដរបស់វាមានរបៀបរៀបរយ។" };
    code = `print("សួស្តីពី W3Schools Python!")\n# គណនាផលគុណ\nprint("ផលគុណ ៦គុណ៨ =", 6 * 8)`;
    task = { en: "Print 'Hello, World!' and run.", kh: "សូមបង្ហាញអក្សរ 'Hello, World!' រួចដំណើរការកូដ។" };
  } else if (name.includes("Variables")) {
    title = { en: "Python Variables", kh: "Python Variables - ការបង្កើតអថេរ" };
    description = { en: "Variables are containers for storing data values.", kh: "Variables គឺជាប្រអប់ ឬកន្លែងផ្ទុកទិន្នន័យដើម្បីយកទៅប្រើប្រាស់។" };
    concept = { en: "Python has no command for declaring a variable; it is created the moment you first assign a value.", kh: "Python មិនត្រូវការបញ្ជាពាក្យគន្លឹះដើម្បីបង្កើតឡើយ គឺវានឹងបង្កើតពេលអ្នកកំណត់តម្លៃភ្លាម។" };
    code = `username = "សីហា"\nage = 20\nprint("ឈ្មោះ៖", username)\nprint("អាយុ៖", age)`;
    task = { en: "Add a variable named 'score' set to 95 and print it.", kh: "សូមបង្កើតអថេរ 'score' ស្មើ 95 រួចបង្ហាញតម្លៃវានៅលើអេក្រង់។" };
  } else if (name.includes("If...Else")) {
    title = { en: "Python If...Else", kh: "Python If...Else - លក្ខខណ្ឌ" };
    description = { en: "Python supports the usual logical conditions from mathematics.", kh: "Python គាំទ្រលក្ខខណ្ឌតក្កវិទ្យាសម្រាប់សម្រេចចិត្តដំណើរការកូដ។" };
    concept = { en: "Uses indentation blocks to define scope in code.", kh: "ប្រើប្រាស់ការឃ្លាតចំហ (Indentation) ដើម្បីកំណត់ដែនប្លុកកូដ។" };
    code = `score = 85\nif score >= 50:\n    print("លទ្ធផល៖ ជាប់!")\nelse:\n    print("លទ្ធផល៖ ធ្លាក់!")`;
    task = { en: "Change score to 40 and run to see the else block execute.", kh: "សូមប្តូរ score ទៅជា 40 រួចរត់កូដដើម្បីមើលការបង្ហាញ 'ធ្លាក់!'។" };
  } else {
    // Dynamic fallback for other Python lessons
    title = { en: name, kh: `${name} - មេរៀន Python` };
    description = { en: `Learn how to implement ${name} with clean Python scripts.`, kh: `រៀនពីរបៀបបង្កើតនិងប្រើប្រាស់ ${name} ជាមួយកូដ Python ដ៏សាមញ្ញ។` };
    concept = { en: `Python syntax is highly readable and perfect for beginners.`, kh: `ទម្រង់កូដ Python គឺងាយស្រួលអានយល់បំផុត សមស្របសម្រាប់អ្នករៀនដំបូង។` };
    code = `# សាកល្បង៖ ${name}\ntopic_name = "${name}"\nprint("កំពុងសិក្សាមេរៀន៖", topic_name)\n`;
    task = { en: "Add a print statement with your own text.", kh: "សូមបន្ថែមការបង្ហាញ print សារផ្ទាល់ខ្លួនរបស់អ្នក។" };
  }

  return { id, name, title, description, concept, code, task };
}

function getReactTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("Home")) {
    title = { en: "React Home", kh: "React Home - ទំព័រដើម React" };
    description = { en: "React is a declarative JavaScript library for building component-based interfaces.", kh: "React គឺជាបណ្ណាល័យប្រកាស UI ផ្អែកលើការផ្គុំ Component ផ្សេងៗចូលគ្នា។" };
    concept = { en: "Components are independent, reusable blocks of markup and logic.", kh: "Components គឺជាប្លុកកូដឯករាជ្យដែលអាចយកទៅប្រើឡើងវិញបានច្រើនកន្លែង។" };
    code = `export default function App() {\n  return (\n    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>\n      <h2>សួស្តីពី React Component!</h2>\n    </div>\n  );\n}`;
    task = { en: "Add a paragraph `<p>Enjoy learning React</p>` below h2.", kh: "សូមបន្ថែម tag <p> ដាក់ថា 'Enjoy learning React' នៅចំហៀង h2។" };
  } else if (name.includes("Props")) {
    title = { en: "React Props", kh: "React Props - ការបញ្ជូនទិន្នន័យ" };
    description = { en: "Props are arguments passed into React components.", kh: "Props គឺជាតម្លៃអាគុយម៉ង់ដែលយើងបញ្ជូនទៅកាន់ React components។" };
    concept = { en: "They are passed to components via HTML attributes and are read-only.", kh: "ពួកវាត្រូវបានបញ្ជូនតាមរយៈ attribute និងជាប្រភេទអានតែប៉ុណ្ណោះ (Read-only)។" };
    code = `function Welcome(props) {\n  return <h3>Welcome, {props.name}!</h3>;\n}\n\nexport default function App() {\n  return <Welcome name="Seyha" />;\n}`;
    task = { en: "Change the name value from 'Seyha' to your name.", kh: "សូមផ្លាស់ប្តូរតម្លៃ name ពី 'Seyha' ទៅជាឈ្មោះរបស់អ្នក។" };
  } else {
    // Dynamic fallback for other React lessons
    title = { en: name, kh: `${name} - សមាសភាគ React` };
    description = { en: `Explore how to utilize ${name} inside React single-page architectures.`, kh: `ស្វែងយល់ពីរបៀបប្រើប្រាស់ ${name} ក្នុងការសរសេរកម្មវិធី React ទំនើប។` };
    concept = { en: `Mastering React elements like ${name} makes building gorgeous UIs lightning fast.`, kh: `ការចេះច្បាស់ពី ${name} ជួយឱ្យការបង្កើត UI កាន់តែលឿននិងរលូន។` };
    code = `import { useState } from 'react';\n\nexport default function App() {\n  // រៀនពី៖ ${name}\n  return (\n    <div className="p-6 text-center">\n      <h3 className="text-emerald-500 font-bold">កំពុងសិក្សា៖ ${name}</h3>\n      <p>សាកល្បងសរសេរកូដរបស់អ្នកនៅខាងក្រោម!</p>\n    </div>\n  );\n}`;
    task = { en: "Add a button element inside the returned container.", kh: "សូមបន្ថែម element ប៊ូតុងមួយនៅក្នុងប្រអប់ container ត្រឡប់មកវិញ។" };
  }

  return { id, name, title, description, concept, code, task };
}

function getTsTopic(id: string, name: string): ReferenceTopic {
  let title = { en: name, kh: name };
  let description = { en: '', kh: '' };
  let concept = { en: '', kh: '' };
  let code = '';
  let task = { en: '', kh: '' };

  if (name.includes("HOME")) {
    title = { en: "TS HOME", kh: "TS HOME - ទំព័រដើម TypeScript" };
    description = { en: "TypeScript is a syntactic superset of JavaScript which adds static typing.", kh: "TypeScript គឺជាភាសាដែលពង្រីកពី JavaScript ដោយបន្ថែមប្រព័ន្ធកំណត់ប្រភេទកូដយ៉ាងតឹងរ៉ឹង។" };
    concept = { en: "Catches mistakes in editor early before code compiles and crashes.", kh: "ជួយស្វែងរកនិងដោះស្រាយកំហុសកូដបានលឿនមុនពេលដំណើរការកម្មវិធី។" };
    code = `let active: boolean = true;\nlet lessonsCount: number = 29;\nconsole.log("Active status:", active);\nconsole.log("Lessons count:", lessonsCount);`;
    task = { en: "Change lessonsCount value to 100.", kh: "សូមផ្លាស់ប្តូរតម្លៃ lessonsCount ទៅជា 100។" };
  } else if (name.includes("Simple Types")) {
    title = { en: "TS Simple Types", kh: "TS Simple Types - ប្រភេទកូដសាមញ្ញ" };
    description = { en: "TypeScript has three main primitives: boolean, number, and string.", kh: "TypeScript មានប្រភេទចម្បង ៣ គឺ៖ boolean, number, និង string។" };
    concept = { en: "Explicitly declaring type prevents wrong data assignment.", kh: "ការប្រកាសប្រភេទច្បាស់លាស់ជួយការពារកុំឱ្យមានការបញ្ចូលទិន្នន័យខុសប្រភេទ។" };
    code = `let studentName: string = " Seyha";\nlet age: number = 21;\nconsole.log(studentName, age);`;
    task = { en: "Try to assign a boolean value to studentName to see the error.", kh: "សាកល្បងកំណត់តម្លៃ boolean ទៅឱ្យ studentName ដើម្បីសង្កេតមើលបញ្ហា។" };
  } else {
    // Dynamic fallback for other TS lessons
    title = { en: name, kh: `${name} - ភាសា TypeScript` };
    description = { en: `Leverage static typing to declare and restrict ${name} structures safely.`, kh: `ប្រើប្រាស់ប្រព័ន្ធ Static typing ដើម្បីកំណត់ប្រភេទនិងរចនាសម្ព័ន្ធ ${name} ឱ្យមានសុវត្ថិភាពខ្ពស់។` };
    concept = { en: `Using strict type checking with ${name} ensures code quality across teams.`, kh: `ការប្រើប្រាស់ strict type checking ជាមួយ ${name} ធានាបាននូវគុណភាពកូដខ្ពស់។` };
    code = `// រៀនពី៖ ${name}\ninterface CustomType {\n  name: string;\n  status: boolean;\n}\n\nlet sample: CustomType = {\n  name: "${name}",\n  status: true\n};\nconsole.log("Sample structure:", sample);`;
    task = { en: "Change status inside sample to false.", kh: "សូមប្តូរតម្លៃ status នៅក្នុង sample ទៅជា false។" };
  }

  return { id, name, title, description, concept, code, task };
}
