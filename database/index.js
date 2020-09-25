const mysql = require('mysql');

const connection = mysql.createConnection({
  user: "root",
  password: "password!",
  databse: "fec_reviews"
});

connection.connect(function(err){
  if (err) throw err;
  console.log('Connected to the dataBase!');
});

module.exports = connection;