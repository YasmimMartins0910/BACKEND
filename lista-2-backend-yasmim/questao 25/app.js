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

app.delete('/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  const indice = posts.findIndex((post) => post.id === id);

  if (indice === -1) {
    return res.status(404).send('Post não encontrado');
  }

  posts.splice(indice, 1);

  res.status(200).send('Post deletado com sucesso');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
