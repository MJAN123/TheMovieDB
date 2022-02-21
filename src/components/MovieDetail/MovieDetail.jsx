import React, { useEffect } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
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
  const { getMovieDetial, movieDetail, getReview, review } = props;
  useEffect(() => {
    getMovieDetial(props.match.params.movieId);
    getReview(props.match.params.movieId);
  }, []);
debugger;
  const renderReview =
    review &&
    review.results &&
    review.results.length &&
    review.results.map((review) => {
      return (
        <tr>
          <td style={{ color: "#01b4e4", fontWeight: "bold" }}>
            {review.author}
          </td>
          <td>{review.content.slice(0, 200)}.......</td>
          <td style={{ color: "#01b4e4", fontWeight: "bold" }}>
            <a href={review.url}>FULL REVIEW</a>
          </td>
        </tr>
      );
    });
  return (
    <div className="container">
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid >
          <div className="card">
            <img
              src={
                (ImageBaseUrl + movieDetail.poster_path).includes(".jpg") ||
                (ImageBaseUrl + movieDetail.profile_path).includes(".jpg") ===
                  true
                  ? movieDetail.poster_path != null
                    ? ImageBaseUrl + movieDetail.poster_path
                    : ImageBaseUrl + movieDetail.profile_path
                  : require("../../assets/Images/download.png")
              }
              alt={movieDetail.title}
              // onClick={() => moviesClicked(movies.id)}
            />
          </div>
        </Grid>
        <Grid >
          <div className="movie-detail-container">
            <div className="movie-title">
              <div className="title">
                {movieDetail.title}
              </div>
              <div className="year">
                {movieDetail.title}
              </div>
            </div> 
            <div className="movie-rating">
              <div className="rating">
                  Rating
              </div>
            </div> 
            <div className="movie-overview">
              <div className="section-title">
              movieDetail.overview
              </div>
              <div className="overview">

              </div>
            </div>
              
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
