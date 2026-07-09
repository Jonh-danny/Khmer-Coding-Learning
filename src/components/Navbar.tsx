import { Language } from '../types';
import { t } from '../translations';
import { Sun, Moon, GraduationCap, Menu, X, BookOpen, Compass, Globe, FileCode } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  darkMode: boolean;
  onThemeToggle: () => void;
  activeTab: 'courses' | 'paths' | 'references';
  onTabChange: (tab: 'courses' | 'paths' | 'references') => void;
  onBackToDashboard: () => void;
}

export default function Navbar({
  currentLang,
  onLangChange,
  darkMode,
  onThemeToggle,
  activeTab,
  onTabChange,
  onBackToDashboard
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    onLangChange(currentLang === 'en' ? 'kh' : 'en');
  };

  const handleNavClick = (tab: 'courses' | 'paths' | 'references') => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md transition-colors duration-300">
      <div id="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div 
            id="nav-logo" 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={onBackToDashboard}
          >
            <div className="p-2 bg-emerald-500 dark:bg-emerald-600 rounded-xl text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-colors">
              {currentLang === 'en' ? 'Khmer Coding' : 'រៀនកូដខ្មែរ'}
              <span className="text-emerald-500 dark:text-emerald-400"> Learning</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div id="desktop-nav" className="hidden md:flex items-center space-x-6">
            <button
              id="btn-nav-courses"
              onClick={() => handleNavClick('courses')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === 'courses'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-neutral-800'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>{t('courses', currentLang)}</span>
            </button>
            <button
              id="btn-nav-paths"
              onClick={() => handleNavClick('paths')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === 'paths'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-neutral-800'
              }`}
            >
              <Compass className="h-4 w-4" />
              <span>{t('learningPaths', currentLang)}</span>
            </button>
            <button
              id="btn-nav-references"
              onClick={() => handleNavClick('references')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === 'references'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-neutral-800'
              }`}
            >
              <FileCode className="h-4 w-4" />
              <span>{t('references', currentLang)}</span>
            </button>

            {/* Separator */}
            <div className="h-4 w-px bg-gray-200 dark:bg-neutral-800" />

            {/* Controls */}
            <div className="flex items-center space-x-3">
              {/* Modern Language Switcher */}
              <div className="relative flex items-center bg-gray-100/80 dark:bg-neutral-800/80 p-1 rounded-xl border border-gray-200/40 dark:border-neutral-700/40 backdrop-blur-sm">
                <div className="pl-2 pr-1.5 text-gray-400 dark:text-neutral-500">
                  <Globe className="h-3.5 w-3.5" />
                </div>
                <div className="flex space-x-0.5">
                  <button
                    id="btn-lang-en"
                    onClick={() => onLangChange('en')}
                    className={`relative px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      currentLang === 'en'
                        ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-400 shadow-sm font-bold scale-[1.02]'
                        : 'text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    id="btn-lang-kh"
                    onClick={() => onLangChange('kh')}
                    className={`relative px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      currentLang === 'kh'
                        ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-400 shadow-sm font-bold scale-[1.02]'
                        : 'text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100'
                    }`}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                id="btn-theme-toggle"
                onClick={onThemeToggle}
                className="p-2 border border-gray-200 dark:border-neutral-800 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 transition active:scale-95"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  <Sun className="h-4 w-4 text-amber-500" />
                ) : (
                  <Moon className="h-4 w-4 text-emerald-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Modern Mobile Segmented Switcher */}
            <div className="flex items-center bg-gray-100/85 dark:bg-neutral-800/85 p-0.5 rounded-lg border border-gray-200/40 dark:border-neutral-700/40">
              <button
                id="btn-mobile-lang-en"
                onClick={() => onLangChange('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all duration-200 ${
                  currentLang === 'en'
                    ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-gray-400 dark:text-neutral-500'
                }`}
              >
                EN
              </button>
              <button
                id="btn-mobile-lang-kh"
                onClick={() => onLangChange('kh')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all duration-200 ${
                  currentLang === 'kh'
                    ? 'bg-white dark:bg-neutral-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-gray-400 dark:text-neutral-500'
                }`}
              >
                KH
              </button>
            </div>

            <button
              id="btn-mobile-theme-toggle"
              onClick={onThemeToggle}
              className="p-1.5 border border-gray-200 dark:border-neutral-800 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-emerald-600" />
              )}
            </button>
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-3 px-4 space-y-2">
          <button
            id="btn-mobile-courses"
            onClick={() => handleNavClick('courses')}
            className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-left text-sm font-semibold ${
              activeTab === 'courses'
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>{t('courses', currentLang)}</span>
          </button>
          <button
            id="btn-mobile-paths"
            onClick={() => handleNavClick('paths')}
            className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-left text-sm font-semibold ${
              activeTab === 'paths'
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>{t('learningPaths', currentLang)}</span>
          </button>
          <button
            id="btn-mobile-references"
            onClick={() => handleNavClick('references')}
            className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-left text-sm font-semibold ${
              activeTab === 'references'
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            <FileCode className="h-4 w-4" />
            <span>{t('references', currentLang)}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
