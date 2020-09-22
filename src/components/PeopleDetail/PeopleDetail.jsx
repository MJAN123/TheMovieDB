import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { ImageBaseUrl } from "../../constants/ImagesURl";

const MovieDetail = (props) => {
  const { getPeopleDetial, peopleDetail } = props;
  console.log("From People Detail", peopleDetail);
  useEffect(() => {
    getPeopleDetial(props.match.params.peopleId);
  }, []);

  return (
    <div className="detail" style={{ marginTop: "70px" }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <img src={ImageBaseUrl + peopleDetail.profile_path} />
        </Grid>
        <Grid item xs={8}>
          <div className="container">
            <h1>{peopleDetail.title}</h1>
            <details>
              <summary>Relase Date</summary>
              <p>{peopleDetail.release_date}</p>
            </details>
            <details>
              <summary>popularity</summary>
              <p>{peopleDetail.popularity}</p>
            </details>
            <details>
              <summary>Rating</summary>
              <p>{peopleDetail.vote_average}</p>
            </details>
            <details>
              <summary>original language</summary>
              <p>{peopleDetail.original_language}</p>
            </details>
            <h1>Overview</h1>
            <p>{peopleDetail.overview}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
