const mysql = require('mysql');
const faker = require('faker');
const moment = require('moment');

// Open a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password!",
  database: "fec_reviews"
});

// Use faker to create test data
var username_fake = faker.name.firstName();
var fecha_fake = faker.date.past();
var formattedDate = JSON.stringify(fecha_fake).split('T')[0].split('"').join('')
var rating_fake = Math.floor(Math.random() * (5 - 1) + 1);
var title_fake = faker.random.words();
var review_body_fake = faker.lorem.paragraph();

connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected as expected in seed.js!');
  // Query the database with one unique entry by utilizing faker
  let entry = `INSERT INTO reviews (username, fecha, rating, title, review_body) VALUES ("${username_fake}", "${formattedDate}", "${rating_fake}", "${title_fake}", "${review_body_fake}")`;
  connection.query(entry, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted');
    // Close database connection
    connection.end();
  });
});


// Run it in the terminal
// Check mysql to see if entry was created as expected
// If yes, write script to do it 99 more times
// If no, fix it

// Then figure out S3 to host images there