export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
        <div className="footer-brand">
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>
            Eric Pearson Sailing
          </div>
          <p style={{ maxWidth: '360px', opacity: 0.9 }}>
            Private yacht instruction & coaching across Western Australia. Confidence, competence, calm on the water.
          </p>
          <div className="socials" style={{ marginTop: '16px' }}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.9)', textAlign: 'right' }}>
          <div style={{ fontWeight: 700, marginBottom: '8px' }}>Book a lesson</div>
          <div>eric@pearson-sailing.com.au</div>
          <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.7 }}>
            © {new Date().getFullYear()} Eric Pearson Sailing
          </div>
        </div>
      </div>
    </footer>
  );
}