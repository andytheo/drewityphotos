"use client";


// src/components/Portfolio.js
import React, { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/andrew3.jpg", category: "Portraits", alt: "Portrait 1" },
  { src: "/images/greg3.jpg", category: "Portraits", alt: "Portrait 2" },
  { src: "/images/grace.jpg", category: "Events", alt: "Event 1" },
  { src: "/images/uti.jpg", category: "Events", alt: "Event 2" },
  // Add more as needed
];

const categories = ["All", "Portraits", "Events"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalPhoto, setModalPhoto] = useState<string | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-text">Portfolio</h2>

      {/* Category Filters */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="portfolio-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.src} className="portfolio-item">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={250}
              height={333}
              onClick={() => setModalPhoto(photo.src)}
              style={{ cursor: 'pointer', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPhoto && (
        <div className="modal" onClick={() => setModalPhoto(null)}>
          <Image src={modalPhoto} alt="Enlarged view" width={800} height={1066} style={{ objectFit: 'contain' }} />
        </div>
      )}
    </section>
  );
}
