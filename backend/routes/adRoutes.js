const express = require("express");
const { createAd, getAds, deleteAd } = require('../controllers/adController.js');
const { authenticate } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/create', authenticate, createAd);
router.get('/', authenticate, getAds);
router.delete('/user/:id', authenticate, deleteAd);

module.exports = router;