import React from 'react';
import styled from 'styled-components';

const SingleReview = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.428571429;
`;



const Review = () => (
  <SingleReview>
    <div className="reviewDate">Date</div>
    <div className="reviewDetails">
      <div>Name</div>
      <div>City</div>
      <div>Rating</div>
      <div>Title</div>
      <p>Review Body</p>
    </div>
  </SingleReview>
)

export default Review;