import React from 'react';
import styled from 'styled-components';

const SingleReview = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
`;

const Review = () => (
  <SingleReview>
    <div>Name</div>
    <div>Date</div>
    <div>City</div>
    <div>Rating</div>
    <div>Title</div>
    <div>Review Body</div>
  </SingleReview>
)

export default Review;