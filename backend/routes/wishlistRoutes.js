const express = require('express');
const wishlistController = require('../controllers/wishlistController');

const router = express.Router();

router.post('/addToWishlist', wishlistController.addToWishlist)


module.exports = router;