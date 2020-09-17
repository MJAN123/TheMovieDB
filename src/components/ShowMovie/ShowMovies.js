import React from "react";
import MoviesPoster from "../MoviesPoster";
import { Grid } from "@material-ui/core";

const ShowMovies = (props) => {
  const { moviesList } = props;
  const renderMovie =
    moviesList &&
    moviesList.results.length > 0 &&
    moviesList.results.map((list) => {
      return (
        <React.Fragment key={list.id}>
          <Grid item xs={6} sm={3}>
            <MoviesPoster movies={list} />
          </Grid>
        </React.Fragment>
      );
    });
  return (
    <div>
      <Grid container spacing={3}>
        {renderMovie}
      </Grid>
    </div>
  );
};

export default ShowMovies;
