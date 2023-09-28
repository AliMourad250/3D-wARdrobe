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

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'],
        required: true,
    },

    path: {
        type: String,
        required: true,
    },
    thumbnailPath: {
        type: String,
    }
});
const Clothing = mongoose.model('clothings', clothingSchema);

module.exports = Clothing;