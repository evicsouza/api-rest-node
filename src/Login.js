const express = require('express');
const bodyParser = require('body-parser');

// Dados iniciais de exemplo
let users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' }
];

const app = express();
app.use(bodyParser.json());


// Rota para obter um usuário específico pelo ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  
  res.json(user);
});

// Rota para criar um novo usuário
// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   newUser.id = users.length + 1;
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// Rota para atualizar um usuário existente pelo ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userUpdate = req.body;
  
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  
  users[userIndex] = { id, ...userUpdate };
  res.json(users[userIndex]);
});

// Rota para excluir um usuário pelo ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  
  const userDeleted = users[userIndex];
  users.splice(userIndex, 1);
  res.json(userDeleted);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('API de Usuários iniciada na porta 3000');
});
