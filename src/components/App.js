import React from "react";
import Header from "./Header";
import MovieList from "../components/MoviesList";
import Trending from "../components/Trending";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TVShows from "../components/TVShows";
import People from "../components/People";
import Upcomming from "../components/Upcomming";
import MovieDetail from "../components/MovieDetail";
import Footer from "../components/Footer";
import Search from "../components/Search";
import PeopleDetail from "./PeopleDetail/ index";

import TVDetail from "../components/TVDetail";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/upcomming">
          <Upcomming />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/tvshows">
          <TVShows />
        </Route>
        <Route path="/people" exact>
          <People />
        </Route>
        <Route path="/movie/detail/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/people/detail/:peopleId" exact>
          <PeopleDetail />
        </Route>

        <Route path="/tvshow/detail/:TVId">
          <TVDetail />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
