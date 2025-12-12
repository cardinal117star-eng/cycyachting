import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Credentials() {
  return (
    <>
      <Header />

      <section
        className="hero"
        style={{ backgroundImage: `url(/src/assets/LargeYacht.jpg)` }}
      >
        <div className="hero-content container active">
          <h1>
            Professional Credentials <br />
            <span className="text-highlight">& References</span>
          </h1>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <h2 className="section-header">Professional Credentials</h2>
          <div className="doc-grid">
            <a
              href="/documents/Eric Pearson Resume-7.pdf"
              target="_blank"
              className="doc-card"
            >
              <img
                src="/src/assets/pdf-icon.png"
                alt="PDF"
                className="doc-icon"
              />
              <h4>Resume</h4>
              <p>Full professional resume (PDF)</p>
              <span className="download-btn">View →</span>
            </a>
            {/* Add other cards... */}
          </div>

          <h2 className="section-header">Works & References</h2>
          <div className="doc-grid">{/* Reference cards */}</div>
        </div>
      </section>

      <Footer />
    </>
  );
}
