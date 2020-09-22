import React, { useEffect } from "react";
import ShowTV from "../ShowTV";
import Loading from "../Loader";
import { Grid } from "@material-ui/core";

const TVShows = (props) => {
  const { fetchTVShow, tvshow, loading } = props;

  useEffect(() => {
    fetchTVShow();
  }, []);

  const renderTVShow = () => {
    console.log("Loading", loading);

    if (loading) {
      return <Loading />;
    } else if (tvshow && tvshow.results) {
      return <ShowTV TVList={tvshow} />;
    }
  };

  return <div style={{ margin: "90px" }}>{renderTVShow()}</div>;
};

export default TVShows;
