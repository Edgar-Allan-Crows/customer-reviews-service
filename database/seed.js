const mysql = require('mysql');
const faker = require('faker');

// Open a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "joe",
  password: "",
  database: "fec_reviews"
});

// Populate reviews table
connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected to populate reviews table!');

  let products_count = 1;

  //// Populates Products Table with 100 Products ////
  while (products_count <= 100) {
    let product_entry = `INSERT INTO products (product_id) VALUES ("${products_count}")`;
    connection.query(product_entry, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Added new product count number: ', products_count);
      }
    });
    products_count++;
  }

  //// Populates Reviews Table with Random Number of Reviews (Up to 80) For Each Product ////
  let count = 1;
  while (count < products_count) {
    let current_reviews_count = 0;
    let total_reviews_count = Math.floor(Math.random() * (80 - 25 + 1) + 25); //Set a random amount of reviews btwn 25 and 80 on each product
    while (current_reviews_count < total_reviews_count) {
      // Use faker to create test data
      var username_fake = faker.name.firstName();
      var fecha_fake = faker.date.past();
      var formattedDate = JSON.stringify(fecha_fake).split('T')[0].split('"').join('');
      var city_state_fake = `${faker.address.city()}, ${faker.address.state()}`;
      var rating_fake = Math.floor(Math.random() * (6 - 2) + 2);
      var title_fake = faker.random.words();
      var review_body_fake = faker.lorem.paragraph();

      // Populate reviews table
      let entry = `INSERT INTO reviews (product_id, username, fecha, city_state, rating, title, review_body) VALUES ("${count}", "${username_fake}", "${formattedDate}", "${city_state_fake}", "${rating_fake}", "${title_fake}", "${review_body_fake}")`;
      connection.query(entry, (err, result) => {
        if (err) throw err;
        console.log('1 reviews table record inserted');
      });
      current_reviews_count++;
    }
    count++;
  }

  // //// Populates Images Table with Between 5 to 25 Images ////
  // let images_count = 0;
  // let total_images_count = Math.floor(Math.random() * (2 - 0) + 0); // Set a random amount of images btwn 0 and 2 on each review
  // while (images_count < total_images_count) {
  //   var image_review_id = Math.floor(Math.random() * (100 - 1) + 1);
  //   var image_url_fake = faker.image.imageUrl();
  //   // Populate images table
  //   let images_entry = `INSERT INTO images (image_url, review_id) VALUES ("${image_url_fake}", "${image_review_id}")`;
  //   connection.query(images_entry, (err, result) => {
  //     if (err) throw err;
  //     console.log('1 images table record inserted');
  //   });
  //   images_count++;
  // }

  // Close database connection
  connection.end();
});

// Now figure out S3 to host images there