// server.js
const express = require('express');
const mongoose = require('mongoose');
const Clothing = require('./models/Clothing');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/clothingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Route to store a clothing item in the database
app.post('/api/clothing', async (req, res) => {
    try {
        const { name, path } = req.body;
        const clothing = new Clothing({ name, path });
        await clothing.save((err, savedClothingItem) => {
            if (err) {
                // Handle errors
            } else {
                // Respond with the saved clothing item
                res.json(savedClothingItem);
            }
        });
        res.status(201).json({ message: 'Clothing item saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the clothing item' });
    }
});

// Route to retrieve all clothing items from the database
app.get('/api/clothing', async (req, res) => {
    try {
        const clothingItems = await Clothing.find();
        res.status(200).json(clothingItems);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving clothing items' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
