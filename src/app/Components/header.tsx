import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="hero-wrapper">
    <header className="hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Drewity Photography</p>
        <h1>Images that are polished, relaxed and real.</h1>
        <p className="hero-lead">
          Photography that feels natural, soft and timeless.
        </p>
        <div className="hero-actions">
          <Link href="/work" className="hero-primary">
            View my work
          </Link>
          <Link href="/#contact" className="hero-secondary">
            Start your session
          </Link>
        </div>
        <div className="hero-highlights" aria-label="Session highlights">
          <span>Portraits</span>
          <span>Headshots</span>
          <span>Events</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-frame hero-frame-large">
          <Image
            src="/images/Portraits/2.jpg"
            alt="Portrait session highlight"
            fill
            quality={95}
            sizes="(max-width: 900px) 90vw, 32vw"
            style={{ objectPosition: "center 14%" }}
            priority
          />
        </div>
        <div className="hero-frame hero-frame-top">
          <Image
            src="/images/Headshots/1.jpg"
            alt="Headshot session highlight"
            fill
            quality={95}
            sizes="(max-width: 900px) 44vw, 18vw"
            style={{ objectPosition: "center 14%" }}
          />
        </div>
        <div className="hero-frame hero-frame-bottom">
          <Image
            src="/images/Events/6.jpg"
            alt="Event photography highlight"
            fill
            quality={95}
            sizes="(max-width: 900px) 44vw, 18vw"
            style={{ objectPosition: "center 18%" }}
          />
        </div>
      </div>
    </header>
    </section>
  );
};

export default Header;
