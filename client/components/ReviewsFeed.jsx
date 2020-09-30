import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReviewsFeed = ({reviewsArray, showReviews}) => (
  <Feed>
    {reviewsArray.slice(reviewsArray.length - showReviews).map((review) => {
        return (
          <Review key={review.review_id} review={review}/>
        )
    })}
  </Feed>
)

export default ReviewsFeed;