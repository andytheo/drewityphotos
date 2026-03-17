import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing | Drewity Photos",
  description: "Photography packages for families, portraits, headshots, and events.",
};

type Package = {
  name: string;
  price: string;
  duration: string;
  deliverables: string;
  numberOfOutfits?: string;
};

type PackageGroup = {
  id: string;
  title: string;
  subtitle: string;
  packages: Package[];
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  note?: string;
};

const packageGroups: PackageGroup[] = [
  {
    id: "family-portraits",
    title: "Family & Portraits",
    subtitle: "Ideal for families, couples, personal branding, or studio portraits.",
    image: 
      { src: "/images/Portraits/1.jpg", alt: "Family and portraits package preview", position: "center 15%" },
    packages: [
      {
        name: "Mini",
        price: "$200",
        duration: "30 min",
        deliverables: "5 edited images",
        numberOfOutfits: "1",
      },
      {
        name: "Standard",
        price: "$300",
        duration: "60 min",
        deliverables: "10 edited images",
        numberOfOutfits: "3 max",
      },
      {
        name: "Extended",
        price: "$450",
        duration: "2 hours",
        deliverables: "20 edited images",
        numberOfOutfits: "5 max",
      },
    ],
    note: "Extended package includes additional image selection flexibility.",
  },
  {
    id: "headshots",
    title: "Headshots",
    subtitle:
      "Perfect for LinkedIn, corporate profiles, actors, or professionals needing multiple looks.",
    image:
      { src: "/images/Headshots/1.jpg", alt: "Headshot package preview", position: "center 12%" },
    packages: [
      {
        name: "Quick Look",
        price: "$155",
        duration: "20 min",
        deliverables: "3 fully retouched headshots",
        numberOfOutfits: "1",
      },
      {
        name: "Portfolio",
        price: "$275",
        duration: "45 min",
        deliverables: "6 fully retouched headshots",
        numberOfOutfits: "2",
      },
    ],
    note: "Includes posing and expression coaching.",
  },
  {
    id: "event-photography",
    title: "Event Photography",
    subtitle: "Ideal for birthdays and ceremonies (weddings not included).",
    image:
      { src: "/images/Events/8.jpg", alt: "Wedding dancing moment", position: "center 30%" },
    packages: [
      {
        name: "Hourly Coverage",
        price: "$150/hr",
        duration: "2-hour minimum",
        deliverables:
          "Approx. 30-50 color-corrected images per hour + 48-hour sneak peek of 5 images",
      },
      {
        name: "Half-Day",
        price: "$450",
        duration: "4 hours",
        deliverables: "Approx. 70 - 150 color-corrected images",
      },
      {
        name: "Full-Day",
        price: "$900",
        duration: "8 hours",
        deliverables: "Approx. 150-250 color-corrected images",
      },
    ],
    note: "Optional add-ons:\nExtra hour $100\nPhoto album $200-$350\nExpress delivery $60-$100",
  },
];

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Pricing</p>
        <h1>Packages we offer.</h1>
        <p className={styles.lead}>
          Transparent pricing for portraits, headshots, and events, built around guided
          sessions, polished editing, and true-to-life colour.
        </p>
        <div className={styles.heroHighlights}>
          <span>Guided posing</span>
          <span>Natural retouching</span>
          <span>Fast delivery</span>
        </div>
      </section>

      <section className={styles.grid}>
        {packageGroups.map((group) => (
          <article key={group.id} className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                src={group.image.src}
                alt={group.image.alt}
                fill
                quality={95}
                sizes="(max-width: 980px) 100vw, 38vw"
                style={{ objectPosition: group.image.position ?? "center 14%" }}
              />
            </div>

            <div className={styles.cardContent}>
              <header className={styles.cardHeader}>
                <h2>{group.title}</h2>
                <p>{group.subtitle}</p>
              </header>

              <div className={styles.packageList}>
                {group.packages.map((item) => (
                  <div key={item.name} className={styles.packageItem}>
                    <div className={styles.packageTop}>
                      <h3>{item.name}</h3>
                      <p className={styles.price}>{item.price}</p>
                    </div>
                    <p className={styles.meta}>Duration: {item.duration}</p>
                    <p className={styles.meta}>Deliverables: {item.deliverables}</p>
                    {item.numberOfOutfits ? (
                      <p className={styles.meta}>Number of outfits: {item.numberOfOutfits}</p>
                    ) : null}
                    <Link href="/#contact" className={styles.packageButton}>
                      Book {item.name}
                    </Link>
                  </div>
                ))}
              </div>

              {group.note ? <p className={styles.note}>{group.note}</p> : null}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.payment}>
        <h2>Payment Method</h2>
        <p>
          Interac e-transfer: <a href="mailto:hello@drewityphotos.ca">hello@drewityphotos.ca</a>
        </p>
      </section>

      <section className={styles.consultation}>
        <div className={styles.consultationContent}>
          <p className={styles.consultationKicker}>Next step</p>
          <h2>Need help choosing the right package?</h2>
          <p>
            Tell me what you need photographed and I&apos;ll point you to the best fit,
            including timing, coverage, and any useful add-ons.
          </p>
        </div>
        <Link href="/#contact" className={styles.consultationLink}>
          Enquire now
        </Link>
      </section>
    </main>
  );
}
