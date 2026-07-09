import { ReferenceTopic } from './referenceData';

// Dynamic helper to construct a generic topic structure
function createBilingualTopic(
  id: string,
  name: string,
  titleEn: string,
  titleKh: string,
  descEn: string,
  descKh: string,
  conceptEn: string,
  conceptKh: string,
  code: string,
  taskEn: string,
  taskKh: string
): ReferenceTopic {
  return {
    id,
    name,
    title: { en: titleEn, kh: titleKh },
    description: { en: descEn, kh: descKh },
    concept: { en: conceptEn, kh: conceptKh },
    code,
    task: { en: taskEn, kh: taskKh }
  };
}

export function getCppTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'C++ HOME - Learn C++',
      'C++ HOME - រៀនភាសា C++',
      'Welcome to the C++ Tutorial! C++ is a powerful, high-performance programming language used to develop operating systems, browsers, games, and more.',
      'សូមស្វាគមន៍មកកាន់មេរៀន C++! C++ គឺជាភាសាសរសេរកម្មវិធីដែលមានប្រសិទ្ធភាពខ្ពស់ និងពេញនិយមបំផុតសម្រាប់បង្កើតប្រព័ន្ធប្រតិបត្តិការ កម្មវិធីរុករក ហ្គេម និងប្រព័ន្ធធំៗ។',
      'C++ is a compiled, statically typed language developed by Bjarne Stroustrup as an extension of the C language. It supports multi-paradigm programming (procedural, OOP, and generic).',
      'C++ គឺជាភាសាបកប្រែកូដ (Compiled) និងមានការកំណត់ប្រភេទយ៉ាងតឹងរ៉ឹង បង្កើតឡើងដោយ Bjarne Stroustrup ជាការបន្ថែមលើភាសា C។ វាគាំទ្រការសរសេរកម្មវិធីច្រើនទម្រង់ (លំដាប់លំដោយ OOP និងទម្រង់ទូទៅ Templates)។',
      `#include <iostream>\n\nint main() {\n    std::cout << "សួស្តីពិភពលោក (Hello World in C++)";\n    return 0;\n}`,
      'Modify the output text inside standard cout statement to print your name.',
      'សូមផ្លាស់ប្តូរអត្ថបទនៅក្នុង cout ដើម្បីបង្ហាញឈ្មោះរបស់អ្នកវិញ។'
    );
  }

  if (normName.includes('syntax')) {
    return createBilingualTopic(
      id, name,
      'C++ Syntax and Structure',
      'C++ Syntax - ទម្រង់រចនាសម្ព័ន្ធកូដ',
      'Understand the fundamental syntax and file structure of a standard C++ console application.',
      'ស្វែងយល់អំពីរចនាសម្ព័ន្ធកូដគ្រឹះនៃកម្មវិធី Console C++ ស្តង់ដារ។',
      'Every C++ program has a main() function which serves as the entry point. The `#include <iostream>` statement imports input-output stream functionalities.',
      'គ្រប់កម្មវិធី C++ ទាំងអស់ត្រូវការអនុគមន៍ main() ជាចំណុចចាប់ផ្តើម។ `#include <iostream>` ប្រើសម្រាប់ទាញចូលបណ្ណាល័យបញ្ចូល/បញ្ចេញទិន្នន័យ។',
      `#include <iostream>\nusing namespace std;\n\nint main() {\n    // នេះគឺជាការចាប់ផ្តើម\n    cout << "រៀន C++ Syntax" << endl;\n    return 0;\n}`,
      'Add a new line printing "Practice makes perfect" below the current cout statement.',
      'សូមបន្ថែមបន្ទាត់ថ្មីមួយទៀតដោយប្រើ cout បង្ហាញពាក្យ "Practice makes perfect" នៅខាងក្រោម។'
    );
  }

  if (normName.includes('variables')) {
    return createBilingualTopic(
      id, name,
      'C++ Variables',
      'C++ Variables - ការប្រកាសអថេរ',
      'Learn how to declare and assign memory cells for holding different types of data in C++.',
      'ស្វែងយល់ពីរបៀបប្រកាស និងកំណត់តម្លៃឱ្យអថេរសម្រាប់រក្សាទុកទិន្នន័យក្នុង C++។',
      'Variables are containers for storing data values. In C++, you must declare the variable type explicitly (like int, double, string, char, bool) before allocation.',
      'អថេរគឺជាប្រអប់សម្រាប់ផ្ទុកទិន្នន័យ។ ក្នុង C++ អ្នកត្រូវតែបញ្ជាក់ប្រភេទអថេរជាមុន (ដូចជា int, double, string, char, bool) មុននឹងប្រើប្រាស់។',
      `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    string name = "Seyha";\n    cout << name << " is " << age << " years old.\\n";\n    return 0;\n}`,
      'Change the value of age to 25 and rerun the compilation.',
      'សូមផ្លាស់ប្តូរតម្លៃនៃ age ទៅជា 25 រួចចុចរត់ដើម្បីពិនិត្យលទ្ធផល។'
    );
  }

  if (normName.includes('data types')) {
    return createBilingualTopic(
      id, name,
      'C++ Data Types',
      'C++ Data Types - ប្រភេទកូដទិន្នន័យ',
      'Explore the built-in numeric, character, boolean, and string data types supported natively in C++.',
      'ស្វែងយល់ពីប្រភេទគ្រឹះនៃទិន្នន័យលេខ អក្សរ ប៊ូលីន និងអត្ថបទដែលមានស្រាប់ក្នុង C++។',
      'C++ types define the size and type of information a variable can hold (e.g. float 4 bytes, double 8 bytes, char 1 byte).',
      'ប្រភេទកូដក្នុង C++ កំណត់ទំហំមេម៉ូរី និងទម្រង់ព័ត៌មានដែលអថេរអាចផ្ទុកបាន (ឧទាហរណ៍ Float ៤ បៃ, Double ៨ បៃ, Char ១ បៃ)។',
      `#include <iostream>\nusing namespace std;\n\nint main() {\n    double price = 19.99;\n    char grade = 'A';\n    bool isCompleted = true;\n    cout << "Price: " << price << ", Grade: " << grade << endl;\n    return 0;\n}`,
      'Add a float type variable with value 3.14f and display it.',
      'សូមបន្ថែមអថេរប្រភេទ float មួយតម្លៃ 3.14f រួចបង្ហាញវាចេញមកក្រៅ។'
    );
  }

  if (normName.includes('oop') || normName.includes('class')) {
    return createBilingualTopic(
      id, name,
      'C++ OOP and Classes',
      'C++ OOP - ថ្នាក់និងវត្ថុ',
      'Understand Object-Oriented Programming (OOP) concepts in C++ including Classes, Attributes, and Methods.',
      'ស្វែងយល់ពីគោលការណ៍ OOP ក្នុងភាសា C++ រួមមាន ថ្នាក់ (Classes) គុណលក្ខណៈ (Attributes) និងវិធីសាស្ត្រ (Methods)។',
      'OOP helps keep C++ code DRY (Don\'t Repeat Yourself), structural, and clean. A class is a blueprint, and an object is an instance of that class.',
      'OOP ជួយឱ្យកូដ C++ មិនស្ទួនគ្នា មានរចនាសម្ព័ន្ធច្បាស់លាស់ និងស្អាត។ Class គឺជាប្លង់គំរូ ចំណែក Object គឺជាវត្ថុតំណាងជាក់ស្តែងនៃ Class នោះ។',
      `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n  public:\n    string brand;\n    void honk() {\n        cout << "Tuut! Tuut!\\n";\n    }\n};\n\nint main() {\n    Car myCar;\n    myCar.brand = "Toyota";\n    cout << "My car brand: " << myCar.brand << endl;\n    myCar.honk();\n    return 0;\n}`,
      'Add a new string attribute named "color" inside Car class, set its value in main, and print it.',
      'សូមបន្ថែមគុណលក្ខណៈប្រភេទ string ឈ្មោះ "color" ទៅក្នុង Car Class រួចកំណត់តម្លៃ និងបង្ហាញវាក្នុង main()។'
    );
  }

  // Dynamic fallback for all other C++ topics
  return createBilingualTopic(
    id, name,
    `${name} - C++ Track`,
    `${name} - មេរៀនភាសា C++`,
    `Master the professional syntax of ${name} and understand compiler behavior in static runtime memory.`,
    `ស្វែងយល់លម្អិតអំពីការប្រើប្រាស់ ${name} និងរបៀបគ្រប់គ្រងដំណើរការកូដក្នុងភាសា C++។`,
    `Studying ${name} will help you write high-efficiency, safe C++ code for embedded system engineering.`,
    `ការស្វែងយល់ច្បាស់ពី ${name} ជួយឱ្យអ្នកសរសេរកូដប្រកបដោយប្រសិទ្ធភាព សុវត្ថិភាព និងល្បឿនលឿនបំផុត។`,
    `#include <iostream>\nusing namespace std;\n\nint main() {\n    // រៀនពី៖ ${name}\n    cout << "កំពុងសិក្សា៖ ${name}\\n";\n    return 0;\n}`,
    'Modify or expand standard cout message to experiment with C++ compiler output.',
    'សូមសាកល្បងផ្លាស់ប្តូរសារ cout ខាងលើដើម្បីដំណើរការកូដសាកល្បងរបស់អ្នក។'
  );
}

export function getCsharpTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'C# HOME - Learn C#',
      'C# HOME - រៀនភាសា C#',
      'Welcome to the C# Tutorial! C# is an elegant, modern, object-oriented language developed by Microsoft running on the .NET framework.',
      'សូមស្វាគមន៍មកកាន់មេរៀន C#! C# គឺជាភាសាដ៏ប្រណីត ទំនើប និងជាភាសា OOP អភិវឌ្ឍន៍ដោយក្រុមហ៊ុន Microsoft ដំណើរការលើ .NET framework។',
      'C# (pronounced "C-Sharp") is widely used for enterprise web applications, desktop software, mobile applications, and high-fidelity Unity game development.',
      'C# ត្រូវបានគេប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍកម្មវិធីសហគ្រាស គេហទំព័រ កម្មវិធីទូរស័ព្ទ និងការបង្កើតហ្គេម 3D លំដាប់ថ្នាក់ពិភពលោកជាមួយ Unity Engine។',
      `using System;\n\nnamespace HelloWorld {\n  class Program {\n    static void Main(string[] args) {\n      Console.WriteLine("សួស្តីពីភាសា C# (Hello from C#)");\n    }\n  }\n}`,
      'Change the Console message to print your customized welcome statement.',
      'សូមផ្លាស់ប្តូរសារ Console ខាងលើដើម្បីបង្ហាញពាក្យស្វាគមន៍ផ្ទាល់ខ្លួនរបស់អ្នក។'
    );
  }

  if (normName.includes('syntax')) {
    return createBilingualTopic(
      id, name,
      'C# Syntax and Namespaces',
      'C# Syntax - ទម្រង់រចនាសម្ព័ន្ធកូដ',
      'Discover the class-bound syntax, namespaces, and core entry methods of Microsoft C#.',
      'ស្វែងយល់អំពីរចនាសម្ព័ន្ធ Class, namespace, និងវិធីសាស្ត្រចាប់ផ្តើមរបស់ C#។',
      'In C#, every line of code runs inside a class. Namespaces are used to organize classes and prevent namespace collisions.',
      'នៅក្នុង C# គ្រប់បន្ទាត់កូដទាំងអស់ត្រូវតែស្ថិតនៅក្នុង Class។ Namespaces ប្រើសម្រាប់គ្រប់គ្រងបណ្តុំកូដ និងការពារកុំឱ្យជាន់ឈ្មោះគ្នា។',
      `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("សិក្សា C# Syntax");\n  }\n}`,
      'Modify Console.WriteLine statement and add another Console.Write message on a new line.',
      'សូមកែកូដ Console.WriteLine និងបន្ថែម Console.Write មួយបន្ទាត់ទៀតនៅខាងក្រោម។'
    );
  }

  if (normName.includes('variables')) {
    return createBilingualTopic(
      id, name,
      'C# Variables and Typing',
      'C# Variables - ប្រកាសអថេរ',
      'Understand memory variables allocation, type safety, and value assignment syntax in C#.',
      'ស្វែងយល់ពីរបៀបបង្កើតអថេរក្នុងមេម៉ូរី ការធានាសុវត្ថិភាពប្រភេទ និងការកំណត់តម្លៃក្នុង C#។',
      'Variables store specific typed properties. C# supports automatic variable type inference via the "var" keyword.',
      'អថេរផ្ទុកទិន្នន័យទៅតាមប្រភេទជាក់លាក់។ C# ក៏គាំទ្រការទស្សន៍ទាយប្រភេទអថេរដោយស្វ័យប្រវត្តិតាមរយៈពាក្យគន្លឹះ "var"។',
      `using System;\n\nclass Program {\n  static void Main() {\n    string username = "Sok";\n    int score = 95;\n    Console.WriteLine(username + " got score: " + score);\n  }\n}`,
      'Assign score variable to 100, then display the outcome.',
      'សូមកំណត់តម្លៃអថេរ score ទៅជា 100 រួចដំណើរការដើម្បីពិនិត្យលទ្ធផល។'
    );
  }

  if (normName.includes('oop') || normName.includes('classes')) {
    return createBilingualTopic(
      id, name,
      'C# OOP Principles',
      'C# OOP - គោលការណ៍សរសេរកូដ OOP',
      'Dive into Object-Oriented programming inside the .NET runtime with class fields and object instantiation.',
      'ស្វែងយល់លម្អិតពីការសរសេរកូដបែបវត្ថុ (OOP) ក្នុងប្រព័ន្ធ .NET ជាមួយ Class fields និងការបង្កើត Objects។',
      'C# is purely object-oriented. Concepts like inheritance, polymorphism, encapsulation, and interfaces define the standard .NET software patterns.',
      'C# គឺជាភាសា OOP សុទ្ធសាធ។ គោលគំនិតដូចជាការបន្តពូជ (Inheritance), Polymorphism, Encapsulation, និង Interfaces កំណត់ទម្រង់កម្មវិធីស្តង់ដារ .NET។',
      `using System;\n\nclass Animal {\n  public void makeSound() {\n    Console.WriteLine("The animal makes a sound");\n  }\n}\n\nclass Program {\n  static void Main() {\n    Animal pet = new Animal();\n    pet.makeSound();\n  }\n}`,
      'Create a subclass of Animal or instantiate animal to see console outputs.',
      'សូមសាកល្បងដំណើរការកូដខាងលើ ឬបង្កើត Object ថ្មីដើម្បីសង្កេតមើលលទ្ធផល។'
    );
  }

  // Dynamic fallback for C#
  return createBilingualTopic(
    id, name,
    `${name} - C# Track`,
    `${name} - មេរៀនភាសា C#`,
    `Expand your software engineering toolkit by learning ${name} on the enterprise .NET runtime environment.`,
    `ពង្រីកសមត្ថភាពសរសេរកម្មវិធីរបស់អ្នកដោយការរៀន ${name} ក្នុងបរិស្ថាន .NET របស់ក្រុមហ៊ុន Microsoft។`,
    `Learning C# structures like ${name} makes you eligible for modern corporate backend and game development career tracks.`,
    `ការចេះប្រើប្រាស់រចនាសម្ព័ន្ធ ${name} ជួយឱ្យអ្នកមានឱកាសខ្ពស់ក្នុងការក្លាយជាអ្នកអភិវឌ្ឍន៍ Backend និងហ្គេមអាជីព។`,
    `using System;\n\nclass Program {\n  static void Main() {\n    // រៀនពី៖ ${name}\n    Console.WriteLine("កំពុងសិក្សា៖ ${name}");\n  }\n}`,
    'Add statements inside C# Main method to output custom statements.',
    'សូមសរសេរកូដបន្ថែមក្នុង method Main() ដើម្បីសាកល្បងសមត្ថភាពកូដរបស់អ្នក។'
  );
}

export function getPhpTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'PHP HOME - Learn PHP',
      'PHP HOME - រៀនភាសា PHP',
      'Welcome to PHP, a widely-used server-side open source scripting language that is especially suited for web development.',
      'សូមស្វាគមន៍មកកាន់មេរៀន PHP! PHP គឺជាភាសាសរសេរស្គ្រីបខាងម៉ាស៊ីនបម្រើ (Server-side) ដែលពេញនិយមបំផុតសម្រាប់អភិវឌ្ឍគេហទំព័រ។',
      'PHP code is executed on the server, and the result is returned to the browser as plain HTML. It powers major Content Management Systems like WordPress.',
      'កូដ PHP ត្រូវបានដំណើរការលើ Server រួចបញ្ជូនលទ្ធផលត្រឡប់មកកម្មវិធីរុករក (Browser) ជាទម្រង់ HTML សាមញ្ញ។ វាជាកម្លាំងចលករនៃ WordPress និងប្រព័ន្ធគ្រប់គ្រងមាតិកាធំៗជាច្រើន។',
      `<?php\necho "សួស្តីពីភាសា PHP (Hello World)";\n?>`,
      'Modify the echo statement inside the PHP tags to output your customized text.',
      'សូមផ្លាស់ប្តូរអត្ថបទនៅក្នុង echo ដើម្បីបង្ហាញសារដែលអ្នកចង់បាន។'
    );
  }

  if (normName.includes('syntax')) {
    return createBilingualTopic(
      id, name,
      'PHP Basic Syntax',
      'PHP Syntax - ទម្រង់រចនាសម្ព័ន្ធកូដ',
      'Learn how to write basic PHP block wrappers, handle semicolons, and output content dynamically.',
      'ស្វែងយល់ពីរបៀបសរសេរប្លុកកូដ PHP ការប្រើប្រាស់សញ្ញាក្បៀសចុងបន្ទាត់ និងការបង្ហាញលទ្ធផល។',
      'A PHP script starts with `<?php` and ends with `?>`. Statements in PHP are case-insensitive for functions, but case-sensitive for variables.',
      'ស្គ្រីប PHP ចាប់ផ្តើមដោយ `<?php` និងបញ្ចប់ដោយ `?>`។ សេចក្តីថ្លែងការណ៍ក្នុង PHP មិនប្រកាន់អក្សរតូចធំចំពោះឈ្មោះអនុគមន៍ឡើយ តែប្រកាន់ចំពោះឈ្មោះអថេរ។',
      `<?php\n// នេះជាកូដ PHP\necho "រៀន PHP Syntax\\n";\nECHO "ឈ្មោះអនុគមន៍គឺ Case-Insensitive!";\n?>`,
      'Add a third echo statement displaying your custom string.',
      'សូមបន្ថែម echo មួយជួរទៀតដើម្បីបង្ហាញអត្ថបទផ្ទាល់ខ្លួនរបស់អ្នក។'
    );
  }

  if (normName.includes('variables')) {
    return createBilingualTopic(
      id, name,
      'PHP Variables and Scopes',
      'PHP Variables - ការបង្កើតអថេរ',
      'Discover how to declare variables dynamically using the dollar sign prefix in PHP.',
      'ស្វែងយល់ពីរបៀបប្រកាសអថេរដោយស្វ័យប្រវត្តិតាមរយៈការប្រើសញ្ញាដុល្លារ ($) ក្នុង PHP។',
      'In PHP, a variable starts with the $ sign, followed by the name. PHP is a loosely typed language, meaning it infers types automatically.',
      'ក្នុង PHP ឈ្មោះអថេរត្រូវតែផ្តើមដោយសញ្ញា $។ PHP គឺជាភាសាកំណត់ប្រភេទធូររលុង (Loosely typed) ដែលវានឹងកំណត់ប្រភេទអថេរដោយស្វ័យប្រវត្តិទៅតាមតម្លៃបញ្ចូល។',
      `<?php\n$txt = "W3Schools Khmer";\n$x = 5;\n$y = 10.5;\necho "ស្វាគមន៍មកកាន់ " . $txt . "\\n";\necho "ផលបូក៖ " . ($x + $y);\n?>`,
      'Change the variables $x and $y to sum other numbers.',
      'សូមសាកល្បងប្តូរតម្លៃលេខក្នុងអថេរ $x និង $y ដើម្បីគណនាផលបូកផ្សេងទៀត។'
    );
  }

  // Dynamic fallback for PHP
  return createBilingualTopic(
    id, name,
    `${name} - PHP Tutorial`,
    `${name} - មេរៀនភាសា PHP`,
    `Build professional web servers and process network backend requests dynamically using PHP ${name}.`,
    `រៀនស្ថាបនាប្រព័ន្ធ Server អាជីព និងដោះស្រាយការស្នើសុំទិន្នន័យបណ្តាញដោយប្រើប្រាស់ PHP ${name}។`,
    `PHP ${name} offers native utility structures to easily interact with dynamic forms and template processors.`,
    `ការយល់ដឹងពី PHP ${name} ផ្តល់នូវភាពងាយស្រួលក្នុងការចាត់ចែងទិន្នន័យ Form និងប្រព័ន្ធរៀបចំទំព័រគេហទំព័រ។`,
    `<?php\n// កំពុងសិក្សា៖ ${name}\necho "រៀនមេរៀន៖ ${name}";\n?>`,
    'Write standard PHP expressions within the tags to test interpreter responses.',
    'សូមសរសេរកូដ PHP នៅក្នុង tag ដើម្បីពិនិត្យមើលដំណើរការកូដនៅលើ server។'
  );
}

export function getJavaTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'Java HOME - Learn Java',
      'Java HOME - រៀនភាសា Java',
      'Welcome to the Java Tutorial! Java is a versatile, secure, class-based object-oriented language designed to have as few implementation dependencies as possible.',
      'សូមស្វាគមន៍មកកាន់មេរៀន Java! Java គឺជាភាសាសរសេរកម្មវិធី OOP ផ្អែកលើ Class ដែលមានសុវត្ថិភាព អាចរត់បានគ្រប់ប្រព័ន្ធប្រតិបត្តិការ (WORA)។',
      'Java runs on billions of devices worldwide. It is the premier language for enterprise backend systems, Android applications, and financial services software.',
      'Java ដំណើរការលើឧបករណ៍រាប់ពាន់លានទូទាំងពិភពលោក។ វាជាភាសាចម្បងសម្រាប់ប្រព័ន្ធធនាគារ សហគ្រាសខ្នាតយក្ស និងការអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ Android។',
      `public class Main {\n  public static void Main(string[] args) {\n    System.out.println("សួស្តីពីភាសា Java (Hello from Java)");\n  }\n}`,
      'Modify the output printed by System.out.println statement inside the Main class.',
      'សូមផ្លាស់ប្តូរសារអក្សរនៅក្នុង System.out.println ដើម្បីពិនិត្យលទ្ធផលក្នុង console។'
    );
  }

  if (normName.includes('syntax')) {
    return createBilingualTopic(
      id, name,
      'Java Syntax and main Method',
      'Java Syntax - ទម្រង់រចនាសម្ព័ន្ធកូដ',
      'Examine the formal syntax of Java programs including file matching classes and the standard main method entry.',
      'ស្វែងយល់ពីរូបមន្តរចនាសម្ព័ន្ធកូដក្នុង Java រួមមានការបង្កើត Class ឱ្យដូចឈ្មោះ File និង Method main()។',
      'In Java, every program must reside inside a class whose name exactly matches the filename. The execution starts from the static `main` method.',
      'ក្នុង Java គ្រប់កម្មវិធីទាំងអស់ត្រូវតែស្ថិតនៅក្នុង Class ហើយឈ្មោះ Class ត្រូវតែដូចគ្នាទៅនឹងឈ្មោះ File។ កូដចាប់ផ្តើមរត់ចេញពី method `main`។',
      `public class Main {\n  public static void Main(string[] args) {\n    System.out.println("រៀន Java Syntax");\n  }\n}`,
      'Add a second System.out.println instruction to print your personalized sentence.',
      'សូមសរសេរបន្ថែម System.out.println មួយបន្ទាត់ទៀតដើម្បីបង្ហាញអត្ថបទថ្មីរបស់អ្នក។'
    );
  }

  if (normName.includes('variables')) {
    return createBilingualTopic(
      id, name,
      'Java Variables',
      'Java Variables - ការប្រកាសអថេរ',
      'Understand strong types, declaration rules, and access rules of Java memory variables.',
      'ស្វែងយល់អំពីប្រភេទអថេរដ៏តឹងរ៉ឹង វិធាននៃការប្រកាស និងរបៀបប្រើប្រាស់អថេរក្នុង Java។',
      'Java requires explicit type declaration. Supported primitives include int, float, double, char, boolean, alongside object types like String.',
      'Java តម្រូវឱ្យកំណត់ប្រភេទអថេរច្បាស់លាស់។ ប្រភេទគ្រឹះរួមមាន int, float, double, char, boolean និងប្រភេទ Class ដូចជា String។',
      `public class Main {\n  public static void Main(string[] args) {\n    string name = "Bona";\n    int score = 88;\n    System.out.println(name + " score is " + score);\n  }\n}`,
      'Change the score value and rerun compilation to observe output update.',
      'សូមប្តូរតម្លៃ score រួចចុច compile ដើម្បីសង្កេតមើលលទ្ធផលប្រែប្រួល។'
    );
  }

  if (normName.includes('oop') || normName.includes('classes')) {
    return createBilingualTopic(
      id, name,
      'Java OOP Paradigm',
      'Java OOP - គោលគំនិត OOP ក្នុង Java',
      'Master object-oriented concepts like Inheritance, Polymorphism, and Encapsulation in Oracle Java.',
      'រៀនឱ្យច្បាស់ពីគោលការណ៍សរសេរកូដ OOP ដូចជាការបន្តពូជ (Inheritance), Polymorphism, និង Encapsulation ក្នុង Java។',
      'Java is heavily object-oriented. Code structural layouts are organized into classes, constructors, methods, and access control levels (public, private, protected).',
      'Java គាំទ្រការសរសេរកូដបែប OOP យ៉ាងខ្លាំង។ រចនាសម្ព័ន្ធកូដត្រូវបានបែងចែកជា classes, constructors, methods និងកម្រិតគ្រប់គ្រងសិទ្ធិ (public, private, protected)។',
      `class Car {\n  string brand = "Ford";\n  void drive() {\n    System.out.println("Vroom!");\n  }\n}\n\npublic class Main {\n  public static void Main(string[] args) {\n    Car myCar = new Car();\n    System.out.println("Brand: " + myCar.brand);\n    myCar.drive();\n  }\n}`,
      'Instantiate the Car object inside Java Main method and run to hear it drive.',
      'សូមបង្កើត Car Object ក្នុង Main method រួចរត់កម្មវិធីដើម្បីសង្កេតមើលលទ្ធផល។'
    );
  }

  // Dynamic fallback for Java
  return createBilingualTopic(
    id, name,
    `${name} - Java Track`,
    `${name} - មេរៀនភាសា Java`,
    `Build safe, portable, high-scale enterprise applications using Java ${name}.`,
    `អភិវឌ្ឍកម្មវិធីដែលមានសមត្ថភាពខ្ពស់ សុវត្ថិភាពខ្ពស់ និងរត់បានគ្រប់ប្រព័ន្ធប្រតិបត្តិការជាមួយ Java ${name}។`,
    `Understanding Java ${name} concepts ensures you build sound programming logic with static memory safety.`,
    `ការយល់ដឹងពីគោលគំនិត Java ${name} ជួយឱ្យអ្នកបង្កើតឡូជីខលកម្មវិធីបានល្អ និងមានសុវត្ថិភាពមេម៉ូរីខ្ពស់។`,
    `public class Main {\n  public static void Main(string[] args) {\n    // រៀនពី៖ ${name}\n    System.out.println("កំពុងសិក្សា៖ ${name}");\n  }\n}`,
    'Perform experiments by changing instructions inside standard Main method framework.',
    'សូមសរសេរកូដសាកល្បងរបស់អ្នកនៅក្នុង Method Main ខាងលើ។'
  );
}

export function getBootstrapTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'Bootstrap 5 - Responsive Layouts',
      'Bootstrap 5 - រៀនប្រើប្រាស់ Bootstrap 5',
      'Welcome to Bootstrap 5! Bootstrap is the most popular CSS framework for building responsive, mobile-first websites quickly.',
      'សូមស្វាគមន៍មកកាន់មេរៀន Bootstrap 5! Bootstrap គឺជា CSS Framework ដែលពេញនិយមបំផុតសម្រាប់បង្កើតគេហទំព័ររហ័ស ស្អាត និងធន់នឹងទំហំអេក្រង់ផ្សេងៗ។',
      'Bootstrap 5 includes built-in responsive grid system, ready-to-use components, flexbox utilities, and clean utility classes that save hours of design.',
      'Bootstrap 5 រួមបញ្ចូលទាំងប្រព័ន្ធ Grid ដែលឆ្លើយតបគ្រប់ទំហំអេក្រង់ (Responsive), សមាសភាគ UI ដែលស្រាប់ៗ, Flexbox utilities និងថ្នាក់ជំនួយដទៃទៀត។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <title>Bootstrap 5 Example</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n\n<div class="container mt-5 text-center">\n  <div class="p-5 bg-primary text-white rounded-4 shadow-lg">\n    <h1 class="display-4 fw-bold">ស្វាគមន៍មកកាន់ Bootstrap 5!</h1>\n    <p class="lead">នេះជាគេហទំព័រដែលឆ្លើយតបនឹងទំហំទូរស័ព្ទ និងកុំព្យូទ័របានយ៉ាងល្អ។</p>\n    <button class="btn btn-light btn-lg fw-bold shadow-sm">ស្វែងយល់បន្ថែម</button>\n  </div>\n</div>\n\n</body>\n</html>`,
      'Try changing the background color class from "bg-primary" to "bg-success" inside the container.',
      'សូមសាកល្បងផ្លាស់ប្តូរថ្នាក់ពណ៌ផ្ទៃខាងក្រោយពី "bg-primary" ទៅជា "bg-success" ក្នុង container ដើម្បីមើលការប្រែប្រួល។'
    );
  }

  if (normName.includes('containers')) {
    return createBilingualTopic(
      id, name,
      'Bootstrap 5 Containers',
      'Bootstrap 5 Containers - ប្រអប់ផ្ទុក',
      'Understand the difference between fixed .container and fluid .container-fluid layouts in Bootstrap.',
      'ស្វែងយល់ពីភាពខុសគ្នារវាងប្លង់ប្រអប់ផ្ទុកថេរ .container និងប្រអប់ផ្ទុកពេញទទឹង .container-fluid ក្នុង Bootstrap។',
      'Containers are the most basic layout element in Bootstrap and are required when using the responsive grid system.',
      'Containers គឺជាធាតុប្លង់គ្រឹះបំផុតនៅក្នុង Bootstrap ហើយចាំបាច់ត្រូវតែមាននៅពេលប្រើប្រាស់ប្រព័ន្ធ Grid ឆ្លើយតបអេក្រង់។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n\n<div class="container bg-light p-3 my-3 border rounded">\n  <h3>កុងតឺន័រធម្មតា (Fixed .container)</h3>\n  <p>វាមានទទឹងអតិបរមាទៅតាមទំហំអេក្រង់និមួយៗ។</p>\n</div>\n\n<div class="container-fluid bg-dark text-white p-3 my-3 border rounded">\n  <h3>កុងតឺន័រពេញទទឹង (.container-fluid)</h3>\n  <p>វាពង្រីកពេញទទឹងអេក្រង់ ១០០% ជានិច្ច។</p>\n</div>\n\n</body>\n</html>`,
      'Test responsiveness by resizing the preview viewport or adding padding classes.',
      'សូមសាកល្បងពិនិត្យមើលភាពខុសគ្នារវាង កុងតឺន័រទាំងពីរខាងលើ។'
    );
  }

  if (normName.includes('buttons')) {
    return createBilingualTopic(
      id, name,
      'Bootstrap 5 Buttons',
      'Bootstrap 5 Buttons - ប៊ូតុងរចនាបថ',
      'Utilize Bootstrap helper classes to build beautiful custom state buttons and button sizes.',
      'ប្រើប្រាស់ថ្នាក់ជំនួយរបស់ Bootstrap ដើម្បីបង្កើតប៊ូតុងដែលមានរចនាបថស្អាតៗ និងទំហំផ្សេងៗគ្នា។',
      'Bootstrap offers helper classes like `.btn`, `.btn-primary`, `.btn-outline-danger`, and sizes like `.btn-lg` or `.btn-sm`.',
      'Bootstrap ផ្តល់នូវថ្នាក់រចនាដូចជា `.btn`, `.btn-primary`, `.btn-outline-danger` និងទំហំផ្សេងៗដូចជា `.btn-lg` ឬ `.btn-sm`។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n\n<div class="container mt-4 text-center">\n  <button class="btn btn-primary m-1">Primary</button>\n  <button class="btn btn-secondary m-1">Secondary</button>\n  <button class="btn btn-success m-1">Success</button>\n  <button class="btn btn-outline-danger m-1">Outline Danger</button>\n  <br><br>\n  <button class="btn btn-warning btn-lg shadow m-1">Large Warning</button>\n</div>\n\n</body>\n</html>`,
      'Add a new button with class "btn btn-info text-white" and see the visual changes.',
      'សូមបន្ថែមប៊ូតុងថ្មីមួយដោយប្រើ class "btn btn-info text-white" រួចសង្កេតមើលលទ្ធផល។'
    );
  }

  // Dynamic fallback for Bootstrap 5
  return createBilingualTopic(
    id, name,
    `${name} - Bootstrap 5`,
    `${name} - មេរៀន Bootstrap 5`,
    `Rapidly craft clean responsive interface elements using pre-designed utility components of ${name}.`,
    `រចនាធាតុ UI ឆ្លើយតបអេក្រង់ដ៏លឿនរហ័សដោយប្រើប្រាស់ utility components ស្រាប់របស់ Bootstrap 5 ${name}។`,
    `Mastering Bootstrap 5 ${name} classes eliminates the need for writing custom media queries and CSS.`,
    `ការចេះច្បាស់ពីថ្នាក់ ${name} របស់ Bootstrap ជួយសន្សំពេលវេលាក្នុងការសរសេរកូដរចនា និងកូដឆ្លើយតបអេក្រង់។`,
    `<!DOCTYPE html>\n<html>\n<head>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body class="p-4">\n\n<div class="container">\n  <!-- រៀនពី៖ ${name} -->\n  <h4 class="text-success border-bottom pb-2">មេរៀន៖ ${name}</h4>\n  <p class="text-muted">សាកល្បងសរសេរកូដ Bootstrap 5 របស់អ្នកនៅទីនេះ។</p>\n</div>\n\n</body>\n</html>`,
    'Apply standard Bootstrap 5 helper classes to HTML elements inside the container.',
    'សូមសាកល្បងបន្ថែមថ្នាក់រចនារបស់ Bootstrap 5 ទៅលើ element ក្នុងទំព័រគំរូខាងលើ។'
  );
}

export function getJqueryTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'jQuery HOME - Learn jQuery',
      'jQuery HOME - រៀនភាសា jQuery',
      'Welcome to jQuery! jQuery is a fast, small, and feature-rich JavaScript library that makes DOM traversal and manipulation much simpler.',
      'សូមស្វាគមន៍មកកាន់មេរៀន jQuery! jQuery គឺជាបណ្ណាល័យ JavaScript ល្បឿនលឿន ទំហំតូច និងសំបូរមុខងារ ដែលជួយសម្រួលការគ្រប់គ្រង DOM និងព្រឹត្តិការណ៍ផ្សេងៗ។',
      'jQuery takes common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.',
      'jQuery ជួយបង្រួមកូដ JavaScript វែងៗដែលត្រូវការសរសេរច្រើនបន្ទាត់ ឱ្យមកសរសេរត្រឹមតែមួយបន្ទាត់យ៉ាងខ្លី និងងាយយល់បំផុត។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n  <script>\n    $(document).ready(function(){\n      $("button").click(function(){\n        $("#demo").css("color", "#04AA6D").slideUp(500).slideDown(500);\n      });\n    });\n  </script>\n</head>\n<body>\n\n<div style="padding: 20px; text-align: center;">\n  <h2 id="demo">រៀនភាសា jQuery ជាមួយគ្នា!</h2>\n  <button style="padding: 10px 20px; background: #04AA6D; color: white; border: none; border-radius: 8px; cursor: pointer;">ចុចទីនេះដើម្បីសាកល្បង</button>\n</div>\n\n</body>\n</html>`,
      'Click the button in the preview to run the jQuery slide and color change effect.',
      'សូមចុចលើប៊ូតុងក្នុងផ្ទាំង preview ដើម្បីសាកល្បងបែបផែនចលនា slide របស់ jQuery។'
    );
  }

  if (normName.includes('selectors')) {
    return createBilingualTopic(
      id, name,
      'jQuery Selectors',
      'jQuery Selectors - ការជ្រើសរើសធាតុ',
      'Learn how to query and select HTML elements based on tag name, classes, IDs, attributes, types, and positions using jQuery.',
      'ស្វែងយល់ពីរបៀបជ្រើសរើស និងចាត់ចែង element ក្នុង HTML តាមរយៈឈ្មោះ Tag, Class, ID, Attribute, ឬទីតាំងរបស់វា។',
      'All selectors in jQuery start with the dollar sign and parentheses: $(). They are based on the existing CSS selectors syntax.',
      'ការជ្រើសរើសធាតុទាំងអស់ក្នុង jQuery ត្រូវចាប់ផ្តើមដោយសញ្ញាដុល្លារ និងវង់ក្រចក៖ $()។ វាមានទម្រង់ដូច CSS selectors ដែរ។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n  <script>\n    $(document).ready(function(){\n      $("#btn-hide").click(function(){\n        $(".test-p").hide(400);\n      });\n    });\n  </script>\n</head>\n<body>\n\n<div class="p-3 text-center">\n  <p class="test-p">នេះជាកថាខណ្ឌទីមួយ។</p>\n  <p class="test-p">នេះជាកថាខណ្ឌទីពីរ។</p>\n  <button id="btn-hide">លាក់កថាខណ្ឌទាំងអស់</button>\n</div>\n\n</body>\n</html>`,
      'Replace .hide(400) with .css("color", "red") to change the paragraph colors instead of hiding them.',
      'សូមសាកល្បងប្តូរពី .hide(400) ទៅជា .css("color", "red") ដើម្បីប្តូរពណ៌អក្សរទៅជាក្រហមវិញ។'
    );
  }

  if (normName.includes('hide/show') || normName.includes('fade')) {
    return createBilingualTopic(
      id, name,
      'jQuery Effects and Animations',
      'jQuery Effects - ផលប៉ះពាល់ចលនា',
      'Animate HTML elements effortlessly using jQuery built-in visual movement effects.',
      'បង្កើតចលនាអន្តរកម្មលើ HTML elements ដោយងាយស្រួលដោយប្រើបែបផែនចលនាស្រាប់ៗរបស់ jQuery។',
      'With jQuery, you can easily create transitions like hide/show, slideUp/slideDown, fadeIn/fadeOut, and custom CSS-based animations.',
      'ជាមួយ jQuery អ្នកអាចបង្កើតបែបផែនចលនាឆ្លងកាត់លឿនរហ័ស ដូចជា លាក់/បង្ហាញ, រំកិលឡើង/ចុះ, ព្រាលបាត់/លេចឡើង និងចលនាដទៃទៀត។',
      `<!DOCTYPE html>\n<html>\n<head>\n  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n  <script>\n    $(document).ready(function(){\n      $("#fade-btn").click(function(){\n        $("#box1").fadeIn();\n        $("#box2").fadeOut(800);\n      });\n    });\n  </script>\n</head>\n<body>\n\n<div class="p-3 text-center">\n  <button id="fade-btn">ដំណើរការ Fade</button>\n  <br><br>\n  <div id="box1" style="width:80px;height:80px;display:none;background-color:red;margin:auto;"></div><br>\n  <div id="box2" style="width:80px;height:80px;background-color:blue;margin:auto;"></div>\n</div>\n\n</body>\n</html>`,
      'Click the button and observe how box1 fades in while box2 fades out.',
      'សូមចុចប៊ូតុងខាងលើ ដើម្បីពិនិត្យមើលប្រអប់ក្រហមលេចចេញ និងប្រអប់ខៀវបាត់ទៅវិញ។'
    );
  }

  // Dynamic fallback for jQuery
  return createBilingualTopic(
    id, name,
    `${name} - jQuery Track`,
    `${name} - មេរៀន jQuery`,
    `Manipulate web pages dynamically and bind custom client interactions smoothly using jQuery ${name}.`,
    `ចាត់ចែងទិន្នន័យគេហទំព័រឱ្យមានភាពរស់រវើក និងបង្កើតការឆ្លើយតបដ៏រលូនដោយប្រើប្រាស់ jQuery ${name}។`,
    `jQuery ${name} provides high compatibility across old and new browser engines with minimal scripting efforts.`,
    `ការប្រើប្រាស់ jQuery ${name} ជួយសម្រួលភាពត្រូវគ្នារវាងកម្មវិធីរុករកចាស់ និងថ្មីដោយប្រើកូដតិចបំផុត។`,
    `<!DOCTYPE html>\n<html>\n<head>\n  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n  <script>\n    $(document).ready(function(){\n      // រៀនពី៖ ${name}\n    });\n  </script>\n</head>\n<body class="p-4">\n\n  <h3>កំពុងសិក្សា៖ ${name}</h3>\n  <p>សរសេរកូដ jQuery របស់សាកល្បងនៅទីនេះ!</p>\n\n</body>\n</html>`,
    'Write a jQuery script inside the script tag to log messages or alter elements.',
    'សូមសរសេរកូដ jQuery ក្នុង tag script ខាងលើដើម្បីសាកល្បងសមត្ថភាពកូដរបស់អ្នក។'
  );
}
