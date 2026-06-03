const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, Express');
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
