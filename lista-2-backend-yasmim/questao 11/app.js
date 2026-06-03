const express = require('express');

const app = express();

app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;

  res.send(`Olá, ${nome}!`);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/saudacao/Yasmim');
});
