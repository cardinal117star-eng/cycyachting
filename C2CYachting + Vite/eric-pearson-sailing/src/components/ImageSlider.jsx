import { useState, useEffect } from 'react';

const slides = [
  { img: "src\assets\aerial-view-tranquil-turquoise-waters.png", title: "Beginner Sailing", text: "From never-sailed to confident helm in a weekend." },
  { img: "base-yacht.jpg", title: "Advanced Yacht Handling", text: "Precision docking, heavy-weather sailing and spinnaker mastery." },
  { img: "yach-on-ocean.jpg", title: "Private Charters", text: "Exclusive coaching days or pure relaxation on the water." },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="slide-item" key={i}>
            <img src={slides.img} alt={slide.title} />
            <div className="slide-caption">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Previous">‹</button>
        <button onClick={() => setIndex((index + 1) % slides.length)} aria-label="Next">›</button>
      </div>
    </div>
  );
}