import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ImageBaseUrl } from "../../constants/ImagesURl";

const TVDetail = (props) => {
  const { getTVDetial, TVDetail } = props;
  useEffect(() => {
    getTVDetial(props.match.params.TVId);
  }, []);

  return (
    <div className="detail" style={{ marginTop: "70px" }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <img src={ImageBaseUrl + TVDetail.poster_path} />
        </Grid>
        <Grid item xs={8}>
          <div className="container">
            <h1>{TVDetail.title}</h1>
            <details>
              <summary>Relase Date</summary>
              <p>{TVDetail.release_date}</p>
            </details>
            <details>
              <summary>popularity</summary>
              <p>{TVDetail.popularity}</p>
            </details>
            <details>
              <summary>Rating</summary>
              <p>{TVDetail.vote_average}</p>
            </details>
            <details>
              <summary>original language</summary>
              <p>{TVDetail.original_language}</p>
            </details>
            <h1>Overview</h1>
            <p>{TVDetail.overview}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TVDetail;
