// Code MovieReviews Here
import React from 'react'

const MovieReview = ({title, headline}) => (
  <div className="review">
    <p>{title}</p>
    <p>{headline}</p>
  </div>
)

const MovieReviews = (movies) => (
  <div className="review-list">
    {movies.map(movie => <MovieReview title={movie.display_title} headline={movie.headline}/>)}
  </div>
)

export default MovieReviews
