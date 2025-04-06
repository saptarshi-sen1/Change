const express = require('express');
const router = express.Router();

router.get('/facilities', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const facilities = [
      { name: 'RecycleTech', address: '123 E-Waste St, City', distance: 5 },
      // ... more facilities
    ];
    res.json(facilities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching facilities' });
  }
});

module.exports = router;