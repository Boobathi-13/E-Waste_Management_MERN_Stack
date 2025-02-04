const Ewaste = require('../models/Ewaste');

// Controller to add new e-waste
const addEwaste = async (req, res) => {
  try {
    const { name, details } = req.body;

    // Validation to check if data exists
    if (!name || !details) {
      return res.status(400).json({ message: "Name and details are required" });
    }

    // Create new e-waste entry
    const newEwaste = new Ewaste({
      name,
      details,
    });

    // Save the e-waste to the database
    await newEwaste.save();
    res.status(201).json({ message: 'E-Waste added successfully', data: newEwaste });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add e-waste', error });
  }
};

module.exports = { addEwaste };
