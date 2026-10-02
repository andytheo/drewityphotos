"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./lightbox.module.css";

interface GalleryImage {
  src: string;
  alt: string;
}

type LightboxProps =
  | {
      isOpen: boolean;
      images: GalleryImage[];
      currentIndex: number;
      onSelectImage: (index: number) => void;
      onClose: () => void;
    }
  | {
      isOpen: boolean;
      imageSrc: string;
      imageAlt: string;
      onClose: () => void;
    };

export default function Lightbox(props: LightboxProps) {
  const { isOpen, onClose } = props;
  const images = "images" in props ? props.images : [{ src: props.imageSrc, alt: props.imageAlt }];
  const currentIndex = "images" in props ? props.currentIndex : 0;
  const onSelectImage = "images" in props ? props.onSelectImage : undefined;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onSelectImage?.((currentIndex - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onSelectImage?.((currentIndex + 1) % images.length);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentIndex, images.length, isOpen, onClose, onSelectImage]);

  if (!isOpen || images.length === 0) return null;

  const image = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Portrait gallery" onClick={(event) => event.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X aria-hidden="true" />
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={2200}
          height={2800}
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
          className={styles.image}
        />
        {images.length > 1 && (
          <>
            <button
              className={`${styles.navigationBtn} ${styles.previousBtn}`}
              onClick={() => onSelectImage?.((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous image"
              title="Previous image"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              className={`${styles.navigationBtn} ${styles.nextBtn}`}
              onClick={() => onSelectImage?.((currentIndex + 1) % images.length)}
              aria-label="Next image"
              title="Next image"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </>
        )}
        <p className={styles.counter} aria-live="polite">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
