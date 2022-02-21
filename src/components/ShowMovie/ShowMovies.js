import React from "react";
import MoviesPoster from "../MoviesPoster";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./style.css";

const ShowMovies = (props) => {
  const { moviesList, fetchShowMovie } = props;
  const history = useHistory();
  const onMovieClick = (id) => {
    history.push(`/movie/detail/${id}`);
    fetchShowMovie(id);
  };

  const renderMovie =
    moviesList &&
    moviesList.results.length > 0 &&
    moviesList.results.map((list) => {
      return (
        <React.Fragment key={list.id}>
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            onClick={() => onMovieClick(list.id)}
          >
            <MoviesPoster movies={list} />
          </Grid>
        </React.Fragment>
      );
    });

  return (
    <div>
      <h1 className="move"> List Of Movies</h1>
      <Grid container spacing={1}>
        {renderMovie}
      </Grid>
    </div>
  );
};

export default ShowMovies;
