import React from 'react';
import { useSelector } from 'react-redux';
import { Award, Heart, Users, MapPin, Clock, Shield } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: 'Mehmondo\'stlik',
      description: 'Har bir mehmon uchun samimiy va issiq munosabat'
    },
    {
      icon: Award,
      title: 'Sifat',
      description: 'Eng yuqori standartlar va professional xizmat ko\'rsatish'
    },
    {
      icon: Users,
      title: 'Jamoa',
      description: 'Tajribali va g\'amxo\'r xodimlar jamoasi'
    },
    {
      icon: Shield,
      title: 'Ishonch',
      description: 'Sizning qulayligingiz va xavfsizligingiz bizning ustuvorligimiz'
    }
  ];

  const achievements = [
    { number: '15+', text: 'Yillik tajriba', icon: Clock },
    { number: '50+', text: 'Xalqaro mukofotlar', icon: Award },
    { number: '25K+', text: 'Baxtli mijozlar', icon: Users },
    { number: '6', text: 'Premium mehmonxonalar', icon: MapPin }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Jizzakh landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Jizzax shahrida mehmonlarni kutib olish sohasida yetakchi kompaniya
            </p>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Bizning hikoyamiz
              </h2>
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  2009 yilda tashkil etilgan Jizzakh Hotels jamoasi O'zbekistonning go'zal Jizzax shahrida 
                  mehmonlarni kutib olish sohasida yangi standartlarni o'rnatdi. Bizning maqsadimiz har bir 
                  mehmon uchun unutilmas tajriba yaratishdir.
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Zamonaviy qulayliklar bilan an'anaviy o'zbek mehmondo'stligini birlashtirib, biz har bir 
                  mehmonimizga uy kabi issiq muhit taqdim etamiz. Bizning professional jamoamiz sizning har 
                  bir ehtiyojingizni qondirish uchun 24/7 xizmat ko'rsatadi.
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Bugungi kunda biz Jizzax shahrining eng yaxshi mehmonxonalarini boshqaruvchi sifatida 
                  tanilgan bo'lib, mijozlarimizning 95% dan ortig'i bizni qayta tashrif buyurishadi.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel lobby"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Yillik tajriba</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Bizning qadriyatlarimiz
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Biz quyidagi asosiy qadriyatlar asosida ishlaydi va rivojlanamiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-4 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Bizning yutuqlarimiz
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Yillar davomida erishgan natijalarimiz bilan faxrlanamiz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl ${
                  isDark ? 'bg-gray-900/50' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.number}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Bizning jamoamiz
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Professional va tajribali xodimlarimiz bilan tanishing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Akmal Karimov',
                position: 'Bosh direktor',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: '15 yillik mehmonxona biznesida tajriba'
              },
              {
                name: 'Nilufar Yusupova',
                position: 'Mijozlar bilan ishlash menejeri',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Mijozlar xizmati bo\'yicha mutaxassis'
              },
              {
                name: 'Sardor Aliyev',
                position: 'Bosh oshpaz',
                image: 'https://images.pexels.com/photos/4253618/pexels-photo-4253618.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Xalqaro oshxona bo\'yicha ekspert'
              }
            ].map((member, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}