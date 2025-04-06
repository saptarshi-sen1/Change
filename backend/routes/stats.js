const express = require('express');
const router = express.Router();
const Device = require('../models/Device');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const deviceCount = await Device.countDocuments();
    const totalRecycled = await User.aggregate([
      { $group: { _id: null, totalRecycled: { $sum: "$eWasteFootprint" } } }
    ]);
    const userParticipation = await User.countDocuments({ eWasteFootprint: { $gt: 0 } });
    
    res.json({
      devices: deviceCount,
      recycled: totalRecycled[0] ? totalRecycled[0].totalRecycled : 0,
      userParticipation
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
