const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rota para listar todos os usuários
app.get('/users', (req, res) => {
  res.json(users);
});