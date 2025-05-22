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
    const adId = req.params.id;
    const userId = req.user.id;

    try {
        const ad = await Ad.findById(adId).populate('author');

        if (!ad) {
            return res.status(404).json({ message: 'Annonce introuvable.' });
        }

        // Si l'annonce n'a pas d'auteur ou l'auteur est null → tout le monde peut supprimer
        if (!ad.author || !ad.author._id) {
            await Ad.findByIdAndDelete(adId);
            return res.json({ message: 'Annonce supprimée (sans auteur).' });
        }

        // Sinon, seul l’auteur peut supprimer
        if (ad.author._id.toString() !== userId) {
            return res.status(403).json({ message: 'Pas autorisé à supprimer cette annonce.' });
        }

        await Ad.findByIdAndDelete(adId);
        res.json({ message: 'Annonce supprimée.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur lors de la suppression.' });
    }
};
