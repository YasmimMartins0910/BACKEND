const express = require('express');

const app = express();

app.use(express.json());

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

app.post('/livros', (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const ano = req.body.ano;

  if (!titulo || !autor) {
    return res.status(400).json({
      erro: 'Título e autor são obrigatórios',
    });
  }

  const novoLivro = {
    id: livros.length + 1,
    titulo: titulo,
    autor: autor,
    ano: ano,
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
