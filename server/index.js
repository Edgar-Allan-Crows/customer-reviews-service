const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static(__dirname + '/../dist'));

app.get(`/:product_id`, (req, res) => {
  // Write error message here
  res.sendFile(path.resolve('dist/index.html'));
})

app.patch('/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  db.connection.query(`SELECT * FROM reviews WHERE product_id = ${product_id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

app.get('/api/totalScore/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  // Calculate average reviews score
  let score = db.connection.query(`SELECT AVG(rating) AS AverageScore FROM reviews WHERE product_id = ${product_id}`, (err, results) => {
    if (err) {
      console.log('There was an error getting the average')
      throw err;
    } else {
      var totalScore = Math.round(results['0'].AverageScore);
      res.send({totalScore: totalScore});
    }
  })
})

app.get('/api/reviewCount/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  // Get total number of reviews
  let noReviews = db.connection.query(`SELECT COUNT(*) FROM reviews WHERE product_id = ${product_id}` , (err, result) => {
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
