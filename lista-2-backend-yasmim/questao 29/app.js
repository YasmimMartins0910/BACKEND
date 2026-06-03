const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/posts/1');
});
