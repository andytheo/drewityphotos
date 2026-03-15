import type { Metadata } from "next";
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
};

type PackageGroup = {
  id: string;
  title: string;
  subtitle: string;
  packages: Package[];
  note?: string;
};

const packageGroups: PackageGroup[] = [
  {
    id: "family-portraits",
    title: "Family & Portraits",
    subtitle: "Ideal for families, couples, personal branding, or studio portraits.",
    packages: [
      {
        name: "Mini",
        price: "$200",
        duration: "20 min",
        deliverables: "5 edited images",
      },
      {
        name: "Standard",
        price: "$300",
        duration: "60 min",
        deliverables: "15 edited images",
      },
      {
        name: "Extended",
        price: "$450",
        duration: "2 hours",
        deliverables: "30 edited images",
      },
    ],
    note: "Extended package includes additional image selection flexibility.",
  },
  {
    id: "headshots",
    title: "Headshots",
    subtitle:
      "Perfect for LinkedIn, corporate profiles, actors, or professionals needing multiple looks.",
    packages: [
      {
        name: "Quick Look",
        price: "$155",
        duration: "20 min",
        deliverables: "2 fully retouched headshots",
      },
      {
        name: "Portfolio",
        price: "$275",
        duration: "45 min",
        deliverables: "6 fully retouched headshots",
      },
    ],
    note: "Includes posing and expression coaching.",
  },
  {
    id: "event-photography",
    title: "Event Photography",
    subtitle: "Ideal for birthdays and ceremonies (weddings not included).",
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
        deliverables: "Approx. 120-180 color-corrected images",
      },
      {
        name: "Full-Day",
        price: "$900",
        duration: "8 hours",
        deliverables: "Approx. 250-300 color-corrected images",
      },
    ],
    note: "Optional add-ons:\nExtra hour $100\nPhoto album $200-$350\nExpress delivery $60-$100",
  },
];

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Drewity Photography</p>
        <h1>Packages & Pricing</h1>
        <p className={styles.lead}>
          Transparent pricing for portraits, headshots, and events. Choose the package
          that fits your session goals.
        </p>
      </section>

      <section className={styles.grid}>
        {packageGroups.map((group) => (
          <article key={group.id} className={styles.card}>
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
                </div>
              ))}
            </div>

            {group.note ? <p className={styles.note}>{group.note}</p> : null}
          </article>
        ))}
      </section>

      <section className={styles.payment}>
        <h2>Payment Method</h2>
        <p>
          Interac e-transfer: <a href="mailto:hello@drewityphotos.ca">hello@drewityphotos.ca</a>
        </p>
      </section>
    </main>
  );
}
