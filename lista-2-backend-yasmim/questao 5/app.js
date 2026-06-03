const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, express!');
});

app.get('/bem-vindo', (req, res) => {
  res.send('<h1>Seja bem-vindo ao meu servidor!</h1>');
});

app.get('/info', (req, res) => {
  res.json({
    versao: '1.0.0',
    autor: 'Yasmim Martins',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/info`);
});
