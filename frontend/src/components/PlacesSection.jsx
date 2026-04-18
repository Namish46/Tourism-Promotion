import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceModal from './PlaceModal';
import '../styles/sections.css';

const PlacesSection = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/places')
      .then(res => {
        setPlaces(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCardClick = async (id) => {
    try {
      const res = await axios.get(`/places/${id}`);
      setSelectedPlace(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="places-section" id="places">
      <div className="section-header">
        <span className="section-label">✦ Explore ✦</span>
        <h2 className="section-title">Top Tourist Places</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line right"></div>
        </div>
        <p className="section-subtitle">
          From royal palaces to wildlife sanctuaries, discover the diverse wonders
          that make Mysuru an extraordinary destination.
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading beautiful places...</p>
        </div>
      ) : (
        <div className="places-grid">
          {places.map((place, index) => (
            <div
              className="place-card"
              key={place.id}
              onClick={() => handleCardClick(place.id)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="place-card-image">
                <img src={place.image} alt={place.name} loading="lazy" />
                <span className="place-card-category">{place.category}</span>
                <span className="place-card-rating">
                  <i className="fas fa-star"></i> {place.rating}
                </span>
              </div>
              <div className="place-card-body">
                <h3 className="place-card-name">{place.name}</h3>
                <p className="place-card-desc">{place.shortDescription}</p>
                <div className="place-card-meta">
                  <span className="place-card-distance">
                    <i className="fas fa-location-dot"></i> {place.distance}
                  </span>
                  <button className="place-card-btn">
                    Explore <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPlace && (
        <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      )}
    </section>
  );
};

export default PlacesSection;
