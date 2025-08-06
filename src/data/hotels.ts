export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  amenities: string[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Jizzakh Palace Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Luxury hotel in the heart of Jizzakh with modern amenities and traditional hospitality.',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120,
    rating: 4.8,
    amenities: ['Wi-Fi', 'Spa', 'Restaurant', 'Pool']
  },
  {
    id: 2,
    name: 'Zarafshan Business Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Perfect for business travelers with excellent conference facilities and comfort.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95,
    rating: 4.6,
    amenities: ['Wi-Fi', 'Business Center', 'Restaurant', 'Parking']
  },
  {
    id: 3,
    name: 'Silk Road Resort',
    location: 'Jizzakh, Uzbekistan',
    description: 'Experience the historic Silk Road charm with modern luxury amenities.',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 150,
    rating: 4.9,
    amenities: ['Wi-Fi', 'Spa', 'Pool', 'Restaurant', 'Garden']
  },
  {
    id: 4,
    name: 'Mountain View Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Stunning mountain views with comfortable accommodations and local cuisine.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 85,
    rating: 4.5,
    amenities: ['Wi-Fi', 'Restaurant', 'Balcony', 'Mountain View']
  },
  {
    id: 5,
    name: 'Heritage Boutique Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Boutique hotel celebrating Uzbek heritage with contemporary comfort.',
    image: 'https://images.pexels.com/photos/1775204/pexels-photo-1775204.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 110,
    rating: 4.7,
    amenities: ['Wi-Fi', 'Spa', 'Cultural Tours', 'Restaurant']
  },
  {
    id: 6,
    name: 'Central Plaza Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Located in the city center with easy access to attractions and shopping.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 75,
    rating: 4.4,
    amenities: ['Wi-Fi', 'Restaurant', 'City Center', 'Shopping']
  }
];



export interface Card {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  amenities: string[];
}

export const  cards:  Card[] = [
  {
    id: 1,
    name: 'Jizzakh Palace Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Luxury hotel in the heart of Jizzakh with modern amenities and traditional hospitality.',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120,
    rating: 4.8,
    amenities: ['Wi-Fi', 'Spa', 'Restaurant', 'Pool']
  },
  {
    id: 2,
    name: 'Zarafshan Business Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Perfect for business travelers with excellent conference facilities and comfort.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95,
    rating: 4.6,
    amenities: ['Wi-Fi', 'Business Center', 'Restaurant', 'Parking']
  },
  {
    id: 3,
    name: 'Silk Road Resort',
    location: 'Jizzakh, Uzbekistan',
    description: 'Experience the historic Silk Road charm with modern luxury amenities.',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 150,
    rating: 4.9,
    amenities: ['Wi-Fi', 'Spa', 'Pool', 'Restaurant', 'Garden']
  },
  {
    id: 4,
    name: 'Mountain View Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Stunning mountain views with comfortable accommodations and local cuisine.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 85,
    rating: 4.5,
    amenities: ['Wi-Fi', 'Restaurant', 'Balcony', 'Mountain View']
  },
  {
    id: 5,
    name: 'Heritage Boutique Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Boutique hotel celebrating Uzbek heritage with contemporary comfort.',
    image: 'https://images.pexels.com/photos/1775204/pexels-photo-1775204.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 110,
    rating: 4.7,
    amenities: ['Wi-Fi', 'Spa', 'Cultural Tours', 'Restaurant']
  },
  {
    id: 6,
    name: 'Central Plaza Hotel',
    location: 'Jizzakh, Uzbekistan',
    description: 'Located in the city center with easy access to attractions and shopping.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 75,
    rating: 4.4,
    amenities: ['Wi-Fi', 'Restaurant', 'City Center', 'Shopping']
  }
];