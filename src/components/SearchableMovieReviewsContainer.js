import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Searcher from './Searcher'

const NYT_API_KEY = 'TdRbH1G2QNCoYzJC3gokOCbpECeBFHOi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state= {
      movieList : []
      searchCriteria : ""
    }
  }

  searchUpdate(search) {
    this.setState({
      searchCriteria: search
    })
  }

  render() {
    return(

      <div className="searchable-movie-reviews">
        <Searcher searchUpdate={this.searchUpdate} />
      </div>
    )
  }
}
