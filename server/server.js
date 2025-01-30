const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Route exemple
app.get('/products', (req, res) => {
  res.json({ message: 'Le serveur fonctionne correctement!' });
  res.json(products)
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
