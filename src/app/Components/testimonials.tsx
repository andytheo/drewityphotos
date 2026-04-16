const testimonials = [
  {
    name: "Ranti S.",
    rating: 5,
    text: "Thank you for making my day, you were such a joy to work with!",
  },
  {
    name: "Ola",
    rating: 5,
    text: "He did a great job with taking the pictures for my mum's birthday. Arrived early, took great pictures & videos and we received them fairly quickly.",
  },
  {
    name: "Leonard S.",
    rating: 5,
    text: "We had a great experience with Drewity Photography. Very professional, easy to work with, and our wedding photos came out beautiful. Highly recommend!!",
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
            <p className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
              {"★".repeat(testimonial.rating)}
            </p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
          </article>
        ))}
      </div>
    </section>
  );
}
