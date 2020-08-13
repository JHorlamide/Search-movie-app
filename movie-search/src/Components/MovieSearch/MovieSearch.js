import React, { useState } from "react";
import "./MovieSearch.css";
import axios from "axios";

/* Custom Components */
import MoviesLists from '../MoviesLists/MoviesList';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const APIKEY = "0ba554f0d68ba4d209fce337cfe229c3";
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const searchMovies = async (e) => {
    e.preventDefault();
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res.data.results)
        const results = res.data.results
        setMovies(results);
        console.log("Return movies", movies)
      })
      .catch((err) => {
        console.error("Error Fetching Movies:", err);
      });
    setQuery("");
   
  };

  const handQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="Search for a movie"
          className="input"
          value={query}
          onChange={handQuery}
        />
        <button className="button" type="submit">
          Search Movie
        </button>
      </form>
      <div className='card_list'>{movies && movies.filter((movie) => movie.poster_path).map((movie) => {
        return (
          <MoviesLists movie={movie} key={movie.id}/>
          )
      })}</div>
    </>
  );
};

export default MoviesSearch;
