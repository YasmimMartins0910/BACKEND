const express = require('express');

const usersRouter = require('./routes/users');

const app = express();

app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/users`);
});
