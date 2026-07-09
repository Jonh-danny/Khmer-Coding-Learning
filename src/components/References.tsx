import { useState } from 'react';
import { Language, Lesson } from '../types';
import { t } from '../translations';
import { motion } from 'motion/react';
import { 
  getSidebarItems, generateTopic, htmlSidebarItems, cssSidebarItems, jsSidebarItems, pythonSidebarItems, reactSidebarItems, tsSidebarItems 
} from '../utils/referenceTopicGenerator';
import { 
  FileCode, Play, Copy, Check, Layout, Palette, Code2, Terminal, Cpu, Search, HelpCircle, BookOpen, ChevronRight, Award
} from 'lucide-react';

interface ReferencesProps {
  currentLang: Language;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function References({ currentLang, onSelectLesson }: ReferencesProps) {
  const [activeLangTab, setActiveLangTab] = useState<string>('html');
  const [activeTopicName, setActiveTopicName] = useState<string>(() => {
    return getSidebarItems('html')[0];
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleLangTabChange = (langId: string) => {
    setActiveLangTab(langId);
    const firstTopic = getSidebarItems(langId)[0];
    setActiveTopicName(firstTopic);
    setSearchQuery('');
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Get current active topic details
  const currentTopic = generateTopic(activeLangTab, activeTopicName);

  // Generate a dynamic Lesson object from this reference topic
  const handleTryIt = () => {
    const sandboxLesson: Lesson = {
      id: `playground-${currentTopic.id}`,
      title: {
        en: `${activeTopicName} Playground`,
        kh: `ផ្ទាំងសាកល្បង៖ ${activeTopicName}`
      },
      description: {
        en: currentTopic.description.en,
        kh: currentTopic.description.kh
      },
      instructions: {
        en: `### W3Schools Interactive Playground\n\n${currentTopic.description.en}\n\n**Concept:**\n${currentTopic.concept.en}\n\n* Edit the code template below as much as you'd like.\n* Click **Run Code** to render your code or see console logs in real-time!`,
        kh: `### ផ្ទាំងពិសោធន៍កូដអន្តរកម្ម W3Schools\n\n${currentTopic.description.kh}\n\n**គោលគំនិត៖**\n${currentTopic.concept.kh}\n\n* កែសម្រួលគំរូកូដខាងក្រោមតាមចិត្តចង់។\n* ចុច **ដំណើរការកូដ (Run Code)** ដើម្បីមើលការបង្ហាញលទ្ធផល ឬ console logs ភ្លាមៗ!`
      },
      task: {
        en: currentTopic.task.en,
        kh: currentTopic.task.kh
      },
      language: activeLangTab === 'html' || activeLangTab === 'css' ? 'html' : activeLangTab === 'js' || activeLangTab === 'react' ? 'javascript' : activeLangTab === 'python' ? 'python' : 'typescript',
      files: [
        {
          name: activeLangTab === 'html' || activeLangTab === 'css' ? 'index.html' : activeLangTab === 'js' || activeLangTab === 'react' ? 'App.jsx' : activeLangTab === 'python' ? 'main.py' : 'main.ts',
          content: currentTopic.code,
          language: activeLangTab === 'html' || activeLangTab === 'css' ? 'html' : activeLangTab === 'js' || activeLangTab === 'react' ? 'javascript' : activeLangTab === 'python' ? 'python' : 'typescript'
        }
      ],
      activeFileName: activeLangTab === 'html' || activeLangTab === 'css' ? 'index.html' : activeLangTab === 'js' || activeLangTab === 'react' ? 'App.jsx' : activeLangTab === 'python' ? 'main.py' : 'main.ts',
      solutionCheck: {
        type: 'html-contains',
        targetFile: activeLangTab === 'html' || activeLangTab === 'css' ? 'index.html' : activeLangTab === 'js' || activeLangTab === 'react' ? 'App.jsx' : activeLangTab === 'python' ? 'main.py' : 'main.ts',
        validationFn: () => ({ success: true, feedback: 'Fantastic playground exploration! Keep experimenting!' })
      }
    };

    onSelectLesson(sandboxLesson);
  };

  const getLanguageHeader = (langId: string) => {
    switch (langId) {
      case 'html': return 'HTML TUTORIAL';
      case 'css': return 'CSS TUTORIAL';
      case 'js': return 'JS TUTORIAL';
      case 'python': return 'PYTHON TUTORIAL';
      case 'react': return 'REACT TUTORIAL';
      case 'typescript': return 'TYPESCRIPT TUTORIAL';
      default: return 'TUTORIAL';
    }
  };

  const getLangIcon = (langId: string) => {
    switch (langId) {
      case 'html': return <Layout className="h-4 w-4 text-orange-500" />;
      case 'css': return <Palette className="h-4 w-4 text-blue-500" />;
      case 'js': return <Code2 className="h-4 w-4 text-yellow-500" />;
      case 'python': return <Terminal className="h-4 w-4 text-teal-500" />;
      case 'react': return <Cpu className="h-4 w-4 text-indigo-400" />;
      case 'typescript': return <Award className="h-4 w-4 text-blue-400" />;
      default: return <FileCode className="h-4 w-4" />;
    }
  };

  // Filter list of sidebar topics based on search queries
  const allSidebarTopics = getSidebarItems(activeLangTab);
  const filteredTopics = allSidebarTopics.filter(item => {
    return item.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Green badges for W3Schools fidelity
  const isNewBadge = (name: string) => {
    return name === "JS Temporal" || name === "JS Projects" || name === "React Portals" || name === "React Suspense";
  };

  return (
    <div id="references-main-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50 dark:bg-neutral-950 min-h-screen transition-colors duration-300">
      
      {/* Top Header Controls */}
      <div id="ref-top-header" className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-200 dark:border-neutral-800 gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
              <BookOpen className="h-5 w-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-sans font-black text-gray-900 dark:text-white tracking-tight">
              {currentLang === 'en' ? "W3Schools Bilingual Tutorials" : "សៀវភៅណែនាំកូដបែប W3Schools ភាសាខ្មែរ-អង់គ្លេស"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {currentLang === 'en' 
              ? "Select any language to load the sidebar exactly as shown in tutorials. Click any topic to read and run it instantly!" 
              : "ជ្រើសរើសភាសាកូដដើម្បីបង្ហាញបញ្ជីរាយនាមមេរៀនតាមរូបភាព W3Schools។ ចុចមេរៀនណាមួយដើម្បីអាន និងចុចសាកល្បងកូដភ្លាមៗ!"}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            id="ref-sidebar-search"
            type="text"
            placeholder={currentLang === 'en' ? "Search tutorials..." : "ស្វែងរកមេរៀន..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Language Hub Tabs */}
      <div id="ref-lang-tabs" className="flex overflow-x-auto pb-3 gap-2 border-b border-gray-200/50 dark:border-neutral-900 mb-6 scrollbar-none">
        {[
          { id: 'html', name: 'HTML' },
          { id: 'css', name: 'CSS' },
          { id: 'js', name: 'JavaScript' },
          { id: 'python', name: 'Python' },
          { id: 'react', name: 'React' },
          { id: 'typescript', name: 'TypeScript' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleLangTabChange(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 border ${
              activeLangTab === tab.id
                ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                : 'bg-white dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 border-gray-200 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-800'
            }`}
          >
            {getLangIcon(tab.id)}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Main Grid View */}
      <div id="ref-workspace-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Exact W3Schools Sidebar matching image */}
        <div id="ref-w3-sidebar" className="lg:col-span-3 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
          {/* Header title */}
          <div className="bg-gray-100 dark:bg-neutral-800/80 px-4 py-3 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono font-black text-gray-700 dark:text-neutral-300 tracking-wider">
              {getLanguageHeader(activeLangTab)}
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
              {filteredTopics.length} Items
            </span>
          </div>

          {/* Topics List with vertical highlights */}
          <div className="max-h-[550px] overflow-y-auto divide-y divide-gray-100 dark:divide-neutral-800/50 scrollbar-thin">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topicName) => {
                const isActive = activeTopicName === topicName;
                return (
                  <button
                    key={topicName}
                    onClick={() => setActiveTopicName(topicName)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm transition-all border-l-4 ${
                      isActive
                        ? 'bg-gray-50 dark:bg-neutral-800/40 border-l-emerald-500 text-gray-950 dark:text-white font-black'
                        : 'border-l-transparent text-gray-600 dark:text-neutral-400 hover:bg-gray-50/50 dark:hover:bg-neutral-800/20 hover:text-gray-900 dark:hover:text-neutral-200'
                    }`}
                  >
                    <span className="truncate pr-2">{topicName}</span>
                    <div className="flex items-center space-x-1 shrink-0">
                      {isNewBadge(topicName) && (
                        <span className="bg-emerald-500 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded shrink-0 animate-pulse">
                          New
                        </span>
                      )}
                      {isActive && <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-400 text-xs">
                {currentLang === 'en' ? "No tutorials match your search." : "រកមិនឃើញមេរៀនត្រូវគ្នាឡើយ។"}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Tutorial Reader and Core Sandbox launcher */}
        <div id="ref-w3-reader" className="lg:col-span-9 space-y-6">
          <motion.div
            key={`${activeLangTab}-${activeTopicName}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Title Block */}
            <div className="border-b border-gray-100 dark:border-neutral-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full uppercase">
                  W3SCHOOLS REFERENCE LESSON
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-2 leading-tight">
                  {currentTopic.title[currentLang]}
                </h2>
              </div>

              {/* Try It Yourself Sandbox trigger */}
              <button
                onClick={handleTryIt}
                className="flex items-center justify-center space-x-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-black rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 shrink-0 self-start sm:self-auto"
              >
                <Play className="h-4 w-4 fill-white text-white" />
                <span>{currentLang === 'en' ? "Try it Yourself ➜" : "សាកល្បងដោយខ្លួនឯង ➜"}</span>
              </button>
            </div>

            {/* Bilingual Content Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* English description */}
              <div className="bg-slate-50/50 dark:bg-neutral-950/30 border border-slate-100 dark:border-neutral-800/40 p-5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black text-gray-400">ENGLISH EXPLANATION</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {currentTopic.description.en}
                </p>
                <div className="border-t border-slate-100 dark:border-neutral-800/40 pt-2 mt-2">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong className="text-xs text-gray-700 dark:text-gray-300 font-bold block mb-1">Key Concept:</strong>
                    {currentTopic.concept.en}
                  </p>
                </div>
              </div>

              {/* Khmer description */}
              <div className="bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-500/5 p-5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">ការពន្យល់ជាភាសាខ្មែរ (KHMER)</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {currentTopic.description.kh}
                </p>
                <div className="border-t border-emerald-500/10 pt-2 mt-2">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong className="text-xs text-emerald-700 dark:text-emerald-400 font-bold block mb-1">គោលគំនិតសំខាន់៖</strong>
                    {currentTopic.concept.kh}
                  </p>
                </div>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono font-bold text-gray-500 dark:text-neutral-400 uppercase">
                  {activeLangTab} Source Code Example
                </span>
                <button
                  onClick={() => handleCopy(currentTopic.code)}
                  className="flex items-center space-x-1.5 text-xs text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Beautiful black syntax block */}
              <div className="bg-neutral-950 p-5 rounded-2xl font-mono text-xs overflow-x-auto text-emerald-400/90 leading-relaxed shadow-inner border border-neutral-800">
                <pre>{currentTopic.code}</pre>
              </div>
            </div>

            {/* Interactive Task Instructions */}
            <div className="bg-yellow-500/5 border border-yellow-500/20 p-5 rounded-2xl flex items-start space-x-3">
              <HelpCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-400 font-extrabold block">
                  {currentLang === 'en' ? "Exercise Task:" : "កិច្ចការអនុវត្ត៖"}
                </strong>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentTopic.task[currentLang]}
                </p>
              </div>
            </div>

            {/* Bottom launcher prompt */}
            <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between flex-wrap gap-4">
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-lg">
                {currentLang === 'en'
                  ? "Clicking 'Try it Yourself' opens this exact sample in our full interactive sandbox code editor with real-time output and dual-language guidance!"
                  : "ការចុច 'សាកល្បងដោយខ្លួនឯង' នឹងនាំគំរូកូដនេះទៅកាន់ផ្ទាំងសរសេរកូដពេញលេញ ដែលមានលទ្ធផលភ្លាមៗ និងមានការណែនាំជាពីរភាសា!"}
              </p>
              <button
                onClick={handleTryIt}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white text-xs font-black rounded-xl shadow transition"
              >
                <span>{currentLang === 'en' ? "Open Interactive Sandbox" : "បើកផ្ទាំងពិសោធន៍កូដ"}</span>
              </button>
            </div>

          </motion.div>
        </div>

      </div>

    </div>
  );
}
