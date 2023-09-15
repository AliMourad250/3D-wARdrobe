const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    try {

        const newAdmin = new Admin({ email, password: hashedPassword });
        await newAdmin.save();
        res.status(200).json({ success: true, message: "Admin Registered successfully!" });
    } catch (error) {
        console.error("Admin Registration Error:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        const token = jwt.sign({ id: admin.id, role: admin }, process.env.JWT_SECRET_ADMIN, {
            expiresIn: 86400,
        });
        res.json({ success: true, token });

    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}
