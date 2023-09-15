const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
    const { userId, clothingId } = req.body;
    try {
        const wishlistItem = new Wishlist({ userId, clothingId });
        await wishlistItem.save();
        res.status(200).json({ success: true, message: "Item Added To Wihslist!" });
    } catch (error) {
        console.error("Wishlist error: ", error.message)
        res.status(400).json({ success: false, message: error.message })
    }
}

exports.removeFromWishlist = async (req, res) => {
    try {

    } catch (error) {

    }
}

