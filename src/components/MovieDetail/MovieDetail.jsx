import React from "react";
import { Grid } from "@material-ui/core";
import { ImageBaseUrl } from "../../constants/ImagesURl";

const MovieDetail = (props) => {
  const { movieDetail } = props;
  console.log("Movies Detail", movieDetail);
  return (
    <div className="detail">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img src={ImageBaseUrl + movieDetail.poster_path} />
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <h1>{movieDetail.title}</h1>
            <details>
              <summary>Relase Date</summary>
              <p>{movieDetail.release_date}</p>
            </details>
            <details>
              <summary>popularity</summary>
              <p>{movieDetail.popularity}</p>
            </details>
            <details>
              <summary>Rating</summary>
              <p>{movieDetail.vote_average}</p>
            </details>
            <details>
              <summary>original language</summary>
              <p>{movieDetail.original_language}</p>
            </details>
            <h1>Overview</h1>
            <p>{movieDetail.overview}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
