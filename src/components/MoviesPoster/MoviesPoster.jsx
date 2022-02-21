import React from "react";

import "./style.css";
import { ImageBaseUrl } from "../../constants/ImagesURl";
import { useHistory } from "react-router-dom";
import RatingProgressBar from '../common/RatingProgressBar'
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
      <div className="title-container">
      <div className='progress-bar-container' >
        <RatingProgressBar value={movies.vote_average * 10}/>
      </div>
          <div className="title">

            {movies.title != null
              ? movies.title
              : movies.name != null
              ? movies.name
              : "No Title"}
        </div>
        <div className="release-date">
          12 nov 2021
        </div>
      </div>
    </div>
  );
};

export default MoviesPoster;
