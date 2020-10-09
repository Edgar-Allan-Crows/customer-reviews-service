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
      reviewsArray: [],
      showReviews: 3,
      product_id: window.location.pathname.slice(1) ? window.location.pathname.slice(1) : 1
    }
    this.handleSortChange = this.handleSortChange.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: `/${this.state.product_id}`,
      method: 'PATCH',
      success: (res) => {
        this.setState({
          reviewsArray: res,
        });
      }
    })

    $.ajax({
      url: `/${this.state.product_id}`,
      method: 'GET',
      success: (res) => {
        this.setState({
          product_id: window.location.pathname.slice(1) ? window.location.pathname.slice(1) : 1,
        });
      }
    })

    $.ajax({
      url: '/api/totalScore',
      method: 'GET',
      success: (res) => {
        this.setState({
          totalScore: res.totalScore
        });
      }
    })

    $.ajax({
      url: '/api/reviewCount',
      method: 'GET',
      success: (res) => {
        this.setState({
          totalReviews: res.totalReviews
        });
      }
    })
  }

  loadMore() {
    this.setState({
      showReviews: this.state.showReviews += 3
    });
  }

  // Handle Sorting Change
  handleSortChange(dropDownValue) {
    if (dropDownValue === "highestRating") {
      var sortedArray = this.state.reviewsArray.sort((a,b) => {
        return b.rating - a.rating;
      })} else if (dropDownValue === "newest") {
          var sortedArray = this.state.reviewsArray.sort((a,b) => {
          return new Date(b.fecha) - new Date (a.fecha);
        })} else if (dropDownValue === "oldest") {
          var sortedArray = this.state.reviewsArray.sort((a,b) => {
          return new Date(a.fecha) - new Date (b.fecha);
        })} else if (dropDownValue === "lowestRating") {
          var sortedArray = this.state.reviewsArray.sort((a,b) => {
          return a.rating - b.rating;
        })} else if (dropDownValue === "mostHelpful") {
          var sortedArray = this.state.reviewsArray.sort((a,b) => {
          return this.state.reviewsArray.indexOf(b) - this.state.reviewsArray.indexOf(a) // Come back and add logic later
        })} else if (dropDownValue === "leastHelpful") {
          var sortedArray = this.state.reviewsArray.sort((a,b) => {
          return this.state.reviewsArray.indexOf(b) - this.state.reviewsArray.indexOf(a)  // Come back and add logic later
        })}
    this.setState({
      reviewsArray: sortedArray
    })
  }

  render() {
    return (
      <div id="container">
        <h2 id="componentTitle">Customer Reviews</h2>
        <Stats totalScore={this.state.totalScore} totalReviews={this.state.totalReviews} handleSortChange={this.handleSortChange}/>
        <ReviewsFeed reviewsArray={this.state.reviewsArray} showReviews={this.state.showReviews}/>
        <button id="loadMoreButton" onClick={this.loadMore}>Load More</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('customerReviews'))

export default App;