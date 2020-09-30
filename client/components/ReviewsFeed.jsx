import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReviewsFeed = () => (
  <Feed>
    <Review />
    <Review />
    <Review />
    <Review />
    <Review />
  </Feed>
)

export default ReviewsFeed;