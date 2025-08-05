import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { RootState } from '../store';
import { useTranslation } from '../hooks/useTranslation';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data/hotels';

export default function Rooms() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredHotels = hotels.filter(hotel => {
    const priceMatch = priceFilter === 'all' || 
      (priceFilter === 'low' && hotel.price < 100) ||
      (priceFilter === 'mid' && hotel.price >= 100 && hotel.price < 150) ||
      (priceFilter === 'high' && hotel.price >= 150);
    
    const ratingMatch = ratingFilter === 'all' ||
      (ratingFilter === 'high' && hotel.rating >= 4.7) ||
      (ratingFilter === 'mid' && hotel.rating >= 4.5 && hotel.rating < 4.7) ||
      (ratingFilter === 'low' && hotel.rating < 4.5);

    return priceMatch && ratingMatch;
  });

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('nav.rooms')}
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Sizning ehtiyojlaringizga mos keladigan ideal mehmonxonani toping
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {filteredHotels.length} ta mehmonxona topildi
            </h3>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              <SlidersHorizontal size={20} />
              <span>Filtrlar</span>
            </button>
          </div>

          {isFilterOpen && (
            <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Narx bo'yicha filtr
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'Barchasi' },
                      { value: 'low', label: '$100 gacha' },
                      { value: 'mid', label: '$100 - $150' },
                      { value: 'high', label: '$150 dan yuqori' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          value={option.value}
                          checked={priceFilter === option.value}
                          onChange={(e) => setPriceFilter(e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Reyting bo'yicha filtr
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'Barchasi' },
                      { value: 'high', label: '4.7+ yulduz' },
                      { value: 'mid', label: '4.5 - 4.7 yulduz' },
                      { value: 'low', label: '4.5 gacha yulduz' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value={option.value}
                          checked={ratingFilter === option.value}
                          onChange={(e) => setRatingFilter(e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-16">
            <Filter className={`w-24 h-24 mx-auto mb-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mehmonxona topilmadi
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Filtrlarni o'zgartirib ko'ring yoki boshqatdan urinib ko'ring
            </p>
          </div>
        )}
      </div>
    </div>
  );
}