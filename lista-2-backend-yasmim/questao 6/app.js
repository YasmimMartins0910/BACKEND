//sor eu tava fazendo assim já antes pq era como tu tinha passado pra nós nos exercícios
//Ai agora que cheguei aqui na 6 vi que era pra fazer só com 3000, mas vou deixar com o PORT, blz?

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
    autor: 'Yasmim Martins',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/info`);
});
