const express = require('express');

const app = express();

app.use(express.json());

const playlists = [];

app.post('/playlists', (req, res) => {
  const nome = req.body.nome;

  const novaPlaylist = {
    id: playlists.length + 1,
    nome: nome,
    musicas: [],
  };

  playlists.push(novaPlaylist);

  res.status(201).json(novaPlaylist);
});

app.get('/playlists', (req, res) => {
  res.json(playlists);
});

app.post('/playlists/:id/musicas', (req, res) => {
  const id = Number(req.params.id);

  const playlist = playlists.find((playlist) => playlist.id === id);

  if (!playlist) {
    return res.status(404).send('Playlist não encontrada');
  }

  const titulo = req.body.titulo;
  const artista = req.body.artista;

  const novaMusica = {
    titulo: titulo,
    artista: artista,
  };

  playlist.musicas.push(novaMusica);

  res.status(201).json(novaMusica);
});

app.get('/playlists/:id/musicas', (req, res) => {
  const id = Number(req.params.id);

  const playlist = playlists.find((playlist) => playlist.id === id);

  if (!playlist) {
    return res.status(404).send('Playlist não encontrada');
  }

  res.json(playlist.musicas);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/playlists');
});
