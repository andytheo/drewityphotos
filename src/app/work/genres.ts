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
    name: "Headshots",
    slug: "headshots",
    description: "Headshot photography",
  },
  {
    name: "Events",
    slug: "events",
    description: "Weddings, parties, and special occasions",
  },
];

// Generate sample photos grouped by genre
// Map real local images to genres. Provide at least a few per genre.
// Portraits
export const PHOTOS: Photo[] = [
  // Portraits: use only files named portrait*.jpg
  { id: 'portraits-1', genre: 'portraits', src: '/images/Portraits/1.jpg', thumb: '/images/Portraits/1.jpg' },
  { id: 'portraits-2', genre: 'portraits', src: '/images/Portraits/2.jpg', thumb: '/images/Portraits/2.jpg' },
  { id: 'portraits-3', genre: 'portraits', src: '/images/Portraits/3.jpg', thumb: '/images/Portraits/3.jpg' },
  { id: 'portraits-4', genre: 'portraits', src: '/images/Portraits/4.jpg', thumb: '/images/Portraits/4.jpg' },
  { id: 'portraits-5', genre: 'portraits', src: '/images/Portraits/5.jpg', thumb: '/images/Portraits/5.jpg' },
  { id: 'portraits-6', genre: 'portraits', src: '/images/Portraits/6.jpg', thumb: '/images/Portraits/6.jpg' },
  { id: 'portraits-7', genre: 'portraits', src: '/images/Portraits/7.jpg', thumb: '/images/Portraits/7.jpg' },
  { id: 'portraits-8', genre: 'portraits', src: '/images/Portraits/DSC_2464.jpg', thumb: '/images/Portraits/DSC_2464.jpg' },
  
  // Events
  { id: 'events-1', genre: 'events', src: '/images/Events/1.jpg', thumb: '/images/Events/1.JPG' },
  { id: 'events-2', genre: 'events', src: '/images/Events/2.jpg', thumb: '/images/Events/2.jpg' },
  { id: 'events-3', genre: 'events', src: '/images/Events/3.jpg', thumb: '/images/Events/3.jpg' },
  { id: 'events-4', genre: 'events', src: '/images/Events/4.jpg', thumb: '/images/Events/4.jpg' },
  { id: 'events-5', genre: 'events', src: '/images/Events/5.jpg', thumb: '/images/Events/5.jpg' },
  { id: 'events-6', genre: 'events', src: '/images/Events/6.jpg', thumb: '/images/Events/6.jpg' },
  { id: 'events-7', genre: 'events', src: '/images/Events/7.jpg', thumb: '/images/Events/7.jpg' },
  { id: 'events-8', genre: 'events', src: '/images/Events/8.jpg', thumb: '/images/Events/8.jpg' },

  // Headshots: use only files named headshot*.jpg
  { id: 'headshots-1', genre: 'headshots', src: '/images/Headshots/1.jpg', thumb: '/images/Headshots/1.jpg' },
  { id: 'headshots-2', genre: 'headshots', src: '/images/Headshots/2.jpg', thumb: '/images/Headshots/2.jpg' },
  { id: 'headshots-3', genre: 'headshots', src: '/images/Headshots/3.jpg', thumb: '/images/Headshots/3.jpg' },
  ];

export const getPhotosByGenre = (genreSlug: string): Photo[] => {
  return PHOTOS.filter((photo) => photo.genre === genreSlug);
};

export const getGenre = (slug: string) => {
  return GENRES.find((g) => g.slug === slug);
};
