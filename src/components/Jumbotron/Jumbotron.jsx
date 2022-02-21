import React from "react";
import "./style.css";

const Jumbotron = () => {
  return (
      <div className="jumbotron">
          <h1 className="welcome">Welcome.</h1>
          <p className="pera">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        <div className="jumbotron-search">
          <div className="search-container">
            <input type="text" className="search-term" placeholder="Search for a movie, tv show, person"/>
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </div>
    </div>
  );
};

export default Jumbotron;
