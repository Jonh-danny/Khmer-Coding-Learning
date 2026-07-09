export interface ReferenceTopic {
  id: string;
  name: string;
  title: { en: string; kh: string };
  description: { en: string; kh: string };
  concept: { en: string; kh: string };
  code: string;
  task: { en: string; kh: string };
}

export interface LanguageReferenceGroup {
  langId: string;
  langName: string;
  topics: ReferenceTopic[];
}

export const referenceData: LanguageReferenceGroup[] = [
  {
    langId: 'html',
    langName: 'HTML Tutorial',
    topics: [
      {
        id: 'html-home',
        name: 'HTML HOME',
        title: { en: 'HTML HOME - Learn HTML', kh: 'HTML HOME - រៀនភាសា HTML' },
        description: {
          en: 'Welcome to the HTML Tutorial! HTML (HyperText Markup Language) is the standard markup language for creating Web pages.',
          kh: 'សូមស្វាគមន៍មកកាន់មេរៀន HTML! HTML គឺជាភាសាស្តង់ដារសម្រាប់បង្កើតគេហទំព័រ។'
        },
        concept: {
          en: 'HTML describes the structure of a Web page semantically. It consists of a series of elements that tell the browser how to display the content.',
          kh: 'HTML ពិពណ៌នាអំពីរចនាសម្ព័ន្ធនៃគេហទំព័រ។ វាមានធាតុជាច្រើនដែលប្រាប់ទៅកាន់កម្មវិធីរុករក (Browser) ពីរបៀបបង្ហាញមាតិកា។'
        },
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>ទំព័រដំបូងរបស់ខ្ញុំ</title>\n</head>\n<body>\n\n  <h1>សួស្តីពិភពលោក (Hello World)</h1>\n  <p>នេះជាកថាខណ្ឌដំបូងរបស់ខ្ញុំ។</p>\n\n</body>\n</html>`,
        task: {
          en: 'Modify the text inside the `<h1>` tag to say "សូមស្វាគមន៍មកកាន់ HTML" and click Run!',
          kh: 'សូមកែសម្រួលអក្សរក្នុង tag `<h1>` ទៅជា "សូមស្វាគមន៍មកកាន់ HTML" រួចចុច Run!'
        }
      },
      {
        id: 'html-intro',
        name: 'HTML Introduction',
        title: { en: 'HTML Introduction', kh: 'HTML Introduction - ការណែនាំអំពី HTML' },
        description: {
          en: 'HTML stands for Hyper Text Markup Language. It is the building block of any website.',
          kh: 'HTML តំណាងឱ្យ Hyper Text Markup Language។ វាជាគ្រឹះបង្គោលក្នុងការបង្កើតគេហទំព័រនានា។'
        },
        concept: {
          en: 'An HTML element is defined by a start tag, some content, and an end tag: `<tagname> Content... </tagname>`.',
          kh: 'ធាតុ HTML នីមួយៗត្រូវបានកំណត់ដោយ start tag មាតិកា និង end tag: `<tagname> មាតិកា... </tagname>`។'
        },
        code: `<h1>ការណែនាំអំពី HTML</h1>\n<p>HTML គឺស្រួលរៀនណាស់! ចាប់ផ្តើមឥឡូវនេះ។</p>`,
        task: {
          en: 'Add a new paragraph using the `<p>` tag that says "HTML គឺងាយស្រួលណាស់!".',
          kh: 'សូមបន្ថែម paragraph ថ្មីមួយដោយប្រើ tag `<p>` ដាក់ថា "HTML គឺងាយស្រួលណាស់!"។'
        }
      },
      {
        id: 'html-editors',
        name: 'HTML Editors',
        title: { en: 'HTML Editors', kh: 'HTML Editors - កម្មវិធីសរសេរកូដ HTML' },
        description: {
          en: 'Websites can be created and modified by using professional HTML editors like VS Code, Sublime, or Notepad.',
          kh: 'គេហទំព័រអាចត្រូវបានបង្កើតនិងកែសម្រួលដោយប្រើប្រាស់កម្មវិធីសរសេរកូដអាជីពដូចជា VS Code, Sublime ឬ Notepad។'
        },
        concept: {
          en: 'For learning HTML we recommend a simple text editor or our online interactive playground sandbox.',
          kh: 'សម្រាប់ការរៀនសូត្រដំបូង យើងសូមណែនាំកម្មវិធីសរសេរអត្ថបទសាមញ្ញ ឬប្រព័ន្ធសាកល្បងកូដអនឡាញរបស់យើងផ្ទាល់។'
        },
        code: `<!-- ពិសោធន៍កូដ HTML របស់អ្នកនៅក្នុងប្រព័ន្ធសរសេរកូដនេះ -->\n<h2>រៀនសរសេរកូដជាមួយ Sandbox ផ្ទាល់</h2>\n<p>វាយកូដទីនេះ រួចលទ្ធផលនឹងបង្ហាញភ្លាមៗ!</p>`,
        task: {
          en: 'Change the title content in the `<h2>` tag to "ពិសោធន៍កូដជាមួយខ្ញុំ".',
          kh: 'សូមផ្លាស់ប្តូរចំណងជើងក្នុង tag `<h2>` ទៅជា "ពិសោធន៍កូដជាមួយខ្ញុំ"។'
        }
      },
      {
        id: 'html-basic',
        name: 'HTML Basic',
        title: { en: 'HTML Basic Examples', kh: 'HTML Basic - ឧទាហរណ៍មូលដ្ឋានគ្រឹះ' },
        description: {
          en: 'In this chapter we will show some basic HTML examples.',
          kh: 'នៅក្នុងមេរៀននេះ យើងនឹងបង្ហាញពីគំរូកូដគ្រឹះមួយចំនួនរបស់ HTML។'
        },
        concept: {
          en: 'All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.',
          kh: 'រាល់ឯកសារ HTML ទាំងអស់ត្រូវតែចាប់ផ្តើមដោយការប្រកាសប្រភេទឯកសារ៖ `<!DOCTYPE html>`។'
        },
        code: `<!DOCTYPE html>\n<html>\n<body>\n\n  <h2>ចំណងជើងគ្រឹះ (Basic Heading)</h2>\n  <p>កថាខណ្ឌគ្រឹះ (Basic Paragraph).</p>\n\n</body>\n</html>`,
        task: {
          en: 'Add a second `<p>` tag containing "រៀនកូដពីគ្រឹះ" below the first one.',
          kh: 'សូមបន្ថែម tag `<p>` ទីពីរដែលមានអត្ថបទ "រៀនកូដពីគ្រឹះ" នៅខាងក្រោម។'
        }
      },
      {
        id: 'html-elements',
        name: 'HTML Elements',
        title: { en: 'HTML Elements', kh: 'HTML Elements - សមាសភាគធាតុ HTML' },
        description: {
          en: 'An HTML element is everything from the start tag to the end tag.',
          kh: 'ធាតុ HTML គឺរាប់ចាប់តាំងពី tag បើក រហូតដល់ tag បិទ។'
        },
        concept: {
          en: 'Nested HTML Elements: HTML elements can be nested (this means that elements can contain other elements).',
          kh: 'ធាតុត្រួតគ្នា (Nested Elements)៖ ធាតុ HTML អាចដាក់បញ្ជ្រាបចូលគ្នាបាន (ធាតុមួយអាចផ្ទុកធាតុមួយទៀតបាន)។'
        },
        code: `<div>\n  <h3>ធាតុខាងក្នុង Div (Inside Element)</h3>\n  <p>កថាខណ្ឌនៅក្នុងប្រអប់ Div</p>\n</div>`,
        task: {
          en: 'Wrap the `<h3>` and `<p>` tags inside a `<section>` tag with a border.',
          kh: 'សូមសរសេរកូដក្រសោប tag `<h3>` និង `<p>` នៅក្នុង tag `<section>`។'
        }
      },
      {
        id: 'html-attributes',
        name: 'HTML Attributes',
        title: { en: 'HTML Attributes', kh: 'HTML Attributes - គុណលក្ខណៈបន្ថែម' },
        description: {
          en: 'HTML attributes provide additional information about HTML elements.',
          kh: 'Attributes ផ្តល់ព័ត៌មានបន្ថែម ឬលក្ខណៈពិសេសទៅឱ្យធាតុ HTML នីមួយៗ។'
        },
        concept: {
          en: 'Attributes are always specified in the start tag, and usually come in name/value pairs like: `name="value"`.',
          kh: 'Attributes ត្រូវតែសរសេរនៅក្នុង tag បើកជានិច្ច ហើយជាទូទៅមកជាគូ ឈ្មោះ/តម្លៃ ឧទាហរណ៍៖ `name="value"`។'
        },
        code: `<a href="https://www.google.com" target="_blank" title="ស្វែងរកជាមួយ Google">ចុចទីនេះដើម្បីទៅកាន់ Google</a>`,
        task: {
          en: 'Change the `href` attribute to "https://www.wikipedia.org" and change text to "ទៅកាន់ Wikipedia".',
          kh: 'សូមប្តូរ attribute `href` ទៅជា "https://www.wikipedia.org" និងអត្ថបទទៅជា "ទៅកាន់ Wikipedia"។'
        }
      },
      {
        id: 'html-headings',
        name: 'HTML Headings',
        title: { en: 'HTML Headings', kh: 'HTML Headings - ចំណងជើងទំព័រ' },
        description: {
          en: 'HTML headings are titles or subtitles that you want to display on a webpage.',
          kh: 'HTML headings គឺជាចំណងជើងធំ ឬចំណងជើងរងដែលអ្នកចង់បង្ហាញនៅលើគេហទំព័រ។'
        },
        concept: {
          en: 'HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading.',
          kh: 'HTML headings ត្រូវបានកំណត់ពី tag `<h1>` ដល់ `<h6>`។ `<h1>` ជាចំណងជើងធំនិងសំខាន់បំផុត ចំណែក `<h6>` តូចជាងគេបំផុត។'
        },
        code: `<h1>ចំណងជើងទី ១ (H1)</h1>\n<h2>ចំណងជើងទី ២ (H2)</h2>\n<h3>ចំណងជើងទី ៣ (H3)</h3>\n<h4>ចំណងជើងទី ៤ (H4)</h4>`,
        task: {
          en: 'Add an `<h5>` and `<h6>` tag with text "ចំណងជើងតូច" to see the hierarchy.',
          kh: 'សូមបន្ថែម tag `<h5>` និង `<h6>` ជាមួយអត្ថបទ "ចំណងជើងតូច" ដើម្បីមើលទំហំរបស់វា។'
        }
      },
      {
        id: 'html-paragraphs',
        name: 'HTML Paragraphs',
        title: { en: 'HTML Paragraphs', kh: 'HTML Paragraphs - កថាខណ្ឌអត្ថបទ' },
        description: {
          en: 'The HTML `<p>` element defines a paragraph.',
          kh: 'ធាតុ tag `<p>` របស់ HTML ត្រូវបានប្រើសម្រាប់កំណត់កថាខណ្ឌអត្ថបទ។'
        },
        concept: {
          en: 'A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.',
          kh: 'កថាខណ្ឌតែងតែចាប់ផ្តើមនៅបន្ទាត់ថ្មីជានិច្ច ហើយកម្មវិធីរុករកនឹងបន្ថែមគម្លាតខាងលើនិងក្រោមដោយស្វ័យប្រវត្ត។'
        },
        code: `<p>នេះជាកថាខណ្ឌទីមួយ។</p>\n<p>នេះជាកថាខណ្ឌទីពីរដែលមានគម្លាតពីគ្នា។</p>`,
        task: {
          en: 'Create three paragraphs in total, each showing a sentence.',
          kh: 'សូមបង្កើតកថាខណ្ឌឱ្យបាន ៣ ផ្សេងគ្នា ដោយដាក់អត្ថបទខ្លីៗតាមចិត្ត។'
        }
      },
      {
        id: 'html-styles',
        name: 'HTML Styles',
        title: { en: 'HTML Styles - Inline CSS', kh: 'HTML Styles - ការរចនាកូដម៉ូត' },
        description: {
          en: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more.',
          kh: 'style attribute របស់ HTML ត្រូវបានប្រើដើម្បីបន្ថែមការតុបតែងម៉ូតដូចជា ពណ៌ ទំហំអក្សរ ផ្ទៃក្រោយ និងរបស់ជាច្រើនទៀត។'
        },
        concept: {
          en: 'Setting the style of an HTML element, can be done with the style attribute: `<tagname style="property:value;">`.',
          kh: 'ការកំណត់ម៉ូត style ធ្វើឡើងតាមរយៈទម្រង់៖ `<tagname style="property:value;">`។'
        },
        code: `<p style="color:red; font-size:20px;">កថាខណ្ឌអក្សរពណ៌ក្រហម ទំហំ ២០px</p>\n<div style="background-color:powderblue; padding:10px;">ប្រអប់ពណ៌ផ្ទៃមេឃស្រាល</div>`,
        task: {
          en: 'Change the style of the first paragraph to have `color:green; font-weight:bold;`.',
          kh: 'សូមប្តូរ style នៃកថាខណ្ឌទីមួយឱ្យទៅជា `color:green; font-weight:bold;`។'
        }
      },
      {
        id: 'html-formatting',
        name: 'HTML Formatting',
        title: { en: 'HTML Text Formatting', kh: 'HTML Formatting - ទម្រង់អត្ថបទពិសេស' },
        description: {
          en: 'HTML contains several elements for defining text with a special meaning.',
          kh: 'HTML រួមបញ្ចូលធាតុមួយចំនួនសម្រាប់កំណត់អត្ថបទឱ្យមានអត្ថន័យពិសេស ឬទម្រង់ប្លែកៗ។'
        },
        concept: {
          en: 'Use `<b>` for bold text, `<i>` for italic text, `<strong>` for important text, and `<em>` for emphasized text.',
          kh: 'ប្រើ tag `<b>` សម្រាប់អក្សរដិត, `<i>` សម្រាប់អក្សរទ្រេត, `<strong>` សម្រាប់អក្សរសំខាន់, និង `<em>` សម្រាប់សង្កត់ធ្ងន់។'
        },
        code: `<p>អត្ថបទនេះមាន <b>អក្សរដិត</b> និង <i>អក្សរទ្រេត</i> គួរឱ្យទាក់ទាញ។</p>\n<p>ប្រើប្រាស់ <strong>សំខាន់ណាស់!</strong> ឬ <mark>ហាយឡាយពណ៌លឿង</mark>។</p>`,
        task: {
          en: 'Wrap the word "ហាយឡាយពណ៌លឿង" inside the `<mark>` tag if it is not already.',
          kh: 'សូមសរសេរពាក្យ "ហាយឡាយពណ៌លឿង" នៅក្នុង tag `<mark>` ប្រសិនបើមិនទាន់មាន។'
        }
      },
      {
        id: 'html-quotations',
        name: 'HTML Quotations',
        title: { en: 'HTML Quotation and Citation Elements', kh: 'HTML Quotations - ការស្រង់សម្តី' },
        description: {
          en: 'HTML elements for quotation: `<blockquote>`, `<q>`, `<abbr>`, and `<cite>`.',
          kh: 'ធាតុស្រង់សម្តីរួមមាន tag `<blockquote>` សម្រាប់សម្រង់សម្តីវែង និង `<q>` សម្រាប់សម្រង់សម្តីខ្លី។'
        },
        concept: {
          en: 'The `<blockquote>` element defines a section that is quoted from another source.',
          kh: '`<blockquote>` ប្រើសម្រាប់ស្រង់សម្តីជាកថាខណ្ឌវែងពីប្រភពផ្សេង ដែលមានគម្លាតចូលបន្ទាត់ស្អាត។'
        },
        code: `<p>សម្តេចសង្ឃ ជួន ណាត បានមានប្រសាសន៍ថា៖</p>\n<blockquote cite="https://khmer.org">\n  "ភាសាជាតិ គឺជាអត្តសញ្ញាណជាតិដ៏សំខាន់បំផុត ដែលយើងទាំងអស់គ្នាត្រូវរួមគ្នាថែរក្សា។"\n</blockquote>`,
        task: {
          en: 'Put a short quote inside a `<q>` tag, like `<q>រៀនហើយត្រូវអនុវត្ត</q>`.',
          kh: 'សូមបង្កើតសម្រង់សម្តីខ្លីមួយដោយប្រើ tag `<q>` ដាក់ថា `<q>រៀនហើយត្រូវអនុវត្ត</q>`។'
        }
      },
      {
        id: 'html-comments',
        name: 'HTML Comments',
        title: { en: 'HTML Comments', kh: 'HTML Comments - កំណត់ត្រាកូដ' },
        description: {
          en: 'HTML comments are not displayed in the browser, but they can help document your HTML source code.',
          kh: 'Comments មិនត្រូវបានបង្ហាញនៅលើកម្មវិធី Browser ឡើយ ប៉ុន្តែវាជួយកត់ត្រាពន្យល់កូដរបស់អ្នកឱ្យងាយយល់។'
        },
        concept: {
          en: 'You can add comments to your HTML source by using the following syntax: `<!-- Write your comments here -->`.',
          kh: 'អ្នកអាចសរសេរ comments ក្នុងកូដ HTML តាមទម្រង់៖ `<!-- សរសេរពន្យល់នៅទីនេះ -->`។'
        },
        code: `<!-- នេះជា Comment វានឹងមិនបង្ហាញលើអេក្រង់ទេ -->\n<h3>ចំណងជើងមើលឃើញ</h3>\n<!-- <p>កូដនេះត្រូវបានបិទមិនឱ្យដំណើរការ</p> -->\n<p>កថាខណ្ឌមើលឃើញធម្មតា</p>`,
        task: {
          en: 'Comment out the text "កថាខណ្ឌមើលឃើញធម្មតា" so it does not render on the screen.',
          kh: 'សូមប្រើប្រាស់ comment គ្របដណ្តប់លើអត្ថបទ "កថាខណ្ឌមើលឃើញធម្មតា" កុំឱ្យវាបង្ហាញលើអេក្រង់។'
        }
      },
      {
        id: 'html-colors',
        name: 'HTML Colors',
        title: { en: 'HTML Colors', kh: 'HTML Colors - ពណ៌នៅក្នុង HTML' },
        description: {
          en: 'HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.',
          kh: 'ពណ៌នៅក្នុង HTML អាចត្រូវបានកំណត់ដោយប្រើឈ្មោះពណ៌ផ្ទាល់ ឬតម្លៃលេខកូដ RGB, HEX, HSL ជាដើម។'
        },
        concept: {
          en: 'In HTML, colors can be set as background color, text color, or border color.',
          kh: 'យើងអាចកំណត់ពណ៌សម្រាប់៖ ពណ៌ផ្ទៃក្រោយ (background-color), ពណ៌អក្សរ (color), ឬពណ៌បន្ទាត់ជុំវិញ (border-color)។'
        },
        code: `<h3 style="background-color:Tomato; color:white; padding:10px;">Tomato Color Background</h3>\n<p style="color:DodgerBlue;">DodgerBlue text color</p>\n<p style="border:2px solid Violet; padding:5px;">Violet border color</p>`,
        task: {
          en: 'Change the background-color of the `<h3>` to "MediumSeaGreen".',
          kh: 'សូមប្តូរ background-color របស់ `<h3>` ទៅជា "MediumSeaGreen"។'
        }
      },
      {
        id: 'html-css',
        name: 'HTML CSS',
        title: { en: 'HTML CSS - Styling HTML', kh: 'HTML CSS - ការភ្ជាប់រចនាបទ CSS' },
        description: {
          en: 'CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once.',
          kh: 'CSS ប្រើសម្រាប់រចនាប្លង់ ពណ៌ និងសោភ័ណភាពគេហទំព័រឱ្យមានរបៀបរៀបរយ និងស្រស់ស្អាត។'
        },
        concept: {
          en: 'CSS can be added to HTML documents in 3 ways: Inline (style attribute), Internal (<style> in head), External (<link> element).',
          kh: 'CSS អាចបញ្ចូលទៅក្នុង HTML តាម ៣ របៀប៖ Inline (សរសេរក្នុង tag), Internal (សរសេរក្នុង tag <style>), External (ភ្ជាប់ឯកសារក្រៅ)។'
        },
        code: `<style>\n  body { background-color: #fafafa; }\n  .my-title { color: #10b981; font-family: sans-serif; }\n</style>\n\n<h2 class="my-title">ចំណងជើងរចនាដោយ CSS</h2>\n<p>រចនាប័ទ្មបែបស្អាត និងសាមញ្ញ។</p>`,
        task: {
          en: 'Inside the `<style>` block, add a rule for `p` to have `color: #4b5563; font-size: 18px;`.',
          kh: 'នៅក្នុងប្លុក `<style>` សូមបន្ថែមការរចនាសម្រាប់ `p` ឱ្យមាន `color: #4b5563; font-size: 18px;`។'
        }
      },
      {
        id: 'html-links',
        name: 'HTML Links',
        title: { en: 'HTML Links - Hyperlinks', kh: 'HTML Links - ការបង្កើតតំណភ្ជាប់' },
        description: {
          en: 'HTML links are hyperlinks. You can click on a link and jump to another document.',
          kh: 'តំណភ្ជាប់នៅក្នុង HTML ហៅថា Hyperlinks។ នៅពេលចុចលើវា វានឹងនាំអ្នកទៅកាន់ទំព័រថ្មី។'
        },
        concept: {
          en: 'The HTML `<a>` tag defines a hyperlink. Syntax: `<a href="url">link text</a>`. target="_blank" opens in a new tab.',
          kh: 'tag `<a>` ប្រើសម្រាប់តំណភ្ជាប់។ ទម្រង់៖ `<a href="url">អក្សរចុច</a>`។ target="_blank" សម្រាប់បើកផ្ទាំងទំព័រថ្មី។'
        },
        code: `<p>ស្វែងយល់បន្ថែម៖ <a href="https://www.wikipedia.org" target="_blank" style="color:blue; text-decoration:underline;">អាននៅ Wikipedia</a></p>`,
        task: {
          en: 'Add another link pointing to "https://www.w3schools.com" with text "ទៅកាន់ W3Schools".',
          kh: 'សូមបន្ថែមតំណភ្ជាប់មួយទៀតទៅកាន់ "https://www.w3schools.com" ដោយដាក់អក្សរថា "ទៅកាន់ W3Schools"។'
        }
      },
      {
        id: 'html-images',
        name: 'HTML Images',
        title: { en: 'HTML Images', kh: 'HTML Images - ការប្រើប្រាស់រូបភាព' },
        description: {
          en: 'Images can improve the design and the appearance of a web page.',
          kh: 'រូបភាពអាចធ្វើឱ្យគេហទំព័រមានភាពរស់រវើក និងទាក់ទាញការចាប់អារម្មណ៍ខ្លាំង។'
        },
        concept: {
          en: 'The HTML `<img>` tag is used to embed an image in a web page. It is self-closing and has two required attributes: src & alt.',
          kh: 'tag `<img>` ប្រើសម្រាប់បង្ហាញរូបភាព។ វាជា tag ទោល (គ្មាន tag បិទ) ដោយត្រូវការ src (ប្រភពរូបភាព) និង alt (ការពន្យល់រូបភាព)។'
        },
        code: `<img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="ក្រហមស្អាត" style="width:100%; max-width:300px; border-radius:12px;">\n<p>គំរូរូបភាពស្បែកជើងកីឡាពណ៌ក្រហម</p>`,
        task: {
          en: 'Change the max-width style in the image to "200px".',
          kh: 'សូមផ្លាស់ប្តូរ max-width ក្នុង style រូបភាពទៅជា "200px"។'
        }
      },
      {
        id: 'html-project',
        name: 'HTML Project',
        title: { en: 'HTML Small Profile Card Project', kh: 'HTML Project - គម្រោងកាតព័ត៌មានផ្ទាល់ខ្លួន' },
        description: {
          en: 'Practice combining headings, images, styles and text to create a beautiful personal Profile Card.',
          kh: 'អនុវត្តការផ្សំកូដ ចំណងជើង រូបភាព ពណ៌ និងអត្ថបទ ដើម្បីបង្កើតកាតព័ត៌មានដ៏ស្រស់ស្អាតមួយ។'
        },
        concept: {
          en: 'Using nested elements inside a styled card container creates a structured user interface layout.',
          kh: 'ការសរសេរធាតុបញ្ជ្រាបគ្នាក្នុងប្រអប់តុបតែង ជួយបង្កើតប្លង់កម្មវិធីទាក់ទាញភ្នែក។'
        },
        code: `<div style="max-width:300px; margin:auto; text-align:center; padding:20px; border:1px solid #e5e7eb; border-radius:16px; font-family:sans-serif; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">\n  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" alt="Profile" style="width:100px; height:100px; border-radius:50%; object-fit:cover;">\n  <h3 style="margin:10px 0 5px 0;">ម៉ារីយ៉ា (Maria)</h3>\n  <p style="color:#6b7280; font-size:14px; margin-bottom:15px;">អ្នកអភិវឌ្ឍន៍វេបសាយ (Web Developer)</p>\n  <button style="background-color:#10b981; color:white; border:none; padding:8px 16px; border-radius:20px; cursor:pointer;">Contact Me</button>\n</div>`,
        task: {
          en: 'Modify the name from "ម៉ារីយ៉ា (Maria)" to your own name or "ណាន សីហា (Nan Seyha)".',
          kh: 'សូមកែប្រែឈ្មោះពី "ម៉ារីយ៉ា (Maria)" ទៅជាឈ្មោះរបស់អ្នកផ្ទាល់ ឬ "ណាន សីហា (Nan Seyha)"។'
        }
      },
      {
        id: 'html-favicon',
        name: 'HTML Favicon',
        title: { en: 'HTML Favicon', kh: 'HTML Favicon - រូបតំណាងលើ Tab របស់ Browser' },
        description: {
          en: 'A favicon is a small image displayed next to the page title in the browser tab.',
          kh: 'Favicon គឺជារូបតំណាងតូចមួយដែលបង្ហាញនៅចំហៀងចំណងជើងគេហទំព័រលើ browser tab។'
        },
        concept: {
          en: 'You can use any image you want as your favicon. You can also create your own favicon on sites like favicon.cc.',
          kh: 'យើងកំណត់ favicon ដោយប្រើ tag `<link rel="icon" type="image/x-icon" href="favicon.ico">` នៅក្នុងផ្នែក `<head>`។'
        },
        code: `<!-- សរសេរក្នុង head block នៃ HTML -->\n<link rel="icon" type="image/x-icon" href="https://www.w3schools.com/favicon.ico">\n<p>សាកល្បងពិនិត្យមើលកូដ link favicon ខាងលើ។</p>`,
        task: {
          en: 'Change the href to another image URL if you have one, or keep it and click Run.',
          kh: 'សូមពិនិត្យកូដលំនាំគំរូ រួចចុច Run ដើម្បីសាកល្បងដំណើរការ។'
        }
      },
      {
        id: 'html-pagetitle',
        name: 'HTML Page Title',
        title: { en: 'HTML Page Title', kh: 'HTML Page Title - ចំណងជើងគេហទំព័រ' },
        description: {
          en: 'The `<title>` element defines the title of the document. The title must be text-only, and it is shown in the browser\'s title bar or in the page\'s tab.',
          kh: 'tag `<title>` ប្រើសម្រាប់កំណត់ចំណងជើងគេហទំព័រដែលនឹងបង្ហាញនៅលើរបារចំណងជើង Tab កុំព្យូទ័រ។'
        },
        concept: {
          en: 'The content of a page title is very important for search engine optimization (SEO)!',
          kh: 'អត្ថបទចំណងជើងទំព័រពិតជាមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការស្វែងរកលើ Google (SEO)!'
        },
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>មេរៀនរៀនកូដខ្មែរ - Khmer Coding Lesson</title>\n</head>\n<body>\n  <p>ចំណងជើងទំព័រនេះគឺ "មេរៀនរៀនកូដខ្មែរ - Khmer Coding Lesson"។</p>\n</body>\n</html>`,
        task: {
          en: 'Change the title content inside the `<title>` tag to "W3Schools Khmer".',
          kh: 'សូមផ្លាស់ប្តូរអត្ថបទក្នុង tag `<title>` ទៅជា "W3Schools Khmer"។'
        }
      },
      {
        id: 'html-tables',
        name: 'HTML Tables',
        title: { en: 'HTML Tables', kh: 'HTML Tables - ការបង្កើតតារាង' },
        description: {
          en: 'HTML tables allow web developers to arrange data into rows and columns.',
          kh: 'តារាង HTML អនុញ្ញាតឱ្យយើងរៀបចំចងក្រងទិន្នន័យជាជួរដេក និងជួរឈរមានសណ្តាប់ធ្នាប់។'
        },
        concept: {
          en: 'The `<table>` tag defines a table. Each table row is defined with `<tr>`. Each table header is defined with `<th>`. Each table data/cell is defined with `<td>`.',
          kh: '`<table>` សម្រាប់តារាង, `<tr>` សម្រាប់ជួរដេក, `<th>` សម្រាប់ក្បាលតារាង, `<td>` សម្រាប់ប្រអប់ទិន្នន័យធម្មតា។'
        },
        code: `<table style="width:100%; border-collapse: collapse; font-family: sans-serif;">\n  <tr style="background-color: #10b981; color: white;">\n    <th style="border: 1px solid #ddd; padding: 8px;">ឈ្មោះ (Name)</th>\n    <th style="border: 1px solid #ddd; padding: 8px;">ភាសា (Language)</th>\n  </tr>\n  <tr>\n    <td style="border: 1px solid #ddd; padding: 8px;">សីហា (Seyha)</td>\n    <td style="border: 1px solid #ddd; padding: 8px;">HTML, JavaScript</td>\n  </tr>\n</table>`,
        task: {
          en: 'Add a new row `<tr>` with your own name and preferred programming language.',
          kh: 'សូមបន្ថែមជួរដេកថ្មីមួយជួរទៀត `<tr>` ដែលមានឈ្មោះរបស់អ្នក និងភាសាកូដដែលអ្នកចូលចិត្ត។'
        }
      },
      {
        id: 'html-lists',
        name: 'HTML Lists',
        title: { en: 'HTML Lists', kh: 'HTML Lists - បញ្ជីរាយនាម' },
        description: {
          en: 'HTML lists allow web developers to group a set of related items in lists.',
          kh: 'បញ្ជីរាយនាម HTML ជួយប្រមូលផ្តុំសំណុំព័ត៌មានដែលមានទំនាក់ទំនងគ្នាជាជួរៗ។'
        },
        concept: {
          en: 'Use `<ul>` for an unordered (bulleted) list. Use `<ol>` for an ordered (numbered) list. Inside, use `<li>` for list items.',
          kh: 'ប្រើ tag `<ul>` សម្រាប់បញ្ជីមានសញ្ញាចំណុចគ្រាប់។ ប្រើ `<ol>` សម្រាប់បញ្ជីរៀបតាមលំដាប់លេខ ១, ២, ៣។'
        },
        code: `<h3>បញ្ជីទិញទំនិញ (Shopping List)</h3>\n<ol>\n  <li>សៀវភៅសរសេរ (Notebook)</li>\n  <li>ប៊ិចពណ៌ខៀវ (Blue Pen)</li>\n  <li>កុំព្យូទ័រយួរដៃ (Laptop)</li>\n</ol>`,
        task: {
          en: 'Change the `<ol>` tag to `<ul>` and see how the numbers change to bullet points.',
          kh: 'សូមប្តូរ tag `<ol>` ទៅជា `<ul>` រួចមើលការប្រែប្រួលពីលេខទៅជាចំណុចមូលវិញ។'
        }
      },
      {
        id: 'html-blockinline',
        name: 'HTML Block & Inline',
        title: { en: 'HTML Block and Inline Elements', kh: 'HTML Block & Inline - ប្រភេទធាតុបង្ហាញ' },
        description: {
          en: 'Every HTML element has a default display value, depending on what type of element it is.',
          kh: 'រាល់ធាតុ HTML ទាំងអស់មានលក្ខណៈបង្ហាញលំនាំដើមពីរគឺ៖ Block (ពេញមួយជួរ) ឬ Inline (តាមទំហំអក្សរ)។'
        },
        concept: {
          en: 'A block-level element always starts on a new line (e.g., <div>, <p>, <h1>). An inline element does not start on a new line (e.g., <span>, <a>, <strong>).',
          kh: 'Block-level តែងតែចាប់ផ្តើមនៅបន្ទាត់ថ្មី និងទាញយកទំហំពេញមួយជួរដេក ចំណែក Inline បង្ហាញបន្តគ្នាក្នុងជួរដេកដដែល។'
        },
        code: `<div style="background-color: yellow; padding: 10px;">នេះជា Block Element (ពេញមួយជួរ)</div>\n<span>នេះជា Inline ទី១</span> | <span>នេះជា Inline ទី២</span>`,
        task: {
          en: 'Create a paragraph `<p>` with background color "lightgreen" to see if it behaves as block or inline.',
          kh: 'សូមបង្កើតកថាខណ្ឌ `<p>` មាន background color "lightgreen" ដើម្បីមើលថាតើវាជា Block ឬ Inline។'
        }
      },
      {
        id: 'html-div',
        name: 'HTML Div',
        title: { en: 'HTML Div - Division Container', kh: 'HTML Div - ប្រអប់ផ្ទុកមាតិកា' },
        description: {
          en: 'The `<div>` element is used as a container for other HTML elements.',
          kh: 'tag `<div>` ត្រូវបានប្រើប្រាស់ជាប្រអប់ផ្ទុក ឬចែកផ្នែកសម្រាប់ក្តោបធាតុ HTML ផ្សេងៗទៀត។'
        },
        concept: {
          en: 'The `<div>` element has no required attributes, but style, class and id are common. It is a block-level element.',
          kh: '`<div>` មិនមានតម្រូវការគុណលក្ខណៈពិសេសអ្វីឡើយ ប៉ុន្តែវាពេញនិយមប្រើជាមួយ style, class ឬ id ដើម្បីងាយរចនា CSS។'
        },
        code: `<div style="background-color: #f3f4f6; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;">\n  <h3 style="color: #10b981; margin: 0 0 10px 0;">ប្រអប់ពិសេស</h3>\n  <p style="margin: 0;">មាតិកាដែលស្ថិតនៅក្នុងប្រអប់ Div រួមគ្នា។</p>\n</div>`,
        task: {
          en: 'Change the background-color of the div style to "#fee2e2" (light red) and border-color to "#fca5a5".',
          kh: 'សូមប្តូរពណ៌ background-color របស់ div ទៅជា "#fee2e2" និងពណ៌បន្ទាត់ទៅជា "#fca5a5"។'
        }
      },
      {
        id: 'html-classes',
        name: 'HTML Classes',
        title: { en: 'HTML Class Attribute', kh: 'HTML Classes - ថ្នាក់សម្គាល់ក្រុម' },
        description: {
          en: 'The HTML class attribute is used to specify a class for an HTML element.',
          kh: 'class attribute ត្រូវបានប្រើដើម្បីកំណត់ឈ្មោះសម្គាល់ទៅឱ្យធាតុ ដើម្បីងាយស្រួលហៅរចនា CSS តែម្តងសម្រាប់ធាតុច្រើន។'
        },
        concept: {
          en: 'Multiple HTML elements can share the same class. In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class.',
          kh: 'ធាតុច្រើនអាចមាន class ដូចគ្នា។ ក្នុង CSS យើងប្រើប្រាស់សញ្ញាចុច (.) ពីមុខឈ្មោះ class នោះ។'
        },
        code: `<style>\n  .highlight-card {\n    background-color: #ecfdf5;\n    border-left: 5px solid #10b981;\n    padding: 15px;\n    margin-bottom: 10px;\n    font-family: sans-serif;\n  }\n</style>\n\n<div class="highlight-card">កាតទី១ មាន class highlight-card</div>\n<div class="highlight-card">កាតទី២ មាន class highlight-card ដូចគ្នា</div>`,
        task: {
          en: 'Change the border-left color in the CSS code from "#10b981" to "red".',
          kh: 'សូមផ្លាស់ប្តូរពណ៌ border-left ក្នុង CSS ពី "#10b981" ទៅជា "red"។'
        }
      },
      {
        id: 'html-id',
        name: 'HTML Id',
        title: { en: 'HTML Id Attribute', kh: 'HTML Id - ឧបករណ៍សម្គាល់តែមួយគត់' },
        description: {
          en: 'The HTML id attribute is used to specify a unique id for an HTML element.',
          kh: 'id attribute ត្រូវបានប្រើប្រាស់ដើម្បីកំណត់ឈ្មោះសម្គាល់តែមួយគត់ (Unique) សម្រាប់ធាតុតែមួយក្នុងទំព័រ។'
        },
        concept: {
          en: 'You cannot have more than one element with the same id in an HTML document. In CSS, use the hash (#) character to select an id.',
          kh: 'យើងមិនអាចដាក់ id ដូចគ្នាចំពោះធាតុពីរផ្សេងគ្នានោះឡើយ។ ក្នុង CSS យើងប្រើសញ្ញាទ្រុងជ្រូក (#) ពីមុខឈ្មោះ id នោះ។'
        },
        code: `<style>\n  #special-header {\n    background-color: navy;\n    color: gold;\n    padding: 15px;\n    text-align: center;\n    font-family: sans-serif;\n  }\n</style>\n\n<h2 id="special-header">ចំណងជើងពិសេសសម្គាល់ដោយ ID</h2>\n<p>កថាខណ្ឌអត្ថបទធម្មតា។</p>`,
        task: {
          en: 'Change the background-color of `#special-header` in the style block to "darkred".',
          kh: 'សូមផ្លាស់ប្តូរពណ៌ background-color របស់ `#special-header` ក្នុង style block ទៅជា "darkred"។'
        }
      },
      {
        id: 'html-buttons',
        name: 'HTML Buttons',
        title: { en: 'HTML Buttons', kh: 'HTML Buttons - ប៊ូតុងចុច' },
        description: {
          en: 'The HTML `<button>` element defines a clickable button.',
          kh: 'tag `<button>` ត្រូវបានប្រើប្រាស់សម្រាប់បង្កើតប៊ូតុងដែលអាចចុចបាន។'
        },
        concept: {
          en: 'Buttons can trigger JavaScript functions on click, or submit forms when defined inside forms.',
          kh: 'ប៊ូតុងអាចប្រើសម្រាប់ភ្ជាប់ជាមួយ JavaScript ដើម្បីធ្វើសកម្មភាពផ្សេងៗនៅពេលចុច។'
        },
        code: `<button onclick="alert('អ្នកបានចុចប៊ូតុង!')" style="background-color: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">\n  ចុចសាកល្បងទីនេះ\n</button>`,
        task: {
          en: 'Change the style of the button to have a background color of "royalblue" and text color "white".',
          kh: 'សូមកែប្រែម៉ូតរបស់ប៊ូតុងឱ្យមាន background color "royalblue" និងពណ៌អក្សរ "white"។'
        }
      }
    ]
  },
  {
    langId: 'css',
    langName: 'CSS Tutorial',
    topics: [
      {
        id: 'css-home',
        name: 'CSS HOME',
        title: { en: 'CSS HOME - Learn CSS', kh: 'CSS HOME - រៀនភាសា CSS' },
        description: {
          en: 'CSS is the language we use to style a Web page. CSS stands for Cascading Style Sheets.',
          kh: 'CSS គឺជាភាសាដែលយើងប្រើសម្រាប់រចនាម៉ូតគេហទំព័រ។ CSS តំណាងឱ្យ Cascading Style Sheets។'
        },
        concept: {
          en: 'CSS describes how HTML elements are to be displayed on screen, paper, or in other media.',
          kh: 'CSS ពណ៌នាពីរបៀបដែលធាតុ HTML ត្រូវបង្ហាញនៅលើអេក្រង់ ឬប្រព័ន្ធផ្សព្វផ្សាយផ្សេងៗ។'
        },
        code: `body {\n  background-color: lightblue;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}`,
        task: {
          en: 'Change the body background-color to "lightgreen" and h1 color to "navy" inside the editor, then run.',
          kh: 'សូមប្តូរ body background-color ទៅជា "lightgreen" និង h1 color ទៅជា "navy" រួចចុច Run។'
        }
      },
      {
        id: 'css-intro',
        name: 'CSS Introduction',
        title: { en: 'CSS Introduction', kh: 'CSS Introduction - ការណែនាំ CSS' },
        description: {
          en: 'CSS is used to format the layout of a webpage.',
          kh: 'CSS ត្រូវបានប្រើប្រាស់ដើម្បីកែច្នៃទម្រង់ប្លង់ និងសោភ័ណភាពគេហទំព័រ។'
        },
        concept: {
          en: 'With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned.',
          kh: 'ជាមួយ CSS អ្នកអាចគ្រប់គ្រង ពណ៌ ហ្វុនអក្សរ ទំហំអត្ថបទ គម្លាតរវាងធាតុ និងទីតាំងរបស់វា។'
        },
        code: `<style>\n  h2 {\n    color: darkslateblue;\n    border-bottom: 2px solid darkslateblue;\n    padding-bottom: 5px;\n  }\n</style>\n<h2>រចនាបថ CSS គ្រឹះ</h2>\n<p>CSS ជួយរៀបចំប្លង់បានស្អាតឥតខ្ចោះ។</p>`,
        task: {
          en: 'Change the border-bottom style of `h2` to be a red dotted border of `3px dotted red`.',
          kh: 'សូមប្តូរ border-bottom របស់ `h2` ទៅជា `3px dotted red`។'
        }
      },
      {
        id: 'css-syntax',
        name: 'CSS Syntax',
        title: { en: 'CSS Selector and Declaration Syntax', kh: 'CSS Syntax - រូបមន្តសរសេរ CSS' },
        description: {
          en: 'A CSS rule-set consists of a selector and a declaration block.',
          kh: 'សំណុំក្បួន CSS រួមមាន Selector (ធាតុជ្រើសរើស) និង Declaration block (ប្លុកប្រកាសការរចនា)។'
        },
        concept: {
          en: 'The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.',
          kh: 'Selector ចង្អុលទៅកាន់ធាតុ HTML ដែលចង់រចនា។ Declaration block ផ្ទុកការរចនាមួយឬច្រើនដែលបំបែកដោយសញ្ញា (;)។'
        },
        code: `/* Selector គឺ p, Declaration block គឺនៅក្នុង { } */\np {\n  color: #10b981;\n  font-size: 16px;\n  text-align: center;\n}`,
        task: {
          en: 'Add a new property inside the declaration block: `font-weight: bold;`.',
          kh: 'សូមបន្ថែមការរចនាថ្មីមួយទៀតនៅក្នុងប្លុក៖ `font-weight: bold;`។'
        }
      },
      {
        id: 'css-selectors',
        name: 'CSS Selectors',
        title: { en: 'CSS Selectors', kh: 'CSS Selectors - វិធីជ្រើសរើសធាតុ' },
        description: {
          en: 'CSS selectors are used to "find" (or select) the HTML elements you want to style.',
          kh: 'CSS selectors ត្រូវបានប្រើប្រាស់ដើម្បីស្វែងរក និងជ្រើសរើសធាតុ HTML ដែលអ្នកចង់តុបតែង។'
        },
        concept: {
          en: 'We can divide CSS selectors into five categories: Simple selectors (select by name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements, Attribute selectors.',
          kh: 'យើងអាចបែងចែក Selectors ងាយៗជា ៣ គឺ៖ តាមឈ្មោះ tag (p), តាមឈ្មោះ class (.name), តាម id (#name)។'
        },
        code: `<style>\n  /* ជ្រើសរើសតាម class */\n  .green-text { color: green; }\n  /* ជ្រើសរើសតាម ID */\n  #unique-p { font-weight: bold; font-style: italic; }\n</style>\n<p class="green-text">អត្ថបទនេះនឹងមានពណ៌បៃតង</p>\n<p id="unique-p">អត្ថបទនេះដិតនិងទ្រេត</p>`,
        task: {
          en: 'Change class selector `.green-text` to have a font size of "22px" as well.',
          kh: 'សូមបន្ថែមទំហំអក្សរ `font-size: 22px;` ទៅកាន់ class selector `.green-text`។'
        }
      },
      {
        id: 'css-howto',
        name: 'CSS How To',
        title: { en: 'How To Add CSS', kh: 'CSS How To - របៀបបន្ថែម CSS' },
        description: {
          en: 'When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.',
          kh: 'នៅពេល Browser អានកូដស្ទីល វានឹងរៀបចំទម្រង់ HTML ទៅតាមការណែនាំរបស់ CSS នោះ។'
        },
        concept: {
          en: 'There are three ways of inserting a style sheet: External style sheet, Internal style sheet, Inline style.',
          kh: 'ការបញ្ចូល CSS មាន ៣ របៀប៖ ឯកសារខាងក្រៅ (.css), សរសេរក្នុង tag <style> ផ្នែក head, ឬសរសេរក្នុង attribute style="..." ផ្ទាល់។'
        },
        code: `<!-- គំរូសរសេរ Inline CSS ផ្ទាល់ និង Internal CSS ជាមួយគ្នា -->\n<style>\n  h3 { color: darkcyan; }\n</style>\n<h3 style="background-color: yellow; padding: 5px;">ចំណងជើងមានទាំង Internal និង Inline CSS</h3>`,
        task: {
          en: 'Add an inline style to the `<h3>` with `border-radius: 6px;`.',
          kh: 'សូមបន្ថែម inline style `border-radius: 6px;` ទៅកាន់ tag `<h3>` ផ្ទាល់។'
        }
      },
      {
        id: 'css-comments',
        name: 'CSS Comments',
        title: { en: 'CSS Comments', kh: 'CSS Comments - កំណត់ត្រាកូដ CSS' },
        description: {
          en: 'CSS comments are not displayed in the browser, but they can help document your source code.',
          kh: 'Comments ក្នុង CSS មិនត្រូវបានបង្ហាញលើអេក្រង់ឡើយ គឺប្រើសម្រាប់ពន្យល់កូដ។'
        },
        concept: {
          en: 'A CSS comment starts with `/*` and ends with `*/`. Comments can also span multiple lines.',
          kh: 'Comment ក្នុង CSS ចាប់ផ្តើមដោយសញ្ញា `/*` និងបញ្ចប់ទៅវិញដោយ `*/`។'
        },
        code: `/* នេះជា Comment ក្នុងភាសា CSS */\nh3 {\n  color: navy; /* កំណត់ពណ៌ខៀវចាស់ */\n}`,
        task: {
          en: 'Comment out the color rule in the CSS block and add a new color `color: orange;`.',
          kh: 'សូមដាក់សញ្ញា comment លើបន្ទាត់ color ចាស់ រួចបន្ថែមពណ៌ថ្មី `color: orange;`។'
        }
      },
      {
        id: 'css-colors',
        name: 'CSS Colors',
        title: { en: 'CSS Color Properties', kh: 'CSS Colors - ពណ៌នៅក្នុង CSS' },
        description: {
          en: 'Colors in CSS can be specified in many ways: color names, RGB values, HEX values, etc.',
          kh: 'ពណ៌នៅក្នុង CSS អាចកំណត់តាម៖ ឈ្មោះពណ៌, កូដ HEX (#10b981), កូដ RGB(16, 185, 129)។'
        },
        concept: {
          en: 'Use CSS color to change the text color, and background-color to change the background color of elements.',
          kh: 'ប្រើប្រាស់ `color` សម្រាប់ប្តូរពណ៌អក្សរ និង `background-color` សម្រាប់ប្តូរពណ៌ផ្ទៃក្រោយរបស់ធាតុ។'
        },
        code: `<div style="background-color: #10b981; color: white; padding: 15px; border-radius: 8px;">\n  ផ្ទៃពណ៌បៃតងកូដ HEX (#10b981) អក្សរពណ៌ស\n</div>`,
        task: {
          en: 'Modify the background-color to the HEX code `#3b82f6` (blue) and run.',
          kh: 'សូមប្តូរពណ៌ background-color ទៅជាកូដ HEX `#3b82f6` (ពណ៌ខៀវ) រួចចុច Run។'
        }
      },
      {
        id: 'css-backgrounds',
        name: 'CSS Backgrounds',
        title: { en: 'CSS Background Styling', kh: 'CSS Backgrounds - រចនាផ្ទៃក្រោយ' },
        description: {
          en: 'The CSS background properties are used to define the background effects for elements.',
          kh: 'លក្ខណៈសម្បត្តិ background របស់ CSS ត្រូវបានប្រើសម្រាប់រចនាផ្ទៃក្រោយរបស់ធាតុផ្សេងៗ។'
        },
        concept: {
          en: 'Properties: background-color, background-image, background-repeat, background-attachment, background-position.',
          kh: 'យើងអាចកំណត់ជា៖ ពណ៌ផ្ទៃក្រោយ (background-color) ឬរូបភាពផ្ទៃក្រោយ (background-image) ជាដើម។'
        },
        code: `<div style="background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475'); background-size: cover; height: 150px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; text-shadow: 1px 1px 4px black;">\n  រូបភាពផ្ទៃក្រោយ (Background Image)\n</div>`,
        task: {
          en: 'Add a background-color fallback value of `background-color: #1e293b;` to the style.',
          kh: 'សូមបន្ថែម `background-color: #1e293b;` ទៅក្នុង style របស់ div ខាងលើ។'
        }
      },
      {
        id: 'css-borders',
        name: 'CSS Borders',
        title: { en: 'CSS Border Properties', kh: 'CSS Borders - រចនាបន្ទាត់ជុំវិញ' },
        description: {
          en: 'The CSS border properties allow you to specify the style, width, and color of an element\'s border.',
          kh: 'CSS borders អនុញ្ញាតឱ្យយើងកំណត់ស្ទីល កម្រាស់ និងពណ៌របស់បន្ទាត់ជុំវិញធាតុ។'
        },
        concept: {
          en: 'Values: `border: width style color;`. Example: `border: 2px solid green;`. Rounded corners use `border-radius`.',
          kh: 'ទម្រង់សរសេរកាត់៖ `border: កម្រាស់ ទម្រង់ ពណ៌;`។ សម្រាប់ធ្វើឱ្យជ្រុងមូល ប្រើ `border-radius`។'
        },
        code: `<div style="border: 4px solid #10b981; border-radius: 12px; padding: 15px; text-align: center;">\n  បន្ទាត់ជុំវិញពណ៌បៃតង កម្រាស់ ៤px និងជ្រុងមូល ១២px\n</div>`,
        task: {
          en: 'Change the border style from `solid` to `dashed` and border-radius to `20px`.',
          kh: 'សូមប្តូរទម្រង់បន្ទាត់ពី `solid` ទៅជា `dashed` និង border-radius ទៅជា `20px`។'
        }
      },
      {
        id: 'css-margins',
        name: 'CSS Margins',
        title: { en: 'CSS Margin spacing', kh: 'CSS Margins - គម្លាតផ្នែកខាងក្រៅ' },
        description: {
          en: 'CSS margins are used to create space around elements, outside of any defined borders.',
          kh: 'CSS margins ប្រើសម្រាប់បង្កើតគម្លាតនៅជុំវិញធាតុ ដោយស្ថិតនៅផ្នែកខាងក្រៅបន្ទាត់ជុំវិញ។'
        },
        concept: {
          en: 'You can set margins for each side: margin-top, margin-right, margin-bottom, margin-left, or shorthand `margin: 20px;`.',
          kh: 'យើងអាចកំណត់ជា៖ margin-top, margin-bottom... ឬសរសេរកាត់ `margin: 20px;` (គម្លាតគ្រប់ជ្រុង)។'
        },
        code: `<div style="background-color: #f3f4f6; border: 1px solid #ccc; padding: 10px;">\n  <div style="background-color: #ef4444; color: white; margin: 20px; padding: 10px;">\n    ប្រអប់នេះមាន Margin ២០px នៅជុំវិញខាងក្រៅ\n  </div>\n</div>`,
        task: {
          en: 'Change the margin of the red inner box to `40px` and see how it pushes the outer box.',
          kh: 'សូមប្តូរ margin របស់ប្រអប់ក្រហមទៅជា `40px` រួចពិនិត្យមើលលទ្ធផល។'
        }
      },
      {
        id: 'css-padding',
        name: 'CSS Padding',
        title: { en: 'CSS Padding spacing', kh: 'CSS Padding - គម្លាតផ្នែកខាងក្នុង' },
        description: {
          en: 'CSS padding is used to create space around an element\'s content, inside of any defined borders.',
          kh: 'CSS padding ប្រើសម្រាប់បង្កើតគម្លាតនៅជុំវិញអត្ថបទមាតិកា ដោយស្ថិតនៅខាងក្នុងបន្ទាត់ជុំវិញ។'
        },
        concept: {
          en: 'Padding shorthand: `padding: top right bottom left;` or `padding: vertical horizontal;`.',
          kh: 'Padding ជួយឱ្យអត្ថបទមិននៅកៀកនឹងបន្ទាត់ជុំវិញពេក។ កូដកាត់៖ `padding: 20px;` (គម្លាតក្នុងគ្រប់ជ្រុង)។'
        },
        code: `<div style="border: 2px solid #3b82f6; padding: 25px; font-family: sans-serif;">\n  ប្រអប់នេះមាន Padding ២៥px ធ្វើឱ្យអត្ថបទមានគម្លាតធំទូលាយស្អាតពីបន្ទាត់ពណ៌ខៀវ។\n</div>`,
        task: {
          en: 'Change the padding value to `10px` to see how tight the text becomes to the border.',
          kh: 'សូមប្តូរតម្លៃ padding ទៅជា `10px` ដើម្បីមើលថាតើអក្សរកៀកនឹងបន្ទាត់ប៉ុណ្ណា។'
        }
      },
      {
        id: 'css-heightwidth',
        name: 'CSS Height / Width',
        title: { en: 'CSS Height and Width Properties', kh: 'CSS Height / Width - កម្ពស់ និងទទឹង' },
        description: {
          en: 'The height and width properties are used to set the height and width of an element.',
          kh: 'កម្ពស់ (height) និងទទឹង (width) ប្រើសម្រាប់កំណត់ទំហំខ្នាតរបស់ធាតុផ្សេងៗ។'
        },
        concept: {
          en: 'The height and width properties do not include padding, borders, or margins. They set the width/height of the content area inside.',
          kh: 'កម្ពស់និងទទឹងអាចកំណត់ជាភីកសែល (px) ឬជាភាគរយ (%) ធៀបនឹងប្រអប់ផ្ទុកខាងក្រៅ។'
        },
        code: `<div style="height: 100px; width: 50%; background-color: #8b5cf6; color: white; padding: 10px; border-radius: 8px;">\n  កម្ពស់ ១០០px និងទទឹង ៥០%\n</div>`,
        task: {
          en: 'Change the width style to "80%" and height style to "120px".',
          kh: 'សូមប្តូរទទឹង (width) ទៅជា "80%" និងកម្ពស់ (height) ទៅជា "120px"។'
        }
      },
      {
        id: 'css-boxmodel',
        name: 'CSS Box Model',
        title: { en: 'CSS Box Model Explanation', kh: 'CSS Box Model - គំរូប្រអប់ CSS' },
        description: {
          en: 'All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.',
          kh: 'រាល់ធាតុ HTML ទាំងអស់អាចចាត់ទុកជាប្រអប់។ គំនិត "Box Model" រួមមាន Content, Padding, Border, និង Margin។'
        },
        concept: {
          en: 'Understanding the Box Model is crucial to aligning and layout styling in CSS.',
          kh: 'ការយល់ដឹងពី Box Model ជួយឱ្យយើងគណនាទំហំពិតប្រាកដរបស់ធាតុបានត្រឹមត្រូវ (ទទឹងសរុប = width + padding + border)។'
        },
        code: `<div style="box-sizing: border-box; width: 100%; background-color: #f3f4f6; padding: 20px; border: 5px solid #10b981; margin: 10px;">\n  Box Model Container (ទទឹងរួមបញ្ចូលទាំង padding និង border ដោយសារ box-sizing: border-box)\n</div>`,
        task: {
          en: 'Change the border width from `5px` to `10px` and see the layout.',
          kh: 'សូមប្តូរកម្រាស់បន្ទាត់ (border width) ពី `5px` ទៅ `10px`។'
        }
      }
    ]
  },
  {
    langId: 'js',
    langName: 'JavaScript Tutorial',
    topics: [
      {
        id: 'js-home',
        name: 'JS Home',
        title: { en: 'JavaScript Tutorial - Learn JS', kh: 'JS Home - រៀនភាសា JavaScript' },
        description: {
          en: 'JavaScript is the world\'s most popular programming language. It is the programming language of the Web.',
          kh: 'JavaScript គឺជាភាសាកូដដ៏ពេញនិយមបំផុតនៅលើលោក។ វាជាភាសាកូដសម្រាប់អភិវឌ្ឍគេហទំព័រឱ្យមានអន្តរកម្ម។'
        },
        concept: {
          en: 'JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
          kh: 'JavaScript គឺងាយស្រួលរៀនណាស់។ មេរៀននេះនឹងបង្រៀនអ្នកពីកម្រិតដំបូងរហូតដល់កម្រិតខ្ពស់។'
        },
        code: `console.log("ស្វាគមន៍មកកាន់ការរៀន JavaScript!");\nlet x = 10;\nlet y = 5;\nconsole.log("លទ្ធផល x + y = ", x + y);`,
        task: {
          en: 'Change the value of `x` to `25` and click Run to see the new addition result in the console!',
          kh: 'សូមប្តូរតម្លៃ `x` ទៅជា `25` រួចចុច Run ដើម្បីមើលលទ្ធផលបូកថ្មីក្នុងប្រអប់ Console!'
        }
      },
      {
        id: 'js-intro',
        name: 'JS Introduction',
        title: { en: 'JavaScript Introduction', kh: 'JS Introduction - ការណែនាំអំពី JS' },
        description: {
          en: 'JavaScript can change HTML content, attribute values, styles (CSS), and hide or show elements.',
          kh: 'JavaScript អាចកែប្រែមាតិកា HTML, តម្លៃ attribute, ស្ទីល CSS និងអាចបិទឬបង្ហាញធាតុនានាបាន។'
        },
        concept: {
          en: 'JS is a lightweight, interpreted programming language with first-class functions.',
          kh: 'JS ជាភាសាកូដដែលដំណើរការផ្ទាល់នៅលើ browser របស់អ្នកប្រើប្រាស់ដើម្បីបង្កើតភាពរស់រវើក។'
        },
        code: `// JS អាចកែប្រែទិន្នន័យបានយ៉ាងងាយ\nlet title = "ការណែនាំពី JS";\nconsole.log("ចំណងជើងមេរៀន៖ " + title);`,
        task: {
          en: 'Declare a new variable `let mentor = "Seyha";` and log it using `console.log("Mentor:", mentor);`.',
          kh: 'សូមបង្កើតអថេរថ្មី `let mentor = "Seyha";` រួចបង្ហាញវាដោយប្រើ `console.log("Mentor:", mentor);`។'
        }
      },
      {
        id: 'js-whereto',
        name: 'JS Where To',
        title: { en: 'JS Where To insert code', kh: 'JS Where To - របៀបសរសេរកូដ JS' },
        description: {
          en: 'In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.',
          kh: 'នៅក្នុងឯកសារ HTML កូដ JavaScript ត្រូវសរសេរនៅក្នុងចន្លោះ tag `<script>` និង `</script>`។'
        },
        concept: {
          en: 'You can place scripts in the `<body>` or in the `<head>` section of an HTML page, or link to an external `.js` file.',
          kh: 'យើងអាចសរសេរក្នុង body ឬ head ឬបង្កើតឯកសារក្រៅរួចភ្ជាប់មកវិញតាមរយៈ `<script src="script.js"></script>`។'
        },
        code: `// គំរូសរសេរក្នុងឯកសារ JavaScript ផ្ទាល់\nfunction greetUser() {\n  return "សួស្តីសិស្សានុសិស្ស!";\n}\nconsole.log(greetUser());`,
        task: {
          en: 'Modify the function return message to say "រៀនកូដដើម្បីអនាគត".',
          kh: 'សូមកែសម្រួលសារត្រឡប់មកវិញរបស់ function ទៅជា "រៀនកូដដើម្បីអនាគត"។'
        }
      },
      {
        id: 'js-output',
        name: 'JS Output',
        title: { en: 'JavaScript Display Possibilities', kh: 'JS Output - របៀបបង្ហាញលទ្ធផល' },
        description: {
          en: 'JavaScript can "display" data in different ways: console.log(), innerHTML, document.write(), or window.alert().',
          kh: 'JavaScript អាចបង្ហាញទិន្នន័យតាម៖ `console.log()` ទៅកាន់ console, `innerHTML` ទៅកាន់ HTML ផ្ទាល់ ជាដើម។'
        },
        concept: {
          en: 'Using `console.log()` is the most common way to debug and print out values during development.',
          kh: 'ការប្រើប្រាស់ `console.log()` គឺជាវិធីសាស្ត្រពេញនិយមបំផុតសម្រាប់ការអភិវឌ្ឍន៍ និងសាកល្បងកូដ។'
        },
        code: `console.log("លទ្ធផលបង្ហាញលើ Console");\n// ឧទាហរណ៍គណនាលេខខ្លីៗ\nconsole.log("៩ គុណនឹង ៩ ស្មើ ៖", 9 * 9);`,
        task: {
          en: 'Add a new log output calculating `100 - 45`.',
          kh: 'សូមបន្ថែម log ថ្មីមួយបង្ហាញលទ្ធផលគណនា `100 - 45`។'
        }
      }
    ]
  },
  {
    langId: 'python',
    langName: 'Python Tutorial',
    topics: [
      {
        id: 'py-home',
        name: 'Python HOME',
        title: { en: 'Python HOME - Learn Python', kh: 'Python HOME - រៀនភាសា Python' },
        description: {
          en: 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.',
          kh: 'Python គឺជាភាសាកូដដ៏ល្បីល្បាញនិងពេញនិយមខ្លាំង។ វាត្រូវបានបង្កើតឡើងដោយលោក Guido van Rossum ក្នុងឆ្នាំ ១៩៩១។'
        },
        concept: {
          en: 'Python is used for: web development (server-side), software development, mathematics, system scripting, and Data Science/AI.',
          kh: 'Python ត្រូវបានប្រើប្រាស់សម្រាប់៖ ការសរសេរកម្មវិធីបណ្តាញ (Web Dev), បញ្ញាសិប្បនិម្មិត (AI/Machine Learning) និងវិទ្យាសាស្ត្រទិន្នន័យ។'
        },
        code: `print("សូមស្វាគមន៍មកកាន់ Python!")\n# គណនាលេខងាយៗ\nx = 5\ny = 10\nprint("ផលបូក x + y =", x + y)`,
        task: {
          en: 'Change `x` to `50` and run the python code to see the result.',
          kh: 'សូមផ្លាស់ប្តូរតម្លៃ `x` ទៅជា `50` រួចចុច Run ដើម្បីពិនិត្យលទ្ធផល។'
        }
      },
      {
        id: 'py-intro',
        name: 'Python Intro',
        title: { en: 'Python Introduction', kh: 'Python Intro - ការណែនាំអំពី Python' },
        description: {
          en: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.',
          kh: 'Python ជាភាសាកូដកម្រិតខ្ពស់ដែលងាយស្រួលសរសេរ និងងាយយល់ដូចភាសាអង់គ្លេសធម្មតា។'
        },
        concept: {
          en: 'Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.) and has a simple syntax similar to the English language.',
          kh: 'Python ដំណើរការលើគ្រប់ប្រព័ន្ធប្រតិបត្តិការ (Windows, Mac, Linux) និងមានទម្រង់កូដខ្លីៗសាមញ្ញ។'
        },
        code: `print("Python ងាយស្រួលរៀនណាស់!")\nprint("ខ្ញុំស្រឡាញ់ Python")`,
        task: {
          en: 'Add a new print statement displaying "រៀន Python ជាមួយ Seyha".',
          kh: 'សូមបន្ថែមការបង្ហាញ `print("រៀន Python ជាមួយ Seyha")` នៅបន្ទាត់បន្ទាប់។'
        }
      }
    ]
  },
  {
    langId: 'react',
    langName: 'React Tutorial',
    topics: [
      {
        id: 'react-home',
        name: 'React Home',
        title: { en: 'React HOME - Frontend UI Library', kh: 'React Home - បណ្ណាល័យ React' },
        description: {
          en: 'React is a JavaScript library for building user interfaces. It is maintained by Meta (Facebook).',
          kh: 'React គឺជាបណ្ណាល័យ JavaScript ដ៏ពេញនិយមបំផុតសម្រាប់បង្កើតផ្ទាំងកម្មវិធី UI។ ថែទាំដោយក្រុមហ៊ុន Meta។'
        },
        concept: {
          en: 'React is used to build single-page applications. React allows us to create reusable UI components.',
          kh: 'React ជួយយើងបង្កើត Single Page Applications និងបង្កើតសមាសភាគ UI ដែលអាចយកទៅប្រើឡើងវិញបានច្រើនដង។'
        },
        code: `export default function App() {\n  return (\n    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>\n      <h2 style={{ color: '#10b981' }}>ជម្រាបសួរពី React!</h2>\n      <p>នេះជាការបង្កើតសមាសភាគដំបូងរបស់ខ្ញុំ។</p>\n    </div>\n  );\n}`,
        task: {
          en: 'Change the text inside the `<h2>` to "ស្វាគមន៍ការរៀន React" and run.',
          kh: 'សូមកែប្រែអត្ថបទក្នុង `<h2>` ទៅជា "ស្វាគមន៍ការរៀន React" រួចចុច Run។'
        }
      }
    ]
  },
  {
    langId: 'typescript',
    langName: 'TypeScript Tutorial',
    topics: [
      {
        id: 'ts-home',
        name: 'TS HOME',
        title: { en: 'TypeScript HOME - Type-Safe JavaScript', kh: 'TS HOME - ភាសា TypeScript គ្រឹះ' },
        description: {
          en: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
          kh: 'TypeScript គឺជាភាសាកូដដែលពង្រីកសមត្ថភាពបន្ថែមលើ JavaScript ដោយបន្ថែមប្រព័ន្ធកំណត់ប្រភេទកូដ (Types)។'
        },
        concept: {
          en: 'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.',
          kh: 'TypeScript ជួយស្វែងរកកំហុសឆ្គងកូដមុនពេលដំណើរការកម្មវិធី ធ្វើឱ្យកូដមានសុវត្ថិភាពខ្ពស់។'
        },
        code: `let username: string = " Seyha";\nlet age: number = 21;\nconsole.log("ឈ្មោះអ្នកប្រើប្រាស់៖ " + username);\nconsole.log("អាយុ៖ " + age);`,
        task: {
          en: 'Try assigning a number to `username` like `username = 123;` and see the compilation error.',
          kh: 'សាកល្បងកំណត់លេខទៅឱ្យអថេរ string `username` (ឧទាហរណ៍ `username = 123;`) ដើម្បីមើលការជូនដំណឹងកំហុសកូដ។'
        }
      }
    ]
  }
];
