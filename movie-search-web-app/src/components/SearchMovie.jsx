import React, {useState} from "react";

import MovieCard from "./MovieCard";
import CardList from "./CardList";
import SearchForm from "./SearchForm";
// css
import "./index.css";

// options
const apiV3 = `https://api.themoviedb.org/3/search/movie`;
const apiKey = `5dcf7f28a88be0edc01bbbde06f024ab`;
const lang = `en-US`;
const page = 1;
const adult = false;

const SearchMovie = () => {
  // string value
  const [query, setQuery] = useState('Jurassic Park');
  // const [query, setQuery] = useState('');
  // array value
  const [movies, setMovies] = useState([]);
  // custom form submit event handler
  const search = async (e) => {
    // stop refresh page
    e.preventDefault();
    try {
      const url = `${apiV3}?api_key=${apiKey}&language=${lang}&query=${query}&page=${page}&include_adult=${adult}`;
      // API 超时处理方法 ❓
      setTimeout(() => {
        const results = [{
          title: "movie.title",
          poster_path: "movie.poster_path",
          release_date: "movie.release_date",
          vote_average: "movie.vote_average",
          overview: "movie.overview",
        }];
        setMovies(results);
      }, 3000);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      // report error, Sentry
      // ErrorBoundary
      console.error(err);
    }
  };
  return (
    <>
      <SearchForm
        datas={{
          query,
        }}
        methods={{
          setQuery,
          search,
        }}
      />
      <CardList movies={movies} />
    </>
  );
}

export default SearchMovie;
