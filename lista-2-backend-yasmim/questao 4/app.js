const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, Express!');
});

app.get('/bem-vindo', (req, res) => {
  res.send('<h1>Seja bem-vindo ao meu servidor!</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/bem-vindo`);
});
