const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT'); // Middleware for JWT authentication
const Device = require('../models/Device');

router.use(authenticateJWT); // Protect all routes in this file

// Add a new device
router.post('/add', async (req, res) => {
  try {
    const { name, type, status } = req.body;

    // Validate input
    if (!name || !type || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newDevice = new Device({ name, type, status });
    const savedDevice = await newDevice.save();
    res.status(201).json(savedDevice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add device' });
  }
});

// Get all devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch devices' });
  }
});

module.exports = router;