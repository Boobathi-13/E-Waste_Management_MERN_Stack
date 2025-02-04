const Tracking = require('../models/Tracking');

// Track e-waste status
exports.trackEwaste = async (req, res) => {
  try {
    const tracking = await Tracking.find({ ewasteId: req.params.id });
    res.status(200).json(tracking);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update e-waste status
exports.updateTrackingStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const tracking = await Tracking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(tracking);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
