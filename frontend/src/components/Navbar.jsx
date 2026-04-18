import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => scrollTo('home')}>
            <div className="logo-icon">🏛️</div>
            <div className="logo-text">
              <span className="logo-name">Mysuru Explorer</span>
              <span className="logo-tagline">Karnataka • India</span>
            </div>
          </div>

          <ul className="navbar-links">
            {[
              ['home', 'Home'],
              ['places', 'Places'],
              ['foods', 'Foods'],
              ['gallery', 'Gallery'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button className="navbar-cta" onClick={() => scrollTo('places')}>
            <i className="fas fa-map-marked-alt"></i>
            Plan Your Trip
          </button>

          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        {[['home','Home'],['places','Places'],['foods','Foods'],['gallery','Gallery'],['contact','Contact']].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
