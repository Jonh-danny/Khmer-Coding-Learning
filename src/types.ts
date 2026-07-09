export type Language = 'en' | 'kh';

export interface LocalizedString {
  en: string;
  kh: string;
}

export interface LessonFile {
  name: string;
  content: string;
  language: string;
}

export interface Lesson {
  id: string;
  courseId?: string;
  pathId?: string;
  title: LocalizedString;
  description: LocalizedString;
  instructions: LocalizedString;
  task: LocalizedString;
  language: string; // 'html' | 'css' | 'javascript' | 'python' | 'cpp' | 'java' | 'csharp'
  files: LessonFile[];
  activeFileName: string;
  solutionCheck: {
    type: 'html-contains' | 'js-eval' | 'console-match' | 'regex';
    targetFile: string;
    regex?: string;
    expectedOutput?: string;
    validationFn?: (files: LessonFile[], consoleOutput: string) => { success: boolean; feedback: string };
  };
}

export interface LearningPath {
  id: string;
  name: string;
  icon: string;
  category: 'languages' | 'frameworks';
  description: LocalizedString;
  lessons: Lesson[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyKh: string;
  recommended?: boolean;
}

export interface Course {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyKh: string;
  duration: string;
  durationKh: string;
  lessons: Lesson[];
  icon: string;
}
