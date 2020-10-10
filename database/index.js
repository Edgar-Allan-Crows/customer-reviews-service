const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  database: process.env.DB_DATABASE
});

console.log('This is logging from the database/index.js file');