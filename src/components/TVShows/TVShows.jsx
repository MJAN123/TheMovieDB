import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

const TVShows = (props) => {
  const { fetchTVShow, tvshow } = props;
  console.log("From Trendidfsdfdsfng", tvshow);

  useEffect(() => {
    fetchTVShow();
  }, []);
  return (
    <div style={{ margin: "90px" }}>
      {tvshow && tvshow.results && <ShowMovies moviesList={tvshow} />}
    </div>
  );
};

export default TVShows;
