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
      sortedValue: 'highestRating'
    };
  }

  // Handle Sorting Change
  handleChange(event) {
    this.setState({
      totalScore: this.state.totalScore,
      totalReviews: this.state.totalReviews,
      sortedValue: event.target.value
    })
  }

  render() {
    return (
      <div id="container">
        <h2 id="componentTitle" >Customer Reviews</h2>
        <Stats value={this.state.value} handleChange={this.handleChange.bind(this)}/>
        <ReviewsFeed />
        <button id="loadMoreButton">Load More</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('customerReviews'))