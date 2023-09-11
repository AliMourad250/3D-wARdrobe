const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    size: {
        type: String,
        required: true,
    },

    path: {
        type: String,
        // required: true,
    },
    thumbnailPath: {
        type: String,
        // required: true,
    }
});
const Clothing = mongoose.model('clothings', clothingSchema);

module.exports = Clothing;