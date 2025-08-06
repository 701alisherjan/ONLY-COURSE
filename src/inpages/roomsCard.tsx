import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomsCard = ({ isDark }: { isDark: boolean }) => {
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

  const [totalDays, setTotalDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedHotelData = {
    id: 1,
    name: 'Jizzax Hotel',
    image: 'https://via.placeholder.com/600x400',
    location: 'Toshkent, Uzbekistan',
    rating: 4.5,
    price: 500000,
    amenities: {
      cleanliness: 'Yuqori',
      tv: true,
      airConditioner: true,
      kitchen: false,
      wifi: true,
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: name === 'guests' || name === 'rooms' ? parseInt(value) : value
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:3000/bookings', {
        ...bookingData,
        hotelId: selectedHotelData.id,
        totalPrice
      });

      alert('Bron qilish muvaffaqiyatli amalga oshirildi!');
      setBookingData({
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
    } catch (error) {
      console.error('Bron qilishda xatolik:', error);
      alert('Xatolik yuz berdi!');
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const start = new Date(bookingData.checkIn);
      const end = new Date(bookingData.checkOut);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      setTotalDays(days);
      setTotalPrice(days * bookingData.rooms * selectedHotelData.price);
    }
  }, [bookingData]);

  return (
    <div className={`max-w-5xl mx-auto p-6 rounded-lg shadow-lg ${
      isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <h2 className="text-3xl font-bold mb-8 text-center">Xona haqida ma'lumot</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="md:w-1/2">
          <img
            src={selectedHotelData.image}
            alt={selectedHotelData.name}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 space-y-3">
          <h3 className="text-2xl font-semibold">{selectedHotelData.name}</h3>
          <p className="text-sm text-gray-400">{selectedHotelData.location}</p>
          <p className="text-sm">⭐ {selectedHotelData.rating} / 5</p>
          <p className="text-xl font-bold text-green-500">{selectedHotelData.price.toLocaleString()} so'm / kecha</p>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Qulayliklar:</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Tozalik: {selectedHotelData.amenities.cleanliness}</li>
              <li>Televizor: {selectedHotelData.amenities.tv ? 'Bor' : 'Yo‘q'}</li>
              <li>Konditsioner: {selectedHotelData.amenities.airConditioner ? 'Bor' : 'Yo‘q'}</li>
              <li>Oshxona: {selectedHotelData.amenities.kitchen ? 'Bor' : 'Yo‘q'}</li>
              <li>Wi-Fi: {selectedHotelData.amenities.wifi ? 'Bor' : 'Yo‘q'}</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>Kelish sanasi *</label>
            <input
              type="date"
              name="checkIn"
              value={bookingData.checkIn}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label>Ketish sanasi *</label>
            <input
              type="date"
              name="checkOut"
              value={bookingData.checkOut}
              onChange={handleInputChange}
              min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>Ism *</label>
            <input
              type="text"
              name="firstName"
              value={bookingData.firstName}
              onChange={handleInputChange}
              required
              placeholder="Ismingiz"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label>Familiya *</label>
            <input
              type="text"
              name="lastName"
              value={bookingData.lastName}
              onChange={handleInputChange}
              required
              placeholder="Familiyangiz"
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleInputChange}
              required
              placeholder="email@example.com"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label>Telefon *</label>
            <input
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleInputChange}
              required
              placeholder="+998 90 123 45 67"
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label>Maxsus so‘rovlar</label>
          <textarea
            name="specialRequests"
            value={bookingData.specialRequests}
            onChange={handleInputChange}
            rows={4}
            placeholder="Maxsus ehtiyojlaringiz bo‘lsa yozing..."
            className="w-full border rounded px-4 py-2 resize-none"
          />
        </div>

        <div className="text-right font-semibold text-lg">
          Umumiy: {totalDays} kun x {bookingData.rooms} xona x {selectedHotelData.price.toLocaleString()} so‘m ={' '}
          <span className="text-blue-600 dark:text-blue-400">{totalPrice.toLocaleString()} so‘m</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded text-white font-bold transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Yuborilmoqda...' : 'Bron qilish'}
        </button>
      </form>
    </div>
  );
};

export default RoomsCard;
