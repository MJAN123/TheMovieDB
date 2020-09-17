import React from "react";
import "./style.css";
import { ImageBaseUrl } from "../../constants/ImagesURl";

const MoviesPoster = (props) => {
  const { movies } = props;
  console.log("From POster", movies);
  return (
    <div className="card">
      <img src={ImageBaseUrl + movies.poster_path} alt={movies.title} />
      <div className=" container">
        <h4>
          <b>{movies.title}</b>
        </h4>
        <p> {movies.release_date}</p>
      </div>
    </div>
  );
};

export default MoviesPoster;
