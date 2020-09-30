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
      <div>Rating: {review.rating} / 5</div>
      <div id="reviewTitle">{review.title}</div>
      <p>{review.review_body}</p>
    </div>
  </SingleReview>
)

export default Review;