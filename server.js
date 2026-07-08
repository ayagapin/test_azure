const express = require('express');
const path = require('path');
const app = express();

// Azure App Service fournit dynamiquement le port via la variable d'environnement PORT
const port = process.env.PORT || 8080;

// Sert tous les fichiers statiques (HTML, CSS, images) du dossier actuel
app.use(express.static(path.join(__dirname)));

// Route API pour envoyer notre variable d'environnement au navigateur
app.get('/api/message', (req, res) => {
  res.json({ message: process.env.MY_SECRET_MESSAGE || "Message par défaut (développement local)" });
});

// Pour toute autre requête, on renvoie le fichier index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
