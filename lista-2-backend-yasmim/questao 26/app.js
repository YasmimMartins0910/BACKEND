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

app.get('/livros', (req, res) => {
  const ano = req.query.ano;

  if (ano) {
    const livrosFiltrados = livros.filter((livro) => livro.ano == ano);
    return res.json(livrosFiltrados);
  }

  res.json(livros);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/livros?ano=2005');
});
