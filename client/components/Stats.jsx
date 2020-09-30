import React from 'react';
import styled from 'styled-components';
import Sort from './Sort.jsx';
import ratingPlaceholder from '../img/fiveStarPlaceholder.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { f044 } from '@fortawesome/free-regular-svg-icons';


const StatsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-transform: capitalize;
  font-family: "Avenir Light";
  letter-spacing: 0.025em;
  font-size: 14px;
  line-height: 1.428571429;
`;

const TotalScore = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
`;

const Stats = ({handleChange, value}) => (
  <StatsBar>
    <TotalScore>
      Total Score:
      <img src={ratingPlaceholder} />
      5.0 (111 Reviews)
    </TotalScore>
    {/* <FontAwesomeIcon icon={f044} /> */}
    <a id="writeReviewLink" href="https://www.brilliantearth.com/review/?pr_page_id=BE1D64-18KW">Leave Review</a>
    <Sort handleChange={handleChange} value={value}/>
  </StatsBar>
)

export default Stats;