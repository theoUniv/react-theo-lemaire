import { useState } from 'react';
import axios from 'axios';

function CreateAd() {
    const [form, setForm] = useState({ title: '', description: '', category: '', price: 0 });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8080/api/ads/create', form, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Annonce créée !');
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la création");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Titre" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            <input name="category" placeholder="Catégorie" onChange={handleChange} />
            <input name="price" type="number" onChange={handleChange} />
            <button type="submit">Créer</button>
        </form>
    );
}

export default CreateAd;
