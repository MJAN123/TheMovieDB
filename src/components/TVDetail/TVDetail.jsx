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

const TVDetail = (props) => {
  console.log(" From Detail", props.match.params.TVId);
  const { getTVDetial, TVDetail, getTVReview, review } = props;
  useEffect(() => {
    getTVDetial(props.match.params.TVId);
    getTVReview(props.match.params.TVId);
  }, []);

  const renderReview =
    review &&
    review.results &&
    review.results.length &&
    review.results.map((review) => {
      return (
        <tr key={review.id}>
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
            <img
              src={ImageBaseUrl + TVDetail.poster_path}
              alt={TVDetail.title}
              // onClick={() => moviesClicked(movieDetail.id)}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <h1>Detail</h1>
          <Card>
            <CardContent>
              <h1>Title: {TVDetail.title}</h1>
              <p>
                <b>OVERVIEW: </b> {TVDetail.overview}
              </p>

              <h3>
                <b>RATINGS </b>
                <Stars />
                <span> {TVDetail.vote_average}</span>
              </h3>

              <h3>
                <b>POPULARITY </b>
                <ThumbUpAlt /> <span> {TVDetail.popularity}</span>
              </h3>
              <h3>
                <b>Realse Date </b>
                <NewReleases /> <span> {TVDetail.release_date}</span>
              </h3>
              <h3>
                <b>Language </b>
                <Language />{" "}
                <span>
                  {TVDetail.original_language === "en"
                    ? "English"
                    : TVDetail.original_language}
                </span>
              </h3>
              <h3>
                <b>Revenue </b>
                <LocalAtm /> <span> {TVDetail.revenue}</span>
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
          <tbody>{renderReview}</tbody>
        </table>
      </details>
    </div>
  );
};

export default TVDetail;
