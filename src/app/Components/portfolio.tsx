"use client";


// src/components/Portfolio.js
import React, { useState } from "react";

const photos = [
  { src: "/images/andrew3.jpg", category: "Portraits", alt: "Portrait 1" },
  { src: "/images/greg3.jpg", category: "Portraits", alt: "Portrait 2" },
  { src: "/images/oluikpe1.jpg", category: "Events", alt: "Event 1" },
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
            <img
              src={photo.src}
              alt={photo.alt}
              onClick={() => setModalPhoto(photo.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPhoto && (
        <div className="modal" onClick={() => setModalPhoto(null)}>
          <img src={modalPhoto} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
}
