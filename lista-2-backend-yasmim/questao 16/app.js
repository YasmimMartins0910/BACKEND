const express = require('express');

const app = express();

app.get('/artigos', (req, res) => {
  const pagina = req.query.pagina || 1;

  res.send(`Exibindo a página ${pagina} dos artigos`);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000/artigos?pagina=2`);
});
