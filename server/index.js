const express = require('express');
const app = express();
const port = 3004;

app.get('/api', (req, res) => {
  res.send('Working, now go get data from reviews database!');
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})