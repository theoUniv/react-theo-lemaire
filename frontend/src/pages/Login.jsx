import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            alert('Connexion réussie');
        } catch (err) {
            alert('Échec de la connexion');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default Login;