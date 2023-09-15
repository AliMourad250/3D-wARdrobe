const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/addToWishlist/:userId', userController.addToUserWishlist)

router.use('/home', auth.verifyUserToken);

module.exports = router;