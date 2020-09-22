import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";
import Loading from "../Loader";

const Trending = (props) => {
  const { fetchTrending, trending, loading } = props;
  console.log("From Trendidfsdfdsfng", trending);

  useEffect(() => {
    fetchTrending();
  }, []);

  const renderTrending = () => {
    console.log("Loading", loading);

    if (loading) {
      return <Loading />;
    } else if (trending && trending.results) {
      return <ShowMovies moviesList={trending} />;
    }
  };

  return <div style={{ margin: "90px" }}>{renderTrending()}</div>;
};

export default Trending;
