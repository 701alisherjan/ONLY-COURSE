import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Utensils, 
  Waves, 
  Car, 
  Wifi, 
  Dumbbell, 
  ShieldCheck, 
  Headphones,
  Coffee
} from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';

export default function Services() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();

  const services = [
    {
      icon: Utensils,
      title: t('services.restaurant.title'),
      description: t('services.restaurant.description'),
      features: ['24/7 xizmat', 'Mahalliy taomlar', 'Xalqaro oshxona', 'Vegetarian taomlar']
    },
    {
      icon: Waves,
      title: t('services.spa.title'),
      description: t('services.spa.description'),
      features: ['Massaj xizmatlari', 'Sauna', 'Hammom', 'Aromaterapiya']
    },
    {
      icon: Car,
      title: t('services.transport.title'),
      description: t('services.transport.description'),
      features: ['Aeroportdan olib kelish', 'Shaharda sayohat', 'Taksi xizmati', 'Avtomobil ijarasi']
    },
    {
      icon: Wifi,
      title: t('services.wifi.title'),
      description: t('services.wifi.description'),
      features: ['Tezkor internet', 'Barcha xonalarda', 'Cheksiz foydalanish', '24/7 texnik yordam']
    },
    {
      icon: Dumbbell,
      title: 'Fitnes markaz',
      description: 'Zamonaviy sport anjomlar bilan jihozlangan fitnes zal',
      features: ['Zamonaviy trenajorlar', 'Shaxsiy murabbiy', 'Guruh mashg\'ulotlari', 'Yoga darslari']
    },
    {
      icon: ShieldCheck,
      title: 'Xavfsizlik xizmati',
      description: '24/7 xavfsizlik va himoya xizmatlari',
      features: ['24/7 nazorat', 'Xavfsiz to\'lov', 'Seyf xizmati', 'Favqulodda yordam']
    },
    {
      icon: Headphones,
      title: 'Mijozlar xizmati',
      description: 'Doimiy mijozlarga yordam va qo\'llab-quvvatlash',
      features: ['24/7 qo\'llab-quvvatlash', 'Ko\'p tillar', 'Tezkor javob', 'Professional yordam']
    },
    {
      icon: Coffee,
      title: 'Ish xizmatlari',
      description: 'Biznes mijozlar uchun maxsus xizmatlar',
      features: ['Konferens zallari', 'Prezentatsiya texnikalari', 'Wi-Fi', 'Catering xizmati']
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('services.title')}
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              } border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              
              <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center p-12 rounded-2xl ${
          isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Qo'shimcha ma'lumot kerakmi?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Bizning xizmatlarimiz haqida batafsil ma'lumot olish uchun biz bilan bog'laning
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Biz bilan bog'lanish
          </button>
        </div>
      </div>
    </div>
  );
}