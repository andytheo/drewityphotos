// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Optional separator line */}
        <hr className="hr-center" />

        {/* Footer text */}
        <p>&copy; {new Date().getFullYear()} Andrew Igbeinkutu. All rights reserved.</p>

        {/* Footer links */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
