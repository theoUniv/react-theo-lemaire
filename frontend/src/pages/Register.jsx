// --- frontend/src/pages/Register.jsx ---
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/register', form);
            alert('Inscription réussie');
        } catch (err) {
            alert('Erreur lors de l\'inscription');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
            <button type="submit">S'inscrire</button>
        </form>
    );
};

export default Register;
