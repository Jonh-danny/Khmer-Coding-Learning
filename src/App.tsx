import { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  HashRouter, 
  Routes, 
  Route, 
  useParams, 
  useNavigate, 
  useLocation, 
  Navigate 
} from 'react-router-dom';
import { 
  GraduationCap, Sun, Moon, Globe, Search, Menu, X, ChevronDown, ChevronRight, ChevronLeft, 
  Play, BookOpen, ExternalLink, Sparkles, AlertCircle, Copy, Check, ArrowLeft, ArrowRight, Lightbulb,
  UserPlus, Info, HelpCircle, Mail, LifeBuoy, Database, Shield, Laptop, Code, Terminal, Lock, CheckCircle,
  Phone, MapPin, Clock, Heart, Send, Share2
} from 'lucide-react';
import { Language, Lesson, LessonFile } from './types';
import { getSidebarItems, generateTopic, getSidebarSections } from './utils/referenceTopicGenerator';
import LessonQuiz from './components/LessonQuiz';
import CodeEditor from './components/CodeEditor';

// Standard URL slugifier helper
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .trim();
};

// Accordion configuration: maps main lessons to their sub-lessons
export const subLessonsMap: Record<string, string[]> = {
  "HTML Elements": ["HTML Nested Elements", "HTML Empty Elements"],
  "HTML Attributes": ["HTML href Attribute", "HTML src Attribute", "HTML alt Attribute"],
  "HTML Headings": ["HTML Heading Sizes", "HTML Heading Importance"],
  "HTML Paragraphs": ["HTML Line Breaks", "HTML Pre Element"],
  "HTML Styles": ["HTML Background Color", "HTML Text Color", "HTML Text Align"],
  "CSS Selectors": ["CSS Element Selector", "CSS Class Selector", "CSS ID Selector"],
  "CSS Backgrounds": ["CSS Background Color", "CSS Background Image", "CSS Background Repeat"],
  "JS Loops": ["JS For Loops", "JS While Loops", "JS Break and Continue"],
  "JS Arrays": ["JS Array Methods", "JS Array Sorting"],
  "Python Variables": ["Python Variable Names", "Python Multiple Values", "Python Global Variables"],
  "Python Lists": ["Python List Items", "Python Access Lists", "Python Loop Lists"],
  "React Components": ["React Class Components", "React Functional Components"],
  "React Props": ["React Passing Props", "React Props Destructuring"],
  "TS Special Types": ["TS any Type", "TS unknown Type", "TS never Type"],
  "C++ Syntax": ["C++ Main Function", "C++ Namespace"],
  "C++ Data Types": ["C++ Numeric Types", "C++ Character Types"],
  "C++ Strings": ["C++ String Concatenation", "C++ Access Strings"],
  "C++ If...Else": ["C++ Short Hand If Else", "C++ Else If"],
  "C++ Arrays": ["C++ Multi-Dimensional Arrays", "C++ Array Size"],
  "C++ Constructors": ["C++ Constructor Parameters", "C++ Outside Constructors"],
  "C++ Inheritance": ["C++ Multilevel Inheritance", "C++ Multiple Inheritance"],
  "C# Variables": ["C# Constants", "C# Declare Multiple"],
  "C# Operators": ["C# Arithmetic Operators", "C# Logical Operators"],
  "C# Strings": ["C# String Interpolation", "C# Access Strings"],
  "C# If...Else": ["C# Short Hand If"],
  "C# While Loop": ["C# Do While Loop"],
  "C# For Loop": ["C# Foreach Loop"],
  "C# Arrays": ["C# Multidimensional Arrays", "C# Sorting Arrays"],
  "C# Method Parameters": ["C# Named Arguments", "C# Default Parameter Value"],
  "PHP Comments": ["PHP Single Line Comments", "PHP Multi Line Comments"],
  "PHP Variables": ["PHP Variable Scope", "PHP global Keyword"],
  "PHP Strings": ["PHP String Length", "PHP Search Text"],
  "PHP If...Else...Elseif": ["PHP Short Hand If"],
  "PHP Loops": ["PHP While Loop", "PHP For Each"],
  "Java Syntax": ["Java Main Method"],
  "Java Output": ["Java Print Text", "Java Print Numbers"],
  "Java Data Types": ["Java Primitive Types", "Java Non-Primitive Types"],
  "Java Method Parameters": ["Java Return Values", "Java Multiple Parameters"],
  "Java Modifiers": ["Java Access Modifiers", "Java Non-Access Modifiers"],
  "Java Enum": ["Java Enum in Switch"],
  "BS5 Colors": ["BS5 Text Colors", "BS5 Background Colors"],
  "Angular Templates": ["Angular Interpolation", "Angular Property Binding"]
};

// Badge logic matching W3Schools
const isNewBadge = (name: string) => {
  const lowercase = name.toLowerCase();
  return (
    lowercase.includes("temporal") ||
    lowercase.includes("projects") ||
    lowercase.includes("portals") ||
    lowercase.includes("suspense") ||
    lowercase.includes("5 updates") ||
    lowercase.includes("advanced types")
  );
};

// Main routing container
export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

// Inner content component utilizing React Router hooks
function AppContent() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem('preferred-lang') as Language) || 'kh';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply Light/Dark class to html root
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Routes>
      <Route 
        path="/contact" 
        element={
          <W3Layout 
            currentLang={currentLang} 
            onLangChange={handleLangChange}
            darkMode={darkMode}
            onThemeToggle={handleThemeToggle}
          />
        } 
      />
      <Route 
        path="/support" 
        element={
          <W3Layout 
            currentLang={currentLang} 
            onLangChange={handleLangChange}
            darkMode={darkMode}
            onThemeToggle={handleThemeToggle}
          />
        } 
      />
      <Route 
        path="/:trackId/:lessonId" 
        element={
          <W3Layout 
            currentLang={currentLang} 
            onLangChange={handleLangChange}
            darkMode={darkMode}
            onThemeToggle={handleThemeToggle}
          />
        } 
      />
      <Route 
        path="/sandbox/:trackId/:lessonId" 
        element={
          <SandboxView 
            currentLang={currentLang} 
            darkMode={darkMode}
            onThemeToggle={handleThemeToggle}
          />
        } 
      />
      <Route path="*" element={<DefaultRedirect />} />
    </Routes>
  );
}

// Handle default root redirection
function DefaultRedirect() {
  const lastTrack = localStorage.getItem('last-active-track') || 'html';
  const lastLesson = localStorage.getItem(`last-visited-${lastTrack}`) || 'html-home';
  return <Navigate to={`/${lastTrack}/${lastLesson}`} replace />;
}

// W3Schools Main Structural Layout
interface W3LayoutProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  darkMode: boolean;
  onThemeToggle: () => void;
}

// Educational Blog/Roadmap content for languages that do not have active compilers
const BLOG_GUIDES: Record<string, { titleEn: string; titleKh: string; category: string; categoryKh: string; descEn: string; descKh: string; contentEn: string; contentKh: string; codeExample?: string; codeLang?: string }> = {
  laravel: {
    titleEn: "Mastering PHP Modern Web Applications with Laravel",
    titleKh: "រៀនបង្កើតគេហទំព័រកម្រិតខ្ពស់ជាមួយ Laravel Framework",
    category: "Web Development",
    categoryKh: "ការអភិវឌ្ឍន៍គេហទំព័រ",
    descEn: "Discover why Laravel is the most popular PHP framework for building secure, scalable backend architectures.",
    descKh: "ស្វែងយល់ពីមូលហេតុដែល Laravel ជា PHP Framework ពេញនិយមបំផុតសម្រាប់ការបង្កើត Backend ដែលមានសុវត្ថិភាព និងភាពធន់ខ្ពស់។",
    codeExample: `// routes/web.php
Route::get('/welcome', function () {
    return view('welcome', ['name' => 'Khmer Developer']);
});

// app/Http/Controllers/UserController.php
public function index() {
    $users = User::all();
    return view('users.index', compact('users'));
}`,
    codeLang: "php",
    contentEn: "Laravel simplifies web application development by offering out-of-the-box authentication, powerful ORM (Eloquent), robust migration tools, and a secure routing system. It uses the MVC (Model-View-Controller) architecture, making your code modular and highly organized.",
    contentKh: "Laravel សម្រួលដល់ការបង្កើតកម្មវិធីគេហទំព័រដោយផ្តល់ជូននូវប្រព័ន្ធផ្ទៀងផ្ទាត់គណនី (Authentication) សេវាកម្មទិន្នន័យ (Eloquent ORM) ការគ្រប់គ្រង Database (Migrations) និងប្រព័ន្ធ Routing ដែលមានសុវត្ថិភាព។ វាប្រើប្រាស់ទម្រង់រចនាសម្ព័ន្ធ MVC (Model-View-Controller) ដែលធ្វើឱ្យកូដរបស់អ្នកមានសណ្តាប់ធ្នាប់ និងងាយស្រួលគ្រប់គ្រង។"
  },
  nodejs: {
    titleEn: "Building Scalable Backends with Node.js & Express",
    titleKh: "ការស្ថាបនាប្រព័ន្ធ Backend ជាមួយ Node.js & Express",
    category: "Web Development",
    categoryKh: "ការអភិវឌ្ឍន៍គេហទំព័រ",
    descEn: "Learn how to build lightweight, fast REST APIs using JavaScript on the server side with Node.js.",
    descKh: "ស្វែងយល់ពីរបៀបបង្កើតប្រព័ន្ធ REST APIs ដែលរហ័ស និងស្រាល ដោយប្រើប្រាស់ JavaScript នៅលើម៉ាស៊ីនបម្រើ (Server)។",
    codeExample: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/lessons', (req, res) => {
  res.json({ track: 'JavaScript', status: 'Active' });
});

app.listen(PORT, () => console.log('Server is running...'));`,
    codeLang: "javascript",
    contentEn: "Node.js runs on Google Chrome's V8 engine, enabling asynchronous, event-driven architecture that is highly optimal for real-time chat applications, streaming, and large APIs. Express is the minimal framework that sits on top, facilitating request-response loops with middleware.",
    contentKh: "Node.js ដំណើរការលើម៉ាស៊ីន V8 របស់ Google Chrome ដែលអនុញ្ញាតឱ្យកូដដើរក្នុងទម្រង់ Asynchronous និង Event-driven។ វាល្អបំផុតសម្រាប់កម្មវិធីទូរស័ព្ទ/វិបសាយផ្ញើសារភ្លាមៗ (Real-time chat) និង API ធំៗ។ Express គឺជា Framework ស្រាលបំផុតដែលជួយសម្រួលដល់ការគ្រប់គ្រង request-response ជាមួយ middleware។"
  },
  tailwind: {
    titleEn: "Speed Up Styling with Tailwind CSS",
    titleKh: "បង្កើនល្បឿននៃការរចនាជាមួយ Tailwind CSS",
    category: "Web Development",
    categoryKh: "ការអភិវឌ្ឍន៍គេហទំព័រ",
    descEn: "Style your website directly in your HTML without writing separate CSS files using utility classes.",
    descKh: "រចនាគេហទំព័ររបស់អ្នកដោយផ្ទាល់នៅក្នុងកូដ HTML ដោយមិនចាំបាច់សរសេរឯកសារ CSS ដាច់ដោយឡែក។",
    codeExample: `<div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-[#04AA6D] font-semibold">Khmer Coding</div>
      <p className="mt-2 text-gray-500">Learn utility-first CSS styling in seconds!</p>
    </div>
  </div>
</div>`,
    codeLang: "html",
    contentEn: "Tailwind CSS provides low-level utility classes that can be combined to build completely custom designs. It eliminates the need for arbitrary CSS class naming and includes responsive utilities like md: and hover: out of the box, optimized with tree-shaking for tiny production builds.",
    contentKh: "Tailwind CSS ផ្តល់នូវថ្នាក់ឧបករណ៍ (utility classes) កម្រិតទាបដែលអាចរួមបញ្ចូលគ្នាដើម្បីបង្កើតការរចនាផ្ទាល់ខ្លួន។ វាលុបបំបាត់តម្រូវការបង្កើតឈ្មោះ CSS ប្លែកៗ និងរួមបញ្ចូលជំនួយសម្របសម្រួលទំហំអេក្រង់ (responsive utilities) ដូចជា md: និង hover: ភ្លាមៗ។"
  },
  c: {
    titleEn: "Unlocking Systems Programming with C",
    titleKh: "ស្វែងយល់ពីប្រព័ន្ធកូដកម្រិតទាបជាមួយភាសា C",
    category: "Programming Languages",
    categoryKh: "ភាសាកម្មវិធីសិក្សា",
    descEn: "Build a rock-solid computer science foundation by learning memory allocation, pointers, and performance optimizations.",
    descKh: "បង្កើតគ្រឹះវិទ្យាសាស្ត្រកុំព្យូទ័រដ៏រឹងមាំតាមរយៈការរៀនគ្រប់គ្រងអង្គចងចាំ (Memory Allocation) និងចង្អុលបង្ហាញ (Pointers)។",
    codeExample: `#include <stdio.h>

int main() {
    int score = 100;
    int *ptr = &score;
    
    printf("Score: %d\\n", score);
    printf("Memory address of Score: %p\\n", (void*)ptr);
    return 0;
}`,
    codeLang: "cpp",
    contentEn: "C is often called the mother of all programming languages. It provides close-to-hardware efficiency and direct memory access, making it the supreme choice for developing operating systems (Linux, Windows kernel), embedded systems, and database engines.",
    contentKh: "ភាសា C ត្រូវបានគេហៅថាជាមាតានៃភាសាកូដទាំងអស់។ វាផ្តល់នូវប្រសិទ្ធភាពខ្ពស់ជិតស្និទ្ធនឹងឧបករណ៍រឹង (Hardware) និងការចូលប្រើប្រាស់អង្គចងចាំដោយផ្ទាល់ ដែលធ្វើឱ្យវាជាជម្រើសដ៏ល្អបំផុតសម្រាប់បង្កើតប្រព័ន្ធប្រតិបត្តិការ (Operating Systems) និងឧបករណ៍បង្កប់ (Embedded Systems)។"
  },
  dart: {
    titleEn: "An Introduction to Dart Programming Language",
    titleKh: "ការណែនាំអំពីភាសាកម្មវិធី Dart",
    category: "Programming Languages",
    categoryKh: "ភាសាកម្មវិធីសិក្សា",
    descEn: "Discover Dart: a client-optimized language for fast apps on any platform, powering the Flutter ecosystem.",
    descKh: "ស្វែងយល់ពី Dart៖ ភាសាដែលបានកែលម្អសម្រាប់បង្កើតកម្មវិធីរហ័សលើគ្រប់ប្រព័ន្ធប្រតិបត្តិការ និងជាកម្លាំងចលកររបស់ Flutter។",
    codeExample: `void main() {
  var name = 'Khmer Coder';
  print('Hello, $name!');
  
  var numbers = [1, 2, 3];
  numbers.forEach((num) => print('Number: $num'));
}`,
    codeLang: "javascript",
    contentEn: "Dart is designed by Google for multi-platform client apps. It features sound type-safety, compilation to native ARM/x64 machine code, and garbage collection, supporting fast development cycles with stateful Hot Reload.",
    contentKh: "Dart ត្រូវបានរចនាឡើងដោយ Google សម្រាប់កម្មវិធីអតិថិជនច្រើនប្រព័ន្ធ។ វាមានសុវត្ថិភាពប្រភេទកូដច្បាស់លាស់ (Type-safety) ការចងក្រងទៅជាកូដម៉ាស៊ីន ARM/x64 ដើម និងគាំទ្រការរចនារហ័សជាមួយ Stateful Hot Reload។"
  },
  springboot: {
    titleEn: "Enterprise Java Microservices with Spring Boot",
    titleKh: "ការបង្កើតប្រព័ន្ធធំៗជាមួយ Spring Boot (Java Enterprise)",
    category: "Programming Languages",
    categoryKh: "ភាសាកម្មវិធីសិក្សា",
    descEn: "Build production-ready, secure, cloud-scale microservices using the robust Java Spring framework.",
    descKh: "បង្កើតសេវាកម្មខ្នាតតូច (Microservices) ដែលមានសុវត្ថិភាព ត្រៀមខ្លួនសម្រាប់ផលិតកម្ម និងងាយស្រួលពង្រីកដោយប្រើ Java Spring Boot។",
    codeExample: `@RestController
@RequestMapping("/api/v1")
public class HelloController {
    @GetMapping("/greet")
    public ResponseEntity<String> greet() {
        return ResponseEntity.ok("សូមស្វាគមន៍មកកាន់ Spring Boot!");
    }
}`,
    codeLang: "java",
    contentEn: "Spring Boot eliminates tedious boilerplate configuration from Spring enterprise development. It provides built-in Tomcat servers, auto-configured database connections, and secure enterprise integration patterns out of the box.",
    contentKh: "Spring Boot លុបបំបាត់ការកំណត់រចនាសម្ព័ន្ធដ៏ស្មុគស្មាញរបស់ Spring។ វាផ្តល់ជូននូវម៉ាស៊ីនបម្រើ Tomcat រួចជាស្រេច ការតភ្ជាប់ទិន្នន័យដោយស្វ័យប្រវត្តិ (auto-configured database) និងការរួមបញ្ចូលប្រព័ន្ធសន្តិសុខដ៏រឹងមាំបំផុត។"
  },
  kotlin: {
    titleEn: "Kotlin: The Modern Language for Android Apps",
    titleKh: "Kotlin៖ ភាសាកូដទំនើបសម្រាប់កម្មវិធី Android",
    category: "Mobile Development",
    categoryKh: "ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
    descEn: "Adopt JetBrains' modern language designed to make Android application development faster, safer, and highly expressive.",
    descKh: "ប្រើប្រាស់ភាសាទំនើបរបស់ JetBrains ដែលរចនាឡើងដើម្បីធ្វើឱ្យការបង្កើតកម្មវិធី Android កាន់តែលឿន មានសុវត្ថិភាព និងងាយស្រួលសរសេរ។",
    codeExample: `fun main() {
    val message: String? = null
    // Null safety prevents crashes
    println(message?.length ?: "No message found")
    
    val developers = listOf("Seyha", "Dara", "Sok")
    developers.filter { it.startsWith("S") }.forEach { println(it) }
}`,
    codeLang: "java",
    contentEn: "Kotlin is fully interoperable with Java and has been Google's preferred language for Android development since 2017. It features null safety, smart casts, lambda expressions, and coroutines for high-performance asynchronous programming.",
    contentKh: "Kotlin អាចដំណើរការជាមួយ Java ទាំងស្រុង ហើយត្រូវបាន Google ជ្រើសរើសជាភាសាអាទិភាពបំផុតសម្រាប់បង្កើត Android តាំងពីឆ្នាំ ២០១៧។ វាមានលក្ខណៈពិសេសការពារកំហុស Null Safety, Lambda និង Coroutines សម្រាប់ការសរសេរកូដ Asynchronous ល្បឿនលឿន។"
  },
  flutter: {
    titleEn: "Cross-Platform Mobile App Creation with Flutter",
    titleKh: "ការបង្កើតកម្មវិធីទូរស័ព្ទច្រើនប្រព័ន្ធជាមួយ Flutter",
    category: "Mobile Development",
    categoryKh: "ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
    descEn: "Write once, deploy to iOS, Android, Desktop, and Web using Flutter's high-performance rendering engine.",
    descKh: "សរសេរកូដតែម្តង ដំណើរការបានទាំងនៅលើ iOS, Android, កុំព្យូទ័រ និងគេហទំព័រ ដោយប្រើម៉ាស៊ីនបង្ហាញរូបភាព Flutter។",
    codeExample: `import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: Scaffold(
    appBar: AppBar(title: Text('Khmer Coding App')),
    body: Center(child: Text('រៀនកូដជាមួយពួកយើង!')),
  ),
));`,
    codeLang: "javascript",
    contentEn: "Flutter compiles directly to native machine code, bypassing bridge abstractions for smooth 60fps animations. Everything in Flutter is a Widget, allowing incredible control over your UI designs down to the pixel level.",
    contentKh: "Flutter ចងក្រងផ្ទាល់ទៅជាកូដម៉ាស៊ីនដើម (native machine code) ធ្វើឱ្យចលនា (animations) រលូនល្អដល់ទៅ 60fps។ អ្វីៗទាំងអស់នៅក្នុង Flutter គឺជា Widget ដែលផ្តល់ភាពងាយស្រួលដល់ការគ្រប់គ្រង និងរចនា UI យ៉ាងស្រស់ស្អាតបំផុត។"
  },
  git: {
    titleEn: "Essential Git Commands & Version Control Guides",
    titleKh: "ការណែនាំអំពីការប្រើប្រាស់ Git & Version Control",
    category: "Database & Tools",
    categoryKh: "ប្រព័ន្ធទិន្នន័យ និងឧបករណ៍",
    descEn: "Understand how professional software engineers save versions, create branches, and collaborate on codebase repositories.",
    descKh: "ស្វែងយល់ពីរបៀបដែលក្រុមអ្នកសរសេរកូដជំនាញ រក្សាទុកកូដ បំបែកមែកធាងការងារ (Branches) និងសហការគ្នាលើគម្រោងរួមគ្នា។",
    codeExample: `# Initialize a new local repository
git init

# Add and commit changes
git add .
git commit -m "feat: add registration form"

# Push to your remote repository
git branch -M main
git remote add origin https://github.com/user/project.git
git push -u origin main`,
    codeLang: "cpp",
    contentEn: "Git is a distributed version control system. It allows developers to record history, roll back to prior checkpoints, and coordinate concurrent edits safely through merges and pull requests, keeping your codebase integrity flawless.",
    contentKh: "Git គឺជាប្រព័ន្ធគ្រប់គ្រងកំណែកូដ (Version Control)។ វាអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍កត់ត្រាប្រវត្តិការងារ ត្រឡប់ទៅចំណុចចាស់ៗវិញ និងធ្វើការសហការគ្នាកែប្រែកូដដោយសុវត្ថិភាព តាមរយៈការបញ្ចូលកូដ (merging)។"
  },
  cybersecurity: {
    titleEn: "Introduction to Cyber Security Best Practices",
    titleKh: "ការណែនាំអំពីមូលដ្ឋានគ្រឹះសន្តិសុខបច្ចេកវិទ្យា (Cyber Security)",
    category: "Security & Other",
    categoryKh: "សន្តិសុខបច្ចេកវិទ្យា និងផ្សេងៗ",
    descEn: "Protect your database, authenticate securely, and build armor against attacks like SQL Injection and XSS.",
    descKh: "ការពារប្រព័ន្ធទិន្នន័យរបស់អ្នក ផ្ទៀងផ្ទាត់គណនីឱ្យមានសុវត្ថិភាព និងបង្កើតខែលការពារប្រឆាំងនឹងការវាយប្រហារផ្សេងៗ។",
    codeExample: `// ❌ Vulnerable to SQL Injection
const query = "SELECT * FROM users WHERE name = '" + req.body.username + "'";

// ✅ Secure - Using Parameterized Queries
const query = "SELECT * FROM users WHERE name = ?";
db.execute(query, [req.body.username]);

// Hash passwords before storing them
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);`,
    codeLang: "javascript",
    contentEn: "Modern web security starts with treating all user input as untrusted. Ensure strict input validation, utilize parameterized database queries, implement HTTP headers like CORS/CSP, hash passwords using bcrypt/argon2, and enforce HTTPS everywhere.",
    contentKh: "សន្តិសុខបច្ចេកវិទ្យាទំនើបចាប់ផ្តើមដោយការចាត់ទុកទិន្នន័យពីអ្នកប្រើប្រាស់ថាគ្មានសុវត្ថិភាព។ ត្រូវប្រាកដថាអ្នកបានបញ្ជាក់ភាពត្រឹមត្រូវនៃទិន្នន័យ ប្រើប្រាស់សំណួរដែលមានប៉ារ៉ាម៉ែត្រ (Parameterized Queries) និងរក្សាទុកលេខសម្ងាត់ដោយការបំប្លែងកូដ (Hashing)។"
  },
  components: {
    titleEn: "Demystifying Hardware: How Computers Run Your Code",
    titleKh: "ស្វែងយល់ពីគ្រឿងបង្គុំកុំព្យូទ័រ និងរបៀបដំណើរការកូដ",
    category: "Security & Other",
    categoryKh: "សន្តិសុខបច្ចេកវិទ្យា និងផ្សេងៗ",
    descEn: "Take a journey from source code down to CPU compilation, RAM storage, storage operations, and clock cycles.",
    descKh: "ស្វែងយល់ពីរបៀបដែលកូដរបស់អ្នកត្រូវបានបំប្លែងទៅជាភាសាម៉ាស៊ីន ដើម្បីដំណើរការលើ CPU, RAM, និងប្រព័ន្ធរក្សាទុក។",
    codeExample: `Source Code (high-level: C/Python)
     │
     ▼ (Compiler / Interpreter)
Assembly Code (register movements: MOV, ADD)
     │
     ▼ (Assembler)
Machine Code (binary instructions: 01001011)
     │
     ▼ (CPU executes in silicon gates)`,
    codeLang: "html",
    contentEn: "Every application you write relies on hardware. Your CPU (Central Processing Unit) performs mathematical computations in clock cycles; RAM (Random Access Memory) holds volatile, active variables; SSDs hold long-term storage; motherboard buses transfer speed.",
    contentKh: "រាល់កម្មវិធីដែលអ្នកសរសេរគឺត្រូវពឹងផ្អែកលើគ្រឿងរឹង (Hardware)។ CPU ដំណើរការគណនាគណិតវិទ្យាជាវដ្តនាឡិកា (clock cycles)។ RAM រក្សាទិន្នន័យបណ្តោះអាសន្នដែលកំពុងប្រើប្រាស់យ៉ាងលឿន ចំណែកឯ SSD/HDD រក្សាទុកទិន្នន័យរយៈពេលវែង។"
  },
  learncoding: {
    titleEn: "How to Successfully Self-Teach Coding from Scratch",
    titleKh: "វិធីសាស្ត្ររៀនសរសេរកូដដោយខ្លួនឯងឱ្យទទួលបានជោគជ័យ",
    category: "Security & Other",
    categoryKh: "សន្តិសុខបច្ចេកវិទ្យា និងផ្សេងៗ",
    descEn: "Get expert blueprint recommendations on active recall coding, building portfolio projects, and overcoming obstacles.",
    descKh: "ទទួលបានអនុសាសន៍ និងផែនការសកម្មភាពសម្រាប់ការរៀនសរសេរកូដ បង្កើតគម្រោង និងការជំនះរាល់ឧបសគ្គសិក្សា។",
    codeExample: `Roadmap:
1. Choose 1 Language Core (e.g. JavaScript or Python)
2. Build 5 Small Projects (Todo list, calculator, clock)
3. Learn Git & GitHub for source storage
4. Build 3 API integrations
5. Apply for internships & contribute to open source!`,
    codeLang: "html",
    contentEn: "The secret to self-teaching code is active learning. Instead of passively reading or watching tutorials, write code alongside lessons, break programs to debug, build real-world utilities, and join tech support communities.",
    contentKh: "អាថ៌កំបាំងនៃការរៀនសរសេរកូដដោយខ្លួនឯងគឺការរៀនតាមរយៈការអនុវត្តជាក់ស្តែង (active learning)។ ជាជាងការគ្រាន់តែមើលមេរៀន ត្រូវសរសេរកូដសាកល្បងដោយផ្ទាល់ បង្កើតកម្មវិធីតូចៗ និងចូលរួមក្នុងសហគមន៍ដើម្បីសួរនិងឆ្លើយសំណួរ។"
  }
};

function W3Layout({ currentLang, onLangChange, darkMode, onThemeToggle }: W3LayoutProps) {
  const { trackId = 'html', lessonId = 'html-home' } = useParams<{ trackId: string; lessonId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isSupportPage = location.pathname === '/support';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [copied, setCopied] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Custom added states for new navbar links, registration and programs
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const [selectedBlogLang, setSelectedBlogLang] = useState<string | null>(null);
  
  // Registration and simulated login
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; track?: string } | null>(() => {
    const saved = localStorage.getItem('khmer-coding-user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleRegister = (name: string, email: string, track?: string) => {
    const user = { name, email, track };
    setCurrentUser(user);
    localStorage.setItem('khmer-coding-user', JSON.stringify(user));
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('khmer-coding-user');
  };

  // Mock message form submission
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
      setShowContactModal(false);
    }, 2500);
  };

  // Store track activity for resumption
  useEffect(() => {
    localStorage.setItem('last-active-track', trackId);
    localStorage.setItem(`last-visited-${trackId}`, lessonId);
  }, [trackId, lessonId]);

  // Click outside search dismisses dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sidebar item list for the active track
  const sidebarItems = getSidebarItems(trackId);

  // Helper: Find lesson display name (main and sub-lessons)
  const findLessonName = (tid: string, lid: string) => {
    const mainLessons = getSidebarItems(tid);
    
    // 1. Check main lessons
    for (const mainName of mainLessons) {
      if (slugify(mainName) === lid) {
        return { mainName };
      }
    }
    
    // 2. Check sub lessons
    for (const [parentName, subList] of Object.entries(subLessonsMap)) {
      if (mainLessons.includes(parentName)) {
        for (const subName of subList) {
          if (slugify(subName) === lid) {
            return { mainName: parentName, subName };
          }
        }
      }
    }
    return null;
  };

  const resolved = findLessonName(trackId, lessonId);
  const activeLessonName = resolved?.subName || resolved?.mainName || sidebarItems[0];
  const activeParentName = resolved?.mainName || sidebarItems[0];

  // Auto-expand sidebar accordion if current route is a sub-lesson
  useEffect(() => {
    if (resolved?.subName && resolved?.mainName) {
      setExpandedLessons(prev => {
        const next = new Set(prev);
        next.add(resolved.mainName);
        return next;
      });
    }
  }, [lessonId]);

  // Get active topic data
  const currentTopic = generateTopic(trackId, activeLessonName);

  // Toggle sidebar accordion item
  const toggleAccordion = (name: string) => {
    setExpandedLessons(prev => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  // Build sequential lists of slugs for Prev/Next buttons
  const orderedSlugs: string[] = [];
  sidebarItems.forEach(mainName => {
    orderedSlugs.push(slugify(mainName));
    const subList = subLessonsMap[mainName];
    if (subList) {
      subList.forEach(subName => {
        orderedSlugs.push(slugify(subName));
      });
    }
  });

  const currentIdx = orderedSlugs.indexOf(slugify(activeLessonName));
  const prevSlug = currentIdx > 0 ? orderedSlugs[currentIdx - 1] : null;
  const nextSlug = currentIdx < orderedSlugs.length - 1 ? orderedSlugs[currentIdx + 1] : null;

  // Handle previous navigation
  const handlePrev = () => {
    if (prevSlug) navigate(`/${trackId}/${prevSlug}`);
  };

  // Handle next navigation
  const handleNext = () => {
    if (nextSlug) navigate(`/${trackId}/${nextSlug}`);
  };

  // Switch active tracks cleanly with persistence
  const handleTrackChange = (tid: string) => {
    const lastVisited = localStorage.getItem(`last-visited-${tid}`) || slugify(getSidebarItems(tid)[0]);
    navigate(`/${tid}/${lastVisited}`);
    setSidebarOpen(false);
  };

  // Copy code utility
  const handleCopy = () => {
    navigator.clipboard.writeText(currentTopic.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Gather searchable items across all tracks
  const getSearchableItems = () => {
    const tracks = ['html', 'css', 'js', 'python', 'react', 'typescript', 'cpp', 'csharp', 'php', 'java', 'bootstrap5', 'jquery', 'angular', 'sql', 'mysql', 'vue'];
    const items: { trackId: string; name: string; slug: string; parent?: string }[] = [];
    
    tracks.forEach(tid => {
      const mainLessons = getSidebarItems(tid);
      mainLessons.forEach(mainName => {
        items.push({ trackId: tid, name: mainName, slug: slugify(mainName) });
        const subList = subLessonsMap[mainName];
        if (subList) {
          subList.forEach(subName => {
            items.push({ trackId: tid, name: subName, slug: slugify(subName), parent: mainName });
          });
        }
      });
    });
    return items;
  };

  const filteredSearchResults = searchQuery.trim() === '' 
    ? [] 
    : getSearchableItems().filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8);

  const getTrackColorBadge = (tid: string) => {
    switch (tid) {
      case 'html': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400';
      case 'css': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'js': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
      case 'python': return 'bg-teal-500/10 text-teal-600 dark:text-teal-400';
      case 'react': return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
      case 'typescript': return 'bg-sky-500/10 text-sky-600 dark:text-sky-400';
      case 'cpp': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'csharp': return 'bg-violet-500/10 text-violet-600 dark:text-violet-400';
      case 'php': return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
      case 'java': return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'bootstrap5': return 'bg-pink-500/10 text-pink-600 dark:text-pink-400';
      case 'jquery': return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400';
      case 'angular': return 'bg-rose-500/10 text-rose-600 dark:text-rose-400';
      case 'sql': return 'bg-sky-500/10 text-sky-600 dark:text-sky-400';
      case 'mysql': return 'bg-blue-600/10 text-blue-600 dark:text-blue-400';
      case 'vue': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      default: return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-100 font-sans transition-colors duration-300`}>
      
      {/* 1. Global Top Navbar (Block 1 - Green color) */}
      <nav className="sticky top-0 z-50 min-h-16 w-full border-b border-gray-200 dark:border-neutral-800 bg-[#04AA6D] text-white flex flex-col xl:flex-row xl:items-center justify-between px-4 lg:px-8 shadow-md py-3 gap-4">
        {/* Left: Logo & Core Navigation Items */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 flex-1">
          {/* Logo */}
          <div 
            onClick={() => handleTrackChange('html')} 
            className="flex items-center space-x-2 cursor-pointer group shrink-0"
          >
            <div className="p-1.5 bg-white text-[#04AA6D] rounded-lg shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-sans font-black text-lg tracking-tight select-none">
              Khmer Coding <span className="font-normal text-emerald-100">Learning</span>
            </span>
          </div>

          {/* Reordered 7-item Unified Navbar Menu */}
          <div className="flex items-center flex-wrap gap-1 lg:border-l lg:border-emerald-500/30 lg:pl-5">
            {[
              { id: 'courses', label: { en: 'Courses', kh: 'វគ្គសិក្សា' }, action: () => navigate('/html/html-home'), isActive: !isContactPage && !isSupportPage },
              { id: 'paths', label: { en: 'Paths', kh: 'វិថីសិក្សា' }, action: () => navigate('/html/html-home'), isActive: false },
              { id: 'references', label: { en: 'References', kh: 'ឯកសារយោង' }, action: () => navigate('/html/html-home'), isActive: false },
              { id: 'faq', label: { en: 'FAQ', kh: 'សំណួរញឹកញាប់' }, action: () => setShowFAQModal(true), isActive: false },
              { id: 'contact', label: { en: 'Contact', kh: 'ទាក់ទងយើង' }, action: () => navigate('/contact'), isActive: isContactPage },
              { id: 'support', label: { en: 'Support', kh: 'គាំទ្រ' }, action: () => navigate('/support'), isActive: isSupportPage },
              { id: 'about', label: { en: 'About Us', kh: 'អំពីយើង' }, action: () => setShowAboutModal(true), isActive: false }
            ].map(item => (
              <button
                key={item.id}
                onClick={item.action}
                className={`px-2.5 py-1.5 text-xs font-black transition-all relative ${
                  item.isActive
                    ? 'text-blue-200 border-b-2 border-blue-200 font-extrabold pb-0.5'
                    : 'text-emerald-50 hover:text-white hover:bg-emerald-600 rounded-lg'
                }`}
              >
                {item.label[currentLang]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Search, Registration Button, Language Switcher, Theme Switcher */}
        <div className="flex items-center flex-wrap gap-4 justify-between sm:justify-end">
          
          {/* Working Search Bar */}
          <div ref={searchRef} className="relative hidden md:block w-56">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-emerald-100" />
              <input
                type="text"
                placeholder={currentLang === 'en' ? "Search tutorials..." : "ស្វែងរកមេរៀន..."}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSearchFocused(true);
                }}
                onFocus={() => setSearchFocused(true)}
                className="w-full pl-9 pr-4 py-1.5 bg-emerald-600 text-white placeholder-emerald-100 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 border border-emerald-500 transition"
              />
            </div>

            {/* Search Results Dropdown */}
            {searchFocused && filteredSearchResults.length > 0 && (
              <div className="absolute right-0 top-11 w-80 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-xl overflow-hidden py-2 animate-fadeIn z-50 text-gray-800 dark:text-neutral-200">
                <div className="px-3.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-neutral-800 mb-1">
                  {currentLang === 'en' ? 'Matching Lessons' : 'មេរៀនដែលត្រូវគ្នា'}
                </div>
                {filteredSearchResults.map(item => (
                  <button
                    key={`${item.trackId}-${item.slug}`}
                    onClick={() => {
                      navigate(`/${item.trackId}/${item.slug}`);
                      setSearchQuery('');
                      setSearchFocused(false);
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center justify-between text-xs sm:text-sm group"
                  >
                    <div className="truncate">
                      <span className="font-bold text-gray-950 dark:text-white group-hover:text-[#04AA6D] transition-colors">{item.name}</span>
                      {item.parent && (
                        <span className="text-[10px] text-gray-400 dark:text-neutral-500 block">
                          in {item.parent}
                        </span>
                      )}
                    </div>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 ml-2 ${getTrackColorBadge(item.trackId)}`}>
                      {item.trackId}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Requested Register Form for User */}
          <div className="flex items-center gap-2">
            {currentUser ? (
              <div className="flex items-center bg-emerald-800/80 rounded-xl pl-3 pr-1.5 py-1 text-xs gap-2 border border-emerald-700/50">
                <span className="font-semibold text-emerald-50">
                  {currentLang === 'en' ? 'Hello,' : 'សួស្តី,'} <span className="text-white font-black">{currentUser.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-[10px] font-bold transition uppercase"
                >
                  {currentLang === 'en' ? 'Sign Out' : 'ចាកចេញ'}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowRegisterModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#04AA6D] hover:bg-emerald-50 rounded-xl text-xs font-black shadow-sm transition transform active:scale-95"
              >
                <UserPlus className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'Register' : 'ចុះឈ្មោះ'}</span>
              </button>
            )}
          </div>

          {/* Bilingual Language Switcher */}
          <div className="flex items-center bg-emerald-600/60 p-0.5 rounded-lg border border-emerald-500">
            <button
              onClick={() => onLangChange('en')}
              className={`px-2 py-0.5 rounded text-[10px] font-extrabold transition ${
                currentLang === 'en' ? 'bg-white text-[#04AA6D] shadow-sm' : 'text-emerald-100 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLangChange('kh')}
              className={`px-2 py-0.5 rounded text-[10px] font-extrabold transition ${
                currentLang === 'kh' ? 'bg-white text-[#04AA6D] shadow-sm' : 'text-emerald-100 hover:text-white'
              }`}
            >
              ខ្មែរ
            </button>
          </div>

          {/* Light/Dark Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 hover:bg-emerald-600 rounded-lg transition text-white"
            title={currentLang === 'en' ? "Toggle Theme" : "ប្តូរពណ៌ផ្ទៃ"}
          >
            {darkMode ? <Sun className="h-4.5 w-4.5 text-amber-300" /> : <Moon className="h-4.5 w-4.5 text-emerald-100" />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1.5 hover:bg-emerald-600 rounded-lg text-white"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* 2. Secondary Language & Program Bar (Block 2 - Fit-color) */}
      <div className="relative z-40 w-full bg-slate-50 dark:bg-neutral-850 border-b border-gray-200 dark:border-neutral-800 px-4 md:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Requested Program Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProgramDropdown(!showProgramDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-sm"
            >
              <Code className="h-4 w-4" />
              <span>{currentLang === 'en' ? 'Type of Program ▾' : 'ប្រភេទកម្មវិធីសិក្សា ▾'}</span>
            </button>

            {/* Structured Dropdown Menu Box - Matching Uploaded Image Exactly */}
            {showProgramDropdown && (
              <div className="absolute left-0 mt-2 w-[310px] sm:w-[680px] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-5 z-50 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fadeIn">
                
                {/* Section 1: Web Development */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 dark:border-neutral-800">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-lg">
                      <Laptop className="h-4 w-4" />
                    </div>
                    <h4 className="font-extrabold text-xs tracking-tight uppercase text-gray-800 dark:text-neutral-200">
                      {currentLang === 'en' ? 'Web Development' : 'អភិវឌ្ឍន៍គេហទំព័រ'}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    {[
                      { name: 'HTML', tid: 'html', bullet: 'bg-orange-500' },
                      { name: 'CSS', tid: 'css', bullet: 'bg-purple-600' },
                      { name: 'JavaScript', tid: 'js', bullet: 'bg-yellow-500' },
                      { name: 'React', tid: 'react', bullet: 'bg-sky-400' },
                      { name: 'PHP', tid: 'php', bullet: 'bg-indigo-600' },
                      { name: 'Laravel', tid: 'laravel', isBlog: true, bullet: 'bg-red-500' },
                      { name: 'Node.js', tid: 'nodejs', isBlog: true, bullet: 'bg-emerald-500' },
                      { name: 'Tailwind CSS', tid: 'tailwind', isBlog: true, bullet: 'bg-sky-400' },
                      { name: 'Bootstrap 5', tid: 'bootstrap5', bullet: 'bg-pink-500' },
                      { name: 'jQuery', tid: 'jquery', bullet: 'bg-cyan-500' },
                      { name: 'Vue', tid: 'vue', bullet: 'bg-emerald-600' },
                      { name: 'Angular', tid: 'angular', bullet: 'bg-rose-500' }
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setShowProgramDropdown(false);
                          if (item.isBlog) {
                            setSelectedBlogLang(item.tid);
                          } else {
                            handleTrackChange(item.tid);
                          }
                        }}
                        className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left text-gray-700 dark:text-neutral-300 transition"
                      >
                        <span className={`h-2 w-2 rounded-full ${item.bullet}`} />
                        <span className="font-medium">{item.name}</span>
                        {item.isBlog && <span className="ml-auto text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-bold">Blog</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 2: Programming Languages & Mobile Development */}
                <div className="space-y-6">
                  {/* Programming Languages Group */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 dark:border-neutral-800">
                      <div className="p-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 rounded-lg">
                        <Code className="h-4 w-4" />
                      </div>
                      <h4 className="font-extrabold text-xs tracking-tight uppercase text-gray-800 dark:text-neutral-200">
                        {currentLang === 'en' ? 'Programming Languages' : 'ភាសាកម្មវិធី'}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {[
                        { name: 'C', tid: 'c', isBlog: true, bullet: 'bg-gray-500' },
                        { name: 'C++', tid: 'cpp', bullet: 'bg-pink-600' },
                        { name: 'Python', tid: 'python', bullet: 'bg-blue-500' },
                        { name: 'Java', tid: 'java', bullet: 'bg-amber-500' },
                        { name: 'C#', tid: 'csharp', bullet: 'bg-violet-600' },
                        { name: 'TypeScript', tid: 'typescript', bullet: 'bg-sky-500' },
                        { name: 'Dart', tid: 'dart', isBlog: true, bullet: 'bg-cyan-500' },
                        { name: 'SpringBoot', tid: 'springboot', isBlog: true, bullet: 'bg-teal-500' },
                        { name: 'Kotlin', tid: 'kotlin', isBlog: true, bullet: 'bg-purple-600' }
                      ].map(item => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setShowProgramDropdown(false);
                            if (item.isBlog) {
                              setSelectedBlogLang(item.tid);
                            } else {
                              handleTrackChange(item.tid);
                            }
                          }}
                          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left text-gray-700 dark:text-neutral-300 transition"
                        >
                          <span className={`h-2 w-2 rounded-full ${item.bullet}`} />
                          <span className="font-medium">{item.name}</span>
                          {item.isBlog && <span className="ml-auto text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-bold">Blog</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Development Group */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 dark:border-neutral-800">
                      <div className="p-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 rounded-lg">
                        <Laptop className="h-4 w-4 text-emerald-600" />
                      </div>
                      <h4 className="font-extrabold text-xs tracking-tight uppercase text-gray-800 dark:text-neutral-200">
                        {currentLang === 'en' ? 'Mobile Development' : 'ការអភិវឌ្ឍន៍ទូរស័ព្ទ'}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {[
                        { name: 'Flutter', tid: 'flutter', isBlog: true, bullet: 'bg-blue-500' },
                        { name: 'Dart', tid: 'dart', isBlog: true, bullet: 'bg-cyan-500' },
                        { name: 'Kotlin', tid: 'kotlin', isBlog: true, bullet: 'bg-purple-600' }
                      ].map(item => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setShowProgramDropdown(false);
                            setSelectedBlogLang(item.tid);
                          }}
                          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left text-gray-700 dark:text-neutral-300 transition"
                        >
                          <span className={`h-2 w-2 rounded-full ${item.bullet}`} />
                          <span className="font-medium">{item.name}</span>
                          <span className="ml-auto text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-bold">Blog</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Databases & Security / Other */}
                <div className="space-y-6">
                  {/* Database & Tools */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 dark:border-neutral-800">
                      <div className="p-1 bg-amber-100 dark:bg-amber-900/40 text-amber-600 rounded-lg">
                        <Database className="h-4 w-4 text-amber-600" />
                      </div>
                      <h4 className="font-extrabold text-xs tracking-tight uppercase text-gray-800 dark:text-neutral-200">
                        {currentLang === 'en' ? 'Database & Tools' : 'ទិន្នន័យ និងឧបករណ៍'}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {[
                        { name: 'MySQL', tid: 'mysql', bullet: 'bg-blue-600' },
                        { name: 'SQL', tid: 'sql', bullet: 'bg-sky-500' },
                        { name: 'Git', tid: 'git', isBlog: true, bullet: 'bg-red-500' }
                      ].map(item => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setShowProgramDropdown(false);
                            if (item.isBlog) {
                              setSelectedBlogLang(item.tid);
                            } else {
                              handleTrackChange(item.tid);
                            }
                          }}
                          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left text-gray-700 dark:text-neutral-300 transition"
                        >
                          <span className={`h-2 w-2 rounded-full ${item.bullet}`} />
                          <span className="font-medium">{item.name}</span>
                          {item.isBlog && <span className="ml-auto text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-bold">Blog</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Security & Other */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 dark:border-neutral-800">
                      <div className="p-1 bg-red-100 dark:bg-red-900/40 text-red-600 rounded-lg">
                        <Shield className="h-4 w-4 text-red-600" />
                      </div>
                      <h4 className="font-extrabold text-xs tracking-tight uppercase text-gray-800 dark:text-neutral-200">
                        {currentLang === 'en' ? 'Security & Other' : 'សន្តិសុខ និងផ្សេងៗ'}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {[
                        { name: 'Cyber Security', tid: 'cybersecurity', isBlog: true, bullet: 'bg-emerald-500' },
                        { name: 'Computer Components', tid: 'components', isBlog: true, bullet: 'bg-rose-500' },
                        { name: 'Learn Code Yourself', tid: 'learncoding', isBlog: true, bullet: 'bg-indigo-500' }
                      ].map(item => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setShowProgramDropdown(false);
                            setSelectedBlogLang(item.tid);
                          }}
                          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left text-gray-700 dark:text-neutral-300 transition"
                        >
                          <span className={`h-2 w-2 rounded-full ${item.bullet}`} />
                          <span className="font-medium">{item.name}</span>
                          <span className="ml-auto text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-bold">Blog</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Horizontal All Language buttons (Block 2) - Wrapping, No Scrolling, Colored indicators */}
        <div className="flex-1 flex flex-wrap items-center md:justify-end gap-1.5 max-w-full">
          {[
            { name: 'HTML', tid: 'html', bullet: 'bg-orange-500' },
            { name: 'CSS', tid: 'css', bullet: 'bg-purple-600' },
            { name: 'JS', tid: 'js', bullet: 'bg-yellow-500' },
            { name: 'Python', tid: 'python', bullet: 'bg-blue-500' },
            { name: 'React', tid: 'react', bullet: 'bg-sky-400' },
            { name: 'TS', tid: 'typescript', bullet: 'bg-indigo-500' },
            { name: 'C++', tid: 'cpp', bullet: 'bg-pink-600' },
            { name: 'C#', tid: 'csharp', bullet: 'bg-violet-600' },
            { name: 'PHP', tid: 'php', bullet: 'bg-indigo-600' },
            { name: 'Java', tid: 'java', bullet: 'bg-amber-500' },
            { name: 'BS5', tid: 'bootstrap5', bullet: 'bg-pink-500' },
            { name: 'jQuery', tid: 'jquery', bullet: 'bg-cyan-500' },
            { name: 'Angular', tid: 'angular', bullet: 'bg-rose-500' },
            { name: 'SQL', tid: 'sql', bullet: 'bg-sky-500' },
            { name: 'MySQL', tid: 'mysql', bullet: 'bg-blue-600' },
            { name: 'Vue', tid: 'vue', bullet: 'bg-emerald-600' }
          ].map(langItem => {
            const isActive = trackId === langItem.tid;
            return (
              <button
                key={langItem.tid}
                onClick={() => handleTrackChange(langItem.tid)}
                className={`px-3 py-1.5 rounded-xl text-[10px] xl:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all duration-150 shadow-xs border ${
                  isActive 
                    ? 'bg-emerald-800 text-white border-emerald-700/80 scale-[1.02] font-black' 
                    : 'bg-white hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-700 dark:text-neutral-200 border-gray-200/85 dark:border-neutral-700 hover:scale-[1.02]'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${langItem.bullet}`} />
                <span>{langItem.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden bg-[#04AA6D]/95 px-4 pb-3 flex items-center z-40 border-b border-emerald-500">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-emerald-100" />
          <input
            type="text"
            placeholder={currentLang === 'en' ? "Search lessons..." : "ស្វែងរកមេរៀន..."}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-emerald-650 text-white placeholder-emerald-100 text-xs rounded-xl focus:outline-none"
          />
        </div>
      </div>

      {/* 2. Main Columns: Fixed Left Sidebar + Main Content */}
      <div className="flex relative min-h-[calc(100vh-4rem)] overflow-hidden">
        
        {/* Sidebar Overlap background for mobile */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          />
        )}

        {/* Sidebar Column */}
        <aside 
          className={`fixed top-16 bottom-0 left-0 z-40 w-[230px] bg-[#f1f1f1] dark:bg-neutral-800 border-r border-gray-200 dark:border-neutral-700 overflow-y-auto transition-transform duration-300 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:transform-none select-none scrollbar-thin ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Sidebar Sections loop */}
          {getSidebarSections(trackId).map((section, sectionIdx) => {
            const showFirstHeader = sectionIdx === 0;
            return (
              <div key={section.sectionLabel} className={sectionIdx > 0 ? "mt-4" : ""}>
                {showFirstHeader ? (
                  /* Top category label with left accent border */
                  <div className="px-4.5 py-4 border-b border-gray-200/60 dark:border-neutral-700/60 border-l-4 border-[#04AA6D]">
                    <span className="text-[10px] font-black font-mono text-gray-500 dark:text-neutral-400 tracking-wider block uppercase">
                      {section.sectionLabel}
                    </span>
                  </div>
                ) : (
                  /* Plain gray section header, no border, just padding/spacing */
                  <div className="px-4.5 pt-4 pb-2">
                    <span className="text-[10px] font-black font-mono text-gray-400 dark:text-neutral-500 tracking-wider block uppercase">
                      {section.sectionLabel}
                    </span>
                  </div>
                )}

                <div className="py-1 px-1">
                  {section.links.map(name => {
                    const slug = slugify(name);
                    const subList = subLessonsMap[name];
                    const hasSub = !!subList;
                    const isMainActive = slugify(activeLessonName) === slug || slugify(activeParentName) === slug;
                    const isExpanded = expandedLessons.has(name);
                    const highlightRow = (name.toLowerCase().includes("packages") || name.toLowerCase().includes("casting")) && trackId === 'java';

                    return (
                      <div key={name} className="mb-0.5">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              navigate(`/${trackId}/${slug}`);
                              if (hasSub) toggleAccordion(name);
                              else setSidebarOpen(false);
                            }}
                            className={`flex-1 text-left px-3.5 py-2 text-xs sm:text-sm rounded-xl font-medium transition-all duration-150 flex items-center justify-between border-l-4 ${
                              isMainActive 
                                ? 'border-[#04AA6D] bg-white dark:bg-neutral-900 text-black dark:text-white font-bold shadow-sm'
                                : highlightRow
                                  ? 'border-l-4 border-amber-500 bg-amber-100/50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-100 hover:bg-amber-100/70 font-semibold'
                                  : 'border-transparent text-gray-800 dark:text-neutral-300 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/5 hover:text-emerald-700'
                            }`}
                          >
                            <span className="truncate pr-1">{name}</span>
                            <div className="flex items-center space-x-1 shrink-0">
                              {isNewBadge(name) && (
                                <span className="bg-[#04AA6D] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-md animate-pulse">
                                  New
                                </span>
                              )}
                            </div>
                          </button>

                          {hasSub && (
                            <button
                              onClick={() => toggleAccordion(name)}
                              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-neutral-200"
                            >
                              {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                            </button>
                          )}
                        </div>

                        {/* Accordion sub-lessons */}
                        {hasSub && isExpanded && (
                          <div className="pl-6.5 mt-0.5 border-l border-gray-200 dark:border-neutral-700 ml-5.5 space-y-0.5 animate-slideDown">
                            {subList.map(subName => {
                              const subSlug = slugify(subName);
                              const isSubActive = slugify(activeLessonName) === subSlug;

                              return (
                                <button
                                  key={subName}
                                  onClick={() => {
                                    navigate(`/${trackId}/${subSlug}`);
                                    setSidebarOpen(false);
                                  }}
                                  className={`w-full text-left px-3.5 py-1.5 text-xs rounded-lg transition-all ${
                                    isSubActive
                                      ? 'text-[#04AA6D] font-bold bg-emerald-500/10'
                                      : 'text-gray-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/5'
                                  }`}
                                >
                                  {subName}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </aside>

        {/* Right Main Content Panel */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 max-w-4xl lg:max-w-5xl mx-auto space-y-8 min-h-[calc(100vh-4rem)]">
          
          {/* Header Track Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-100 dark:border-neutral-800 pb-5">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest bg-emerald-50 dark:bg-emerald-950/20 text-[#04AA6D] px-3 py-1 rounded-full uppercase border border-emerald-500/10">
                {trackId.toUpperCase()} TUTORIAL
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-3 tracking-tight">
                {currentTopic.title[currentLang]}
              </h1>
            </div>

            {/* Quick try-it sandbox link */}
            <button
              onClick={() => navigate(`/sandbox/${trackId}/${slugify(activeLessonName)}`)}
              className="flex items-center space-x-1.5 px-4.5 py-2.5 bg-[#04AA6D] hover:bg-[#038F5B] text-white text-xs sm:text-sm font-black rounded-xl shadow-lg shadow-emerald-500/15 transition active:scale-95"
            >
              <Play className="h-4 w-4 fill-white text-white" />
              <span>{currentLang === 'en' ? 'Try it Yourself »' : 'សាកល្បងដោយខ្លួនឯង »'}</span>
            </button>
          </div>

          {/* Bilingual CTA Alert */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                {currentLang === 'en' ? `Learn ${trackId.toUpperCase()} Step-by-Step` : `សិក្សាភាសា ${trackId.toUpperCase()} ជាជំហានៗ`}
              </h3>
              <p className="text-xs text-gray-600 dark:text-neutral-300 mt-1">
                {currentLang === 'en' 
                  ? "Read the concept explanations, review the syntax block, and run the sandbox for rich code feedback." 
                  : "សូមអានការពន្យល់ សង្កេតមើលទម្រង់កូដ រួចចុចសាកល្បងសរសេរកូដដើម្បីទទួលបានការវិភាគលទ្ធផលភ្លាមៗ។"}
              </p>
            </div>
            <button
              onClick={() => navigate(`/sandbox/${trackId}/${slugify(activeLessonName)}`)}
              className="text-xs font-black text-[#04AA6D] hover:text-[#038F5B] flex items-center space-x-1 uppercase tracking-wider shrink-0"
            >
              <span>{currentLang === 'en' ? "Open Sandbox" : "បើកផ្ទាំងសាកល្បង"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Bilingual Explanations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* English Box */}
            <div className="bg-slate-50 dark:bg-neutral-850 border border-slate-200/50 dark:border-neutral-800 p-5 rounded-2xl space-y-3">
              <div className="text-[10px] font-black text-gray-400 tracking-wider">ENGLISH EXPLANATION</div>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed font-medium">
                {currentTopic.description.en}
              </p>
              <div className="border-t border-gray-200/60 dark:border-neutral-800 pt-2.5 mt-2.5">
                <span className="text-xs font-bold text-gray-800 dark:text-neutral-200 block mb-1">Key Concept:</span>
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {currentTopic.concept.en}
                </p>
              </div>
            </div>

            {/* Khmer Box */}
            <div className="bg-emerald-500/5 dark:bg-emerald-500/2 border border-emerald-500/10 p-5 rounded-2xl space-y-3">
              <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-wider">ការពន្យល់ជាភាសាខ្មែរ (KHMER)</div>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed font-medium">
                {currentTopic.description.kh}
              </p>
              <div className="border-t border-emerald-500/10 pt-2.5 mt-2.5">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mb-1">គោលគំនិតសំខាន់៖</span>
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {currentTopic.concept.kh}
                </p>
              </div>
            </div>
          </div>

          {/* Code Block with Copy option */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                {trackId.toUpperCase()} Syntax Example
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-[#04AA6D] transition"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#04AA6D]" />
                    <span className="text-[#04AA6D] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Syntax block */}
            <div className="bg-neutral-950 p-5 rounded-2xl font-mono text-xs overflow-x-auto text-emerald-400/90 leading-relaxed shadow-lg border border-neutral-800">
              <pre>{currentTopic.code}</pre>
            </div>

            {/* Sandbox launcher */}
            <div className="pt-2">
              <button
                onClick={() => navigate(`/sandbox/${trackId}/${slugify(activeLessonName)}`)}
                className="flex items-center space-x-1.5 px-5 py-2.5 bg-neutral-900 hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-750 text-white text-xs font-black rounded-xl shadow transition"
              >
                <span>{currentLang === 'en' ? 'Open Starter Code in Sandbox »' : 'កែសម្រួលគំរូកូដក្នុងផ្ទាំងសាកល្បង »'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Note/Tip Callout */}
          <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/2 border border-amber-500/20 dark:border-amber-500/10 flex items-start space-x-3.5">
            <div className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-xl shrink-0">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-black text-amber-800 dark:text-amber-500 uppercase tracking-wider">
                {currentLang === 'en' ? 'Pro Tip / Note' : 'ដំបូន្មានសំខាន់'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed font-medium">
                {currentLang === 'en'
                  ? `Keep in mind that practicing by editing and compiling code yourself in our editor is 10 times more effective than just memorizing ${trackId.toUpperCase()} syntax definitions!`
                  : `សូមចងចាំថាការអនុវត្តផ្ទាល់ដោយការកែ និងរត់កូដក្នុងផ្ទាំងសាកល្បងរបស់យើង នឹងជួយឱ្យអ្នកឆាប់ចេះជាងការទន្ទេញរូបមន្ត ${trackId.toUpperCase()} ស្ងួតដល់ទៅ ១០ដង!`
                }
              </p>
            </div>
          </div>

          {/* Lesson Quiz Widget */}
          <LessonQuiz 
            trackId={trackId} 
            lessonName={activeLessonName} 
            currentLang={currentLang} 
          />

          {/* 3. Bottom Previous / Next Navigation Bar */}
          <div className="pt-6 border-t border-gray-150 dark:border-neutral-800 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={!prevSlug}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black border transition ${
                prevSlug 
                  ? 'bg-white hover:bg-gray-50 dark:bg-neutral-850 dark:hover:bg-neutral-800 text-gray-800 dark:text-white border-gray-200 dark:border-neutral-700 shadow-sm cursor-pointer' 
                  : 'bg-gray-100 dark:bg-neutral-900 text-gray-300 dark:text-neutral-700 border-transparent cursor-not-allowed opacity-50'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{currentLang === 'en' ? '« Previous' : '« មេរៀនមុន'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!nextSlug}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white shadow-md transition ${
                nextSlug 
                  ? 'bg-[#04AA6D] hover:bg-[#038F5B] shadow-emerald-500/10 cursor-pointer' 
                  : 'bg-emerald-450 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-600 cursor-not-allowed opacity-50 shadow-none'
              }`}
            >
              <span>{currentLang === 'en' ? 'Next »' : 'មេរៀនបន្ទាប់ »'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </main>

      </div>

      {/* ==================== REQUESTED INTERACTIVE MODALS ==================== */}

      {/* 1. Registration Form Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            {/* Header */}
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => setShowRegisterModal(false)}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <UserPlus className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-base leading-none">
                    {currentLang === 'en' ? 'Create Student Account' : 'បង្កើតគណនីសិក្សា'}
                  </h3>
                  <p className="text-[10px] text-emerald-100 mt-1 font-medium">
                    {currentLang === 'en' ? 'Join 10,000+ Cambodian students today' : 'ចូលរួមជាមួយសិស្សកម្ពុជាជាង ១០,០០០+ នាក់'}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={(e) => {
              e.preventDefault();
              handleRegister(contactName, contactEmail);
            }} className="p-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Full Name' : 'ឈ្មោះពេញ'}
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={currentLang === 'en' ? "e.g. Sok Seyha" : "ឧ. សុខ សីហា"}
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Email Address' : 'អាសយដ្ឋានអ៊ីមែល'}
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@domain.com"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Choose Password' : 'បង្កើតលេខសម្ងាត់'}
                </label>
                <input 
                  type="password" 
                  required
                  minLength={6}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1.5">
                <input type="checkbox" required id="agree" className="mt-1 rounded border-gray-300 text-[#04AA6D] focus:ring-[#04AA6D]" />
                <label htmlFor="agree" className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 leading-tight">
                  {currentLang === 'en' 
                    ? "I agree to the Terms of Service and Privacy Policy for Khmer Coding Learning." 
                    : "ខ្ញុំយល់ស្របនឹងលក្ខខណ្ឌប្រើប្រាស់ និងគោលការណ៍ឯកជនភាពរបស់ Khmer Coding Learning។"}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#04AA6D] hover:bg-[#038F5B] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/10 transition active:scale-95 mt-4"
              >
                {currentLang === 'en' ? 'Create Account' : 'បង្កើតគណនីសិក្សា'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => setShowAboutModal(false)}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Info className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-sans font-black text-base">
                  {currentLang === 'en' ? 'About Khmer Coding Learning' : 'អំពី Khmer Coding Learning'}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
              <p>
                {currentLang === 'en' 
                  ? "Welcome to Khmer Coding Learning, Cambodia's premier bilingual interactive learning platform. Our absolute mission is to provide completely free, highly accessible, state-of-the-art computer science tutorials."
                  : "សូមស្វាគមន៍មកកាន់ Khmer Coding Learning ដែលជាប្រព័ន្ធសិក្សាកូដអន្តរកម្មទ្វិភាសាដំបូងគេបង្អស់នៅកម្ពុជា។ បេសកកម្មរបស់យើងគឺផ្តល់ជូននូវមេរៀនវិទ្យាសាស្ត្រកុំព្យូទ័រដោយឥតគិតថ្លៃ និងប្រកបដោយគុណភាពខ្ពស់បំផុត។"}
              </p>
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/10 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#04AA6D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-black text-[#04AA6D]">
                    {currentLang === 'en' ? 'Our Vision' : 'ចក្ខុវិស័យរបស់យើង'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                    {currentLang === 'en' 
                      ? "To empower the next generation of Cambodian developers and engineers to build world-class digital systems and software solutions."
                      : "ដើម្បីគាំទ្រ និងបណ្តុះបណ្តាលយុវជនខ្មែរជំនាន់ក្រោយឱ្យក្លាយជាអ្នកសរសេរកម្មវិធីកម្រិតខ្ពស់ និងអាចបង្កើតប្រព័ន្ធឌីជីថលលំដាប់ពិភពលោក។"}
                  </p>
                </div>
              </div>
              <p>
                {currentLang === 'en'
                  ? "Every single lesson features comprehensive written modules, bilingual explanations, structured code blocks, and an embedded browser sandbox with execution outcomes, making learning active and highly interactive."
                  : "រាល់មេរៀននីមួយៗរួមបញ្ចូលនូវការបកស្រាយលម្អិត ការពន្យល់ជាភាសាខ្មែរ និងអង់គ្លេស ទម្រង់កូដគំរូ និងផ្ទាំងសរសេរកូដសាកល្បងភ្លាមៗ ដែលធ្វើឱ្យការរៀនមានប្រសិទ្ធភាពទ្វេដង។"}
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-850 flex justify-end">
              <button 
                onClick={() => setShowAboutModal(false)}
                className="px-4 py-2 bg-[#04AA6D] text-white text-xs font-bold rounded-xl hover:bg-[#038F5B] transition"
              >
                {currentLang === 'en' ? 'Close' : 'បិទ'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. FAQ Modal */}
      {showFAQModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => setShowFAQModal(false)}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-sans font-black text-base">
                  {currentLang === 'en' ? 'Frequently Asked Questions' : 'សំណួរញឹកញាប់ (FAQ)'}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-3.5 max-h-[400px] overflow-y-auto scrollbar-thin">
              {[
                {
                  q: currentLang === 'en' ? "Is this platform completely free?" : "តើការសិក្សានៅទីនេះឥតគិតថ្លៃមែនទេ?",
                  a: currentLang === 'en' 
                    ? "Yes, absolutely! Every single lesson, playground track, and sandbox engine is 100% free with no hidden paywalls or subscription costs." 
                    : "បាទ ពិតប្រាកដណាស់! រាល់មេរៀន មុខវិជ្ជាសិក្សា និងផ្ទាំងសរសេរកូដសាកល្បងទាំងអស់ គឺឥតគិតថ្លៃ ១០០% ដោយគ្មានការទាមទារប្រាក់កាក់ឡើយ។"
                },
                {
                  q: currentLang === 'en' ? "How do I run and test my code?" : "តើខ្ញុំអាចរត់កូដសាកល្បងដោយរបៀបណា?",
                  a: currentLang === 'en'
                    ? "Simply click the 'Try it Yourself' button on any lesson. This will open the real-time split compiler workspace. Write your code and click the Play button to execute!"
                    : "ងាយស្រួលបំផុត! គ្រាន់តែចុចប៊ូតុង 'សាកល្បងដោយខ្លួនឯង' នៅលើមេរៀនណាមួយ។ វានឹងបើកផ្ទាំងសរសេរកូដ រួចចុចប៊ូតុង Run ដើម្បីមើលលទ្ធផលភ្លាមៗ!"
                },
                {
                  q: currentLang === 'en' ? "Can I learn programming on mobile phones?" : "តើខ្ញុំអាចរៀនសរសេរកូដលើទូរស័ព្ទដៃបានទេ?",
                  a: currentLang === 'en'
                    ? "Yes! Khmer Coding Learning is built using fully adaptive responsive frameworks, optimized beautifully for touch screens, tablets, and full-screen desktops alike."
                    : "ពិតជាបាន! គេហទំព័ររបស់យើងត្រូវបានរចនាឡើងប្រកបដោយភាពបត់បែន និងសមស្របបំផុតសម្រាប់ទាំងទូរស័ព្ទដៃ ថេប្លេត និងកុំព្យូទ័រគ្រប់ប្រភេទ។"
                },
                {
                  q: currentLang === 'en' ? "Does it support explanations in Khmer language?" : "តើមានការពន្យល់ជាភាសាខ្មែរដែរឬទេ?",
                  a: currentLang === 'en'
                    ? "Yes! We support native Khmer explanations and English side-by-side. You can easily switch your preference using the 'EN/ខ្មែរ' button at the top header bar."
                    : "បាទ មាន! យើងគាំទ្រការបកស្រាយជាភាសាខ្មែរ និងភាសាអង់គ្លេសទន្ទឹមគ្នា។ អ្នកអាចប្តូរភាសាបានយ៉ាងងាយស្រួលដោយចុចលើប៊ូតុង 'EN / ខ្មែរ' នៅផ្នែកខាងលើ។"
                }
              ].map((faqItem, idx) => (
                <div key={idx} className="p-3.5 bg-gray-50 dark:bg-neutral-850 rounded-2xl border border-gray-100 dark:border-neutral-800">
                  <h4 className="font-sans font-black text-xs sm:text-sm text-[#04AA6D] flex items-start gap-1.5">
                    <span className="font-mono text-gray-400">Q:</span>
                    <span>{faqItem.q}</span>
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-neutral-300 mt-2 leading-relaxed font-medium pl-4">
                    {faqItem.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Contact Us Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => {
                  setShowContactModal(false);
                  setContactSubmitted(false);
                }}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-base">
                    {currentLang === 'en' ? 'Get In Touch' : 'ទាក់ទងមកពួកយើង'}
                  </h3>
                  <p className="text-[10px] text-emerald-100 mt-1 font-medium">
                    {currentLang === 'en' ? 'Have questions? Drop us a message!' : 'មានសំណួរឬមតិយោបល់? ផ្ញើសារមកកាន់យើងបាន!'}
                  </p>
                </div>
              </div>
            </div>

            {contactSubmitted ? (
              <div className="p-8 text-center space-y-4 animate-fadeIn">
                <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-950/40 text-[#04AA6D] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-black text-base text-gray-900 dark:text-white">
                    {currentLang === 'en' ? 'Message Sent Successfully!' : 'ផ្ញើសារបានសម្រេចហើយ!'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">
                    {currentLang === 'en'
                      ? "Thank you for writing. Our engineering support team will email you back within 24 hours."
                      : "សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់យើង។ ក្រុមការងារគាំទ្រនឹងឆ្លើយតបទៅកាន់អ៊ីមែលរបស់អ្នកក្នុងរយៈពេល ២៤ ម៉ោង។"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowContactModal(false);
                    setContactSubmitted(false);
                  }}
                  className="px-6 py-2 bg-[#04AA6D] hover:bg-[#038F5B] text-white text-xs font-black rounded-xl transition"
                >
                  {currentLang === 'en' ? 'Dismiss' : 'យល់ព្រម'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {currentLang === 'en' ? 'Your Name' : 'ឈ្មោះរបស់អ្នក'}
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={currentLang === 'en' ? "Sok Seyha" : "សុខ សីហា"}
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {currentLang === 'en' ? 'Your Email' : 'អ៊ីមែលរបស់អ្នក'}
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="seyha@example.com"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {currentLang === 'en' ? 'Your Message' : 'សាររបស់អ្នក'}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder={currentLang === 'en' ? "Write your questions or suggestions here..." : "សរសេរសំណួរ ឬការផ្តល់យោបល់របស់អ្នកនៅទីនេះ..."}
                    value={contactMsg}
                    onChange={e => setContactMsg(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04AA6D] focus:border-transparent text-gray-950 dark:text-white transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#04AA6D] hover:bg-[#038F5B] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition active:scale-95"
                >
                  {currentLang === 'en' ? 'Send Message' : 'ផ្ញើសារ'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 5. Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => setShowSupportModal(false)}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <LifeBuoy className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-sans font-black text-base">
                  {currentLang === 'en' ? 'Help & Support Center' : 'មជ្ឈមណ្ឌលគាំទ្រ'}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/10 text-center space-y-2">
                <h4 className="font-sans font-black text-sm text-[#04AA6D]">
                  {currentLang === 'en' ? 'Join Our Tech Community' : 'ចូលរួមសហគមន៍បច្ចេកវិទ្យា'}
                </h4>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  {currentLang === 'en'
                    ? "Connect with fellow Cambodian programmers, share assignments, debug bugs, and grow your career."
                    : "ជួបជុំពិភាក្សាជាមួយសិស្សខ្មែររៀនសរសេរកូដផ្សេងៗទៀត ចែករំលែកមេរៀន ដោះស្រាយកំហុសកូដ និងអភិវឌ្ឍន៍ជំនាញ។"}
                </p>
                <a 
                  href="https://t.me/khmer_coding_learning"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-1.5 bg-[#04AA6D] text-white font-bold text-xs rounded-lg hover:bg-[#038F5B] transition shadow-sm"
                >
                  {currentLang === 'en' ? 'Join Telegram Chat' : 'ចូលរួមតេឡេក្រាម'}
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider mb-1">
                  {currentLang === 'en' ? 'Direct Contact Options' : 'ជម្រើសទំនាក់ទំនងផ្ទាល់'}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-850 rounded-xl text-xs">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Email Hotline</div>
                      <div className="text-gray-400 mt-0.5">support@khmercoding.edu.kh</div>
                    </div>
                    <a href="mailto:support@khmercoding.edu.kh" className="font-bold text-[#04AA6D]">Mail Us</a>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-neutral-850 rounded-xl text-xs">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">YouTube Channel</div>
                      <div className="text-gray-400 mt-0.5">@KhmerCodingLearning</div>
                    </div>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="font-bold text-[#04AA6D]">Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Advanced educational blog roadmap modal */}
      {selectedBlogLang && BLOG_GUIDES[selectedBlogLang] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden text-gray-800 dark:text-neutral-100 animate-scaleUp">
            {/* Header */}
            <div className="bg-[#04AA6D] px-6 py-5 text-white relative">
              <button 
                onClick={() => setSelectedBlogLang(null)}
                className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white transition"
              >
                <X className="h-4.5 w-4.5" />
              </button>
              <div>
                <span className="text-[9px] font-black tracking-widest bg-emerald-800 text-emerald-50 px-2 py-0.5 rounded-full uppercase border border-emerald-700">
                  {currentLang === 'en' ? BLOG_GUIDES[selectedBlogLang].category : BLOG_GUIDES[selectedBlogLang].categoryKh}
                </span>
                <h3 className="font-sans font-black text-base sm:text-lg mt-2.5">
                  {currentLang === 'en' ? BLOG_GUIDES[selectedBlogLang].titleEn : BLOG_GUIDES[selectedBlogLang].titleKh}
                </h3>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 space-y-5 max-h-[460px] overflow-y-auto scrollbar-thin">
              {/* Short Intro */}
              <div className="border-l-4 border-[#04AA6D] pl-4 italic text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
                {currentLang === 'en' ? BLOG_GUIDES[selectedBlogLang].descEn : BLOG_GUIDES[selectedBlogLang].descKh}
              </div>

              {/* Long Content Paragraphs */}
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-neutral-300">
                {currentLang === 'en' ? BLOG_GUIDES[selectedBlogLang].contentEn : BLOG_GUIDES[selectedBlogLang].contentKh}
              </p>

              {/* Code Example block */}
              {BLOG_GUIDES[selectedBlogLang].codeExample && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-black text-gray-400 tracking-wider">
                    <span>{currentLang === 'en' ? 'CODE DEMONSTRATION' : 'កូដគំរូពន្យល់'}</span>
                    <span className="uppercase text-emerald-600 font-mono">{BLOG_GUIDES[selectedBlogLang].codeLang}</span>
                  </div>
                  <pre className="p-4 bg-gray-900 text-emerald-400 font-mono text-[11px] sm:text-xs rounded-xl overflow-x-auto shadow-inner leading-relaxed border border-gray-800">
                    <code>{BLOG_GUIDES[selectedBlogLang].codeExample}</code>
                  </pre>
                </div>
              )}

              {/* Educational Study Roadmap Checklist */}
              <div className="p-4 bg-gray-50 dark:bg-neutral-850 rounded-2xl border border-gray-200/50 dark:border-neutral-800 space-y-3">
                <h4 className="font-sans font-black text-xs text-[#04AA6D] uppercase tracking-wider">
                  {currentLang === 'en' ? 'Recommended Study Roadmap' : 'ផែនការសិក្សាដែលណែនាំ'}
                </h4>
                <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-neutral-300 font-medium">
                  <div className="flex items-start gap-2">
                    <span className="text-[#04AA6D] font-bold">1.</span>
                    <span>{currentLang === 'en' ? 'Get familiar with syntax fundamentals and variables.' : 'សិក្សាស្វែងយល់អំពីវាក្យសព្ទគ្រឹះ (Syntax) និងអថេរ (Variables)។'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#04AA6D] font-bold">2.</span>
                    <span>{currentLang === 'en' ? 'Build 3 small command-line utilities to master control flow.' : 'បង្កើតកម្មវិធីបញ្ជាខ្នាតតូចចំនួន ៣ ដើម្បីយល់ច្បាស់ពីលំហូរកូដ (Control Flow)។'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#04AA6D] font-bold">3.</span>
                    <span>{currentLang === 'en' ? 'Explore database integration (SQL/NoSQL) and API endpoints.' : 'ស្វែងយល់ពីរបៀបភ្ជាប់ទៅកាន់ប្រព័ន្ធទិន្នន័យ (Databases) និង API Endpoints។'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-neutral-850 flex justify-between items-center">
              <span className="text-[10px] text-gray-400 font-bold font-mono">© KHMER CODING LEARNING</span>
              <button 
                onClick={() => setSelectedBlogLang(null)}
                className="px-4 py-2 bg-[#04AA6D] text-white text-xs font-bold rounded-xl hover:bg-[#038F5B] transition"
              >
                {currentLang === 'en' ? 'Close' : 'បិទ'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Sandbox Interactive Page (Try It Yourself view)
interface SandboxViewProps {
  currentLang: Language;
  darkMode: boolean;
  onThemeToggle: () => void;
}

function SandboxView({ currentLang, darkMode, onThemeToggle }: SandboxViewProps) {
  const { trackId = 'html', lessonId = 'html-home' } = useParams<{ trackId: string; lessonId: string }>();
  const navigate = useNavigate();

  // Helper: Find lesson display name
  const findLessonName = (tid: string, lid: string) => {
    const mainLessons = getSidebarItems(tid);
    for (const mainName of mainLessons) {
      if (slugify(mainName) === lid) {
        return mainName;
      }
    }
    for (const [parentName, subList] of Object.entries(subLessonsMap)) {
      if (mainLessons.includes(parentName)) {
        for (const subName of subList) {
          if (slugify(subName) === lid) {
            return subName;
          }
        }
      }
    }
    return mainLessons[0];
  };

  const activeName = findLessonName(trackId, lessonId);
  const currentTopic = generateTopic(trackId, activeName);

  // Load code from local storage, or load starter template code
  const getLanguageType = () => {
    if (trackId === 'html' || trackId === 'css' || trackId === 'bootstrap5' || trackId === 'jquery') return 'html';
    if (trackId === 'js' || trackId === 'react') return 'javascript';
    if (trackId === 'python') return 'python';
    if (trackId === 'cpp') return 'cpp';
    if (trackId === 'csharp') return 'csharp';
    if (trackId === 'php') return 'php';
    if (trackId === 'java') return 'java';
    if (trackId === 'sql' || trackId === 'mysql') return 'sql';
    if (trackId === 'vue') return 'html';
    return 'typescript';
  };

  const getFileName = () => {
    if (trackId === 'html' || trackId === 'css' || trackId === 'bootstrap5' || trackId === 'jquery') return 'index.html';
    if (trackId === 'js' || trackId === 'react') return 'App.jsx';
    if (trackId === 'python') return 'main.py';
    if (trackId === 'cpp') return 'main.cpp';
    if (trackId === 'csharp') return 'Program.cs';
    if (trackId === 'php') return 'index.php';
    if (trackId === 'java') return 'Main.java';
    if (trackId === 'sql' || trackId === 'mysql') return 'query.sql';
    if (trackId === 'vue') return 'App.vue';
    if (trackId === 'angular') return 'app.component.ts';
    return 'main.ts';
  };

  const [files, setFiles] = useState<LessonFile[]>(() => {
    const saved = localStorage.getItem(`sandbox-code-${trackId}-${lessonId}`);
    if (saved) {
      try {
        return JSON.parse(saved) as LessonFile[];
      } catch {
        // Fallback to fresh starter code
      }
    }
    return [{
      name: getFileName(),
      content: currentTopic.code,
      language: getLanguageType()
    }];
  });

  const handleFilesChange = (updated: LessonFile[]) => {
    setFiles(updated);
    localStorage.setItem(`sandbox-code-${trackId}-${lessonId}`, JSON.stringify(updated));
  };

  const handleReset = () => {
    const freshFiles = [{
      name: getFileName(),
      content: currentTopic.code,
      language: getLanguageType()
    }];
    setFiles(freshFiles);
    localStorage.removeItem(`sandbox-code-${trackId}-${lessonId}`);
  };

  const handleVerify = (output: string) => {
    // Custom simulated verification logs
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-100 overflow-hidden">
      {/* Sandbox Navigation header */}
      <header className="h-14 bg-gray-900 text-white flex items-center justify-between px-4 sm:px-6 shadow shrink-0 select-none">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(`/${trackId}/${lessonId}`)}
            className="flex items-center space-x-1.5 text-xs text-gray-300 hover:text-white font-bold transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{currentLang === 'en' ? 'Back to Lesson' : 'ត្រឡប់ទៅមេរៀនវិញ'}</span>
          </button>
          
          <div className="h-4 w-px bg-gray-700" />
          
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[#04AA6D] block uppercase">
              {trackId.toUpperCase()} PLAYGROUND
            </span>
            <h2 className="text-xs sm:text-sm font-black text-white truncate max-w-xs">
              {currentTopic.title[currentLang]}
            </h2>
          </div>
        </div>

        {/* Action tags */}
        <div className="flex items-center space-x-3 text-xs text-gray-400">
          <span className="hidden sm:inline-block text-[10px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded font-mono border border-gray-700">
            {getFileName()}
          </span>
          <span className="text-[10px] text-[#04AA6D] font-bold font-mono tracking-wider animate-pulse mr-2">
            ● INTERACTIVE
          </span>
          
          <div className="h-4 w-px bg-gray-750" />
          
          <button
            onClick={onThemeToggle}
            className="p-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
            title={currentLang === 'en' ? "Toggle Theme" : "ប្តូរពណ៌ផ្ទៃ"}
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-gray-300" />}
          </button>
        </div>
      </header>

      {/* Embedded Split Workspace Code Editor Panel */}
      <div className="flex-1 overflow-hidden relative">
        <CodeEditor
          files={files}
          onFilesChange={handleFilesChange}
          language={getLanguageType()}
          activeFileName={getFileName()}
          onActiveFileChange={() => {}}
          currentLang={currentLang}
          darkMode={darkMode}
          onVerify={handleVerify}
          onReset={handleReset}
          trackId={trackId}
        />
      </div>
    </div>
  );
}

// ==================== CUSTOM CONTACT & SUPPORT PAGE CONTENTS ====================

interface ContactPageContentProps {
  currentLang: Language;
  onOpenFAQ: () => void;
}

function ContactPageContent({ currentLang, onOpenFAQ }: ContactPageContentProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  const subjects = {
    general: { en: 'General Inquiry', kh: 'សាកសួរទូទៅ' },
    partnership: { en: 'Partnership / Collaboration', kh: 'ភាពជាដៃគូ / សហការ' },
    bug: { en: 'Report a Bug', kh: 'រាយការណ៍កំហុសបច្ចេកវិទ្យា' },
    feedback: { en: 'Feedback & Suggestions', kh: 'មតិកែលម្អ និងការណែនាំ' }
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-5xl mx-auto py-4">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-xl border border-indigo-500/15">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-[10px] font-extrabold tracking-widest bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full uppercase border border-indigo-500/30 animate-pulse">
            {currentLang === 'en' ? 'Get in Touch' : 'ទាក់ទងមកពួកយើង'}
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            {currentLang === 'en' ? 'Contact Our Tech Team' : 'សាកសួរក្រុមបច្ចេកទេសរបស់យើង'}
          </h1>
          <p className="text-sm text-indigo-200 leading-relaxed font-medium">
            {currentLang === 'en' 
              ? 'Have questions about coding compilers, bugs, or business collaborations? Our dedicated team of developers is here to assist you 24/7.' 
              : 'មានសំណួរទាក់ទងនឹងការសរសេរកូដ កំហុសកម្មវិធី ឬកិច្ចសហការអាជីវកម្ម? ក្រុមអ្នកអភិវឌ្ឍន៍របស់យើងនឹងជួយអ្នក ២៤/៧។'}
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
          <Mail className="w-full h-full text-indigo-300 animate-pulse" />
        </div>
      </div>

      {/* 4 Info Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: <Mail className="h-5 w-5 text-indigo-500" />,
            title: { en: 'Email Support', kh: 'អ៊ីមែលគាំទ្រ' },
            detail: 'support@khmercoding.edu.kh',
            href: 'mailto:support@khmercoding.edu.kh'
          },
          {
            icon: <Phone className="h-5 w-5 text-indigo-500" />,
            title: { en: 'Direct Hotline', kh: 'ទូរស័ព្ទទំនាក់ទំនង' },
            detail: '+855 12 345 678',
            href: 'tel:+85512345678'
          },
          {
            icon: <MapPin className="h-5 w-5 text-indigo-500" />,
            title: { en: 'Our Location', kh: 'ទីតាំងបច្ចុប្បន្ន' },
            detail: { en: 'Phnom Penh, Cambodia', kh: 'ភ្នំពេញ, ប្រទេសកម្ពុជា' },
            href: 'https://maps.google.com'
          },
          {
            icon: <Clock className="h-5 w-5 text-indigo-500" />,
            title: { en: 'Response Speed', kh: 'ល្បឿនឆ្លើយតប' },
            detail: { en: '< 24 Hours Reply', kh: '< ២៤ ម៉ោងជាប្រចាំ' },
            href: null
          }
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-neutral-850 p-5 rounded-2xl border border-gray-150 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-indigo-500/20 transition-all group flex flex-col justify-between min-h-[140px]">
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl w-10 h-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
              {card.icon}
            </div>
            <div>
              <h4 className="text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                {card.title[currentLang]}
              </h4>
              {card.href ? (
                <a href={card.href} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition block mt-1 break-all">
                  {typeof card.detail === 'string' ? card.detail : card.detail[currentLang]}
                </a>
              ) : (
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white block mt-1">
                  {typeof card.detail === 'string' ? card.detail : card.detail[currentLang]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Two Columns Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Form */}
        <div className="bg-white dark:bg-neutral-850 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-sm space-y-6">
          <div className="space-y-1.5 border-b border-gray-100 dark:border-neutral-800 pb-4">
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              {currentLang === 'en' ? 'Send Us a Message' : 'ផ្ញើសារមកកាន់យើង'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {currentLang === 'en' 
                ? 'Fill out the form below and we will route your inquiry to the appropriate expert.' 
                : 'សូមបំពេញទម្រង់ខាងក្រោម ហើយយើងខ្ញុំនឹងបញ្ជូនសំណួររបស់អ្នកទៅកាន់អ្នកជំនាញសមស្រប។'}
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="h-14 w-14 bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Check className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-base text-gray-900 dark:text-white">
                  {currentLang === 'en' ? 'Message Sent Successfully!' : 'ផ្ញើសារបានសម្រេចហើយ!'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  {currentLang === 'en' 
                    ? "Thank you for writing. Our core support team will reply back to your inbox very soon." 
                    : "សូមអរគុណសម្រាប់ការសរសេរមកកាន់យើង។ ក្រុមការងារនឹងឆ្លើយតបទៅកាន់អ៊ីមែលរបស់អ្នកក្នុងពេលឆាប់ៗ។"}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Full Name' : 'ឈ្មោះពេញ'}
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={currentLang === 'en' ? "NAN SEYHA" : "ណាន សីហា"}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Email Address' : 'អាសយដ្ឋានអ៊ីមែល'}
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="seyha@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Subject Topic' : 'ប្រធានបទ'}
                </label>
                <select 
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-950 dark:text-white transition"
                >
                  <option value="general">{subjects.general[currentLang]}</option>
                  <option value="partnership">{subjects.partnership[currentLang]}</option>
                  <option value="bug">{subjects.bug[currentLang]}</option>
                  <option value="feedback">{subjects.feedback[currentLang]}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                  {currentLang === 'en' ? 'Your Message' : 'សាររបស់អ្នក'}
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder={currentLang === 'en' ? "Write your inquiries, feedback or suggestions..." : "សរសេរសារ ឬសំណួររបស់អ្នកនៅទីនេះ..."}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-950 dark:text-white transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-md shadow-indigo-500/10 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>{currentLang === 'en' ? 'Send Message' : 'ផ្ញើសារ'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Location details card */}
          <div className="bg-white dark:bg-neutral-850 p-6 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-sm space-y-4">
            <h3 className="font-sans font-black text-sm text-gray-900 dark:text-white uppercase tracking-wider">
              {currentLang === 'en' ? 'Interactive HQ Location' : 'ទីតាំងការិយាល័យកណ្តាល'}
            </h3>
            
            {/* Visual map widget mockup */}
            <div className="relative h-48 rounded-2xl bg-slate-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 overflow-hidden shadow-inner flex flex-col justify-between p-4 group">
              {/* Map grid lines mockup in CSS */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              {/* HQ Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                <div className="relative">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
                  <div className="p-2 bg-indigo-600 text-white rounded-full shadow-lg relative">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-indigo-900 text-white font-bold text-[9px] rounded shadow-sm border border-indigo-700">
                  Khmer Coding Learning HQ
                </span>
              </div>

              <div className="mt-auto z-10 w-full flex items-center justify-between text-[10px] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs p-2.5 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <div>
                  <span className="font-black text-gray-950 dark:text-white block">Russian Federation Blvd (110)</span>
                  <span className="text-gray-400 font-medium">Phnom Penh, Cambodia</span>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-bold transition flex items-center gap-1 uppercase text-[8px]">
                  <span>{currentLang === 'en' ? 'Open Map' : 'បើកផែនទី'}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ quick links card */}
          <div className="bg-white dark:bg-neutral-850 p-6 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-sm space-y-3">
            <h3 className="font-sans font-black text-sm text-gray-900 dark:text-white uppercase tracking-wider">
              {currentLang === 'en' ? 'Quick Support Help' : 'ជំនួយរហ័សទូទៅ'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {currentLang === 'en' 
                ? 'Check these quick frequently asked answers or load our FAQ dialog instantly.' 
                : 'ស្វែងយល់ពីចម្លើយចំពោះសំណួរដែលសួរញឹកញាប់បំផុត ឬបើកផ្ទាំងសំណួរ FAQ។'}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <button 
                onClick={onOpenFAQ}
                className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-indigo-50/40 dark:bg-neutral-800/55 dark:hover:bg-neutral-800 border border-gray-200/50 dark:border-neutral-700 text-gray-800 dark:text-neutral-200 transition font-medium flex items-center justify-between group"
              >
                <span>{currentLang === 'en' ? 'Is the coding sandbox fully free?' : 'តើប្រព័ន្ធសាកល្បងកូដឥតគិតថ្លៃពិតប្រាកដមែនទេ?'}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
              </button>
              <button 
                onClick={onOpenFAQ}
                className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-indigo-50/40 dark:bg-neutral-800/55 dark:hover:bg-neutral-800 border border-gray-200/50 dark:border-neutral-700 text-gray-800 dark:text-neutral-200 transition font-medium flex items-center justify-between group"
              >
                <span>{currentLang === 'en' ? 'How do I submit bug reports?' : 'តើខ្ញុំត្រូវរាយការណ៍កំហុសកូដដោយរបៀបណា?'}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Social connect icons card */}
          <div className="bg-white dark:bg-neutral-850 p-6 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-sm space-y-4">
            <h3 className="font-sans font-black text-sm text-gray-900 dark:text-white uppercase tracking-wider text-center">
              {currentLang === 'en' ? 'Join Our Social Communities' : 'ចូលរួមជាមួយបណ្តាញសង្គមយើង'}
            </h3>
            
            <div className="flex items-center justify-center gap-4">
              {[
                { name: 'Telegram', color: 'hover:bg-[#0088cc]/10 hover:text-[#0088cc]', icon: <Send className="h-5 w-5" />, url: 'https://t.me/khmer_coding_learning' },
                { name: 'YouTube', color: 'hover:bg-[#ff0000]/10 hover:text-[#ff0000]', icon: <Play className="h-5 w-5" />, url: 'https://youtube.com' },
                { name: 'Facebook', color: 'hover:bg-[#1877f2]/10 hover:text-[#1877f2]', icon: <Share2 className="h-5 w-5" />, url: 'https://facebook.com' },
                { name: 'GitHub', color: 'hover:bg-gray-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white', icon: <Code className="h-5 w-5" />, url: 'https://github.com' }
              ].map((soc, i) => (
                <a 
                  key={i} 
                  href={soc.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  title={soc.name}
                  className={`p-3 bg-gray-50 dark:bg-neutral-800 text-gray-500 rounded-2xl border border-gray-200/60 dark:border-neutral-700/80 shadow-xs transition transform hover:scale-110 ${soc.color}`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SupportPageContentProps {
  currentLang: Language;
}

function SupportPageContent({ currentLang }: SupportPageContentProps) {
  const navigate = useNavigate();

  // Handle returning to lessons
  const handleBackToHome = () => {
    navigate('/html/html-home');
  };

  const handleContinueBrowsing = () => {
    const lastTrack = localStorage.getItem('last-active-track') || 'html';
    const lastLesson = localStorage.getItem(`last-visited-${lastTrack}`) || 'html-home';
    navigate(`/${lastTrack}/${lastLesson}`);
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-5xl mx-auto py-4">
      
      {/* Sleek Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-950 text-white p-8 md:p-12 shadow-xl border border-amber-500/15">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full uppercase border border-amber-400/30">
            {currentLang === 'en' ? 'Empower Education' : 'ឧបត្ថម្ភការសិក្សា'}
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight animate-scaleUp">
            {currentLang === 'en' ? 'Support Free Code Education' : 'គាំទ្រការរៀនកូដដោយសេរី'}
          </h1>
          <p className="text-sm text-amber-100 leading-relaxed font-medium">
            {currentLang === 'en' 
              ? 'Khmer Coding Learning is operated entirely as a free project for Cambodian youth. Your contributions directly fund our compiler infrastructure, cloud hosting servers, and new curriculum tracks.' 
              : 'Khmer Coding Learning ដំណើរការដោយឥតគិតថ្លៃសម្រាប់យុវជនខ្មែរ។ ការឧបត្ថម្ភរបស់អ្នកជួយគាំទ្រហេដ្ឋារចនាសម្ព័ន្ធ Compiler ម៉ាស៊ីនបម្រើ Cloud និងការបង្កើតវគ្គសិក្សាថ្មីៗបន្ថែមទៀត។'}
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
          <Heart className="w-full h-full text-amber-200 fill-amber-200 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Why Support (Benefits) */}
        <div className="bg-white dark:bg-neutral-850 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-neutral-800 shadow-sm space-y-6">
          <div className="space-y-1.5 border-b border-gray-100 dark:border-neutral-800 pb-4">
            <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>{currentLang === 'en' ? 'Benefits of Your Support' : 'ផលជះនៃការគាំទ្ររបស់អ្នក'}</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {currentLang === 'en'
                ? "Every dollar contributed directly supports Cambodian computer science students."
                : "រាល់ការឧបត្ថម្ភគាំទ្រទាំងអស់ នឹងត្រូវបានប្រើប្រាស់ដោយផ្ទាល់សម្រាប់សិស្សវិទ្យាសាស្ត្រកុំព្យូទ័រខ្មែរ។"}
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: { en: "Compiler & Sandbox Servers", kh: "រក្សាដំណើរការ Compiler និងប្រព័ន្ធសាកល្បង" },
                desc: { 
                  en: "Keep our instant in-browser code compilers running fast and responsive, handling millions of compiles every day.",
                  kh: "ធានាដំណើរការ Compile និងរត់កូដក្នុងកម្មវិធីរុករកផ្ទាល់ខ្លួនបានលឿនរហ័ស ឆ្លើយតបការរត់កូដរាប់លានដងរាល់ថ្ងៃ។" 
                }
              },
              {
                title: { en: "Fund Advanced Learning Tracks", kh: "ឧបត្ថម្ភការបង្កើតវគ្គសិក្សាថ្មីៗ" },
                desc: {
                  en: "Help us create new specialized bilingual content including Node.js frameworks, Flutter mobile tracks, and Cybersecurity fundamentals.",
                  kh: "ជួយបណ្តុះបណ្តាល និងបង្កើតមេរៀនទ្វិភាសាកម្រិតខ្ពស់ថ្មីៗ ដូចជា Node.js, Flutter Mobile និងមូលដ្ឋានគ្រឹះសន្តិសុខបច្ចេកវិទ្យា។"
                }
              },
              {
                title: { en: "100% Ad-Free Clean Space", kh: "រក្សាបរិយាកាសសិក្សាស្អាតល្អ ១០០%" },
                desc: {
                  en: "Maintain an strictly academic environment completely clean from distracting advertisements, dark trackers, or spam popups.",
                  kh: "ធានាបរិយាកាសសិក្សាស្អាតស្អំ គ្មានការផ្សាយពាណិជ្ជកម្មរំខាន គ្មានការលួចតាមដានទិន្នន័យ ឬផ្ទាំងផ្សាយពាណិជ្ជកម្មរញ៉េរញ៉ៃ។"
                }
              },
              {
                title: { en: "Empower Future Cambodian Developers", kh: "គាំទ្រអ្នកអភិវឌ្ឍន៍យុវជនខ្មែរជំនាន់ក្រោយ" },
                desc: {
                  en: "Directly invest in removing the language barrier and financial obstacles for future Cambodian engineers and programmers.",
                  kh: "វិនិយោគដោយផ្ទាល់ក្នុងការលុបបំបាត់ឧបសគ្គភាសា និងហិរញ្ញវត្ថុសម្រាប់សិស្ស និស្សិត និងអ្នកសរសេរកម្មវិធីខ្មែរនាពេលអនាគត។"
                }
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-3.5 items-start p-4 bg-gray-50 dark:bg-neutral-800/40 rounded-2xl border border-gray-150/40 dark:border-neutral-800/80 transition-all hover:scale-[1.01]">
                <div className="p-1.5 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-500 rounded-xl shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white">
                    {item.title[currentLang]}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {item.desc[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: ACLEDA KHQR Code Card */}
        <div className="flex justify-center animate-scaleUp">
          <div className="w-full max-w-sm bg-[#0a3a60] text-white rounded-3xl shadow-2xl overflow-hidden border border-amber-500/20 relative flex flex-col justify-between">
            
            {/* Top KHQR Header Accent banner */}
            <div className="bg-gradient-to-r from-red-600 via-white to-blue-600 px-5 py-3 flex items-center justify-between text-black relative shadow">
              <span className="font-sans font-black text-xs tracking-wider text-white bg-slate-900 px-2 py-0.5 rounded">KHQR</span>
              <span className="font-sans font-extrabold text-[10px] text-gray-700">ACLEDA BANK PLC.</span>
            </div>

            {/* Main Code Block */}
            <div className="p-6 flex flex-col items-center space-y-5 bg-white text-gray-900">
              
              {/* ACLEDA Logo Emblem */}
              <div className="flex items-center gap-1.5 pb-2 border-b border-gray-100 w-full justify-center">
                <div className="h-7 w-7 bg-[#0a3a60] text-white rounded-full flex items-center justify-center font-black text-xs border-2 border-[#dfb426] shadow-sm font-serif">
                  A
                </div>
                <span className="font-sans font-black text-xs text-[#0a3a60] tracking-tight">ACLEDA Bank KHQR</span>
              </div>

              {/* QR Image Frame */}
              <div className="p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-gray-200 relative group transition-transform hover:scale-[1.02]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://t.me/khmer_coding_learning"
                  alt="ACLEDA Bank KHQR - NAN SEYHA"
                  className="w-48 h-48 sm:w-56 sm:h-56 mx-auto bg-white rounded shadow-md"
                  referrerPolicy="no-referrer"
                />
                
                {/* Center small Bakong/KHQR-themed logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 bg-white rounded-lg shadow-md border border-gray-150">
                  <div className="h-6 w-6 bg-[#dfb426] text-[#0a3a60] rounded flex items-center justify-center font-black text-[9px]">
                    KH
                  </div>
                </div>
              </div>

              {/* Merchant / Account Details info */}
              <div className="text-center space-y-1.5 w-full bg-slate-50 p-4 rounded-xl border border-gray-100">
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block">Account Name / ឈ្មោះគណនី</span>
                <span className="text-base font-black text-[#0a3a60] tracking-wide block">NAN SEYHA</span>
                <span className="text-[10px] font-extrabold text-amber-600 block">ACLEDA Account: 3452-1928-8373-10</span>
              </div>
            </div>

            {/* Bottom Navy Footer Accent with gold decoration */}
            <div className="px-6 py-4.5 bg-[#0a3a60] text-center border-t border-amber-500/20">
              <span className="text-[10px] font-extrabold text-amber-400 tracking-wider uppercase block">
                ★ Scan with any Bakong or Mobile Banking App ★
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Row at bottom */}
      <div className="pt-8 border-t border-gray-150 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={handleBackToHome}
          className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-800 dark:text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition cursor-pointer text-center"
        >
          {currentLang === 'en' ? 'Back to Home' : 'ត្រឡប់ទៅទំព័រដើម'}
        </button>
        <button
          onClick={handleContinueBrowsing}
          className="w-full sm:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-amber-500/10 cursor-pointer text-center"
        >
          {currentLang === 'en' ? 'Close / Continue Browsing' : 'បន្តមើលមេរៀន'}
        </button>
      </div>

    </div>
  );
}
