const express = require('express');

const router = express.Router();

const posts = [
  {
    id: 1,
    titulo: 'Primeiro post do blog',
    conteudo: 'Conteúdo do primeiro post',
  },
  {
    id: 2,
    titulo: 'Segundo post do blog',
    conteudo: 'Conteúdo do segundo post',
  },
];

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send('Post não encontrado');
  }

  res.json(post);
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const indice = posts.findIndex((post) => post.id === id);

  if (indice === -1) {
    return res.status(404).send('Post não encontrado');
  }

  posts.splice(indice, 1);

  res.status(200).send('Post deletado com sucesso');
});

module.exports = router;
