// src/components/AboutMe.js
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Photos */}
        <div className="about-photos">
          <Image
            src="/images/andrew2.jpg"
            alt="Behind the camera"
            width={250}
            height={333}
            sizes="(max-width: 640px) 72vw, (max-width: 900px) 42vw, 250px"
          />
          <Image
            src="/images/andrew1.jpg"
            alt="Capturing a moment"
            width={250}
            height={333}
            sizes="(max-width: 640px) 72vw, (max-width: 900px) 42vw, 250px"
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hey, I’m Andrew. I’m passionate about capturing authentic moments
            through my lens – from portraits to events, and everything in
            between. Photography, for me, is more than a job – it’s storytelling.
          </p>
          <p>
            My goal is to make every session comfortable and fun, while creating
            images you’ll treasure for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}
