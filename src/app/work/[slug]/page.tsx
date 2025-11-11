"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getPhotosByGenre, getGenre } from "../genres";
import Lightbox from "../lightbox";
import styles from "../styles.module.css";

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const genre = getGenre(slug);
  const photos = getPhotosByGenre(slug);
  
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");

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

  return (
    <main className={styles.container}>
      <Link href="/work" className={styles.backLink}>← Back to gallery</Link>
      
      <header className={styles.header}>
        <h1>{genre.name}</h1>
        <p className={styles.lead}>{genre.description}</p>
      </header>

      <div className={styles.grid}>
        {photos.map((photo) => (
          <figure
            key={photo.id}
            className={styles.thumbnail}
            onClick={() => handlePhotoClick(photo.src)}
          >
            <img src={photo.thumb} alt={photo.genre} />
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
