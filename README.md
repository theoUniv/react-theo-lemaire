# Projet Annonces React / Node.js / MongoDB

## Description

Ce projet est une application web de gestion d'annonces.  
- Frontend en React (React Router pour la navigation)  
- Backend en Node.js avec Express  
- Base de données MongoDB Atlas  
- Authentification JWT avec gestion des utilisateurs (inscription, connexion, déconnexion)  
- CRUD complet sur les annonces (création, lecture, édition, suppression)  

---

## Fonctionnalités

- Inscription et connexion sécurisées avec JWT  
- Affichage des annonces  
- Création, modification et suppression des annonces  
- Protection des routes sensibles via middleware d’authentification  
- Navbar dynamique affichant les liens selon l’état de connexion  
- Déconnexion qui vide le token et redirige vers la page de login  
- Affectation des annonces créées à un user précis

---

## Technologies utilisées

- Frontend  
  - React  
  - React Router DOM  
  - Axios  
- Backend  
  - Node.js  
  - Express  
  - MongoDB / Mongoose  
  - jsonwebtoken  
  - bcrypt  

---

### Prérequis

- Node.js installé  
- MongoDB Atlas ou instance MongoDB locale  
- Un éditeur de texte / IDE

## Installation

cd backend
npm install
npm start

cd frontend
npm install
npm start