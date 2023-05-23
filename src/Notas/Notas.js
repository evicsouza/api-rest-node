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

// Rota para obter uma nota específica pelo ID
app.get('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nota = notas.find(n => n.id === id);
  
  if (!nota) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }
  
  res.json(nota);
});

// Rota para criar uma nova nota
app.post('/notas', (req, res) => {
  const novaNota = req.body;
  novaNota.id = notas.length + 1;
  notas.push(novaNota);
  res.status(201).json(novaNota);
});

// Rota para atualizar uma nota existente pelo ID
app.put('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const notaAtualizada = req.body;
  
  const notaIndex = notas.findIndex(n => n.id === id);
  if (notaIndex === -1) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }
  
  notas[notaIndex] = { id, ...notaAtualizada };
  res.json(notas[notaIndex]);
});

// Rota para excluir uma nota pelo ID
app.delete('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const notaIndex = notas.findIndex(n => n.id === id);
  if (notaIndex === -1) {
    return res.status(404).json({ error: 'Nota não encontrada' });
  }
  
  const notaExcluida = notas[notaIndex];
  notas.splice(notaIndex, 1);
  res.json(notaExcluida);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('API de Notas iniciada na porta 3000');
});
