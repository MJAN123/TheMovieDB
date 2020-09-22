import React from "react";
import MoviesPoster from "../MoviesPoster";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const ShowPeople = (props) => {
  const { peopleList, peopleDetail } = props;

  const history = useHistory();

  const peopleClicked = (id) => {
    history.push(`/people/detail/${id}`);
    console.log("Dispatching People Detail Action", peopleDetail(id));
    peopleDetail(id);
  };
  const renderMovie =
    peopleList &&
    peopleList.results.length > 0 &&
    peopleList.results.map((list) => {
      return (
        <React.Fragment key={list.id}>
          <Grid item xs={6} sm={3} onClick={() => peopleClicked(list.id)}>
            <MoviesPoster movies={list} />
          </Grid>
        </React.Fragment>
      );
    });

  return (
    <div style={{ margin: "90px" }}>
      <h1> Popular People</h1>
      <Grid container spacing={3}>
        {renderMovie}
      </Grid>
    </div>
  );
};

export default ShowPeople;
