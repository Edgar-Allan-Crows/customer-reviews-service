import React from 'react';
import styled from 'styled-components';

const SortTitle = styled.div`
  display: flex;
  cursor: pointer;
  ${SortTitle}:hover {
    color: #3e9f8e;
  }
`;

// const SortByList = styled.div`
//   display: none;
//   list-style-type:none;
// `;

const Sort = ({handleChange, value}) => (
  <SortTitle> Sort:
    <select value={value} onChange={(e) => {handleChange(e)}}>
      <option value="highestRating">Highest Rating</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="lowestRating">Lowest Rating</option>
      <option value="mostHelpful">Most Helpful</option>
      <option value="leastHelpful">Least Helpful</option>
    </select>
  </SortTitle>
)

export default Sort;

// const SortByList = styled.div`
//   display: none;
//   list-style-type:none;
//   ${SortTitle}:hover & {
//     display: inline;
//   }
// `;