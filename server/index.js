const express = require('express');
const app = express();
const port = 3004;
const db = require('../database/index.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/../dist'));

app.get('/api/reviews', (req, res) => {
  db.query('SELECT * FROM reviews', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
  // db.end(); // Removed because I believe this is what was causing the 'Cannot enqueue Query after invoking quit' error
})

app.get('/api/stats', (req, res) => {
  var returnObj = {
    totalReviews: 0,
    totalScore: null
  }
  // Get total number of reviews
  let noReviews = db.query('SELECT COUNT(*) FROM reviews' , (err, result) => {
    if (err) throw err;
    console.log('noReviews: ', result)
  });

  // Calculate average reviews score
  let score = db.query('SELECT AVG(rating) AS AverageScore FROM reviews', (err, results) => {
    if (err) {
      console.log('There was an error getting the average')
      throw err;
    } else {
      console.log('Average Score: ', results)
    }
  })
  res.end();
  // Send both number of reviews and reviews score back
  // res.send({
  //   totalReviews: noReviews,
  //   totalScore: score
  // })
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})