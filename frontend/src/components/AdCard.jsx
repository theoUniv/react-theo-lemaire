
import React from 'react';
import { Link } from 'react-router-dom';

const AdCard = ({ ad }) => {
    return (
        <div>
            <h3>{ad.title}</h3>
            <p>{ad.description.substring(0, 100)}...</p>
            <p>{ad.price} €</p>
            <Link to={`/ads/${ad._id}`}>Voir l'annonce</Link>
        </div>
    );
};

export default AdCard;