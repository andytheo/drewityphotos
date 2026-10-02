"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GENRES, PHOTOS } from "./genres";
import styles from "./styles.module.css";
import Lightbox from "./lightbox";
import { featuredPortraitIndexes, portraitSessionPhotos } from "./portrait-session";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function WorkPage() {
  const [activeGallery, setActiveGallery] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const workGalleryPhotos = uniquePhotos.slice(0, 12).map((photo) => ({
    src: photo.src,
    alt: `${photo.genre} photography by Drewity Photography`,
  }));

  const handlePhotoClick = (photos: GalleryImage[], index: number) => {
    setActiveGallery(photos);
    setSelectedIndex(index);
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
        <p className={styles.kicker}>Portfolio</p>
        <h1>Selected work with a refined presentation.</h1>
        <p className={styles.lead}>
          Browse portrait, headshot, and event work with premium delivery.
        </p>
      </header>

      <div className={styles.genreLinks}>
        {GENRES.map((genre) => (
          <Link key={genre.slug} href={`/work/${genre.slug}`} className={styles.genreLink}>
            {genre.name}
          </Link>
        ))}
      </div>

      <div className={styles.grid}>
        {uniquePhotos.slice(0, 12).map((photo, index) => (
          <figure
            key={photo.id}
            className={styles.thumbnail}
            onClick={() => handlePhotoClick(workGalleryPhotos, index)}
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
      </div>

      <section className={styles.portraitSession} aria-labelledby="portrait-session-title">
        <div className={styles.portraitSessionHeader}>
          <div>
            <p className={styles.kicker}>Portraits</p>
            <h2 id="portrait-session-title">A portrait in every frame.</h2>
            <p className={styles.portraitLead}>
              A studio session told through color, movement, and small moments.
            </p>
          </div>
          <p className={styles.sessionCount}>01 / Portrait session</p>
        </div>

        <div className={styles.portraitGrid}>
          {featuredPortraitIndexes.map((photoIndex) => {
            const photo = portraitSessionPhotos[photoIndex];
            return (
              <button
                key={photo.src}
                type="button"
                className={styles.portraitThumbnail}
                onClick={() => handlePhotoClick(portraitSessionPhotos, photoIndex)}
                aria-label={`Open full portrait gallery, starting with: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className={styles.portraitCaption}>View full gallery</span>
              </button>
            );
          })}
        </div>
      </section>

      <Lightbox
        isOpen={activeGallery.length > 0}
        images={activeGallery}
        currentIndex={selectedIndex}
        onSelectImage={setSelectedIndex}
        onClose={() => setActiveGallery([])}
      />
    </main>
  );
}