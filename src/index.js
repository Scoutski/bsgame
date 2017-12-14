const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log('App is now listening on port', PORT); // eslint-disable-line
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/vue', (req, res) => {
  res.render('index');
});
