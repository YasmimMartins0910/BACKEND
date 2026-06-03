const express = require('express');

const app = express();

const posts = [
  {
    id: 1,
    titulo: 'Primeiro post do blog',
    conteudo: 'Primeiro conteúdo do blog',
  },

  {
    id: 2,
    titulo: 'Segundo post do blog',
    conteudo: 'Segundo conteúdo do blog',
  },
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000/posts`);
});
