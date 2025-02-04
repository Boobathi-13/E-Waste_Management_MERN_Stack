const mongoose = require('mongoose');

const ewasteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Ewaste = mongoose.model('Ewaste', ewasteSchema);

module.exports = Ewaste;
