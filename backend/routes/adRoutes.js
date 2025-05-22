const express = require("express");
const { createAd, getAds, deleteAd, updateAd } = require('../controllers/adController.js');
const { authenticate } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/create', authenticate, createAd);
router.get('/', authenticate, getAds);
router.delete('/user/:id', authenticate, deleteAd);
router.put('/user/:id', authenticate, updateAd);


module.exports = router;