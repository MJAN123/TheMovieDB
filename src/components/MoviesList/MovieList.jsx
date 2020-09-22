import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

import Loading from "../Loader";

const MovieList = (props) => {
  const { fetchMovies, moviesList, loading } = props;
  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovieList = () => {
    if (loading) {
      return <Loading />;
    } else if (moviesList && moviesList.results) {
      return <ShowMovies moviesList={moviesList} />;
    }
  };

  return <div>{renderMovieList()}</div>;
};

export default MovieList;
