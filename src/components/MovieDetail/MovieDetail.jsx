import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  Language,
  LocalAtm,
  NewReleases,
  Stars,
  ThumbUpAlt,
} from "@material-ui/icons";
import { ImageBaseUrl } from "../../constants/ImagesURl";
import "./style.css";

const MovieDetail = (props) => {
  console.log(" From Detail", props.match.params.movieId);
  const { getMovieDetial, movieDetail } = props;
  useEffect(() => {
    getMovieDetial(props.match.params.movieId);
  }, []);

  return (
    <div className="container">
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={12} sm={3}>
          <h1>Poster</h1>
          <div className="card">
            <img
              src={ImageBaseUrl + movieDetail.poster_path}
              alt={movieDetail.title}
              // onClick={() => moviesClicked(movieDetail.id)}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h1>Detail</h1>
          <div className="detail">
            <br />
            <h1>Title: {movieDetail.title}</h1>
            <h3>
              Rating:
              <Stars />
              <span> {movieDetail.vote_average}</span>
            </h3>

            <h3>
              <ThumbUpAlt /> <span> {movieDetail.popularity}</span>
            </h3>
            <h3>
              <NewReleases /> <span> {movieDetail.release_date}</span>
            </h3>
            <h3>
              <Language />{" "}
              <span>
                {" "}
                {movieDetail.original_language === "en"
                  ? "English"
                  : movieDetail.original_language}
              </span>
            </h3>
            <h3>
              <LocalAtm /> <span> {movieDetail.revenue}</span>
            </h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>
            <h1>Similar</h1>
            <img src={require("../../assets/Images/download.png")} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
