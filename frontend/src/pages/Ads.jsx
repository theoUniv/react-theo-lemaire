import { useState, useEffect } from 'react';
import axios from 'axios';

function Ads() {
    const [ads, setAds] = useState([]);
    const [editingAdId, setEditingAdId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: ''
    });

    const fetchAds = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/ads', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setAds(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => { fetchAds(); }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/api/ads/user/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAds(ads.filter(ad => ad._id !== id));
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la suppression");
        }
    };

    const handleEdit = (ad) => {
        setEditingAdId(ad._id);
        setFormData({
            title: ad.title,
            description: ad.description,
            category: ad.category,
            price: ad.price
        });
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.put(`http://localhost:8080/api/ads/user/${editingAdId}`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEditingAdId(null);
            fetchAds();
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la mise à jour");
        }
    };

    return (
        <div>
            {ads.map(ad => (
                <div key={ad._id}>
                    {editingAdId === ad._id ? (
                        <>
                            <input name="title" value={formData.title} onChange={handleChange} />
                            <input name="description" value={formData.description} onChange={handleChange} />
                            <input name="category" value={formData.category} onChange={handleChange} />
                            <input name="price" value={formData.price} onChange={handleChange} />
                            <button onClick={handleUpdate}>Sauvegarder</button>
                            <button onClick={() => setEditingAdId(null)}>Annuler</button>
                        </>
                    ) : (
                        <>
                            <h3>{ad.title}</h3>
                            <p>{ad.description}</p>
                            <p>{ad.category}</p>
                            <p>{ad.price} €</p>
                            <p><i>Par : {ad.author?.username || 'Inconnu'}</i></p>
                            <button onClick={() => handleDelete(ad._id)}>Supprimer</button>
                            <button onClick={() => handleEdit(ad)}>Modifier</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Ads;
