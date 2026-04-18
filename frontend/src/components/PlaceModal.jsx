import React, { useEffect } from 'react';
import '../styles/sections.css';

const PlaceModal = ({ place, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!place) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div className="modal-image">
          <img src={place.image} alt={place.name} />
          <div className="modal-image-overlay" />
          <h2 className="modal-image-title">{place.name}</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">{place.description}</p>

          <div className="modal-info-grid">
            {[
              { label: 'Best Time to Visit', value: place.bestTimeToVisit, icon: 'fa-calendar-alt' },
              { label: 'Timings', value: place.timings, icon: 'fa-clock' },
              { label: 'Entry Fee', value: place.entryFee, icon: 'fa-ticket-alt' },
              { label: 'Distance from Mysuru', value: place.distance, icon: 'fa-map-marker-alt' },
            ].map((info, i) => (
              <div className="modal-info-card" key={i}>
                <div className="modal-info-label">
                  <i className={`fas ${info.icon}`}></i> {info.label}
                </div>
                <div className="modal-info-value">{info.value}</div>
              </div>
            ))}
          </div>

          <div className="modal-tips">
            <div className="modal-tips-title">
              <i className="fas fa-lightbulb" style={{ color: 'var(--gold)' }}></i>
              Travel Tips
            </div>
            <p className="modal-tips-text">{place.travelTips}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceModal;
