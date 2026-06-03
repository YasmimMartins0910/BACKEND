const express = require('express');

const app = express();

app.post('/cadastro', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  res.json({
    mensagem: 'Cadastro realizado com sucesso',
    nome: nome,
    email: email,
  });
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
