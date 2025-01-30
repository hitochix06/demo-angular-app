const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    "id": 0,
    "name": "Harry Potter",
    "isFavorite": false,
    "createdDate": "1980-06-31T00:00:00.000Z"
  },
  {
    "id": 1,
    "name": "Ronnald Weasley",
    "isFavorite": false,
    "createdDate": "1980-03-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Hermione Granger",
    "isFavorite": false,
    "createdDate": "1979-08-19T00:00:00.000Z"
  },
  {
    "id": 3,
    "name": "Neville Londubas",
    "isFavorite": false,
    "createdDate": "1980-07-30T00:00:00.000Z"
  },
  {
    "id": 4,
    "name": "Albus Dumbledore",
    "isFavorite": false,
    "createdDate": "1881-07-30T00:00:00.000Z"
  },
  {
    "id": 5,
    "name": "Severus Snape",
    "isFavorite": false,
    "createdDate": "1960-01-09T00:00:00.000Z"
  },
  {
    "id": 6,
    "name": "Draco Malfoy",
    "isFavorite": false,
    "createdDate": "1980-05-05T00:00:00.000Z"
  },
  {
    "id": 7,
    "name": "Luna Lovegood",
    "isFavorite": false,
    "createdDate": "1981-02-13T00:00:00.000Z"
  },
  {
    "id": 8,
    "name": "Ginny Weasley",
    "isFavorite": false,
    "createdDate": "1981-07-11T00:00:00.000Z"
  },
  {
    "id": 9,
    "name": "Fred Weasley",
    "isFavorite": false,
    "createdDate": "1978-03-01T00:00:00.000Z"
  },
  {
    "id": 10,
    "name": "George Weasley",
    "isFavorite": false,
    "createdDate": "1978-03-01T00:00:00.000Z"
  },
  {
    "id": 11,
    "name": "Minerva McGonagall",
    "isFavorite": false,
    "createdDate": "1935-09-04T00:00:00.000Z"
  },
  {
    "id": 12,
    "name": "Hagrid",
    "isFavorite": false,
    "createdDate": "1928-11-06T00:00:00.000Z"
  },
  {
    "id": 13,
    "name": "Sirius Black",
    "isFavorite": false,
    "createdDate": "1960-10-11T00:00:00.000Z"
  },
  {
    "id": 14,
    "name": "Remus Lupin",
    "isFavorite": false,
    "createdDate": "1960-02-10T00:00:00.000Z"
  }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.patch('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.isFavorite = req.body.isFavorite;
  res.json(product);
});


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});






