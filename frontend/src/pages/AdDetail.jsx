import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AdDetail = () => {
    const { id } = useParams();
    const [ad, setAd] = useState(null);

    useEffect(() => {
        const fetchAd = async () => {
            const res = await axios.get(`http://localhost:8080/api/ads`);
            const foundAd = res.data.find(item => item._id === id);
            setAd(foundAd);
        };
        fetchAd();
    }, [id]);

    if (!ad) return <p>Chargement...</p>;

    return (
        <div>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p>{ad.category}</p>
            <p>{ad.price} €</p>
            <p>Posté par: {ad.author.username}</p>
        </div>
    );
};

export default AdDetail;
