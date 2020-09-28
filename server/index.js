const express = require('express');
const app = express();
const port = 3004;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password!',
  database: 'fec_reviews'
})


app.get('/api', (req, res) => {
  connection.connect();
  connection.query('SELECT * FROM reviews', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
  connection.end();
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})