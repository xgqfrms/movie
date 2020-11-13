import React, {useState} from "react";

import MovieCard from "./MovieCard";

const CardList = (props) => {
  const {
    movies,
  } = props;
  return (
    <>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  );
}

export default CardList;
