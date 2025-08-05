import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Xabar yuborishda xatolik yuz berdi');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    } catch (error : any) {
      alert(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [
        "Jizzax shahri, Sharof Rashidov ko'chasi 12",
        "Jizzax viloyati, O'zbekiston, 130100"
      ]
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: [
        '+998 123456789',
        '+998 123456789',
        '+998 123456789'
      ]
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: [
        'info@jizzakhhotels.uz',
        'booking@jizzakhhotels.uz',
        'support@jizzakhhotels.uz'
      ]
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: [
        'Dushanba - Yakshanba: 24/7',
        'Qabul xizmati: 24 soat',
        'Telefon: 24 soat'
      ]
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('contact.title')}
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Bizning professional jamoamiz sizga yordam berishga tayyor
            </p>
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDark ? 'bg-gray-900 hover:bg-gray-850' : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Biz bilan bog'laning
              </h2>

              {isSubmitted ? (
                <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-gray-800' : 'bg-green-50'} border ${isDark ? 'border-gray-700' : 'border-green-200'}`}>
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Xabar yuborildi!
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Ismingizni kiriting"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {t('contact.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Telefon raqami
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="+998 90 123 45 67"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Mavzu
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Mavzuni tanlang</option>
                        <option value="booking">Bron qilish</option>
                        <option value="inquiry">Umumiy so'rov</option>
                        <option value="complaint">Shikoyat</option>
                        <option value="suggestion">Taklif</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t('contact.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        isDark
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Xabaringizni yozing..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>{t('contact.send')}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="h-full min-h-[600px]">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Bizning joylashuvimiz
              </h2>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.80651917744!2d67.7411042!3d40.1158878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b299b0b7a1b5af%3A0x9c8b8b8b8b8b8b8b!2sJizzakh%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-blue-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Jizzakh Hotels</p>
                      <p className="text-sm text-gray-600">Jizzax shahri, O'zbekiston</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tez-tez so'raladigan savollar
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Bizning mijozlarimiz eng ko'p so'raydigan savollarga javoblar
            </p>
          </div>

          <div className="space-y-4">
            <details className={`group rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} p-6`}>
              <summary className={`cursor-pointer text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Qanday qilib bron qilish mumkin?
              </summary>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Bizning saytdan osonlik bilan xona bron qilishingiz mumkin.
              </p>
            </details>

            <details className={`group rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} p-6`}>
              <summary className={`cursor-pointer text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                To‘lov usullari qanday?
              </summary>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Kredit karta, Payme va Click orqali to‘lov qabul qilamiz.
              </p>
            </details>

            <details className={`group rounded-lg border ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} p-6`}>
              <summary className={`cursor-pointer text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Bekor qilish siyosati qanday?
              </summary>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Bronlarni bekor qilish uchun 24 soat oldin xabar berish kerak.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
