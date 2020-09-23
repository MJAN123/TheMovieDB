import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

import Loading from "../Loader";

const MovieList = (props) => {
  const { fetchMovies, moviesList, loading } = props;
  useEffect(() => {
    fetchMovies();
  }, []);

  // const renderMovieList = () => {

  // };
  if (loading) {
    return <Loading />;
  } else debugger;
  return (
    <div>
      {moviesList && moviesList.results && moviesList.results.length && (
        <ShowMovies moviesList={moviesList} />
      )}
    </div>
  );
};

export default MovieList;
