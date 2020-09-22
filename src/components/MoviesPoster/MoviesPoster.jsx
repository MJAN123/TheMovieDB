import React from "react";

import "./style.css";
import { ImageBaseUrl } from "../../constants/ImagesURl";
import { useHistory } from "react-router-dom";

const MoviesPoster = (props) => {
  const { movies } = props;
  // const history = useHistory();

  // const moviesClicked = (id) => {
  //   history.push(`/detail/${id}`);
  //   console.log("Dispatching Movie Detail Action", fetchDetail(id));
  //   fetchDetail(id);
  // };
  return (
    <div className="card">
      <img
        src={
          ImageBaseUrl +
          (movies.poster_path != null
            ? movies.poster_path
            : movies.profile_path)
        }
        alt={movies.title}
        // onClick={() => moviesClicked(movies.id)}
      />
      <div className=" container">
        <h4>
          <b>
            {movies.title != null
              ? movies.title
              : movies.name != null
              ? movies.name
              : "No Title"}
          </b>
        </h4>
        <p> {movies.vote_average}</p>
      </div>
    </div>
  );
};

export default MoviesPoster;
