const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/places', require('./routes/places'));
app.use('/foods', require('./routes/foods'));
app.use('/gallery', require('./routes/gallery'));

// Root
app.get('/', (req, res) => {
  res.json({
    message: '🏛️ Welcome to Mysuru Tourism Explorer API',
    version: '1.0.0',
    endpoints: {
      places: '/places',
      placeById: '/places/:id',
      foods: '/foods',
      gallery: '/gallery'
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Mysuru Tourism API running on http://localhost:${PORT}`);
});
