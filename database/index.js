const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  database: process.env.DB_DATABASE
});

// connection.connect(function(err){
//   if (err) throw err;
//   console.log('Connected to the database in database/index.js!');
// });