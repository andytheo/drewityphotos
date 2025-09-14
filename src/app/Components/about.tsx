// src/components/AboutMe.js
export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Photos */}
        <div className="about-photos">
          <img src="/images/andrew2.jpg" alt="Behind the camera" />
          <img src="/images/andrew1.jpg" alt="Capturing a moment" />
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
