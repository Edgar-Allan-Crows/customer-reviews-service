import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../utils/helpers.js'
import fiveStars from '../img/5-stars.png';
import fourStars from '../img/4-stars.png';
import threeStars from '../img/3-stars.png';
import twoStars from '../img/2-stars.png';
import oneStar from '../img/1-star.png';

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
            return <img key={key} id="ratingImg" src={fiveStars} />
          } else if (rating === 4) {
            return <img key={key} id="ratingImg" src={fourStars} />
          } else if (rating === 3) {
            return <img key={key} id="ratingImg" src={threeStars} />
          } else if (rating === 2) {
            return <img key={key} id="ratingImg" src={twoStars} />
          } else if (rating === 1) {
            return <img key={key} id="ratingImg" src={oneStar} />
          }
        })}

      <div id="reviewTitle">{review.title}</div>
      <p>{review.review_body}</p>
    </div>
  </SingleReview>
)

export default Review;