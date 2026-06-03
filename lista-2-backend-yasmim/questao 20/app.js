const express = require('express');

const app = express();

app.use(express.json());

app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const email = req.body.email;

  res.send(`Usuário com ID ${id} atualizado com o email: ${email}`);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
