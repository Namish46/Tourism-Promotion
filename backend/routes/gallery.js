const express = require('express');
const router = express.Router();
const gallery = require('../data/gallery');

// GET all gallery images
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: gallery.length,
    data: gallery
  });
});

module.exports = router;
