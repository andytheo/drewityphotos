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

  const handlePhotoClick = (photoSrc: string) => {
    setSelectedImageSrc(photoSrc);
    setSelectedPhoto(photoSrc);
  };

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
        {PHOTOS.slice(0, 12).map((photo) => (
          <figure
            key={photo.id}
            className={styles.thumbnail}
            onClick={() => handlePhotoClick(photo.src)}
          >
            <Image src={photo.thumb} alt={photo.genre} width={400} height={300} />
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