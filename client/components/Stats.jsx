import React from 'react';
import styled from 'styled-components';
import Sort from './Sort.jsx';
import ratingPlaceholder from '../img/fiveStarPlaceholder.png';

const StatsBar = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: space-around;
  text-transform: capitalize;
  font-family: "Avenir Light";
  letter-spacing: 0.025em;
  font-size: 14px;
  line-height: 1.428571429;
`;

const TotalScore = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
`;

const Stats = () => (
  <StatsBar>
    <TotalScore>
      Total Score:
      <img src={ratingPlaceholder} />
    </TotalScore>
    <Sort />
    <button>Write A Review!</button>
  </StatsBar>
)

export default Stats;