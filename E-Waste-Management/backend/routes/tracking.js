const express = require('express');
const router = express.Router();
const { trackEwaste, updateTrackingStatus } = require('../controllers/trackingController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:id', authMiddleware, trackEwaste);
router.put('/:id', authMiddleware, updateTrackingStatus);

module.exports = router;
