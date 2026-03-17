const testimonials = [
  {
    name: "Sarah M.",
    text: "The session felt easy from start to finish, and the final images looked warm, polished, and genuinely flattering.",
  },
  {
    name: "James K.",
    text: "Andrew gave enough direction to make us look confident without making anything feel stiff or over-posed.",
  },
  {
    name: "Lydia T.",
    text: "The colour, the composition, the little candid moments, it all felt much more premium than a typical photo shoot.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <p className="section-kicker">Client notes</p>
        <h2 className="testimonials-title">People remember how the photos made them feel.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
          </article>
        ))}
      </div>
    </section>
  );
}
