import React from "react";
import './MoviesLists.css';

const MoviesList = ({ movie }) => {
  return (
    <div className="moviesLists card">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="card__image"
      />
      <div className="card__content">
        <h3 className="card__title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card__desc">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviesList;
