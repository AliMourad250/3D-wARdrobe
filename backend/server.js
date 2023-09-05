// server.js
const express = require('express');
const mongoose = require('mongoose');
const Clothing = require('./models/Clothing');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/3d-wARdrobe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Route to store a clothing item in the database
app.post('/api/clothing', async (req, res) => {
    try {
        const newItem = new Clothing({
            name: req.body.name,
            path: req.body.path,
        });

        await newItem.save();
        res.status(200).send('Data saved successfully');
    } catch (err) {
        console.error('Error saving data', err);
        res.status(500).send('Error saving data');
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
