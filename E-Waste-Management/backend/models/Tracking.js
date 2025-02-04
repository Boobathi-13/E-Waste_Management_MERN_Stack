const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ewasteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ewaste', required: true },
  status: { type: String, default: 'Pending' }, // 'Pending', 'Processed', 'Recycled'
  timestamp: { type: Date, default: Date.now },
});

const Tracking = mongoose.model('Tracking', trackingSchema);

module.exports = Tracking;
