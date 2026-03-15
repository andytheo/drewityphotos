"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getPhotosByGenre, getGenre } from "../genres";
import Lightbox from "../lightbox";
import styles from "../styles.module.css";

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const genre = getGenre(slug);
  const photos = getPhotosByGenre(slug);
  const uniquePhotos = React.useMemo(() => {
    const seen = new Set<string>();
    return photos.filter((photo) => {
      const key = photo.thumb || photo.src;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [photos]);
  
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");
  const preloaded = React.useRef(new Set<string>());

  if (!genre) {
    return (
      <main className={styles.container}>
        <h1>Genre not found</h1>
        <Link href="/work">← Back to gallery</Link>
      </main>
    );
  }

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
      <Link href="/work" className={styles.backLink}>← Back to gallery</Link>
      
      <header className={styles.header}>
        <h1>{genre.name}</h1>
        <p className={styles.lead}>{genre.description}</p>
      </header>

      <div className={styles.grid}>
        {uniquePhotos.map((photo) => (
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
