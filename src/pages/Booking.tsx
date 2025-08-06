import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Calendar, CreditCard, Check, Star, MapPin } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';
import { hotels } from '../data/hotels';

export default function Booking() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  
  const [step, setStep] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleHotelSelect = (hotelId: number) => {
    setSelectedHotel(hotelId);
    setStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };


  
  const selectedHotelData = selectedHotel ? hotels.find(h => h.id === selectedHotel) : null;
  const totalDays = bookingData.checkIn && bookingData.checkOut ? 
    Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = selectedHotelData && totalDays > 0 ? selectedHotelData.price * totalDays * bookingData.rooms : 0;

  if (isBooked) {
    return (
      <div className={`min-h-screen pt-20 flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className={`max-w-2xl mx-auto p-12 rounded-2xl text-center ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h1 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Bron qilish muvaffaqiyatli!
          </h1>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Sizning buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanib, barcha tafsilotlarni tasdiqlaymiz.
          </p>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} mb-8`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Bron ma'lumotlari
            </h3>
            <div className="space-y-2 text-left">
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>Mehmonxona:</strong> {selectedHotelData?.name}
              </p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>Kelish:</strong> {bookingData.checkIn}
              </p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>Ketish:</strong> {bookingData.checkOut}
              </p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                <strong>Umumiy narx:</strong> ${totalPrice}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsBooked(false);
              setStep(1);
              setSelectedHotel(null);
              setBookingData({
                checkIn: '',
                checkOut: '',
                guests: 1,
                rooms: 1,
                firstName: '',
                lastName: '',
                email: '',
                phone: '+998',
                specialRequests: ''
              });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Yangi bron qilish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('nav.booking')}
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Ideal mehmonxonangizni tanlang va bron qiling
          </p>
        </div>

          <div className="flex items-center justify-center space-x-8">
            {[
              { step: 1, label: 'Mehmonxona tanlash', icon: MapPin },
              { step: 2, label: 'Ma\'lumotlar', icon: Calendar },
              { step: 3, label: 'To\'lov', icon: CreditCard }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  step >= item.step 
                    ? 'bg-blue-600 text-white' 
                    : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                } transition-all duration-300`}>
                  <item.icon size={20} />
                </div>
                <span className={`ml-3 font-medium ${
                  step >= item.step 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
                {index < 2 && (
                  <div className={`ml-8 w-16 h-0.5 ${
                    step > item.step ? 'bg-blue-600' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => handleHotelSelect(hotel.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {hotel.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {hotel.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {hotel.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ${hotel.price}
                      <span className={`text-sm font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        /kecha
                      </span>
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                      Tanlash
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && selectedHotelData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Bron qilish ma'lumotlari
                </h2>
                
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Kelish sanasi *
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Ketish sanasi *
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                        min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Mehmonlar soni
                      </label>
                      <select
                        name="guests"
                        value={bookingData.guests}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num} mehmon</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Xonalar soni
                      </label>
                      <select
                        name="rooms"
                        value={bookingData.rooms}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} xona</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Ism *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Ismingiz"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Familiya *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Familiyangiz"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Maxsus so'rovlar
                    </label>
                    <textarea
                      name="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Maxsus ehtiyojlaringiz yoki so'rovlaringiz..."
                    ></textarea>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                        isDark 
                          ? 'bg-gray-700 text-white hover:bg-gray-600' 
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      Orqaga
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Bron qilish
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} sticky top-24`}>
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Bron qilish xulosasi
                </h3>
                
                <div className="space-y-4">
                  <img
                    src={selectedHotelData.image}
                    alt={selectedHotelData.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {selectedHotelData.name}
                    </h4>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{selectedHotelData.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className={`text-sm ml-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedHotelData.rating}
                      </span>
                    </div>
                  </div>
                  
                  {bookingData.checkIn && bookingData.checkOut && (
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Kelish:</span>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{bookingData.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Ketish:</span>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{bookingData.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Kunlar:</span>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{totalDays} kun</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Xonalar:</span>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{bookingData.rooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Mehmonlar:</span>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{bookingData.guests}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {totalPrice > 0 && (
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Umumiy narx:
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          ${totalPrice}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}