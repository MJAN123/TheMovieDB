import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";
import Jumbotron from "../Jumbotron";
import "./style.css";
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
  } else
    return (
      <div className=" container-uper">
        <Jumbotron />
        {moviesList && moviesList.results && moviesList.results.length && (
          <ShowMovies moviesList={moviesList} />
        )}
      </div>
    );
};

export default MovieList;
