const express = require('express');

const app = express();

app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;
  const precoMax = req.query.precoMax;

  res.send(
    `Produtos da categoria ${categoria} com preço máximo de R$ ${precoMax}`,
  );
});

app.listen(3000, () => {
  console.log(
    `Servidor rodando em http://localhost:3000/produtos?categoria=roupas&precoMax=100`,
  );
});
