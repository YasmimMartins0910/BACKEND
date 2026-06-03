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

app.get('/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send('Post não encontrado');
  }

  res.json(post);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/posts/1');
});
