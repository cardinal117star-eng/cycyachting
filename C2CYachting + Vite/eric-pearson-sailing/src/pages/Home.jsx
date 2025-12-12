import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Header />

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(./src/assets/LargeYacht.jpg)`,
        }}
      >
        <div className="hero-content container active">
          <p className="hero-text">Welcome Aboard</p>
          <h1>
            Learn To Sail With <br />
            <span className="text-highlight">Eric Pearson</span>
          </h1>
          <a href="#contact" className="btn secondary">
            Book Your Lesson
          </a>
          <a
            href="#course-details"
            className="btn secondary"
            style={{ marginLeft: "20px" }}
          >
            Chart Your Voyage
          </a>
        </div>
      </section>

      {/* All other sections: intro, services, slider, testimonials, contact */}
      {/* Just copy from your original index.html — all classes remain the same */}

      <ImageSlider />
      <TestimonialSlider />

      <Footer />
    </>
  );
}
