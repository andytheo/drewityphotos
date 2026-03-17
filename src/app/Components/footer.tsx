import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-mark">Drewity Photography</p>
        <p>&copy; {new Date().getFullYear()} Andrew Igbeinkutu. Portraits, headshots, and events.</p>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
