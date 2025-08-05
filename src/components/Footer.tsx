import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Jizzakh Hotels
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tezkor havolalar
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`text-sm hover:text-blue-600 transition-colors`}>
                {t('nav.home')}
              </Link>
              <Link to="/rooms" className={`text-sm hover:text-blue-600 transition-colors`}>
                {t('nav.rooms')}
              </Link>
              <Link to="/services" className={`text-sm hover:text-blue-600 transition-colors`}>
                {t('nav.services')}
              </Link>
              <Link to="/about" className={`text-sm hover:text-blue-600 transition-colors`}>
                {t('nav.about')}
              </Link>
              <Link to="/contact" className={`text-sm hover:text-blue-600 transition-colors`}>
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('contact.title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm">Jizzakh, O'zbekiston</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm">+998 72 226 12 34</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-600 flex-shrink-0" />
                <span className="text-sm">info@jizzakhhotels.uz</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ijtimoiy tarmoqlar
            </h3>
            <div className="flex space-x-4">
              <a href="#" className={`p-3 rounded-lg transition-all duration-200 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-600'
              } shadow-md hover:shadow-lg`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`p-3 rounded-lg transition-all duration-200 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-600'
              } shadow-md hover:shadow-lg`}>
                <Instagram size={20} />
              </a>
              <a href="#" className={`p-3 rounded-lg transition-all duration-200 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-600'
              } shadow-md hover:shadow-lg`}>
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
          <p className="text-sm">
            © 2025 Jizzakh Hotels. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}