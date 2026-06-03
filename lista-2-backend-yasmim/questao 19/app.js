const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/contato', (req, res) => {
  res.send(`
    <form action="/enviar-contato" method="POST">
      <label>Assunto:</label>
      <input type="text" name="assunto">

      <br><br>

      <label>Mensagem:</label>
      <textarea name="mensagem"></textarea>

      <br><br>

      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/enviar-contato', (req, res) => {
  res.send('<h1>Contato recebido!</h1>');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/contato');
});
