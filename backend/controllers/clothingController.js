const Clothing = require("../models/Clothing");

exports.create = async (req, res) => {
    const { name, type, size } = req.body;
    const { path } = req.file.path;
    const { thumbnailPath } = req.file.path;

    if (!path || !thumbnailPath) {
        return res.status(400).json({ error: 'Both 3D model and thumbnail image are required.' });
    }

    try {
        const newClothing = await Clothing.create({
            name,
            type,
            size,
            path,
            thumbnailPath
        });

        await newClothing.save();
        res.status(201).json({ newClothing });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.fetchAll = async (req, res) => {

}

exports.filterByType = async (req, res) => {

}

exports.delete = async (req, res) => {

}