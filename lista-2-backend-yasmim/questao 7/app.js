const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, Express!');
});

app.get('/bem-vindo', (req, res) => {
  res.send('<h1>Seja bem-vindo ao meu servidor!</h1>');
});

app.get('/info', (req, res) => {
  res.json({
    versao: '1.0.0',
    autor: 'Yasmim',
  });
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
