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

app.post('/posts', (req, res) => {
  const titulo = req.body.titulo;
  const conteudo = req.body.conteudo;

  const novoPost = {
    id: posts.length + 1,
    titulo: titulo,
    conteudo: conteudo,
  };

  posts.push(novoPost);

  res.status(201).json(novoPost);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
