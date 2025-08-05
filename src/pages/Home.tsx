import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Award, Users, Clock } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data/hotels';

export default function Home() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();

  const featuredHotels = hotels.slice(0, 3);

  const stats = [
    { icon: Award, value: '50+', label: 'Mukofotlar' },
    { icon: Users, value: '10K+', label: 'Baxtli mijozlar' },
    { icon: Star, value: '4.8', label: 'O\'rtacha baho' },
    { icon: Clock, value: '24/7', label: 'Xizmat ko\'rsatish' }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Jizzakh landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span>{t('home.cta')}</span>
            <ChevronRight size={24} />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-gray-900/50' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('home.featured')}
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Eng yaxshi mehmonxonalarni kashf eting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              <span>Barcha mehmonxonalarni ko'rish</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}