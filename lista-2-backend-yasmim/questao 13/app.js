const express = require('express');

const app = express();

app.get('/perfil/:id', (req, res) => {
  const id = req.params.id;

  res.send(`<h1>Perfil do usuário com ID: ${id}</h1>`);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000/perfil/1`);
});
