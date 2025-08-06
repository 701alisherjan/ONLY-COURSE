import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { RootState } from '../store';
import { toggleTheme } from '../store/slices/themeSlice';
import { setLanguage, Language } from '../store/slices/languageSlice';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'rooms', path: '/rooms' },
    { key: 'services', path: '/services' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ];

  const languages = [
    { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark ? 'bg-gray-900/95 backdrop-blur-md border-gray-800' : 'bg-white/95 backdrop-blur-md border-gray-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Jizzakh Hotels
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : isDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Globe size={20} />
                <span className="text-sm font-medium uppercase">{currentLanguage}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } overflow-hidden`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        dispatch(setLanguage(lang.code));
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-blue-600 text-white'
                          : isDark
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white'
                      : isDark 
                        ? 'text-gray-300 hover:bg-gray-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}