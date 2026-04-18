const express = require('express');
const router = express.Router();
const places = require('../data/places');

// GET all places
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: places.length,
    data: places.map(p => ({
      id: p.id,
      name: p.name,
      shortDescription: p.shortDescription,
      image: p.image,
      distance: p.distance,
      category: p.category,
      rating: p.rating
    }))
  });
});

// GET single place by ID
router.get('/:id', (req, res) => {
  const place = places.find(p => p.id === parseInt(req.params.id));
  if (!place) {
    return res.status(404).json({ success: false, message: 'Place not found' });
  }
  res.json({ success: true, data: place });
});

module.exports = router;
