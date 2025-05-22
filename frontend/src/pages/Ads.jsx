import { useState, useEffect } from 'react';
import axios from 'axios';

function Ads() {
    const [ads, setAds] = useState([]);

    const fetchAds = () => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/api/ads', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => setAds(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAds();
    }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/api/ads/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAds(ads.filter(ad => ad._id !== id));
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la suppression");
        }
    };

    return (
        <div>
            {ads.map(ad => (
                <div key={ad._id}>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p>{ad.category}</p>
                    <p>{ad.price} €</p>
                    <p><i>Par : {ad.author?.username || 'Inconnu'}</i></p>
                    <button onClick={() => handleDelete(ad._id)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
}

export default Ads;
