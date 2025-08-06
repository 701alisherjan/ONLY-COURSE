import React from 'react';
import { useSelector } from 'react-redux';
import { Star, MapPin, Wifi, Car, Coffee, Waves } from 'lucide-react';
import { RootState } from '../store';
import { Hotel } from '../data/hotels';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wi-fi':
        return <Wifi size={16} />;
      case 'parking':
        return <Car size={16} />;
      case 'restaurant':
        return <Coffee size={16} />;
      case 'pool':
        return <Waves size={16} />;
      default:
        return <Star size={16} />;
    }
  };

  return (
    <Link to={"/cardin"}>
     <div className="group relative w-full h-80 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="text-yellow-400 fill-current" size={18} />
                <span className="text-white font-medium">{hotel.rating}</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-1">{hotel.name}</h3>
              <div className="flex items-center text-white/80">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{hotel.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {hotel.name}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {hotel.description}
              </p>
              
              <div className="mb-4">
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('hotel.amenities')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold text-green-600`}>
                  ${hotel.price}
                  <span className={`text-sm font-normal ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    /kecha
                  </span>
                </span>
              </div>
              
               <Link to={`/cardin`}>
               <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                {t('hotel.bookNow')}
              </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}