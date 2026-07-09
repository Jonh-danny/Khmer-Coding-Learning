import { LocalizedString } from '../types';

export interface QuizQuestion {
  question: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
}

export function generateQuiz(trackId: string, lessonName: string): QuizQuestion {
  const name = lessonName.toLowerCase();

  // HTML Tracks
  if (trackId === 'html') {
    if (name.includes('home') || name.includes('intro')) {
      return {
        question: {
          en: 'What does HTML stand for?',
          kh: 'តើពាក្យ HTML មកពីពាក្យពេញមួយណា?'
        },
        options: [
          { en: 'Hyper Text Markup Language', kh: 'Hyper Text Markup Language' },
          { en: 'Home Tool Markup Language', kh: 'Home Tool Markup Language' },
          { en: 'Hyperlinks and Text Markup Language', kh: 'Hyperlinks and Text Markup Language' },
          { en: 'High Tech Markup Language', kh: 'High Tech Markup Language' }
        ],
        correctIndex: 0,
        explanation: {
          en: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.',
          kh: 'HTML តំណាងឱ្យ Hyper Text Markup Language។ វាជាភាសាស្តង់ដារសម្រាប់បង្កើតគេហទំព័រ។'
        }
      };
    }
    if (name.includes('element')) {
      return {
        question: {
          en: 'Which element is used to define the largest heading in HTML?',
          kh: 'តើ element មួយណាប្រើសម្រាប់កំណត់ចំណងជើងធំបំផុតនៅក្នុង HTML?'
        },
        options: [
          { en: '<h6>', kh: '<h6>' },
          { en: '<head>', kh: '<head>' },
          { en: '<h1>', kh: '<h1>' },
          { en: '<heading>', kh: '<heading>' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'The <h1> element defines the most important or largest heading, while <h6> defines the least important or smallest heading.',
          kh: 'element <h1> ប្រើសម្រាប់ចំណងជើងធំនិងសំខាន់បំផុត ហើយ <h6> ប្រើសម្រាប់ចំណងជើងតូចបំផុត។'
        }
      };
    }
    if (name.includes('attribute')) {
      return {
        question: {
          en: 'Where should HTML attributes always be specified?',
          kh: 'តើ attribute របស់ HTML ត្រូវតែសរសេរនៅទីណាជានិច្ច?'
        },
        options: [
          { en: 'In the end tag', kh: 'នៅក្នុង end tag' },
          { en: 'In the start tag', kh: 'នៅក្នុង start tag' },
          { en: 'Both start and end tags', kh: 'ទាំងក្នុង start tag និង end tag' },
          { en: 'Inside the stylesheet', kh: 'នៅក្នុង stylesheet' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'All HTML attributes are specified inside the start tag (opening tag) of an element.',
          kh: 'រាល់ attribute របស់ HTML ទាំងអស់ត្រូវតែសរសេរនៅខាងក្នុង start tag (tag បើក) នៃ element ជានិច្ច។'
        }
      };
    }
    if (name.includes('paragraph') || name.includes('basic')) {
      return {
        question: {
          en: 'Which tag is used to create a paragraph in HTML?',
          kh: 'តើ tag មួយណាប្រើសម្រាប់បង្កើតកថាខណ្ឌ (Paragraph) នៅក្នុង HTML?'
        },
        options: [
          { en: '<paragraph>', kh: '<paragraph>' },
          { en: '<para>', kh: '<para>' },
          { en: '<p>', kh: '<p>' },
          { en: '<br>', kh: '<br>' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'The <p> tag defines a paragraph. Browsers automatically add some space before and after each <p> element.',
          kh: 'tag <p> ប្រើសម្រាប់កំណត់កថាខណ្ឌ។ កម្មវិធីរុករក (Browser) បន្ថែមគម្លាតខ្លះនៅពីមុខនិងក្រោយ <p> ដោយស្វ័យប្រវត្តិ។'
        }
      };
    }
    if (name.includes('editor')) {
      return {
        question: {
          en: 'Which of the following is a simple text editor used to write HTML on Windows?',
          kh: 'តើកម្មវិធីកែសម្រួលអត្ថបទសាមញ្ញមួយណាដែលប្រើសម្រាប់សរសេរ HTML លើ Windows?'
        },
        options: [
          { en: 'Notepad', kh: 'Notepad' },
          { en: 'MS Word', kh: 'MS Word' },
          { en: 'Photoshop', kh: 'Photoshop' },
          { en: 'Excel', kh: 'Excel' }
        ],
        correctIndex: 0,
        explanation: {
          en: 'Simple text editors like Notepad (Windows) or TextEdit (Mac) can be used to write and learn HTML without complex configurations.',
          kh: 'កម្មវិធីកែសម្រួលអត្ថបទសាមញ្ញដូចជា Notepad (Windows) ឬ TextEdit (Mac) អាចប្រើសម្រាប់សរសេរនិងរៀន HTML បានយ៉ាងងាយស្រួល។'
        }
      };
    }
    if (name.includes('style') || name.includes('color')) {
      return {
        question: {
          en: 'What is the correct HTML attribute for adding inline styles?',
          kh: 'តើ HTML attribute មួយណាដែលប្រើសម្រាប់សរសេរម៉ូតស្ទីលផ្ទាល់ខ្លួន (Inline Styles)?'
        },
        options: [
          { en: 'class', kh: 'class' },
          { en: 'styles', kh: 'styles' },
          { en: 'style', kh: 'style' },
          { en: 'font', kh: 'font' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'The style attribute specifies an inline style for an element, allowing you to change color, background, font size, and more.',
          kh: 'attribute style ប្រើសម្រាប់កំណត់ស្ទីលផ្ទាល់លើ element ដែលអនុញ្ញាតឱ្យអ្នកប្តូរពណ៌, ផ្ទៃខាងក្រោយ, ទំហំអក្សរជាដើម។'
        }
      };
    }
    if (name.includes('link')) {
      return {
        question: {
          en: 'Which attribute specifies the destination URL of an HTML hyperlink?',
          kh: 'តើ attribute មួយណាប្រើសម្រាប់កំណត់អាសយដ្ឋាន URL នៃតំណភ្ជាប់ (Hyperlink) របស់ HTML?'
        },
        options: [
          { en: 'src', kh: 'src' },
          { en: 'href', kh: 'href' },
          { en: 'link', kh: 'link' },
          { en: 'target', kh: 'target' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'The href attribute of the <a> tag indicates the link\'s destination target URL.',
          kh: 'attribute href របស់ tag <a> ប្រើសម្រាប់ប្រាប់ពីអាសយដ្ឋានគោលដៅនៃតំណភ្ជាប់។'
        }
      };
    }
    if (name.includes('image')) {
      return {
        question: {
          en: 'Which HTML attribute is required to display an image?',
          kh: 'តើ HTML attribute មួយណាដែលចាំបាច់បំផុតដើម្បីបង្ហាញរូបភាព?'
        },
        options: [
          { en: 'alt', kh: 'alt' },
          { en: 'href', kh: 'href' },
          { en: 'src', kh: 'src' },
          { en: 'link', kh: 'link' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'The src attribute is required for the <img> tag, as it specifies the path or URL to the image file to display.',
          kh: 'attribute src គឺចាំបាច់បំផុតសម្រាប់ tag <img> ព្រោះវាជាអ្នកប្រាប់ពីប្រភព ឬទីតាំងឯកសាររូបភាពដែលត្រូវបង្ហាញ។'
        }
      };
    }
    // General HTML fallback
    return {
      question: {
        en: 'Which tag is used to insert a line break in HTML?',
        kh: 'តើ tag មួយណាប្រើសម្រាប់ចុះបន្ទាត់ថ្មី (Line Break) នៅក្នុង HTML?'
      },
      options: [
        { en: '<break>', kh: '<break>' },
        { en: '<lb>', kh: '<lb>' },
        { en: '<br>', kh: '<br>' },
        { en: '<p>', kh: '<p>' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'The <br> tag inserts a single line break. It is an empty element, meaning it has no end tag.',
        kh: 'tag <br> ប្រើសម្រាប់ចុះបន្ទាត់ថ្មី។ វាជា empty element ដែលមានន័យថាវាមិនមាន tag បិទឡើយ។'
      }
    };
  }

  // CSS Tracks
  if (trackId === 'css') {
    if (name.includes('home') || name.includes('intro')) {
      return {
        question: {
          en: 'What does CSS stand for?',
          kh: 'តើពាក្យ CSS មកពីពាក្យពេញមួយណា?'
        },
        options: [
          { en: 'Cascading Style Sheets', kh: 'Cascading Style Sheets' },
          { en: 'Creative Style Sheets', kh: 'Creative Style Sheets' },
          { en: 'Computer Style Sheets', kh: 'Computer Style Sheets' },
          { en: 'Colorful Style Sheets', kh: 'Colorful Style Sheets' }
        ],
        correctIndex: 0,
        explanation: {
          en: 'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.',
          kh: 'CSS តំណាងឱ្យ Cascading Style Sheets។ វាពិពណ៌នាពីរបៀបដែលធាតុ HTML ត្រូវបង្ហាញលើអេក្រង់ ក្រដាស ឬប្រព័ន្ធផ្សព្វផ្សាយផ្សេងទៀត។'
        }
      };
    }
    if (name.includes('syntax')) {
      return {
        question: {
          en: 'Which is the correct CSS syntax?',
          kh: 'តើមួយណាជាទម្រង់កូដ CSS ដែលត្រឹមត្រូវ?'
        },
        options: [
          { en: 'body:color=black;', kh: 'body:color=black;' },
          { en: '{body;color:black;}', kh: '{body;color:black;}' },
          { en: 'body {color: black;}', kh: 'body {color: black;}' },
          { en: 'body: {color: black;}', kh: 'body: {color: black;}' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'A CSS rule-set consists of a selector and a declaration block: selector { property: value; }.',
          kh: 'ច្បាប់ CSS រួមមាន selector និង declaration block៖ selector { property: value; }។'
        }
      };
    }
    if (name.includes('selector')) {
      return {
        question: {
          en: 'How do you select elements with class name "test" in CSS?',
          kh: 'តើយើងត្រូវសរសេរ selector ដូចម្តេចដើម្បីជ្រើសរើសរាល់ធាតុដែលមាន class ឈ្មោះ "test" នៅក្នុង CSS?'
        },
        options: [
          { en: '#test', kh: '#test' },
          { en: '.test', kh: '.test' },
          { en: 'test', kh: 'test' },
          { en: '*test', kh: '*test' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'To select elements with a specific class, write a period (.) character, followed by the name of the class.',
          kh: 'ដើម្បីជ្រើសរើសធាតុតាម class ត្រូវសរសេរ dấu ចុច (.) ពីមុខឈ្មោះ class នោះ។'
        }
      };
    }
    if (name.includes('padding')) {
      return {
        question: {
          en: 'Which CSS property generates space inside an element\'s border?',
          kh: 'តើលក្ខណៈសម្បត្តិ CSS មួយណាប្រើសម្រាប់បង្កើតគម្លាតនៅខាងក្នុងបន្ទាត់ (Border) នៃធាតុ?'
        },
        options: [
          { en: 'margin', kh: 'margin' },
          { en: 'padding', kh: 'padding' },
          { en: 'border-spacing', kh: 'border-spacing' },
          { en: 'outline-width', kh: 'outline-width' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'The padding property defines the space between the content of an element and its border. Margin is for outside spacing.',
          kh: 'លក្ខណៈសម្បត្តិ padding កំណត់គម្លាតរវាងអត្ថបទកូដខាងក្នុងនិងបន្ទាត់ជុំវិញ។ ចំណែក margin គឺសម្រាប់គម្លាតខាងក្រៅបន្ទាត់។'
        }
      };
    }
    if (name.includes('margin')) {
      return {
        question: {
          en: 'Which CSS property generates space around elements, outside of any defined borders?',
          kh: 'តើលក្ខណៈសម្បត្តិ CSS មួយណាប្រើសម្រាប់បង្កើតគម្លាតនៅខាងក្រៅបន្ទាត់ (Border) នៃធាតុ?'
        },
        options: [
          { en: 'padding', kh: 'padding' },
          { en: 'spacing', kh: 'spacing' },
          { en: 'margin', kh: 'margin' },
          { en: 'border-offset', kh: 'border-offset' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'The margin properties are used to create space around elements, outside of any defined borders.',
          kh: 'លក្ខណៈសម្បត្តិ margin ប្រើសម្រាប់បង្កើតគម្លាតជុំវិញខាងក្រៅបន្ទាត់នៃធាតុ។'
        }
      };
    }
    return {
      question: {
        en: 'How do you add a background color for all <h1> elements in CSS?',
        kh: 'តើត្រូវសរសេរដូចម្តេចដើម្បីដាក់ពណ៌ផ្ទៃខាងក្រោយសម្រាប់រាល់ធាតុ <h1> ទាំងអស់នៅក្នុង CSS?'
      },
      options: [
        { en: 'h1.all {background-color:#FFFFFF;}', kh: 'h1.all {background-color:#FFFFFF;}' },
        { en: 'h1 {background-color:#FFFFFF;}', kh: 'h1 {background-color:#FFFFFF;}' },
        { en: 'all.h1 {background-color:#FFFFFF;}', kh: 'all.h1 {background-color:#FFFFFF;}' },
        { en: 'h1 {bg-color:#FFFFFF;}', kh: 'h1 {bg-color:#FFFFFF;}' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'To style all h1 elements, use the element selector `h1` and the property `background-color`.',
        kh: 'ដើម្បីរចនា <h1> ទាំងអស់ ត្រូវប្រើ element selector `h1` រួចកំណត់តម្លៃលក្ខណៈសម្បត្តិ `background-color`។'
      }
    };
  }

  // JS Tracks
  if (trackId === 'js') {
    if (name.includes('home') || name.includes('intro')) {
      return {
        question: {
          en: 'Which HTML element is used to embed JavaScript code?',
          kh: 'តើ element របស់ HTML មួយណាដែលប្រើសម្រាប់សរសេរកូដ JavaScript?'
        },
        options: [
          { en: '<javascript>', kh: '<javascript>' },
          { en: '<js>', kh: '<js>' },
          { en: '<script>', kh: '<script>' },
          { en: '<scripting>', kh: '<scripting>' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'In HTML, JavaScript code is inserted between <script> and </script> tags.',
          kh: 'នៅក្នុង HTML កូដ JavaScript ត្រូវតែសរសេរនៅខាងក្នុង tag <script> និង </script>។'
        }
      };
    }
    if (name.includes('function')) {
      return {
        question: {
          en: 'How do you call a function named "myFunction" in JavaScript?',
          kh: 'តើយើងត្រូវហៅប្រើប្រាស់ (call) មុខងារកូដ (function) ឈ្មោះ "myFunction" ដូចម្តេចនៅក្នុង JavaScript?'
        },
        options: [
          { en: 'call myFunction()', kh: 'call myFunction()' },
          { en: 'myFunction()', kh: 'myFunction()' },
          { en: 'call function myFunction()', kh: 'call function myFunction()' },
          { en: 'myFunction(call)', kh: 'myFunction(call)' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'You can invoke a function by writing its name followed by parentheses: `myFunction()`.',
          kh: 'យើងហៅដំណើរការ function ដោយសរសេរឈ្មោះវា រួចភ្ជាប់ជាមួយសញ្ញាវង់ក្រចក៖ `myFunction()`។'
        }
      };
    }
    if (name.includes('array')) {
      return {
        question: {
          en: 'How do you find the number of elements in a JavaScript array named "cars"?',
          kh: 'តើយើងត្រូវរកចំនួនសរុបនៃធាតុនៅក្នុង array ឈ្មោះ "cars" ដូចម្តេចនៅក្នុង JavaScript?'
        },
        options: [
          { en: 'cars.length', kh: 'cars.length' },
          { en: 'cars.count', kh: 'cars.count' },
          { en: 'cars.size()', kh: 'cars.size()' },
          { en: 'count(cars)', kh: 'count(cars)' }
        ],
        correctIndex: 0,
        explanation: {
          en: 'The `length` property of a JavaScript array returns the number of items/elements in that array.',
          kh: 'លក្ខណៈសម្បត្តិ `length` របស់ array ក្នុង JavaScript នឹងប្រាប់ពីចំនួនធាតុសរុបដែលមានក្នុង array នោះ។'
        }
      };
    }
    return {
      question: {
        en: 'Which variable keyword declares a block-scoped variable that cannot be reassigned?',
        kh: 'តើពាក្យគន្លឹះអថេរមួយណាដែលប្រើសម្រាប់ប្រកាសអថេរក្នុងប្លុក (Block-scoped) ដែលមិនអាចប្តូរតម្លៃឡើងវិញបាន?'
      },
      options: [
        { en: 'var', kh: 'var' },
        { en: 'let', kh: 'let' },
        { en: 'const', kh: 'const' },
        { en: 'static', kh: 'static' }
      ],
      correctIndex: 2,
      explanation: {
        en: 'The `const` keyword declares a block-scoped local variable whose value is constant and cannot be reassigned.',
        kh: 'ពាក្យគន្លឹះ `const` ប្រើសម្រាប់បង្កើតអថេរដែលស្គាល់ក្នុងប្លុក ហើយមិនអាចផ្លាស់ប្តូរតម្លៃបានឡើងវិញឡើយ។'
      }
    };
  }

  // Python Tracks
  if (trackId === 'python') {
    if (name.includes('syntax') || name.includes('intro')) {
      return {
        question: {
          en: 'How do you start a block of code (like loops or functions) in Python?',
          kh: 'តើយើងប្រើសញ្ញាអ្វីដើម្បីចាប់ផ្តើមប្លុកកូដ (ដូចជា loops ឬ functions) នៅក្នុង Python?'
        },
        options: [
          { en: 'With curly brackets {}', kh: 'ប្រើសញ្ញាធ្មេញកណ្តុរ {}' },
          { en: 'With a colon :', kh: 'ប្រើសញ្ញាចុចពីរ :' },
          { en: 'With parentheses ()', kh: 'ប្រើសញ្ញាវង់ក្រចក ()' },
          { en: 'With a semicolon ;', kh: 'ប្រើសញ្ញាចុចក្បៀស ;' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'Python uses a colon (:) to introduce code blocks, which are then defined by indentation levels.',
          kh: 'Python ប្រើប្រាស់សញ្ញាចុចពីរ (:) ដើម្បីចាប់ផ្តើមប្លុកកូដ ហើយប្លុកនីមួយៗសម្គាល់ដោយចម្ងាយឃ្លាត (Indentation)។'
        }
      };
    }
    if (name.includes('comment')) {
      return {
        question: {
          en: 'Which character is used to write a single-line comment in Python?',
          kh: 'តើនិមិត្តសញ្ញាមួយណាប្រើសម្រាប់សរសេរកំណត់ចំណាំកូដមួយជួរ (Comment) នៅក្នុង Python?'
        },
        options: [
          { en: '//', kh: '//' },
          { en: '/*', kh: '/*' },
          { en: '#', kh: '#' },
          { en: '--', kh: '--' }
        ],
        correctIndex: 2,
        explanation: {
          en: 'Python uses the hash (#) symbol to denote comments. Any text following # on the same line is ignored by the interpreter.',
          kh: 'Python ប្រើសញ្ញាទ្រុងជ្រូក (#) សម្រាប់កំណត់ចំណាំ។ រាល់អក្សរដែលនៅពីក្រោយ # នឹងមិនត្រូវបានដំណើរការឡើយ។'
        }
      };
    }
    return {
      question: {
        en: 'What is the correct syntax to output "Hello World" in Python?',
        kh: 'តើទម្រង់កូដមួយណាដែលត្រឹមត្រូវសម្រាប់បង្ហាញពាក្យ "Hello World" ទៅកាន់អេក្រង់នៅក្នុង Python?'
      },
      options: [
        { en: 'echo("Hello World")', kh: 'echo("Hello World")' },
        { en: 'print("Hello World")', kh: 'print("Hello World")' },
        { en: 'p("Hello World")', kh: 'p("Hello World")' },
        { en: 'console.log("Hello World")', kh: 'console.log("Hello World")' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'The `print()` function is used to output text/data in Python.',
        kh: 'អនុគមន៍ `print()` ត្រូវបានប្រើប្រាស់ដើម្បីបង្ហាញព័ត៌មាន ឬសារនៅលើអេក្រង់ក្នុង Python។'
      }
    };
  }

  // React Tracks
  if (trackId === 'react') {
    if (name.includes('prop')) {
      return {
        question: {
          en: 'How do you access props inside a React functional component?',
          kh: 'តើយើងទាញយកទិន្នន័យ props មកប្រើនៅក្នុង React functional component ដូចម្តេច?'
        },
        options: [
          { en: 'Via this.props', kh: 'តាមរយៈ this.props' },
          { en: 'As arguments passed to the component function', kh: 'ជាអាគុយម៉ង់ដែលបញ្ជូនទៅកាន់ component function' },
          { en: 'Using the useProps hook', kh: 'ប្រើប្រាស់ useProps hook' },
          { en: 'Directly from global variables', kh: 'ទាញផ្ទាល់ពីអថេរសកល' }
        ],
        correctIndex: 1,
        explanation: {
          en: 'In functional components, props are passed as an object parameter (argument) directly to the function.',
          kh: 'នៅក្នុង functional components តម្លៃ props ត្រូវបានបញ្ជូនជាប៉ារ៉ាម៉ែត្រ (arguments) ទៅកាន់មុខងារ function នោះផ្ទាល់។'
        }
      };
    }
    return {
      question: {
        en: 'What is the package name used to handle declarations and bundling of React apps?',
        kh: 'តើបណ្ណាល័យចម្បងដែលជាគ្រឹះក្នុងការបង្កើតសមាសភាគ React ឈ្មោះអ្វី?'
      },
      options: [
        { en: 'react', kh: 'react' },
        { en: 'react-dom', kh: 'react-dom' },
        { en: 'vite', kh: 'vite' },
        { en: 'redux', kh: 'redux' }
      ],
      correctIndex: 0,
      explanation: {
        en: 'The core `react` package is used to build components, manage state, and handle hook declarations.',
        kh: 'កញ្ចប់ស្នូល `react` ប្រើប្រាស់សម្រាប់បង្កើត components, គ្រប់គ្រង state និងកំណត់ការប្រើប្រាស់ hook នានា។'
      }
    };
  }

  // TypeScript Tracks
  if (trackId === 'typescript' || trackId === 'ts') {
    if (name.includes('simple') || name.includes('type')) {
      return {
        question: {
          en: 'Which of the following is NOT a core primitive type in TypeScript?',
          kh: 'តើប្រភេទមួយណាខាងក្រោមដែលមិនមែនជា primitive type របស់ TypeScript?'
        },
        options: [
          { en: 'string', kh: 'string' },
          { en: 'number', kh: 'number' },
          { en: 'boolean', kh: 'boolean' },
          { en: 'array', kh: 'array' }
        ],
        correctIndex: 3,
        explanation: {
          en: 'The primitive types in TS are string, number, and boolean. Arrays are object types.',
          kh: 'ប្រភេទ Primitive ក្នុង TS រួមមាន string, number, និង boolean។ ចំណែក array គឺជាប្រភេទ object type។'
        }
      };
    }
    return {
      question: {
        en: 'What is the main advantage of using TypeScript over JavaScript?',
        kh: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ TypeScript ធៀបនឹង JavaScript?'
      },
      options: [
        { en: 'It compiles directly to machine code', kh: 'វាបកប្រែផ្ទាល់ទៅកូដម៉ាស៊ីន' },
        { en: 'It adds static typing and compile-time type checks', kh: 'វាបន្ថែម static typing និងការត្រួតពិនិត្យប្រភេទកូដមុនដំណើរការ' },
        { en: 'It makes the code run 10x faster in browsers', kh: 'វាធ្វើឱ្យកូដរត់លឿនជាងមុន ១០ដង លើកម្មវិធីរុករក' },
        { en: 'It deletes all syntax errors automatically', kh: 'វាលុបរាល់កំហុសកូដដោយស្វ័យប្រវត្តិ' }
      ],
      correctIndex: 1,
      explanation: {
        en: 'TypeScript introduces optional static typing, allowing type checks at build time to prevent run-time exceptions.',
        kh: 'TypeScript បញ្ចូលការរឹតបន្តឹងប្រភេទកូដ (static typing) ដែលជួយចាប់កំហុសតាំងពីពេលសរសេរដើម្បីកុំឱ្យគាំងកម្មវិធីពេលរត់។'
      }
    };
  }

  // Default fallback
  return {
    question: {
      en: 'In coding, what does DRY stand for?',
      kh: 'នៅក្នុងការសរសេរកូដ តើពាក្យកាត់ DRY តំណាងឱ្យអ្វី?'
    },
    options: [
      { en: 'Do Repeat Yourself', kh: 'Do Repeat Yourself' },
      { en: 'Don\'t Repeat Yourself', kh: 'Don\'t Repeat Yourself' },
      { en: 'Develop Reliable Yields', kh: 'Develop Reliable Yields' },
      { en: 'Data Retrieval Yield', kh: 'Data Retrieval Yield' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'DRY stands for "Don\'t Repeat Yourself" — a core software principle aimed at reducing repetition of code patterns.',
      kh: 'DRY តំណាងឱ្យ "Don\'t Repeat Yourself" (កុំសរសេរកូដដដែលៗ) ដែលជាគោលការណ៍គ្រឹះក្នុងការកាត់បន្ថយភាពស្ទួនគ្នានៃកូដ។'
    }
  };
}
