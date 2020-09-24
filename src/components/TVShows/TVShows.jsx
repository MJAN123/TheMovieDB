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
      return (
        <div style={{ margin: "90px" }}>
          <ShowTV TVList={tvshow} />;
        </div>
      );
    }
  };

  return <div>{renderTVShow()}</div>;
};

export default TVShows;
