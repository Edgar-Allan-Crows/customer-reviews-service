const express = require('express');
const app = express();
const port = 3004;
const db = require('../database/index.js');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static(__dirname + '/../dist'));

app.get('/api/reviews', (req, res) => {
  db.query('SELECT * FROM reviews', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

app.get(`/:product_id`, (req, res) => {
  // Write error message here
  res.sendFile(path.resolve('dist/index.html'));
})

app.patch(`/:product_id`, (req, res) => {
  let product_id = req.params.product_id;
  db.query(`SELECT * FROM reviews WHERE product_id = ${product_id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

app.get('/api/totalScore', (req, res) => {
  // Calculate average reviews score
  let score = db.query('SELECT AVG(rating) AS AverageScore FROM reviews', (err, results) => {
    if (err) {
      console.log('There was an error getting the average')
      throw err;
    } else {
      var totalScore = Math.round(results['0'].AverageScore);
      res.send({totalScore: totalScore});
    }
  })
})

app.get('/api/reviewCount', (req, res) => {
  // Get total number of reviews
  let noReviews = db.query('SELECT COUNT(*) FROM reviews' , (err, result) => {
    if (err) {
      throw err;
    } else {
      var totalReviews = result['0']['COUNT(*)'];
      res.send({totalReviews: totalReviews});
    }
  });
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})