import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/ads">Annonces</Link>
            <Link to="/create">Créer une annonce</Link>
            <Link to="/register">S'inscrire</Link>
            <Link to="/login">Connexion</Link>
        </nav>
    );
};

export default Navbar;
