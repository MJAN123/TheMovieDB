import React from "react";
import Header from "./Header";
import MovieList from "../components/MoviesList";
const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <footer>
        <MovieList />
      </footer>
    </React.Fragment>
  );
};

export default App;
