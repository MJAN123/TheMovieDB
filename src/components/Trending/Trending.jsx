import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

const Trending = (props) => {
  const { fetchTrending, trending } = props;
  console.log("From Trendidfsdfdsfng", trending);

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div style={{ margin: "90px" }}>
      {trending && trending.results && <ShowMovies moviesList={trending} />}
    </div>
  );
};

export default Trending;
