import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TdRbH1G2QNCoYzJC3gokOCbpECeBFHOi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state= {
      movieList : []
    }
  }


  handleClick = (event) => {
    fetch(URL)
    .then(response => response.json())
    .then(movies => {
      this.setState({
        movieList : movies.results
      })
    })
  }

  render () {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews movies={this.state.movieList}/>
        <button type="button" onClick={this.handleClick} />
      </div>
      
    )
  }
}
