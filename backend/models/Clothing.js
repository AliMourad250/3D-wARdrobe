const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    name: String,
    path: String,
});


module.exports = mongoose.model('Clothing', clothingSchema);