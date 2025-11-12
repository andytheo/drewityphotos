export interface Photo {
  id: string;
  src: string;
  thumb: string;
  genre: string;
}

export const GENRES = [
  {
    name: "Portraits",
    slug: "portraits",
    description: "Professional and candid portrait photography",
  },
  {
    name: "Events",
    slug: "events",
    description: "Weddings, parties, and special occasions",
  },
  {
    name: "Street",
    slug: "street",
    description: "Urban and street photography",
  },
];

// Generate sample photos grouped by genre
// Map real local images to genres. Provide at least a few per genre.
// Portraits
export const PHOTOS: Photo[] = [
  // Portraits: use only files named portrait*.jpg
  { id: 'portraits-1', genre: 'portraits', src: '/images/portrait1.jpg', thumb: '/images/portrait1.jpg' },
  { id: 'portraits-2', genre: 'portraits', src: '/images/portrait2.jpg', thumb: '/images/portrait2.jpg' },
  
  // Events
  { id: 'events-3', genre: 'events', src: '/images/owen.jpg', thumb: '/images/owen.jpg' },
  { id: 'events-4', genre: 'events', src: '/images/event2.jpg', thumb: '/images/event2.jpg' },
  { id: 'events-5', genre: 'events', src: '/images/event3.jpg', thumb: '/images/event3.jpg' },
  // Street: use only files named street*.jpg
  { id: 'street-1', genre: 'street', src: '/images/street.jpg', thumb: '/images/street.jpg' },
  { id: 'street-2', genre: 'street', src: '/images/street1.jpg', thumb: '/images/street1.jpg' },
  { id: 'street-3', genre: 'street', src: '/images/street3.jpg', thumb: '/images/street3.jpg' },
  { id: 'street-4', genre: 'street', src: '/images/street4.jpg', thumb: '/images/street4.jpg' },
  { id: 'street-5', genre: 'street', src: '/images/street5.jpg', thumb: '/images/street5.jpg' },
  { id: 'street-6', genre: 'street', src: '/images/street6.jpg', thumb: '/images/street6.jpg' },
];

export const getPhotosByGenre = (genreSlug: string): Photo[] => {
  return PHOTOS.filter((photo) => photo.genre === genreSlug);
};

export const getGenre = (slug: string) => {
  return GENRES.find((g) => g.slug === slug);
};
