import React from "react";
import { Grid } from "@material-ui/core";
import { ImageBaseUrl } from "../../constants/ImagesURl";

const MovieDetail = (props) => {
  const { movieDetail } = props;
  console.log("Movies Detail", movieDetail);
  return (
    <div className="detail" style={{ marginTop: "70px" }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <img
            src={
              ImageBaseUrl +
              (movieDetail.poster_path != null
                ? movieDetail.poster_path
                : movieDetail.profile_path)
            }
          />
        </Grid>
        <Grid item xs={8}>
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
              <p>
                {movieDetail.vote_average != null
                  ? movieDetail.vote_average
                  : movieDetail.known_for[0].vote_average}
              </p>
            </details>
            <details>
              <summary>original language</summary>
              <p>
                {movieDetail.original_language
                  ? movieDetail.original_language
                  : movieDetail.known_for[0].original_language}
              </p>
            </details>
            <h1>Overview</h1>
            <p>
              {movieDetail.overview != null
                ? movieDetail.overview
                : movieDetail.known_for[0].overview}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
