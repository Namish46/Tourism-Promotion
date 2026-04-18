import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/sections.css';

const FoodsSection = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/foods')
      .then(res => { setFoods(res.data.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="foods-section" id="foods">
      <div className="section-header">
        <span className="section-label">✦ Taste ✦</span>
        <h2 className="section-title">Famous Local Cuisine</h2>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line right"></div>
        </div>
        <p className="section-subtitle">
          Mysuru's culinary heritage is as rich as its royal legacy. Savour these
          iconic dishes that have delighted generations of food lovers.
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading delicious foods...</p>
        </div>
      ) : (
        <div className="foods-grid">
          {foods.map((food) => (
            <div className="food-card" key={food.id}>
              <div className="food-card-image">
                <img src={food.image} alt={food.name} loading="lazy" />
              </div>
              <div className="food-card-body">
                <h3 className="food-card-name">{food.name}</h3>
                <p className="food-card-desc">{food.description}</p>
                <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--off-white)' }}>
                  <div className="food-card-meta" style={{ marginBottom: '0.35rem' }}>
                    <i className="fas fa-seedling"></i>
                    <span style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.8rem' }}>Ingredients: </span>
                    <span style={{ fontSize: '0.8rem' }}>{food.ingredients}</span>
                  </div>
                  <div className="food-card-meta">
                    <i className="fas fa-utensils"></i>
                    <span style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '0.8rem' }}>Try at: </span>
                    <span style={{ fontSize: '0.8rem' }}>{food.mustTryAt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FoodsSection;
