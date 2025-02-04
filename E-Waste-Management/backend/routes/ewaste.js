const express = require("express");
const { addEwaste } = require("../controllers/ewasteController");

const router = express.Router();

// POST - Add E-Waste
router.post("/", addEwaste);

module.exports = router;
