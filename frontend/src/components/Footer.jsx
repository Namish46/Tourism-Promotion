import React from 'react';
import '../styles/sections.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon" style={{ width: 42, height: 42, background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏛️</div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>Mysuru Tourism Explorer</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold-light)', letterSpacing: '2px', textTransform: 'uppercase' }}>Karnataka • India</div>
              </div>
            </div>
            <p>
              Your definitive guide to exploring the royal heritage, sacred temples, breathtaking nature, 
              and vibrant culture of Mysuru — the City of Palaces.
            </p>
            <div className="social-links">
              {[
                { icon: 'fa-facebook-f', href: '#' },
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-twitter', href: '#' },
                { icon: 'fa-youtube', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-link">
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              {[
                ['home', 'Home'],
                ['places', 'Tourist Places'],
                ['foods', 'Local Cuisine'],
                ['gallery', 'Photo Gallery'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                    <i className="fas fa-chevron-right" style={{ fontSize: '0.65rem' }}></i>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Places */}
          <div>
            <h4 className="footer-heading">Top Places</h4>
            <ul className="footer-links">
              {['Mysuru Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Bandipur Park', 'Coorg'].map((place) => (
                <li key={place}>
                  <a href="#places" onClick={(e) => { e.preventDefault(); scrollTo('places'); }}>
                    <i className="fas fa-map-marker-alt" style={{ fontSize: '0.65rem', color: 'var(--gold)' }}></i>
                    {place}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Mysuru, Karnataka 570001, India</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 821 242 5943</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <span>explore@mysurutourism.in</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-clock"></i>
              <span>Tourist Help: Mon–Sat, 9 AM–6 PM</span>
            </div>

            <div style={{
              marginTop: '1.25rem',
              padding: '0.85rem 1.1rem',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '10px',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6
            }}>
              <i className="fas fa-crown" style={{ color: 'var(--gold)', marginRight: '0.4rem' }}></i>
              <strong style={{ color: 'var(--gold-light)' }}>Visit Mysuru!</strong><br />
              Experience the magic of India's most regal city — where every street tells a story of kings and culture.
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2025 Mysuru Tourism Explorer. All rights reserved.</div>
          <div className="footer-bottom-right">
            Made with <span>♥</span> for Mysuru • Academic Project
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
