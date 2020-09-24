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
  console.log(" From Detail", props.match.params.movieId);
  const { getMovieDetial, movieDetail, getReview, review } = props;
  useEffect(() => {
    getMovieDetial(props.match.params.movieId);
    getReview(props.match.params.movieId);
  }, []);

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
        <Grid item xs={12} md={4}>
          <h1>Poster</h1>
          <div className="card">
            {/* <img
              src={ImageBaseUrl + movieDetail.poster_path}
              alt={movieDetail.title}
              // onClick={() => moviesClicked(movieDetail.id)}
            /> */}

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
        <Grid item xs={12} md={8}>
          <h1>Detail</h1>
          <Card>
            <CardContent>
              <h1>Title: {movieDetail.title}</h1>
              <p>
                <b>OVERVIEW: </b> {movieDetail.overview}
              </p>

              <h3>
                <b>RATINGS </b>
                <Stars />
                <span> {movieDetail.vote_average}</span>
              </h3>

              <h3>
                <b>POPULARITY </b>
                <ThumbUpAlt /> <span> {movieDetail.popularity}</span>
              </h3>
              <h3>
                <b>Realse Date </b>
                <NewReleases /> <span> {movieDetail.release_date}</span>
              </h3>
              <h3>
                <b>Language </b>
                <Language />{" "}
                <span>
                  {movieDetail.original_language === "en"
                    ? "English"
                    : movieDetail.original_language}
                </span>
              </h3>
              <h3>
                <b>Revenue </b>
                <LocalAtm /> <span> {movieDetail.revenue}</span>
              </h3>
              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12} sm={3}>
          <div>
            <h1>Similar</h1>
            <img src={require("../../assets/Images/download.png")} />
          </div>
        </Grid> */}
      </Grid>
      <details style={{ textAlign: "center" }}>
        <summary>Review</summary>
        <table>
          <tr>
            <th>Auther</th>
            <th>Review</th>
            <th>Full Review</th>
          </tr>
          {renderReview}
        </table>
      </details>
    </div>
  );
};

export default MovieDetail;
