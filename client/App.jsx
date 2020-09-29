import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Stats from './components/Stats.jsx';
import Sort from './components/Sort.jsx';
import ReviewsFeed from './components/ReviewsFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalScore: null,
      totalReviews: 0,
      sortedReviews: null
    };
  }

  // Methods
  // Sorting Method

  render() {
    return (
      <div>
        <div>Hello!</div>
        <Stats />
        <Sort />
        <ReviewsFeed />
        <button>Write A Review!</button>
        <button>Load More</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('customerReviews'))