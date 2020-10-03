import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../utils/helpers.js'

const SingleReview = styled.div`
  display: flex;
  border-top: 1px solid #d3d3d3;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.428571429;
`;

const Review = ({review}) => (
  <SingleReview >
    <div className="reviewDate">{formatDate(review.fecha)}</div>
    <div className="reviewDetails">
      <div className="nameCity">{review.username}</div>
      <div className="nameCity">City, State</div>

        {[review.rating].map((rating, key) => {
          if (rating === 5) {
            return <img key={key} className="ratingImg" src="https://edgar-allan-crows-reviews-images.s3.amazonaws.com/5-stars.png" />
          } else if (rating === 4) {
            return <img key={key} className="ratingImg" src="https://edgar-allan-crows-reviews-images.s3.amazonaws.com/4-stars.png" />
          } else if (rating === 3) {
            return <img key={key} className="ratingImg" src="https://edgar-allan-crows-reviews-images.s3.amazonaws.com/3-stars.png"/>
          } else if (rating === 2) {
            return <img key={key} className="ratingImg" src="https://edgar-allan-crows-reviews-images.s3.amazonaws.com/2-stars.png"/>
          } else if (rating === 1) {
            return <img key={key} className="ratingImg" src="https://edgar-allan-crows-reviews-images.s3.amazonaws.com/1-star.png"/>
          }
        })}

      <div id="reviewTitle">{review.title}</div>
      <p>{review.review_body}</p>
    </div>
  </SingleReview>
)

export default Review;