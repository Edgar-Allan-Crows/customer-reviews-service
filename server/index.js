const express = require('express');
const app = express();
const port = 3004;
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../dist'));

app.get('/api', (req, res) => {
  db.query('SELECT * FROM reviews', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
  db.end();
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})