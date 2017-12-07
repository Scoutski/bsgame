const express = require('express');

const app = express();

const { PORT = 1337 } = process.env;

app.listen(PORT);
console.log('app is listening on port', PORT);

app.get('/health', (req, res) => {
  res.send('OK');
});
