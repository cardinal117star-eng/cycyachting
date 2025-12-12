import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LogoC2C.jpg';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'visible' : ''}`}>
      <div className="container topbar-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Eric Pearson Sailing" className="logo-img" />
        </Link>

        <nav className="nav-links">
          <div className="dropdown">
            <span className="dropdown-toggle">
              About <i className="fas fa-chevron-down"></i>
            </span>
            <div className="dropdown-menu about-dropdown">
              <div className="dropdown-section">
                <h4>Professional Credentials</h4>
                <a href="/documents/Eric Pearson Resume-7.pdf" target="_blank" rel="noopener">Resume (PDF)</a>
                <a href="/documents/MSI COC_EPearson 2025.pdf" target="_blank" rel="noopener">Master Class 1 COC</a>
                <a href="/documents/Eric Pearson tickets.pdf" target="_blank" rel="noopener">Tickets & Ratings</a>
              </div>
              <div className="dropdown-section">
                <h4>References</h4>
                <a href="/documents/MY Kokomo Reference.pdf" target="_blank" rel="noopener">MY Kokomo</a>
                <a href="/documents/SY Happy Days Reference.pdf" target="_blank" rel="noopener">S:Y Happy Days</a>
              </div>
              <div className="dropdown-footer">
                <Link to="/credentials" className="view-all">View All Credentials</Link>
              </div>
            </div>
          </div>

          <Link to="/">Home</Link>
          <Link to="/#course-details">Deliveries</Link>
          <Link to="/#lessons">Tuition</Link>
          <Link to="/#contact">Contact</Link>

          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/#course-details" onClick={() => setMobileOpen(false)}>Deliveries</Link>
          <Link to="/#lessons" onClick={() => setMobileOpen(false)}>Tuition</Link>
          <Link to="/#contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/credentials" onClick={() => setMobileOpen(false)} className="view-all">
            View All Credentials
          </Link>
        </div>
      </div>
    </header>
  );
}