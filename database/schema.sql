CREATE DATABASE IF NOT EXISTS CustomerReviews;

USE CustomerReviews;

CREATE TABLE IF NOT EXISTS reviews (
  review_id INT unsigned NOT NULL AUTO_INCREMENT,
  username VARCHAR(150) NOT NULL,
  fecha DATE NOT NULL,
  rating INT(5) NOT NULL,
  title varchar(150) NOT NULL,
  review_body text NOT NULL,
  PRIMARY KEY (review_id)
);

CREATE TABLE IF NOT EXISTS images (
  image_id INT unsigned NOT NULL AUTO_INCREMENT,
  url VARCHAR NOT NULL,
  review_id INT unsigned NOT NULL,
  PRIMARY KEY (image_id),
  FOREIGN KEY (review_id) REFERENCES reviews(review_id)
);
