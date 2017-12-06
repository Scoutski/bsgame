const express = require('express');

const app = express();
const PORT = 3005;

app.listen(PORT);
console.log('app is listening on port', PORT);

app.get('/', (req, res) => {
  res.send('OK');
});
