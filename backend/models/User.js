const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  eWasteFootprint: { type: Number, default: 0 }, // Track e-waste in kg
  rewardsPoints: { type: Number, default: 0 },   // For recycling rewards
});

module.exports = mongoose.model('User', UserSchema);