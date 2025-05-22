import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                jwtDecode(token); // juste pour valider
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkToken();

        // Option 1: écoute les changements de localStorage (parfait si tu changes token dans un autre onglet)
        const onStorageChange = (e) => {
            if (e.key === 'token') {
                checkToken();
            }
        };
        window.addEventListener('storage', onStorageChange);

        // Option 2: check régulièrement (moins optimal mais plus sûr)
        const intervalId = setInterval(checkToken, 1000);

        return () => {
            window.removeEventListener('storage', onStorageChange);
            clearInterval(intervalId);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/ads">Annonces</Link>
            <Link to="/create">Créer une annonce</Link>
            {!isLoggedIn ? (
                <>
                    <Link to="/register">S'inscrire</Link>
                    <Link to="/login">Connexion</Link>
                </>
            ) : (
                <button onClick={handleLogout}>Déconnexion</button>
            )}
        </nav>
    );
};

export default Navbar;
