const Admin = require('../models/Admin');
const bcryptjs = require('bcryptjs');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminEmail = await Admin.findOne({ email });

    } catch {

    }
}

exports.signup = async (req, res) => {
    try {

    } catch (err) {
        res.json({ error: err.message });
    }
}