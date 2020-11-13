import React, {useState} from "react";

import MovieCard from "./MovieCard";
import CardList from "./CardList";
import SearchForm from "./SearchForm";

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
      {/* <form className="form" action="./api/path" method="get"> */}
      {/* <form className="form" onSubmit={search}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form> */}
      <SearchForm
        datas={{
          query,
        }}
        methods={{
          setQuery,
          search,
        }}
      />
      {/* <SearchForm
        query={query}
        setQuery={setQuery}
        search={search}
      /> */}
      <CardList movies={movies} />
      {/* <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div> */}
    </>
  );
}

export default SearchMovie;
