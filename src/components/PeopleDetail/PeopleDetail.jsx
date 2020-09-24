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

const PeopleDetail = (props) => {
  console.log(" From Detail", props.match.params.peopeId);
  const { getPeopleDetial, peopleDetail } = props;
  useEffect(() => {
    getPeopleDetial(props.match.params.peopleId);
  }, []);

  return (
    <div className="container">
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={12} md={4}>
          <h1>Poster</h1>
          <div className="card">
            <img
              src={ImageBaseUrl + peopleDetail.profile_path}
              alt={peopleDetail.name}
              // onClick={() => moviesClicked(movieDetail.id)}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <h1>Detail</h1>
          <Card>
            <CardContent>
              <h1>Name: {peopleDetail.name}</h1>
              <p>
                <b>BIOGRAPHY: </b> {peopleDetail.biography}
              </p>

              <h3>
                <b>KNOWN AS A </b>
                <Stars />
                <span> {peopleDetail.known_for_department}</span>
              </h3>

              <h3>
                <b>POPULARITY </b>
                <ThumbUpAlt /> <span> {peopleDetail.popularity}</span>
              </h3>
              <h3>
                <b>DATE OF BIRTH </b>
                <NewReleases /> <span> {peopleDetail.birthday}</span>
              </h3>
              <h3>
                <b>PLACE OF BIRTH </b>
                <Language />
                <span>{peopleDetail.place_of_birth}</span>
              </h3>

              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PeopleDetail;
