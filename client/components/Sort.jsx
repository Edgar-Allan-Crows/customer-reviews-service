import React from 'react';
import styled from 'styled-components';

const SortTitle = styled.div`
  display: flex;
  cursor: pointer;
  ${SortTitle}:hover {
    color: #3e9f8e;
  }
`;

const SortByList = styled.div`
  display: none;
  list-style-type:none;
`;

const Sort = () => (
  <SortTitle> Sort: Highest Rating
    <SortByList>
      <li>Highest Rating</li>
      <li>Newest</li>
      <li>Oldest</li>
      <li>Lowest Rating</li>
      <li>Most Helpful</li>
      <li>Least Helpful</li>
    </SortByList>
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