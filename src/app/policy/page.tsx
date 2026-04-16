import type { Metadata } from "next";
import Link from "next/link";
import styles from "./policy.module.css";

export const metadata: Metadata = {
  title: "Policies | Drewity Photography",
  description: "Booking, payment, cancellation, and image usage policies for Drewity Photography sessions.",
};

const sections = [
  {
    id: "booking",
    icon: "📅",
    title: "Booking & Retainer",
    items: [
      "A non-refundable 30% retainer is required to secure your session date. Your date is not confirmed until this payment is received.",
      "The remaining balance is due in full on or before the day of your session.",
      "Bookings are accepted on a first-come, first-served basis. Paying the retainer guarantees your spot.",
      "Retainer payments can be made via e-transfer or the payment method agreed upon at booking.",
    ],
  },
  {
    id: "cancellation",
    icon: "🔄",
    title: "Cancellations & Rescheduling",
    items: [
      "Cancellations made more than 72 hours before your session will forfeit the retainer but will not be charged the remaining balance.",
      "Cancellations made within 72 hours of the session will be charged the full session fee.",
      "One complimentary reschedule is allowed with at least 48 hours' notice. A second reschedule may incur a $50 rescheduling fee.",
      "If rescheduled due to a photographer emergency, a full replacement date will be offered at no extra cost.",
    ],
  },
  {
    id: "weather",
    icon: "🌤",
    title: "Weather & Outdoor Sessions",
    items: [
      "Outdoor sessions affected by rain, snow, or extreme weather will be rescheduled at no charge with as much notice as possible.",
      "Overcast and lightly cloudy days are generally ideal for photography and are not considered grounds for rescheduling.",
      "The decision to reschedule due to weather is made jointly by the client and photographer no later than 3 hours before the session.",
    ],
  },
  {
    id: "delivery",
    icon: "🖼",
    title: "Image Delivery",
    items: [
        "Sneak peeks of select images are typically shared within 48 hours of your session on Instagram and/or Instagram Stories. Follow @drewity_photos to see them as soon as they go live!",
      "Edited images are typically delivered within 1–2 weeks of your session via an online gallery.",
      "Rush delivery (within 3 business days) is available for an additional $75.",
      "RAW (unedited) image files are not provided under any circumstances.",
      "The number of delivered images matches the package you booked. Additional edited images can be purchased for $25 each.",
      "Your online gallery remains accessible for 30 days. Download your images promptly.",
    ],
  },
  {
    id: "copyright",
    icon: "©",
    title: "Copyright & Usage Rights",
    items: [
      "All photographs remain the intellectual property of Drewity Photography. The photographer retains full copyright.",
      "Clients receive a personal-use licence for all delivered images — printing, sharing, and using them for non-commercial purposes is fully permitted.",
      "Commercial use (advertising, resale, brand campaigns) requires a separate commercial licence. Please enquire for pricing.",
      "Images may not be filtered, edited, or altered in a way that misrepresents the photographer's work before sharing them publicly.",
    ],
  },
  {
    id: "social",
    icon: "📱",
    title: "Social Media & Portfolio",
    items: [
      "Drewity Photography reserves the right to use session images for portfolio, website, and social media promotion.",
      "Clients who prefer their images remain private may request this in writing before the session. This is honoured without question.",
      "If you share your images publicly on Instagram, please feel free to tag Drewity Photography @drewity_photos.",
      "Edited images shared on social media should not have the editing style significantly altered (e.g. heavy filters that distort colour).",
    ],
  },
  {
    id: "conduct",
    icon: "🤝",
    title: "Session Conduct",
    items: [
      "Please arrive on time. Sessions start at the scheduled time regardless of late arrival.",
      "Children and additional guests are welcome but must be supervised at all times.",
      "The photographer reserves the right to end a session early if conduct is inappropriate or unsafe, without a refund.",
      "If you are unwell on the day of your session, please contact us as early as possible to reschedule.",
    ],
  },
];

const instagramHandle = "@drewity_photos";
const instagramUrl = "https://www.instagram.com/drewity_photos/";

function renderPolicyItem(item: string) {
  if (!item.includes(instagramHandle)) {
    return item;
  }

  const [before, after] = item.split(instagramHandle);

  return (
    <>
      {before}
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
        {instagramHandle}
      </a>
      {after}
    </>
  );
}

export default function PolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.kicker}>Policies</p>
        <h1>Clear expectations.<br />No surprises.</h1>
        <p className={styles.lead}>
          Everything you need to know about booking, payments, image delivery,
          and your rights as a client. If something isn&apos;t covered here,
          just <Link href="/#contact" className={styles.inlineLink}>reach out</Link>.
        </p>
      </div>

      <div className={styles.grid}>
        {sections.map((s) => (
          <section key={s.id} className={styles.card} id={s.id}>
            <div className={styles.cardHeader}>
              <span className={styles.icon} aria-hidden="true">{s.icon}</span>
              <h2>{s.title}</h2>
            </div>
            <ul className={styles.list}>
              {s.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span className={styles.itemText}>{renderPolicyItem(item)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className={styles.cta}>
        <p>Ready to book or have a question about these policies?</p>
        <Link href="/#contact" className={styles.ctaButton}>Get in touch</Link>
      </div>
    </main>
  );
}
