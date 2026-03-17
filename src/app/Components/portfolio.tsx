import Link from "next/link";
import Image from "next/image";

const showcasePhotos = [
  { src: "/images/Portraits/4.jpg", label: "Portraits", alt: "Portrait showcase", position: "center 16%" },
  { src: "/images/Headshots/2.jpg", label: "Headshots", alt: "Headshot showcase", position: "center 14%" },
  { src: "/images/Events/4.jpg", label: "Events", alt: "Event showcase", position: "center 18%" },
  { src: "/images/Portraits/2.jpg", label: "Editorial", alt: "Editorial style portrait", position: "center 14%" },
  { src: "/images/Events/6.jpg", label: "Celebrations", alt: "Celebration event coverage", position: "center 18%" },
  { src: "/images/Headshots/3.jpg", label: "Signature light", alt: "Signature lighting portrait", position: "center 16%" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-intro">
        <p className="section-kicker">Selected work</p>
        <h2 className="portfolio-text">A cleaner, stronger first impression.</h2>
        <p>
          A tighter homepage edit that keeps expressions and faces clear while still
          feeling polished and intentional.
        </p>
      </div>

      <div className="portfolio-grid">
        {showcasePhotos.map((photo) => (
          <figure
            key={photo.src}
            className="portfolio-item"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectPosition: photo.position }}
            />
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="portfolio-actions">
        <Link href="/work" className="hero-primary">
          Explore full gallery
        </Link>
        <Link href="/pricing" className="hero-secondary">
          See pricing
        </Link>
      </div>
    </section>
  );
}