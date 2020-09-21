import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";
import MovieDetial from "../MovieDetail";

const MovieList = (props) => {
  const { fetchMovies, moviesList } = props;
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {moviesList && moviesList.results && (
        <ShowMovies moviesList={moviesList} />
      )}
    </div>
  );
};

export default MovieList;
