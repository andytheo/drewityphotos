// src/components/AboutMe.js
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <p className="section-kicker">About</p>
          <h2>Direction that feels effortless. Photos that are authentic and timeless.</h2>
          <p>
            I photograph people with a calm, guided approach so you never have to
            guess what to do with your hands, your expression, or your body. The goal
            is simple: images that feel elevated without feeling overworked.
          </p>
          <p>
            Whether it&apos;s a portrait session, a personal brand refresh, or coverage for
            an event, I focus on clean composition, flattering light, and true colour so
            the final gallery feels timeless instead of trendy.
          </p>
        </div>
        <div className="about-photo-card">
          <Image
            src="/images/Headshots/2.jpg"
            alt="Professional portrait preview"
            width={520}
            height={640}
            quality={95}
            sizes="(max-width: 900px) 86vw, 40vw"
            style={{ objectPosition: "center 12%" }}
          />
          <div className="about-photo-note">
            <span>Relaxed posing</span>
            <span>Natural retouching</span>
            <span>Clean, warm tones</span>
          </div>
        </div>
      </div>
    </section>
  );
}
