import React, { useEffect, useState } from 'react';
import '../styles/sections.css';

const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1600100397608-a25bc4e5e2b6?w=1800&q=85';
    img.onload = () => setBgLoaded(true);
  }, []);

  const scrollToPlaces = () => {
    document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = Array.from({ length: 8 }, (_, i) => ({
    left: `${10 + i * 11}%`,
    top: `${20 + (i % 4) * 20}%`,
    delay: `${i * 0.7}s`,
    duration: `${5 + i * 0.5}s`,
  }));

  return (
    <section className="hero" id="home">
      <div className={`hero-bg ${bgLoaded ? 'loaded' : ''}`} />
      <div className="hero-overlay" />

      <div className="hero-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-crown"></i>
          Karnataka's Royal City
        </div>

        <h1 className="hero-title">
          Explore
          <span>Mysuru</span>
        </h1>

        <p className="hero-subtitle">
          Discover the grandeur of royal heritage, sacred temples, cascading waterfalls,
          and the untamed wilderness of Karnataka's most enchanting city.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToPlaces}>
            <i className="fas fa-compass"></i>
            Explore Places
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-images"></i>
            View Gallery
          </button>
        </div>
      </div>

      <div className="hero-stats">
        {[
          { num: '10+', label: 'Attractions' },
          { num: '4.7★', label: 'Avg Rating' },
          { num: '365', label: 'Days Open' },
        ].map((s, i) => (
          <div className="hero-stat" key={i}>
            <span className="hero-stat-num">{s.num}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
