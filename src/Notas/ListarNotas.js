const express = require('express');
const bodyParser = require('body-parser');

// Dados iniciais de exemplo
let notas = [
  { id: 1, titulo: 'Nota 1', conteudo: 'Conteúdo da Nota 1' },
  { id: 2, titulo: 'Nota 2', conteudo: 'Conteúdo da Nota 2' }
];

const app = express();
app.use(bodyParser.json());

// Rota para listar todas as notas
app.get('/notas', (req, res) => {
  res.json(notas);
});