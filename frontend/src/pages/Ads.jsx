import { useState, useEffect } from 'react';
import axios from 'axios';

function Ads() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/api/ads', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => setAds(res.data))
            .catch(err => console.error(err));
    }, []);
    

    return (
        <div>
            {ads.map(ad => (
                <div key={ad._id}>
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p>{ad.category}</p>
                    <p>{ad.price} €</p>
                    <p><i>Par : {ad.author?.username || 'Inconnu'}</i></p> {/* Voilà l'auteur */}
                </div>
            ))}
        </div>
    );
}

export default Ads;
