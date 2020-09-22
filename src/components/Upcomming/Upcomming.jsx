import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";
import Loading from "../Loader/index";
const Upcomming = (props) => {
  const { fetchUpcomming, upcomming, loading } = props;
  console.log("From Up Comming", upcomming);
  useEffect(() => {
    fetchUpcomming();
  }, []);

  const renderMovies = () => {
    console.log("Loading", loading);

    if (loading) {
      return <Loading />;
    } else if (upcomming && upcomming.results) {
      return <ShowMovies moviesList={upcomming} />;
    }
  };

  return <div style={{ margin: "90px" }}>{renderMovies()}</div>;
};

export default Upcomming;
