import React, {useState} from "react";
import "./MovieSearch.css";

const MoviesSearch = () => {
  const [movies, setMovies] = useState([])
  const searchMovies = async (e) => {
    e.preventDefault();
    const query = "Jurassic Park";

    /* APIKEY From TMDB  */
    const APIKEY = "0ba554f0d68ba4d209fce337cfe229c3";
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(BASE_URL)
      .then((data) => {
        return setMovies( data.json())
      })
      .catch((err) => {
        console.error("Fetch movie error:", err);
      });
    console.log(res);
  };

  return (
    <div className="">
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="Search for a movie"
          className="input"
        />
        <button className="button" type="submit">
          Search Movie
        </button>
        <h2>{movies.popularity}</h2>
      </form>
    </div>
  );
};

export default MoviesSearch;
