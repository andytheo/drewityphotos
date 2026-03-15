"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GENRES, PHOTOS } from "./genres";
import styles from "./styles.module.css";
import Lightbox from "./lightbox";

export default function WorkPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");
  const preloaded = React.useRef(new Set<string>());

  const uniquePhotos = React.useMemo(() => {
    const seen = new Set<string>();
    return PHOTOS.filter((photo) => {
      const key = photo.thumb || photo.src;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  const handlePhotoClick = (photoSrc: string) => {
    setSelectedImageSrc(photoSrc);
    setSelectedPhoto(photoSrc);
  };

  const preloadPhoto = React.useCallback((photoSrc: string) => {
    if (preloaded.current.has(photoSrc)) return;
    const img = new window.Image();
    img.src = photoSrc;
    preloaded.current.add(photoSrc);
  }, []);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Gallery</h1>
        <p className={styles.lead}>Explore genres and sample works.</p>
      </header>

      <div className={styles.genreLinks}>        
        {GENRES.map((genre) => (
          <Link key={genre.slug} href={`/work/${genre.slug}`} className={styles.genreLink}>
            {genre.name}
          </Link>
        ))}
      </div>

      <div className={styles.grid}>
        {uniquePhotos.slice(0, 12).map((photo) => (
          <figure
            key={photo.id}
            className={styles.thumbnail}
            onClick={() => handlePhotoClick(photo.src)}
            onMouseEnter={() => preloadPhoto(photo.src)}
            onFocus={() => preloadPhoto(photo.src)}
            onTouchStart={() => preloadPhoto(photo.src)}
          >
            <Image
              src={photo.thumb}
              alt={photo.genre}
              width={400}
              height={300}
              sizes="(max-width: 600px) 48vw, (max-width: 900px) 33vw, 250px"
              style={{
                objectFit: "cover",
                objectPosition: "center 15%",
              }}
            />
          </figure>
        ))}
      </div>

      <Lightbox
        isOpen={!!selectedPhoto}
        imageSrc={selectedImageSrc}
        imageAlt="Full size image"
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}