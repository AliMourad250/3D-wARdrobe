const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    token: {
        type: String,
    },

    role: {
        type: String,
        enum: ['user'],
        default: 'user',
    },
});

const User = mongoose.model('users', userSchema);

module.exports = User;