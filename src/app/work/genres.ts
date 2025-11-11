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
    name: "Landscapes",
    slug: "landscapes",
    description: "Nature and landscape photography",
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
export const PHOTOS: Photo[] = [];

GENRES.forEach((genre) => {
  for (let i = 1; i <= 6; i++) {
    PHOTOS.push({
      id: `${genre.slug}-${i}`,
      genre: genre.slug,
      // Use stable seed for Lorem Picsum based on genre and index
      src: `https://picsum.photos/seed/drew-${genre.slug}-${i}/1200/900`,
      thumb: `https://picsum.photos/seed/drew-${genre.slug}-${i}/400/300`,
    });
  }
});

export const getPhotosByGenre = (genreSlug: string): Photo[] => {
  return PHOTOS.filter((photo) => photo.genre === genreSlug);
};

export const getGenre = (slug: string) => {
  return GENRES.find((g) => g.slug === slug);
};
