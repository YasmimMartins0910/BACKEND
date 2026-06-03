const express = require('express');

const app = express();

app.get('/calcular/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  const soma = num1 + num2;

  res.send(`A soma é: ${soma}`);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000/calcular/2/2`);
});
