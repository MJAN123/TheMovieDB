import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

const MovieList = (props) => {
  const { fetchMovies, moviesList } = props;
  useEffect(() => {
    console.log("jan jan");
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      {moviesList && moviesList.results.length && (
        <ShowMovies moviesList={moviesList} />
      )}
    </div>
  );
};

export default MovieList;
