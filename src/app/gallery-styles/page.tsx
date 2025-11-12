"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { GENRES, PHOTOS } from "./genres";
import Lightbox from "./lightbox";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string>("");

  const handlePhotoClick = (photo: typeof PHOTOS[0]) => {
    setSelectedPhoto(photo.id);
    setSelectedImageSrc(photo.src);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>My Work</h1>
        <p className={styles.lead}>Browse my portfolio by genre. Click any image to view fullscreen.</p>
      </header>

      <div className={styles.genreLinks}>
        {GENRES.map((genre) => (
          <Link key={genre.slug} href={`/work/${genre.slug}`} className={styles.genreLink}>
            {genre.name}
          </Link>
        ))}
      </div>

      <section className={styles.genreGallery}>
        {GENRES.map((genre) => {
          const genrePhotos = PHOTOS.filter((p) => p.genre === genre.slug);
          return (
            <div key={genre.slug} className={styles.genreSection}>
              <div className={styles.genreHeader}>
                <h2>{genre.name}</h2>
                <p>{genre.description}</p>
              </div>
              <div className={styles.grid}>
                {genrePhotos.slice(0, 4).map((photo) => (
                  <figure
                    key={photo.id}
                    className={styles.thumbnail}
                    onClick={() => handlePhotoClick(photo)}
                  >
                    <Image src={photo.thumb} alt={photo.genre} width={400} height={300} />
                  </figure>
                ))}
              </div>
              <Link href={`/work/${genre.slug}`} className={styles.viewMore}>
                View all {genre.name} →
              </Link>
            </div>
          );
        })}
      </section>

      <Lightbox
        isOpen={!!selectedPhoto}
        imageSrc={selectedImageSrc}
        imageAlt="Full size image"
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}
