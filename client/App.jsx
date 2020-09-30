import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import axios from 'axios';

import Stats from './components/Stats.jsx';
import Sort from './components/Sort.jsx';
import ReviewsFeed from './components/ReviewsFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalScore: null,
      totalReviews: 0,
      sortedValue: 'highestRating',
      reviewsArray: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api',
      method: 'GET',
      success: (res) => {
        this.setState({
          totalScore: this.state.totalScore,
          totalReviews: this.state.totalReviews,
          sortedValue: this.state.sortedValue,
          reviewsArray: res
        });
        console.log(this.state.reviewsArray);
      }
    })
  }

  render() {
    return (
      <div id="container">
        <h2 id="componentTitle" >Customer Reviews</h2>
        <Stats />
        <ReviewsFeed />
        <button id="loadMoreButton">Load More</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('customerReviews'))