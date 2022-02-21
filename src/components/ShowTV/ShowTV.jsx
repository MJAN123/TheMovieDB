import React from "react";
import MoviesPoster from "../MoviesPoster";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ShowTV = (props) => {
  debugger;
  const { TVList, TVDetail } = props;

  const history = useHistory();
  const TVClicked = (id) => {
    history.push(`/tvshow/detail/${id}`);
    console.log("Dispatching Tv Show Detail Action", TVDetail(id));
    TVDetail(id);
  };

  const renderMovie =
    TVList &&
    TVList.results.length > 0 &&
    TVList.results.map((list) => {
      return (
        <React.Fragment key={list.id}>
          <Grid item xs={12} md={6} lg={3} onClick={() => TVClicked(list.id)}>
            <MoviesPoster movies={list} />
          </Grid>
        </React.Fragment>
      );
    });

  return (
    <div style={{ marginTop: "90px" }}>
      <h1> TV Shows</h1>
      <Grid container spacing={1}>
        {renderMovie}
      </Grid>
    </div>
  );
};

export default ShowTV;
