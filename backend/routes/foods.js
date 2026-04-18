const express = require('express');
const router = express.Router();
const foods = require('../data/foods');

// GET all foods
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: foods.length,
    data: foods
  });
});

module.exports = router;
