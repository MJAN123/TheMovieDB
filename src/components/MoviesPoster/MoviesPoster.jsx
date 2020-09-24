import React from "react";

import "./style.css";
import { ImageBaseUrl } from "../../constants/ImagesURl";
import { useHistory } from "react-router-dom";

const MoviesPoster = (props) => {
  const { movies } = props;

  return (
    <div className="card">
      <img
        className="img"
        src={
          (ImageBaseUrl + movies.poster_path).includes(".jpg") ||
          (ImageBaseUrl + movies.profile_path).includes(".jpg") === true
            ? movies.poster_path != null
              ? ImageBaseUrl + movies.poster_path
              : ImageBaseUrl + movies.profile_path
            : require("../../assets/Images/download.png")
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
