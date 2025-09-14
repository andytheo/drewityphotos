"use client";  // 👈 this makes it a Client Component

import React, { useState, useEffect } from "react";
// import "../CSS/testimonials.css";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The photos from my birthday were stunning! Captured every special moment beautifully.",
  },
  {
    name: "James K.",
    text: "Professional and easy to work with. The family shoot exceeded all expectations!",
  },
  {
    name: "Lydia T.",
    text: "Truly talented! I love how natural and candid all my photos turned out.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 sec per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Clients Say</h2>
      <div className="testimonial-slide">
        <p className="testimonial-text">“{testimonials[index].text}”</p>
        <h4 className="testimonial-name">— {testimonials[index].name}</h4>
      </div>
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
