const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));


const authRoutes = require('./routes/authRoutes');
const adRoutes = require('./routes/adRoutes');



// Connexion à MongoDB
mongoose
    .connect("mongodb+srv://admin:11082002@cluster.llb9baa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
    .then(() => console.log("MongoDB connecté"))
    .catch((err) => console.error(err));


app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);


const PORT = 8080;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
