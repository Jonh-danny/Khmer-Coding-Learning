import { useState, useEffect } from 'react';
import { 
  BookOpen, Compass, Search, Code2, Award, Flame, Star, ChevronRight, CheckCircle, Clock, Layout, Play,
  Palette, Terminal, Coffee, Cpu, Binary, FileJson, Atom, Globe, Wind, Grid
} from 'lucide-react';
import { Course, LearningPath, Language, Lesson } from '../types';
import { t } from '../translations';
import { motion } from 'motion/react';

interface DashboardProps {
  currentLang: Language;
  activeTab: 'courses' | 'paths' | 'references';
  courses: Course[];
  paths: LearningPath[];
  onSelectLesson: (lesson: Lesson) => void;
}

export default function Dashboard({
  currentLang,
  activeTab,
  courses,
  paths,
  onSelectLesson
}: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'languages' | 'frameworks'>('all');
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [selectedCurriculum, setSelectedCurriculum] = useState<{
    type: 'course' | 'path';
    title: string;
    lessons: Lesson[];
    description: string;
  } | null>(null);

  // Load progress from local storage
  useEffect(() => {
    const ids: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('lesson-completed-')) {
        const id = key.replace('lesson-completed-', '');
        ids.push(id);
      }
    }
    setCompletedLessonIds(ids);
  }, []);

  // Map technology and path icons to lucide icons
  const renderTechIcon = (iconName: string, className = "h-6 w-6") => {
    switch (iconName) {
      case 'layout': return <Layout className={`${className} text-blue-500`} />;
      case 'code-2': return <Code2 className={`${className} text-yellow-500`} />;
      case 'atom': return <Atom className={`${className} text-cyan-400`} />;
      case 'terminal': return <Terminal className={`${className} text-emerald-500`} />;
      case 'hash': return <Binary className={`${className} text-purple-500`} />;
      
      // Paths
      case 'html': return <Layout className={`${className} text-amber-500`} />;
      case 'css': return <Palette className={`${className} text-blue-500`} />;
      case 'js': return <Code2 className={`${className} text-yellow-500`} />;
      case 'python': return <Terminal className={`${className} text-teal-500`} />;
      case 'java': return <Coffee className={`${className} text-orange-500`} />;
      case 'cpp': return <Cpu className={`${className} text-rose-500`} />;
      case 'csharp': return <Binary className={`${className} text-violet-500`} />;
      case 'typescript': return <FileJson className={`${className} text-sky-500`} />;
      case 'react': return <Atom className={`${className} text-cyan-500`} />;
      case 'nextjs': return <Globe className={`${className} text-neutral-800 dark:text-neutral-200`} />;
      case 'tailwind': return <Wind className={`${className} text-teal-400`} />;
      case 'bootstrap': return <Grid className={`${className} text-indigo-500`} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Filter paths based on category and query
  const filteredPaths = paths.filter(path => {
    const nameMatch = path.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      path.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = categoryFilter === 'all' || path.category === categoryFilter;
    return nameMatch && catMatch;
  });

  const getDifficultyBg = (diff: string) => {
    if (diff === 'Beginner') return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20';
    if (diff === 'Intermediate') return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/20';
    return 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/20';
  };

  const getCompletedCountForSet = (lessons: Lesson[]) => {
    return lessons.filter(l => completedLessonIds.includes(l.id)).length;
  };

  return (
    <div id="dashboard-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white dark:bg-neutral-900 transition-colors duration-300">
      
      {/* 1. Header Hero section */}
      {activeTab === 'paths' ? (
        <div id="paths-hero" className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/10 text-center space-y-4 overflow-hidden">
          {/* Ambient blur backgrounds */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest">
              {currentLang === 'en' ? 'COMPLETE EXPLORER' : 'កម្មវិធីស្វែងយល់វិថីសិក្សា'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-sans font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              {t('heroTitle', currentLang)}
            </h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t('heroSubtitle', currentLang)}
            </p>
          </motion.div>

          {/* Search and filter controls */}
          <div className="max-w-xl mx-auto pt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                id="input-search-paths"
                type="text"
                placeholder={t('searchPlaceholder', currentLang)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            
            <div className="flex space-x-1.5 p-1 bg-gray-100 dark:bg-neutral-800 rounded-xl">
              <button
                id="btn-filter-all"
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  categoryFilter === 'all'
                    ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-300 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {t('all', currentLang)}
              </button>
              <button
                id="btn-filter-languages"
                onClick={() => setCategoryFilter('languages')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  categoryFilter === 'languages'
                    ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-300 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currentLang === 'en' ? 'Languages' : 'ភាសា'}
              </button>
              <button
                id="btn-filter-frameworks"
                onClick={() => setCategoryFilter('frameworks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  categoryFilter === 'frameworks'
                    ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-300 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currentLang === 'en' ? 'Frameworks' : 'ហ្វ្រេមវើក'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Simple Focused Header for Course catalog
        <div id="courses-header" className="border-b border-gray-200 dark:border-neutral-800 pb-5 space-y-2">
          <h1 className="text-xl sm:text-2xl font-sans font-black text-gray-900 dark:text-white tracking-tight">
            {t('courses', currentLang)}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {currentLang === 'en'
              ? 'Select from our 5 curated educational programs to level up your technology mastery with guided steps.'
              : 'ជ្រើសរើសក្នុងចំណោមកម្មវិធីសិក្សាជ្រើសរើសទាំង ៥ របស់យើងដើម្បីអភិវឌ្ឍសមត្ថភាពបច្ចេកវិទ្យារបស់អ្នកជាជំហានៗ។'}
          </p>
        </div>
      )}

      {/* 2. Gamified Progress Stats Banner */}
      <div id="dashboard-stats" className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-gray-50 dark:bg-neutral-900/40 border border-gray-200 dark:border-neutral-800/60 rounded-2xl">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t('completedBadge', currentLang)}</p>
            <p className="text-base sm:text-lg font-black font-mono text-gray-900 dark:text-white">
              {completedLessonIds.length} <span className="text-xs text-gray-500 font-normal">lessons</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-neutral-800 pt-3 sm:pt-0 sm:pl-6">
          <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">STREAK</p>
            <p className="text-base sm:text-lg font-black font-mono text-gray-900 dark:text-white">
              3 <span className="text-xs text-gray-500 font-normal">days active</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-neutral-800 pt-3 sm:pt-0 sm:pl-6">
          <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-xl">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">ACADEMY RANK</p>
            <p className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
              Junior Dev
            </p>
          </div>
        </div>
      </div>

      {/* 3. Cards Grid Layout */}
      {activeTab === 'paths' ? (
        <div id="paths-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPaths.map(path => {
            const completedCount = getCompletedCountForSet(path.lessons);
            const totalCount = path.lessons.length;
            const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <div
                id={`card-path-${path.id}`}
                key={path.id}
                className="group flex flex-col bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-500/20 dark:hover:border-emerald-400/20 hover:-translate-y-1 transition duration-300 relative"
              >
                {/* Starter Badge styling */}
                {path.recommended && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-white bg-emerald-600 dark:bg-emerald-500/90 px-2 py-0.5 rounded-md flex items-center space-x-1 shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-white" />
                    <span>{t('beginnerFriendly', currentLang)}</span>
                  </span>
                )}

                <div className="p-5 flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-gray-50 dark:bg-neutral-800/80 rounded-xl group-hover:scale-105 transition">
                      {renderTechIcon(path.icon, "h-6 w-6")}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-gray-900 dark:text-white">{path.name}</h3>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase ${getDifficultyBg(path.difficulty)}`}>
                        {currentLang === 'en' ? path.difficulty : path.difficultyKh}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 min-h-[54px]">
                    {path.description[currentLang]}
                  </p>

                  {/* Micro Progress Bar */}
                  {totalCount > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                        <span>{t('progressLabel', currentLang)}</span>
                        <span>{completedCount}/{totalCount} {t('lessonsCount', currentLang)} ({percent}%)</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-500" 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 flex justify-end">
                  <button
                    id={`btn-path-view-${path.id}`}
                    onClick={() => setSelectedCurriculum({
                      type: 'path',
                      title: path.name,
                      lessons: path.lessons,
                      description: path.description[currentLang]
                    })}
                    className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition"
                  >
                    <span>{t('viewPath', currentLang)}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Exactly 5 Curated Courses Page
        <div id="courses-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => {
            const completedCount = getCompletedCountForSet(course.lessons);
            const totalCount = course.lessons.length;
            const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <div
                id={`card-course-${course.id}`}
                key={course.id}
                className="group flex flex-col bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-500/20 dark:hover:border-emerald-400/20 hover:-translate-y-1 transition duration-300"
              >
                <div className="p-5 flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-gray-50 dark:bg-neutral-800/80 rounded-xl group-hover:scale-105 transition">
                      {renderTechIcon(course.icon, "h-6 w-6")}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-gray-900 dark:text-white">{course.title[currentLang]}</h3>
                      <div className="flex items-center space-x-1.5 mt-0.5">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase ${getDifficultyBg(course.difficulty)}`}>
                          {currentLang === 'en' ? course.difficulty : course.difficultyKh}
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 flex items-center space-x-0.5">
                          <Clock className="h-3 w-3" />
                          <span>{currentLang === 'en' ? course.duration : course.durationKh}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 min-h-[54px]">
                    {course.description[currentLang]}
                  </p>

                  {/* Micro Progress Bar */}
                  {totalCount > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                        <span>{t('progressLabel', currentLang)}</span>
                        <span>{completedCount}/{totalCount} {t('lessonsCount', currentLang)} ({percent}%)</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-500" 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 flex justify-end">
                  <button
                    id={`btn-course-view-${course.id}`}
                    onClick={() => setSelectedCurriculum({
                      type: 'course',
                      title: course.title[currentLang],
                      lessons: course.lessons,
                      description: course.description[currentLang]
                    })}
                    className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition"
                  >
                    <span>{t('viewCourse', currentLang)}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Curriculum Explorer Drawer Panel */}
      {selectedCurriculum && (
        <div id="drawer-curriculum" className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs">
          <div 
            id="drawer-backdrop" 
            className="absolute inset-0" 
            onClick={() => setSelectedCurriculum(null)} 
          />
          <div className="relative w-full max-w-lg h-full bg-white dark:bg-neutral-900 shadow-2xl border-l border-gray-100 dark:border-neutral-800 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6 flex-1">
              {/* Close and Title */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md">
                    {selectedCurriculum.type === 'course' ? t('activeCourseHeader', currentLang) : t('activePathHeader', currentLang)}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-sans font-black text-gray-900 dark:text-white mt-2 leading-tight">
                    {selectedCurriculum.title}
                  </h2>
                </div>
                <button
                  id="btn-close-drawer"
                  onClick={() => setSelectedCurriculum(null)}
                  className="p-1 text-gray-400 hover:text-gray-950 dark:hover:text-white transition rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-sans">
                {selectedCurriculum.description}
              </p>

              {/* Lessons Curriculum List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {t('lessonsCount', currentLang)} ({selectedCurriculum.lessons.length})
                </h4>
                
                <div className="space-y-2.5">
                  {selectedCurriculum.lessons.map((lesson, idx) => {
                    const isCompleted = completedLessonIds.includes(lesson.id);

                    return (
                      <div
                        id={`drawer-lesson-${lesson.id}`}
                        key={lesson.id}
                        onClick={() => {
                          setSelectedCurriculum(null);
                          onSelectLesson(lesson);
                        }}
                        className="group flex justify-between items-center p-3.5 border border-gray-200 dark:border-neutral-800 hover:border-emerald-500/30 rounded-xl cursor-pointer hover:bg-emerald-50/10 dark:hover:bg-emerald-950/5 transition duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-bold text-gray-400 font-mono">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h5 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                              {lesson.title[currentLang]}
                            </h5>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                              {lesson.language.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {isCompleted ? (
                            <span className="p-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-lg">
                              <CheckCircle className="h-4 w-4" />
                            </span>
                          ) : (
                            <span className="p-1.5 bg-gray-50 dark:bg-neutral-800 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 rounded-lg transition">
                              <Play className="h-3.5 w-3.5 fill-current" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-neutral-800">
              <button
                id="btn-drawer-all-start"
                onClick={() => {
                  if (selectedCurriculum.lessons.length > 0) {
                    setSelectedCurriculum(null);
                    onSelectLesson(selectedCurriculum.lessons[0]);
                  }
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition flex items-center justify-center space-x-2"
              >
                <span>{t('startLearning', currentLang)}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Custom simple icon component to support type safety
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
