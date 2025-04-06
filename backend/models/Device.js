const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Device name is required'],
  },
  type: {
    type: String,
    required: [true, 'Device type is required'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'recycled'],
    required: [true, 'Device status is required'],
  },
});

module.exports = mongoose.model('Device', deviceSchema);