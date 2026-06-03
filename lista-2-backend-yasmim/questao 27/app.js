const express = require('express');

const app = express();

const livros = [
  {
    id: 1,
    titulo: 'A yasmim',
    autor: 'schacherslehner',
    ano: 2005,
  },
  {
    id: 2,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 1943,
  },
];

app.get('/livros/autor/:nomeDoAutor', (req, res) => {
  const nomeDoAutor = req.params.nomeDoAutor;

  const livrosDoAutor = livros.filter((livro) => livro.autor === nomeDoAutor);

  res.json(livrosDoAutor);
});

app.listen(3000, () => {
  console.log(
    'Servidor rodando em http://localhost:3000/livros/autor/schacherslehner',
  );
});
