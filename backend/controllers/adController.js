import Ad from '../models/Ad.js';

export const getAds = async (req, res) => {
    const ads = await Ad.find().populate('author', 'username');
    res.json(ads);
};

export const createAd = async (req, res) => {
    const { title, description, category, price } = req.body;
    const author = req.userId;


    try {
        const newAd = new Ad({ title, description, category, price, author });
        await newAd.save();
        res.status(201).json(newAd);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteAd = async (req, res) => {
    try {
        await Ad.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ad deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};