const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/addToWishlist', userController.addToUserWishlist);

router.post('/getTokenAndRole', userController.getTokenAndRole);
router.post('/setPaths/:email', userController.setPaths)

router.use('/home', auth.verifyUserToken);

module.exports = router;