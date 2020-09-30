import React from 'react';
import styled from 'styled-components';

const SingleReview = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.428571429;
`;



const Review = ({review}) => (
  <SingleReview >
    <div className="reviewDate">{review.fecha}</div>
    <div className="reviewDetails">
      <div>{review.username}</div>
      <div>City, State</div>
      <div>Rating: {review.rating} / 5</div>
      <div>{review.title}</div>
      <p>{review.review_body}</p>
    </div>
  </SingleReview>
)

export default Review;