import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

const Upcomming = (props) => {
  const { fetchUpcomming, upcomming } = props;
  console.log("From Up Comming", upcomming);
  useEffect(() => {
    console.log("Dispacthcing ", fetchUpcomming());
    fetchUpcomming();
  }, []);
  return (
    <div style={{ margin: "90px" }}>
      {upcomming && upcomming.results && <ShowMovies moviesList={upcomming} />}
    </div>
  );
};

export default Upcomming;
