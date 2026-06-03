const express = require('express');

const app = express();

app.get('/pesquisa', (req, res) => {
  const termo = req.query.q;

  if (!termo) {
    return res.send('Por favor, forneça um termo para a busca.');
  }

  res.send(`Você pesquisou por: ${termo}`);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000/pesquisa?q=roupa`);
});
