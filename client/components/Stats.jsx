import React from 'react';
import styled from 'styled-components';
import Sort from './Sort.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const StatsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-transform: capitalize;
  font-family: "Avenir Light";
  letter-spacing: 0.025em;
  font-size: 14px;
  line-height: 1.428571429;
  margin-bottom: 10px;
`;

const TotalScore = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
`;

const Caret = styled.div`
  display: flex;
  opacity: .7;
  border: 0;
  width: auto;
  height: auto;
`;

const Stats = ({handleSortChange, value}) => (
  <StatsBar>
    <TotalScore>
      Total Score:
      <img className="ratingImg" src='https://edgar-allan-crows-reviews-images.s3.amazonaws.com/5-stars.png' />
      <div id="totalScoreAndReviews">
        <span>5.0</span>
        <span id="noOfReviews">(111 Reviews)</span>
      </div>
    </TotalScore>
    <a id="writeReviewLink" href="https://www.brilliantearth.com/review/?pr_page_id=BE1D64-18KW">Leave Review
      <FontAwesomeIcon id="coffeeIcon" icon={faCoffee} />
    </a>
    <Sort handleSortChange={handleSortChange} value={value}/>
    <Caret />
  </StatsBar>
)

export default Stats;