const mysql = require('mysql');
const faker = require('faker');

// Open a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password!",
  database: "fec_reviews"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected as expected in seed.js!');
})

// Query the databse with one unique entry by utilizing faker
// Close database connection

// Run it in the terminal
// Check mysql to see if entry was created as expected
// If yes, write script to do it 99 more times
// If no, fix it

// Then figure out S3 to host images there