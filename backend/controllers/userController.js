const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(passsword);
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).json({ success: true, message: "User Registered successfully!" })
    } catch (error) {
        console.error("User Registration Error:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }
    } catch (error) {
        console.error("Login Error: ", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
}