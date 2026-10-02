"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getPhotosByGenre, getGenre } from "../genres";
import Lightbox from "../lightbox";
import styles from "../styles.module.css";
import { portraitSessionPhotoCount, portraitSessionPhotos } from "../portrait-session";

const isPortraitGallery = (slug: string) => slug === "portraits";

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const genre = getGenre(slug);
  const photos = getPhotosByGenre(slug);
  const hasPortraitSession = isPortraitGallery(slug);
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

  if (!genre) {
    return (
      <main className={styles.container}>
        <h1>Genre not found</h1>
        <Link href="/work">← Back to gallery</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Link href="/work" className={styles.backLink}>← Back to gallery</Link>
      
      <header className={styles.header}>
        <p className={styles.kicker}>Gallery</p>
        <h1>{genre.name}</h1>
        <p className={styles.lead}>
          {hasPortraitSession
            ? `Browse the portrait collection or open Ife's ${portraitSessionPhotoCount}-photo studio session.`
            : `${genre.description}. ${uniquePhotos.length} curated image${uniquePhotos.length === 1 ? "" : "s"} in this edit.`}
        </p>
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
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 14%",
                }}
              />
            </figure>
          ))}
        {hasPortraitSession && (
          <button
            type="button"
            className={`${styles.thumbnail} ${styles.sessionCard}`}
            onClick={() => {
              setSelectedImageSrc(portraitSessionPhotos[0].src);
              setSelectedPhoto("portrait-session");
            }}
            onMouseEnter={() => preloadPhoto(portraitSessionPhotos[0].src)}
            onFocus={() => preloadPhoto(portraitSessionPhotos[0].src)}
            onTouchStart={() => preloadPhoto(portraitSessionPhotos[0].src)}
            aria-label={`Open Ife's portrait session gallery, ${portraitSessionPhotoCount} photographs`}
          >
            <Image
              src={portraitSessionPhotos[0].src}
              alt={portraitSessionPhotos[0].alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <span className={styles.sessionCardCaption}>
              <span>Ife</span>
              <span>Portrait session · {portraitSessionPhotoCount} photographs</span>
            </span>
          </button>
        )}
      </div>

      <Lightbox
        isOpen={!!selectedPhoto}
        {...(hasPortraitSession
          ? {
              images: portraitSessionPhotos,
              currentIndex: Math.max(0, portraitSessionPhotos.findIndex((photo) => photo.src === selectedImageSrc)),
              onSelectImage: (index: number) => setSelectedImageSrc(portraitSessionPhotos[index].src),
            }
          : {
              imageSrc: selectedImageSrc,
              imageAlt: "Full size image",
            })}
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}
