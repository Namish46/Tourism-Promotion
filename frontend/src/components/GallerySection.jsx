import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/sections.css';

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    axios.get('/gallery')
      .then(res => { setGallery(res.data.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-header">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>✦ Gallery ✦</span>
        <h2 className="section-title">Visual Journey Through Mysuru</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line right"></div>
        </div>
        <p className="section-subtitle">
          A curated collection of Mysuru's most breathtaking moments — from golden palaces to emerald forests.
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text" style={{ color: 'rgba(255,255,255,0.6)' }}>Loading gallery...</p>
        </div>
      ) : (
        <div className="gallery-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {gallery.map((item) => (
            <div className="gallery-item" key={item.id} onClick={() => setLightbox(item)}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <div>
                  <div className="gallery-item-cat">{item.category}</div>
                  <div className="gallery-item-title">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
            zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'pointer', animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.image.replace('w=800', 'w=1200')}
              alt={lightbox.title}
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
            />
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '1.5rem',
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
              padding: '0.75rem 1.25rem', borderRadius: '10px', color: '#fff'
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold-light)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{lightbox.category}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem' }}>{lightbox.title}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '-1rem', right: '-1rem',
                width: '40px', height: '40px', background: 'var(--gold)',
                border: 'none', borderRadius: '50%', color: '#fff',
                fontSize: '1rem', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
