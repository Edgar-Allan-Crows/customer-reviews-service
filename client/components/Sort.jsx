import React from 'react';
import styled from 'styled-components';

const SortTitle = styled.div`
  display: flex;
  border: 1px solid black;
`;

const SortByList = styled.div`
  display: none;
  list-style-type:none;
  ${SortTitle}:hover & {
    display: inline;
  }
`;

const Sort = () => (
  <SortTitle> Sort:
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