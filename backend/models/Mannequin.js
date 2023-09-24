const mongoose = require('mongoose');

const mannequinSchema = new mongoose.Schema({
    bodyShape: {
        type: String,
        required: true,
        unique: true,
    },

    path: {
        type: String,
        required: true,
    },
});

const Mannequin = mongoose.model('mannequins', mannequinSchema);

module.exports = Mannequin;