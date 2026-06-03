const express = require('express');

const app = express();

app.use(express.json());

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

app.put('/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send('Post não encontrado');
  }

  const titulo = req.body.titulo;
  const conteudo = req.body.conteudo;

  if (titulo) {
    post.titulo = titulo;
  }

  if (conteudo) {
    post.conteudo = conteudo;
  }

  res.json(post);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
