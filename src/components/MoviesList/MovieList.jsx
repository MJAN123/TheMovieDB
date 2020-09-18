import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";
import MovieDetial from "../MovieDetail";
import Footer from "../Footer/Footer";

const MovieList = (props) => {
  const { fetchMovies, movieDetail, moviesList } = props;
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, movieDetail]);

  return (
    <div>
      {moviesList && moviesList.results && (
        <ShowMovies moviesList={moviesList} />
      )}

      <Footer />
    </div>
  );
};

export default MovieList;
