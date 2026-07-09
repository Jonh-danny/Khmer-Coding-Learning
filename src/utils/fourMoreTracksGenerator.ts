import { ReferenceTopic } from './referenceData';

// Dynamic helper to construct a bilingual topic structure
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

// ==========================================
// ANGULAR TOPIC GENERATOR
// ==========================================
export function getAngularTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'Angular HOME - Learn Angular',
      'Angular HOME - រៀនប្រើប្រាស់ Angular',
      'Welcome to Angular! Angular is a robust, development platform built on TypeScript by Google for creating high-performance single-page applications.',
      'សូមស្វាគមន៍មកកាន់មេរៀន Angular! Angular គឺជាប្រព័ន្ធអភិវឌ្ឍន៍ដ៏រឹងមាំបង្កើតឡើងដោយក្រុមហ៊ុន Google ដោយផ្អែកលើ TypeScript សម្រាប់បង្កើតកម្មវិធីទំព័រតែមួយ (SPA) ដែលមានប្រសិទ្ធភាពខ្ពស់។',
      'Angular uses a component-based architecture, modern dependency injection, and a powerful command-line interface (CLI) to build scalable, enterprise-ready web apps.',
      'Angular ប្រើប្រាស់រចនាសម្ព័ន្ធផ្អែកលើសមាសភាគ (Components), ប្រព័ន្ធបញ្ចូលភាពអាស្រ័យ (Dependency Injection), និង CLI ដ៏មានឥទ្ធិពល ដើម្បីបង្កើតកម្មវិធីគេហទំព័រខ្នាតធំសម្រាប់សហគ្រាស។',
      `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: '<h1>សួស្តីពីភាសា Angular (Hello from Angular)!</h1>\\n<p>Welcome to Angular core framework.</p>',\n  styles: ['h1 { color: #dd0031; }']\n})\nexport class AppComponent {\n  title = 'my-angular-app';\n}`,
      'Modify the text in the template property inside the AppComponent metadata to display your name.',
      'សូមកែប្រែអត្ថបទនៅក្នុង template របស់ AppComponent ដើម្បីបង្ហាញឈ្មោះរបស់អ្នកវិញ។'
    );
  }

  if (normName.includes('component')) {
    return createBilingualTopic(
      id, name,
      'Angular Components',
      'Angular Components - សមាសភាគកម្មវិធី',
      'Components are the fundamental building blocks of Angular applications. Each component consists of an HTML template, CSS styles, and a TypeScript class.',
      'Components គឺជាប្លុកគ្រឹះដ៏សំខាន់បំផុតរបស់កម្មវិធី Angular។ រាល់ Component នីមួយៗរួមមាន គំរូទំព័រ HTML, ស្ទីល CSS, និងថ្នាក់ TypeScript class សម្រាប់គ្រប់គ្រងសកម្មភាព។',
      'A component is defined using the @Component decorator which specifies metadata such as selector, templateUrl (or template), and styleUrls.',
      'Component ត្រូវបានកំណត់ដោយប្រើប្រាស់ @Component decorator ដែលកំណត់ព័ត៌មានលម្អិត (Metadata) ដូចជា selector, template, និង styles ផ្សេងៗ។',
      `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-user',\n  template: \`\n    <div class="user-card">\n      <h2>User: {{ name }}</h2>\n      <button (click)="greet()">Say Hello</button>\n    </div>\n  \`,\n  styles: ['.user-card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }']\n})\nexport class UserComponent {\n  name: string = 'Seyha';\n  greet() {\n    alert('Hello ' + this.name);\n  }\n}`,
      'Update the name property to another user name and modify the greeting.',
      'សូមប្តូរឈ្មោះនៅក្នុងអថេរ name និងកែប្រែសារស្វាគមន៍ក្នុងអនុគមន៍ greet()។'
    );
  }

  if (normName.includes('template')) {
    return createBilingualTopic(
      id, name,
      'Angular Templates',
      'Angular Templates - ទម្រង់គំរូទំព័រ',
      'An Angular template is a form of HTML that tells Angular how to render the component in the browser page.',
      'Template ក្នុង Angular គឺជាទម្រង់កូដ HTML ពិសេសដែលប្រាប់ Angular ពីរបៀបបង្ហាញព័ត៌មាន និងសមាសភាគនៅលើកម្មវិធីរុករក (Browser)។',
      'Templates support special syntax like interpolation {{ }}, property binding [ ], event binding ( ), and structural directives like *ngIf and *ngFor.',
      'Templates គាំទ្ររូបមន្តសរសេរពិសេសៗដូចជា Interpolation {{ }}, Property Binding [ ], Event Binding ( ) និងលក្ខខណ្ឌដូចជា *ngIf និង *ngFor។',
      `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-templates',\n  template: \`\n    <div>\n      <h3>Project: {{ projectName }}</h3>\n      <p [style.color]="textColor">Dynamic style binding works!</p>\n      <button (click)="toggleColor()">Change Color</button>\n    </div>\n  \`\n})\nexport class TemplatesComponent {\n  projectName = 'W3Schools Khmer Angular';\n  textColor = 'blue';\n\n  toggleColor() {\n    this.textColor = this.textColor === 'blue' ? 'red' : 'blue';\n  }\n}`,
      'Add a new custom HTML element in the template showing a message, and change default textColor to purple.',
      'សូមបន្ថែម element HTML ថ្មីមួយនៅក្នុង template ដើម្បីបង្ហាញសាររបស់អ្នក រួចប្តូរពណ៌ textColor លំនាំដើមទៅជាពណ៌ស្វាយ។'
    );
  }

  // Fallback for other Angular lessons
  return createBilingualTopic(
    id, name,
    `${name} in Angular`,
    `${name} - ក្នុងប្រព័ន្ធ Angular`,
    `Learn how to leverage ${name} to build performant, maintainable client-side web application architectures.`,
    `ស្វែងយល់ពីរបៀបប្រើប្រាស់ ${name} ដើម្បីស្ថាបនារចនាសម្ព័ន្ធកម្មវិធីគេហទំព័រដែលមានល្បឿនលឿន និងងាយស្រួលថែទាំ។`,
    `Mastering ${name} is crucial for managing reactive user states and modular logic flows in modern Angular versions.`,
    `ការចេះច្បាស់ពី ${name} គឺពិតជាសំខាន់សម្រាប់ការគ្រប់គ្រងទិន្នន័យឆ្លើយតប និងលំហូរឡូជីខលម៉ូឌុលក្នុងប្រព័ន្ធ Angular ជំនាន់ថ្មី។`,
    `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-lesson',\n  template: \`\n    <div class="box">\n      <h3>Learning: ${name}</h3>\n      <p>Explore Angular modular features and directives in real-time.</p>\n    </div>\n  \`\n})\nexport class LessonComponent {\n  // Angular ${name} practice\n}`,
    'Customize the TypeScript logic inside LessonComponent or enhance the HTML layout template.',
    'សូមសាកល្បងសរសេរឡូជីខលបន្ថែមក្នុង LessonComponent ឬកែច្នៃគំរូទំព័រ HTML ខាងលើ។'
  );
}

// ==========================================
// SQL TOPIC GENERATOR
// ==========================================
export function getSqlTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'SQL HOME - Structured Query Language',
      'SQL HOME - ភាសាសាកសួរទិន្នន័យ SQL',
      'SQL is the standard programming language used for storing, manipulating, and retrieving data from relational database management systems.',
      'SQL គឺជាភាសាសរសេរកម្មវិធីស្តង់ដារដែលប្រើសម្រាប់រក្សាទុក ចាត់ចែង និងទាញយកទិន្នន័យចេញពីប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនង (RDBMS)។',
      'Relational databases store information in tables consisting of rows and columns. SQL allows you to write simple query statements to manage millions of records.',
      'មូលដ្ឋានទិន្នន័យទំនាក់ទំនងរក្សាទុកព័ត៌មានជាតារាងដែលមានជួរដេក និងជួរឈរ។ SQL អនុញ្ញាតឱ្យអ្នកសរសេរកូដសួរនាំយ៉ាងងាយស្រួលដើម្បីចាត់ចែងទិន្នន័យរាប់លាន។',
      `SELECT * FROM Customers;`,
      'Execute the default SELECT query to fetch all client records from the simulated table.',
      'សូមចុចដំណើរការសំណួរ SELECT ខាងលើដើម្បីទាញយកទិន្នន័យអតិថិជនទាំងអស់ពីតារាងសាកល្បង។'
    );
  }

  if (normName.includes('select') && !normName.includes('into') && !normName.includes('distinct')) {
    return createBilingualTopic(
      id, name,
      'SQL SELECT Statement',
      'SQL SELECT - ការទាញយកទិន្នន័យ',
      'The SELECT statement is the core command in SQL used to select and query records from one or more database tables.',
      'សេចក្តីថ្លែងការណ៍ SELECT គឺជាបញ្ជាស្នូលក្នុង SQL ប្រើសម្រាប់ជ្រើសរើស និងទាញយកទិន្នន័យចេញពីតារាងមូលដ្ឋានទិន្នន័យមួយ ឬច្រើន។',
      'You can select specific columns by listing their names, or use the asterisk (*) wildcard to fetch all columns from the table.',
      'អ្នកអាចជ្រើសរើសជួរឈរជាក់លាក់ដោយសរសេរឈ្មោះរបស់វា ឬប្រើសញ្ញាផ្កាយ (*) ដើម្បីទាញយកជួរឈរទាំងអស់មកបង្ហាញ។',
      `SELECT CustomerName, City, Country FROM Customers;`,
      'Modify the query to select only CustomerName and Country columns from the table.',
      'សូមកែសម្រួលកូដសួរនាំដើម្បីជ្រើសរើសតែជួរឈរ CustomerName និង Country ពីតារាង Customers។'
    );
  }

  if (normName.includes('where')) {
    return createBilingualTopic(
      id, name,
      'SQL WHERE Clause',
      'SQL WHERE - ការដាក់លក្ខខណ្ឌ',
      'The WHERE clause is used to filter query results, extracting only the records that fulfill a specified search condition.',
      'ឃ្លា WHERE ត្រូវបានប្រើសម្រាប់ចម្រោះយកតែលទ្ធផលដែលចង់បាន ដោយដកស្រង់តែទិន្នន័យណាដែលបំពេញតាមលក្ខខណ្ឌស្វែងរកប៉ុណ្ណោះ។',
      'WHERE clause can combine multiple conditions using AND, OR, and NOT logical operators to build highly specific filters.',
      'ឃ្លា WHERE អាចរួមបញ្ចូលលក្ខខណ្ឌច្រើនចូលគ្នាដោយប្រើប្រាស់ប្រមាណសញ្ញាឡូជីខល AND, OR, និង NOT ដើម្បីចម្រោះទិន្នន័យយ៉ាងជាក់លាក់បំផុត។',
      `SELECT * FROM Customers\nWHERE Country = 'USA';`,
      'Filter the Customers table to show only clients whose City is "Phnom Penh" or Country is "Cambodia".',
      'សូមចម្រោះតារាង Customers ដើម្បីបង្ហាញតែអតិថិជនណាដែលមានទីក្រុង (City) ជា "Phnom Penh" ឬប្រទេស (Country) ជា "Cambodia"។'
    );
  }

  if (normName.includes('data types')) {
    return createBilingualTopic(
      id, name,
      'SQL Data Types',
      'SQL Data Types - ប្រភេទកូដទិន្នន័យក្នុង SQL',
      'Every database table column is defined with a specific data type that controls what kinds of values (numbers, text, dates) can be stored.',
      'រាល់ជួរឈរនីមួយៗក្នុងតារាងមូលដ្ឋានទិន្នន័យត្រូវបានកំណត់ដោយប្រភេទកូដទិន្នន័យជាក់លាក់ ដែលត្រួតពិនិត្យប្រភេទតម្លៃ (លេខ អក្សរ កាលបរិច្ឆេទ) ដែលអាចរក្សាទុកបាន។',
      'Standard SQL data types include character types (VARCHAR, CHAR), numeric types (INT, DECIMAL, FLOAT), and date/time types (DATE, TIMESTAMP).',
      'ប្រភេទកូដទិន្នន័យស្តង់ដារ SQL រួមមាន ប្រភេទអត្ថបទ (VARCHAR, CHAR), ប្រភេទលេខ (INT, DECIMAL, FLOAT), និងប្រភេទកាលបរិច្ឆេទ (DATE, TIMESTAMP)។',
      `CREATE TABLE Employees (\n    EmployeeID INT PRIMARY KEY,\n    FirstName VARCHAR(50) NOT NULL,\n    BirthDate DATE,\n    Salary DECIMAL(10, 2)\n);`,
      'Try querying metadata or writing a SELECT statement on standard database tables.',
      'សូមសាកល្បងដំណើរការសំណួរ SELECT ដើម្បីស្វែងយល់ពីរបៀបប្រើប្រាស់ទិន្នន័យផ្សេងៗ។'
    );
  }

  // Fallback for general SQL
  return createBilingualTopic(
    id, name,
    `${name} Query Statement`,
    `${name} - មេរៀនកូដ SQL`,
    `Learn the official relational syntax of ${name} and how it processes database indexes and record filters.`,
    `ស្វែងយល់ពីរូបមន្តប្រើប្រាស់ផ្លូវការនៃ ${name} និងរបៀបដែលវាដំណើរការសន្ទស្សន៍ និងការចម្រោះទិន្នន័យក្នុងប្រព័ន្ធ RDBMS។`,
    `Mastering ${name} enables you to optimize queries, handle data integrity constraints, and query relational sets efficiently.`,
    `ការចេះច្បាស់ពី ${name} ជួយឱ្យអ្នកបង្កើនល្បឿនស្វែងរក ធានាសុវត្ថិភាពទិន្នន័យ និងគ្រប់គ្រងបណ្តុំទំនាក់ទំនងតារាងបានយ៉ាងល្អ។`,
    `SELECT * FROM Customers\nWHERE Country = 'Cambodia'\nORDER BY CustomerName;`,
    `Experiment with ${name} syntax. Write custom queries to filter, sort, or retrieve client records.`,
    `សូមសាកល្បងប្រើប្រាស់រូបមន្ត ${name}។ សរសេរកូដសំណួរផ្ទាល់ខ្លួនដើម្បីចម្រោះ តម្រៀប ឬទាញទិន្នន័យចេញ។`
  );
}

// ==========================================
// MYSQL TOPIC GENERATOR
// ==========================================
export function getMySqlTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'MySQL HOME - Relational Open-Source Database',
      'MySQL HOME - មូលដ្ឋានទិន្នន័យល្បឿនលឿន MySQL',
      'Welcome to MySQL! MySQL is the world\'s most popular open-source relational database management system (RDBMS) developed by Oracle.',
      'សូមស្វាគមន៍មកកាន់មេរៀន MySQL! MySQL គឺជាប្រព័ន្ធគ្រប់គ្រងមូលដ្ឋានទិន្នន័យទំនាក់ទំនងកូដបើកចំហ (RDBMS) ដែលពេញនិយមបំផុតលើលោក អភិវឌ្ឍដោយ Oracle។',
      'MySQL is a key part of the famous LAMP stack (Linux, Apache, MySQL, PHP) powering major web engines like Facebook, YouTube, and Wikipedia.',
      'MySQL គឺជាផ្នែកសំខាន់បំផុតនៃបណ្តុំបច្ចេកវិទ្យា LAMP (Linux, Apache, MySQL, PHP) ដែលដំណើរការគេហទំព័រល្បីៗដូចជា Facebook, YouTube, និង Wikipedia។',
      `SELECT * FROM Customers LIMIT 5;`,
      'Run the SELECT statement with MySQL LIMIT modifier to fetch only the first 5 records.',
      'សូមចុចដំណើរការសំណួរ SELECT ជាមួយលក្ខខណ្ឌ LIMIT ដើម្បីបង្ហាញតែទិន្នន័យ ៥ ដំបូងបង្អស់។'
    );
  }

  if (normName.includes('limit')) {
    return createBilingualTopic(
      id, name,
      'MySQL LIMIT Clause',
      'MySQL LIMIT - ការកំណត់ចំនួនលទ្ធផល',
      'The LIMIT clause in MySQL is used to specify the maximum number of records that the query result should return.',
      'ឃ្លា LIMIT ក្នុង MySQL ត្រូវបានប្រើសម្រាប់កំណត់ចំនួនអតិបរមានៃជួរទិន្នន័យដែលត្រូវបញ្ជូនមកវិញពីសំណួរ SELECT។',
      'This is highly useful for pagination features in web systems and optimization, preventing the transfer of thousands of redundant lines.',
      'វាពិតជាមានប្រយោជន៍ណាស់សម្រាប់ការបង្កើតមុខងារទំព័របន្តបន្ទាប់ (Pagination) ក្នុងគេហទំព័រ និងការបង្កើនល្បឿនដោយជៀសវាងការបញ្ជូនទិន្នន័យដែលមិនចាំបាច់។',
      `SELECT * FROM Customers\nORDER BY CustomerName DESC\nLIMIT 3;`,
      'Adjust the LIMIT clause to only return 2 customers, sorted in descending order.',
      'សូមកែសម្រួលឃ្លា LIMIT ដើម្បីបង្ហាញអតិថិជនត្រឹមតែ ២ នាក់ តម្រៀបតាមលំដាប់ចុះក្រោម។'
    );
  }

  // Fallback for general MySQL
  return createBilingualTopic(
    id, name,
    `${name} in MySQL`,
    `${name} - ក្នុងប្រព័ន្ធ MySQL`,
    `Explore how MySQL implements the structured query standard for ${name} with highly optimized storage engines like InnoDB.`,
    `ស្វែងយល់ពីរបៀបដែល MySQL អនុវត្តស្តង់ដារសំណួរ SQL សម្រាប់ ${name} ជាមួយ storage engines ល្បឿនលឿនបំផុតដូចជា InnoDB។`,
    `MySQL specific keywords like ${name} enable web developer engineers to process rapid relational transactions with robust security.`,
    `ពាក្យគន្លឹះពិសេសៗរបស់ MySQL ដូចជា ${name} ជួយឱ្យអ្នកអភិវឌ្ឍន៍វិបសាយអាចចាត់ចែងទិន្នន័យល្បឿនលឿន និងមានសុវត្ថិភាពខ្ពស់។`,
    `SELECT * FROM Customers\nLIMIT 10;`,
    `Experiment with standard MySQL keywords for ${name} inside the query workspace.`,
    `សូមសាកល្បងកូដសួរនាំ MySQL សម្រាប់មេរៀន ${name} ក្នុងផ្ទាំងកូដខាងលើ។`
  );
}

// ==========================================
// VUE TOPIC GENERATOR
// ==========================================
export function getVueTopic(id: string, name: string): ReferenceTopic {
  const normName = name.toLowerCase();

  if (normName.includes('home')) {
    return createBilingualTopic(
      id, name,
      'Vue HOME - Progressive Framework',
      'Vue HOME - រៀនប្រើប្រាស់ Vue.js',
      'Welcome to Vue! Vue is a progressive, approachable, and versatile JavaScript framework for building user interfaces and single-page applications.',
      'សូមស្វាគមន៍មកកាន់មេរៀន Vue! Vue គឺជា JavaScript Framework បែបវឌ្ឍនភាព ដែលងាយរៀន ងាយយល់ និងមានសមត្ថភាពខ្ពស់សម្រាប់រចនា UI និងកម្មវិធី SPA។',
      'Vue combines the simplicity of basic HTML/CSS template layers with highly optimized reactive data bindings and modular single-file components (SFC).',
      'Vue រួមបញ្ចូលភាពងាយស្រួលនៃគំរូ HTML/CSS ធម្មតា ជាមួយនឹងការចងភ្ជាប់ទិន្នន័យឆ្លើយតប (Reactive data bindings) និងការសរសេរជាឯកសារទោល (SFC)។',
      `<template>\n  <div id="app">\n    <h1>{{ message }}</h1>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'សួស្តីពីភាសា Vue.js (Hello from Vue)!'\n    }\n  }\n}\n</script>`,
      'Change the message variable in the script block to greet users with your customized name.',
      'សូមផ្លាស់ប្តូរអថេរ message ក្នុងប្លុក script ដើម្បីបង្ហាញឈ្មោះរបស់អ្នកស្វាគមន៍អតិថិជន។'
    );
  }

  if (normName.includes('directives')) {
    return createBilingualTopic(
      id, name,
      'Vue Directives',
      'Vue Directives - បទបញ្ជាពិសេស',
      'Directives are special attributes with the v- prefix that Vue applies to HTML tags to inject reactive state instructions.',
      'Directives គឺជាគុណលក្ខណៈពិសេសដែលផ្តើមដោយនិមិត្តសញ្ញា v- ដែល Vue ប្រើដើម្បីបញ្ចូលការណែនាំ ឬលក្ខខណ្ឌទៅលើកូដ HTML ផ្ទាល់។',
      'Common directives include v-bind for property bindings, v-on for events, v-if/v-else for rendering conditions, and v-for for list loops.',
      'Directives ពេញនិយមរួមមាន v-bind សម្រាប់ចងភ្ជាប់តម្លៃ, v-on សម្រាប់ចាប់ព្រឹត្តិការណ៍, v-if/v-else សម្រាប់លក្ខខណ្ឌ និង v-for សម្រាប់រង្វិលជុំ។',
      `<template>\n  <div>\n    <p v-if="seen">អ្នកអាចមើលឃើញសារនេះព្រោះ seen = true!</p>\n    <button @click="toggleSeen">Toggle Message</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      seen: true\n    }\n  },\n  methods: {\n    toggleSeen() {\n      this.seen = !this.seen;\n    }\n  }\n}\n</script>`,
      'Add a secondary paragraph using v-else to show an alternative statement when seen is false.',
      'សូមបន្ថែមប៉ារ៉ាក្រាហ្វថ្មីមួយទៀតដោយប្រើ v-else ដើម្បីបង្ហាញសារជំនួសនៅពេល seen ស្មើ false។'
    );
  }

  if (normName.includes('v-for') || normName.includes('conditional')) {
    return createBilingualTopic(
      id, name,
      'Vue Lists Rendering (v-for)',
      'Vue Lists Rendering - រង្វិលជុំបញ្ជី v-for',
      'The v-for directive is used to render a list of items based on an array source, iterating through values dynamically.',
      'បទបញ្ជា v-for ត្រូវបានប្រើដើម្បីបង្ហាញបញ្ជីទិន្នន័យចេញពីអារេ (Array) ដោយធ្វើរង្វិលជុំទិន្នន័យនិមួយៗដោយស្វ័យប្រវត្ត។',
      'Always remember to provide a unique :key attribute binding so Vue can keep track of each element\'s identity inside virtual DOM.',
      'កុំភ្លេចភ្ជាប់មកជាមួយនូវគុណលក្ខណៈពិសេស :key ដើម្បីឱ្យ Vue ងាយស្រួលតាមដានអត្តសញ្ញាណរបស់ធាតុនីមួយៗក្នុងប្រព័ន្ធ Virtual DOM។',
      `<template>\n  <div>\n    <h3>My Skills list:</h3>\n    <ul>\n      <li v-for="item in skills" :key="item">{{ item }}</li>\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']\n    }\n  }\n}\n</script>`,
      'Add a new string value "Angular" or "TypeScript" to the skills array and run compilation.',
      'សូមបន្ថែមជំនាញថ្មី "Angular" ឬ "TypeScript" ទៅក្នុងអារេ skills រួចរត់ដើម្បីសង្កេតមើលលទ្ធផល។'
    );
  }

  // Fallback for general Vue
  return createBilingualTopic(
    id, name,
    `${name} in Vue`,
    `${name} - ក្នុងប្រព័ន្ធ Vue`,
    `Understand the modular single-file component framework of ${name} and how reactivity binding simplifies modern UI design.`,
    `ស្វែងយល់លម្អិតអំពីប្រព័ន្ធ Component ឯកសារទោលរបស់ ${name} និងរបៀបដែលការចងភ្ជាប់ទិន្នន័យសម្រួលដល់ការរចនា UI។`,
    `Mastering Vue ${name} is key to composing clean reactive patterns, reactive template references, and lightning-fast virtual DOM.`,
    `ការយល់ដឹងច្បាស់ពី Vue ${name} ជួយឱ្យអ្នកបង្កើតគំរូកូដច្បាស់លាស់ ងាយស្រួលកែសម្រួល និងដំណើរការលឿនបំផុតនៅលើ Browser។`,
    `<template>\n  <div class="card">\n    <h3>Topic: ${name}</h3>\n    <p>Explore progressive structures and features seamlessly.</p>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      // Vue practice for ${name}\n    }\n  }\n}\n</script>`,
    'Extend the SFC component template or add new reactive properties inside the script block to test Vue compilation.',
    'សូមសាកល្បងបន្ថែមទិន្នន័យ ឬកូដ HTML ក្នុង template ខាងលើដើម្បីដំណើរការសាកល្បង។'
  );
}
