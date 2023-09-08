const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.vhqopmj.mongodb.net/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error: ', error);
});

db.once('open', () => {
    console.log("Connected to MongoDB!");
});

module.exports = db;