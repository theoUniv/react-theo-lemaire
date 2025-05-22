import { useState, useEffect } from 'react';
import axios from 'axios';

function Ads() {
    const [ads, setAds] = useState([]);

    const fetchAds = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:8080/api/ads', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAds(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Tu veux vraiment dégager cette annonce ?')) return;

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/api/ads/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            // Mets à jour la liste sans l'annonce supprimée
            setAds(ads.filter(ad => ad._id !== id));
        } catch (err) {
            console.error(err);
            alert('Erreur lors de la suppression');
        }
    };

    return (
        <div>
            {ads.map(ad => (
                <div key={ad._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p>{ad.category}</p>
                    <p>{ad.price} €</p>
                    <p><b>Auteur :</b> {ad.author?.username || 'Inconnu'}</p>
                    <button onClick={() => handleDelete(ad._id)} style={{ color: 'red' }}>
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Ads;
