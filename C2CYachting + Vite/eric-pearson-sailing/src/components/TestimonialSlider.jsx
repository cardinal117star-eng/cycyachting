import { useState, useEffect } from 'react';

const testimonials = [
  { text: "Eric's lessons gave me the confidence to take my family cruising...", who: "— Sarah Mills, Perth" },
  { text: "After just a few sessions I was handling our 45ft yacht in 25 knots...", who: "— Tom Reynolds" },
  { text: "Perfect balance of theory and real sea time...", who: "— Maya K." },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonials-box">
      <div className="testimonials-slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <p>"{t.text}"</p>
            <div className="who">{t.who}</div>
          </div>
        ))}
      </div>
      <div className="test-nav">
        <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>Prev</button>
        <button onClick={() => setIndex((index + 1) % testimonials.length)}>Next</button>
      </div>
    </div>
  );
}