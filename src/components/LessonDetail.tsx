import { useState, useEffect } from 'react';
import { ChevronLeft, CheckCircle2, ArrowRight, Award, Flame, ThumbsUp, HelpCircle } from 'lucide-react';
import { Lesson, Language, LessonFile } from '../types';
import { t } from '../translations';
import CodeEditor from './CodeEditor';
import { motion, AnimatePresence } from 'motion/react';

interface LessonDetailProps {
  lesson: Lesson;
  currentLang: Language;
  darkMode: boolean;
  onBackToCurriculum: () => void;
  onNextLesson: () => void;
  onPrevLesson: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onCompleteLesson: (lessonId: string) => void;
}

export default function LessonDetail({
  lesson,
  currentLang,
  darkMode,
  onBackToCurriculum,
  onNextLesson,
  onPrevLesson,
  hasNext,
  hasPrev,
  onCompleteLesson
}: LessonDetailProps) {
  const [files, setFiles] = useState<LessonFile[]>(() => {
    const savedCode = localStorage.getItem(`lesson-code-${lesson.id}`);
    if (savedCode) {
      try {
        return JSON.parse(savedCode) as LessonFile[];
      } catch {
        return JSON.parse(JSON.stringify(lesson.files));
      }
    }
    return JSON.parse(JSON.stringify(lesson.files));
  });
  const [activeFileName, setActiveFileName] = useState<string>(() => {
    const savedCode = localStorage.getItem(`lesson-code-${lesson.id}`);
    if (savedCode) {
      try {
        const parsed = JSON.parse(savedCode) as LessonFile[];
        return parsed[0]?.name || lesson.activeFileName;
      } catch {
        return lesson.activeFileName;
      }
    }
    return lesson.activeFileName;
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // Load lesson code (and check local storage for progress)
  useEffect(() => {
    const savedCode = localStorage.getItem(`lesson-code-${lesson.id}`);
    if (savedCode) {
      try {
        const parsed = JSON.parse(savedCode) as LessonFile[];
        setFiles(parsed);
        setActiveFileName(parsed[0]?.name || lesson.activeFileName);
      } catch {
        setFiles(JSON.parse(JSON.stringify(lesson.files)));
        setActiveFileName(lesson.activeFileName);
      }
    } else {
      setFiles(JSON.parse(JSON.stringify(lesson.files)));
      setActiveFileName(lesson.activeFileName);
    }
    setSuccessMessage(null);
    setErrorMessage(null);
    setShowCelebration(false);
  }, [lesson]);

  // Handle file changes and auto-save
  const handleFilesChange = (updatedFiles: LessonFile[]) => {
    setFiles(updatedFiles);
    localStorage.setItem(`lesson-code-${lesson.id}`, JSON.stringify(updatedFiles));
  };

  // Reset starter code
  const handleReset = () => {
    setFiles(JSON.parse(JSON.stringify(lesson.files)));
    setActiveFileName(lesson.activeFileName);
    setSuccessMessage(null);
    setErrorMessage(null);
    localStorage.removeItem(`lesson-code-${lesson.id}`);
  };

  // Verify solution based on active code checker
  const handleVerify = (consoleOutput: string) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    const checker = lesson.solutionCheck;
    if (checker.validationFn) {
      const result = checker.validationFn(files, consoleOutput);
      if (result.success) {
        triggerSuccess(result.feedback);
      } else {
        setErrorMessage(result.feedback);
      }
    } else {
      // Default solution checkers
      const file = files.find(f => f.name === checker.targetFile);
      if (!file) {
        setErrorMessage('File error: target file missing');
        return;
      }
      
      const content = file.content;
      if (checker.type === 'regex' && checker.regex) {
        const re = new RegExp(checker.regex, 'i');
        if (re.test(content)) {
          triggerSuccess(currentLang === 'en' ? 'Excellent! Code verify succeeded.' : 'អស្ចារ្យណាស់! ការផ្ទៀងផ្ទាត់កូដទទួលបានជោគជ័យ។');
        } else {
          setErrorMessage(currentLang === 'en' ? 'Test failed. Please double check instructions.' : 'ការផ្ទៀងផ្ទាត់មិនបានជោគជ័យទេ។ សូមពិនិត្យមើលការណែនាំឡើងវិញ។');
        }
      } else if (checker.type === 'html-contains' && checker.expectedOutput) {
        if (content.includes(checker.expectedOutput)) {
          triggerSuccess(currentLang === 'en' ? 'Verification successful!' : 'ការផ្ទៀងផ្ទាត់ទទួលបានជោគជ័យ!');
        } else {
          setErrorMessage(currentLang === 'en' ? `Code must contain: ${checker.expectedOutput}` : `កូដត្រូវតែមានអត្ថបទ៖ ${checker.expectedOutput}`);
        }
      } else {
        setErrorMessage(currentLang === 'en' ? 'Invalid validation method.' : 'វិធីសាស្ត្រផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ។');
      }
    }
  };

  const triggerSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setShowCelebration(true);
    onCompleteLesson(lesson.id);

    // Save progress to local storage
    localStorage.setItem(`lesson-completed-${lesson.id}`, 'true');

    // Trigger local user stats update
    const completedCount = Number(localStorage.getItem('user-completed-count') || '0');
    localStorage.setItem('user-completed-count', String(completedCount + 1));
  };

  // Inline Markdown renderer helper
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n');
    let insideCodeBlock = false;
    let codeBlockContent: string[] = [];

    return lines.map((line, idx) => {
      if (line.trim().startsWith('```')) {
        if (insideCodeBlock) {
          insideCodeBlock = false;
          const blockContent = codeBlockContent.join('\n');
          codeBlockContent = [];
          return (
            <pre key={`code-${idx}`} className="bg-neutral-100 dark:bg-neutral-900/60 p-3.5 rounded-xl font-mono text-[12px] text-gray-800 dark:text-neutral-200 overflow-x-auto my-3 border border-gray-200 dark:border-neutral-800">
              <code>{blockContent}</code>
            </pre>
          );
        } else {
          insideCodeBlock = true;
          return null;
        }
      }

      if (insideCodeBlock) {
        codeBlockContent.push(line);
        return null;
      }

      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-sm font-bold text-gray-900 dark:text-white mt-4 mb-2 tracking-tight flex items-center">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-base font-bold text-gray-900 dark:text-white mt-5 mb-2 border-b border-gray-100 dark:border-neutral-800 pb-1 flex items-center">
            {line.replace('## ', '')}
          </h2>
        );
      }

      if (line.trim().startsWith('* ')) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1.5 pl-2">
            <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              {replaceInlineCode(line.trim().replace('* ', ''))}
            </p>
          </div>
        );
      }

      if (line.trim() === '') return <div key={idx} className="h-2" />;

      return (
        <p key={idx} className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2">
          {replaceInlineCode(line)}
        </p>
      );
    }).filter(el => el !== null);
  };

  const replaceInlineCode = (text: string) => {
    const parts = text.split(/`([^`]+)`/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return (
          <code key={i} className="px-1 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded font-mono text-[11px] text-rose-600 dark:text-rose-400 border border-gray-150 dark:border-neutral-800/50">
            {part}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-white dark:bg-neutral-900 transition-colors duration-300">
      {/* Action Sub-Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-12 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 shrink-0">
        <button
          id="btn-back-curriculum"
          onClick={onBackToCurriculum}
          className="flex items-center space-x-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>{currentLang === 'en' ? 'Back to Dashboard' : 'ត្រឡប់ទៅទំព័រដើម'}</span>
        </button>

        {/* Center quick-navigate switcher */}
        <div className="flex items-center space-x-2">
          <button
            id="nav-top-prev"
            onClick={onPrevLesson}
            disabled={!hasPrev}
            className={`p-1.5 rounded-lg border transition ${
              hasPrev
                ? 'bg-white hover:bg-gray-50 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-neutral-700 shadow-sm'
                : 'opacity-30 cursor-not-allowed text-gray-450 dark:text-neutral-650 border-transparent'
            }`}
            title={currentLang === 'en' ? 'Previous Lesson' : 'មេរៀនមុន'}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-550 font-mono tracking-wider bg-gray-100/70 dark:bg-neutral-800/60 px-2 py-0.5 rounded uppercase">
            {currentLang === 'en' ? 'NAVIGATE' : 'រុករក'}
          </span>

          <button
            id="nav-top-next"
            onClick={onNextLesson}
            disabled={!hasNext}
            className={`p-1.5 rounded-lg border transition ${
              hasNext
                ? 'bg-white hover:bg-gray-50 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-neutral-700 shadow-sm'
                : 'opacity-30 cursor-not-allowed text-gray-450 dark:text-neutral-650 border-transparent'
            }`}
            title={currentLang === 'en' ? 'Next Lesson' : 'មេរៀនបន្ទាប់'}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Info indicators */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-amber-500">
            <Flame className="h-4 w-4 animate-bounce" />
            <span className="text-xs font-bold font-mono">3 Day Streak!</span>
          </div>
        </div>
      </div>

      {/* Main Dual Panels */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel: Description and Tasks */}
        <div className="w-full lg:w-[40%] flex flex-col border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Header info */}
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md">
                {lesson.language.toUpperCase()} COURSE
              </span>
              <h1 className="text-lg sm:text-xl font-sans font-bold text-gray-900 dark:text-white mt-2 leading-tight">
                {lesson.title[currentLang]}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                {lesson.description[currentLang]}
              </p>
            </div>

            {/* Instruction content */}
            <div className="prose dark:prose-invert max-w-none">
              {parseMarkdown(lesson.instructions[currentLang])}
            </div>

            {/* Target task description card */}
            <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl space-y-3">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-emerald-500 rounded-lg text-white">
                  <Award className="h-4 w-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300">
                  {t('taskTitle', currentLang)}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 dark:text-neutral-300 font-sans leading-relaxed">
                {lesson.task[currentLang]}
              </p>
            </div>

            {/* Validation Feedback Status banner */}
            <AnimatePresence mode="wait">
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 rounded-xl flex items-start space-x-2.5 text-xs"
                >
                  <HelpCircle className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <div className="text-rose-800 dark:text-rose-300">
                    <p className="font-bold">Check Failed / ការផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ</p>
                    <p className="mt-0.5 leading-relaxed">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clean Lesson Navigation Footer */}
          <div className="p-4 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/20 flex items-center justify-between gap-3 shrink-0">
            <button
              id="footer-prev-lesson"
              onClick={onPrevLesson}
              disabled={!hasPrev}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition duration-200 ${
                hasPrev
                  ? 'bg-white hover:bg-gray-50 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-neutral-700 shadow-sm'
                  : 'bg-gray-50/50 dark:bg-neutral-900/40 text-gray-350 dark:text-neutral-600 border-gray-100 dark:border-neutral-850 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{t('prevLesson', currentLang)}</span>
            </button>

            <button
              id="footer-next-lesson"
              onClick={onNextLesson}
              disabled={!hasNext}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition duration-200 ${
                hasNext
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-transparent shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20'
                  : 'bg-gray-50/50 dark:bg-neutral-900/40 text-gray-350 dark:text-neutral-600 border-gray-100 dark:border-neutral-850 cursor-not-allowed'
              }`}
            >
              <span>{t('nextLesson', currentLang)}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Panel: Integrated Code Editor */}
        <div className="w-full lg:w-[60%] flex flex-col h-full overflow-hidden">
          <CodeEditor
            files={files}
            onFilesChange={handleFilesChange}
            language={lesson.language}
            activeFileName={activeFileName}
            onActiveFileChange={setActiveFileName}
            currentLang={currentLang}
            darkMode={darkMode}
            onVerify={handleVerify}
            onReset={handleReset}
          />
        </div>
      </div>

      {/* Modern Pop-up Celebration Screen */}
      <AnimatePresence>
        {showCelebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 sm:p-8 rounded-3xl max-w-md w-full text-center shadow-2xl space-y-6"
            >
              <div className="mx-auto h-16 w-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 animate-bounce">
                <Award className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                  {t('successTitle', currentLang)}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {currentLang === 'en' 
                    ? 'Your answer has passed the challenge successfully!' 
                    : 'កូដរបស់អ្នកបានឆ្លងកាត់ការផ្ទៀងផ្ទាត់ដោយជោគជ័យ!'}
                </p>
              </div>

              {successMessage && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 text-xs rounded-xl border border-emerald-100 dark:border-emerald-900/20 italic">
                  "{successMessage}"
                </div>
              )}

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  id="btn-success-dashboard"
                  onClick={() => {
                    setShowCelebration(false);
                    onBackToCurriculum();
                  }}
                  className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-white text-xs sm:text-sm font-bold rounded-xl transition"
                >
                  {t('backToDashboard', currentLang)}
                </button>
                {hasNext && (
                  <button
                    id="btn-success-next"
                    onClick={() => {
                      setShowCelebration(false);
                      onNextLesson();
                    }}
                    className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center space-x-1.5 transition shadow-lg shadow-emerald-500/15"
                  >
                    <span>{t('nextLesson', currentLang)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
