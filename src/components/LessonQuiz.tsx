import { useState, useEffect } from 'react';
import { HelpCircle, Check, X, RotateCcw, MessageSquareCode } from 'lucide-react';
import { generateQuiz, QuizQuestion } from '../utils/quizGenerator';
import { Language } from '../types';

interface LessonQuizProps {
  trackId: string;
  lessonName: string;
  currentLang: Language;
}

export default function LessonQuiz({ trackId, lessonName, currentLang }: LessonQuizProps) {
  const [quiz, setQuiz] = useState<QuizQuestion>(() => generateQuiz(trackId, lessonName));
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Generate a new quiz when lesson changes
  useEffect(() => {
    setQuiz(generateQuiz(trackId, lessonName));
    setSelectedIdx(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  }, [trackId, lessonName]);

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIdx(idx);
  };

  const handleSubmit = () => {
    if (selectedIdx === null) return;
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  const isCorrect = selectedIdx === quiz.correctIndex;

  return (
    <div className="bg-slate-50 dark:bg-neutral-800/40 border border-slate-200/60 dark:border-neutral-800/80 rounded-2xl p-5 sm:p-6 shadow-sm max-w-3xl mt-8">
      {/* Quiz Header */}
      <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-4">
        <HelpCircle className="h-5 w-5" />
        <span className="text-xs sm:text-sm font-black tracking-wider uppercase">
          {currentLang === 'en' ? 'Quick Progress Check' : 'ស្ទង់ការយល់ដឹងរហ័ស'}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white leading-relaxed mb-4">
        {quiz.question[currentLang]}
      </h3>

      {/* Options List */}
      <div className="space-y-2.5">
        {quiz.options.map((option, idx) => {
          const isSelected = selectedIdx === idx;
          const isThisCorrect = quiz.correctIndex === idx;

          // Colors based on status
          let buttonStyles = "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-800 dark:text-neutral-200 hover:bg-slate-50 dark:hover:bg-neutral-800/50";
          
          if (isSelected && !isSubmitted) {
            buttonStyles = "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-700 dark:text-emerald-400 font-semibold ring-2 ring-emerald-500/10";
          } else if (isSubmitted) {
            if (isThisCorrect) {
              buttonStyles = "bg-emerald-50 dark:bg-emerald-950/25 border-emerald-500 text-emerald-700 dark:text-emerald-400 font-bold ring-2 ring-emerald-500/20";
            } else if (isSelected) {
              buttonStyles = "bg-red-50 dark:bg-red-950/20 border-red-400 text-red-700 dark:text-red-400 font-semibold";
            } else {
              buttonStyles = "opacity-55 bg-white dark:bg-neutral-900 border-gray-150 dark:border-neutral-850 text-gray-400 dark:text-neutral-500";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={isSubmitted}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-xs sm:text-sm text-left transition-all ${buttonStyles}`}
            >
              <div className="flex items-center space-x-3 pr-2">
                <span className="flex items-center justify-center h-6 w-6 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 font-bold font-mono text-xs group-hover:bg-emerald-500/10">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option[currentLang]}</span>
              </div>

              {/* Status Icons */}
              {isSubmitted && isThisCorrect && (
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 text-white shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
              )}
              {isSubmitted && isSelected && !isThisCorrect && (
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white shrink-0">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-150 dark:border-neutral-850">
        <div className="text-xs text-gray-500">
          {!isSubmitted 
            ? (currentLang === 'en' ? "Choose an option and click Submit." : "សូមជ្រើសរើសចម្លើយ រួចចុច 'ផ្ញើចម្លើយ'") 
            : (isCorrect 
                ? (currentLang === 'en' ? "✓ Correct!" : "✓ ត្រឹមត្រូវ!") 
                : (currentLang === 'en' ? "✗ Incorrect. Try again!" : "✗ មិនត្រឹមត្រូវទេ។ ព្យាយាមម្តងទៀត!"))}
        </div>

        <div className="flex items-center space-x-2">
          {isSubmitted ? (
            <button
              onClick={handleReset}
              className="flex items-center space-x-1 px-4 py-2 bg-gray-200 hover:bg-gray-350 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-700 dark:text-neutral-200 text-xs font-bold rounded-xl transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{currentLang === 'en' ? 'Retry' : 'ឆ្លើយឡើងវិញ'}</span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={selectedIdx === null}
              className={`px-5 py-2.5 text-xs font-black rounded-xl shadow transition ${
                selectedIdx !== null
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/10'
                  : 'bg-gray-200 dark:bg-neutral-800 text-gray-400 dark:text-neutral-600 cursor-not-allowed shadow-none'
              }`}
            >
              {currentLang === 'en' ? 'Submit Answer' : 'ផ្ញើចម្លើយ'}
            </button>
          )}
        </div>
      </div>

      {/* Explanation Box */}
      {showExplanation && (
        <div className="mt-4 p-4 bg-emerald-500/5 dark:bg-emerald-500/2 border border-emerald-500/20 dark:border-emerald-500/10 rounded-xl space-y-1.5 animate-fadeIn">
          <div className="flex items-center space-x-1.5 text-emerald-700 dark:text-emerald-400">
            <MessageSquareCode className="h-4 w-4" />
            <strong className="text-xs uppercase font-extrabold tracking-wider">
              {currentLang === 'en' ? 'Explanation' : 'ការពន្យល់លម្អិត'}
            </strong>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            {quiz.explanation[currentLang]}
          </p>
        </div>
      )}
    </div>
  );
}
