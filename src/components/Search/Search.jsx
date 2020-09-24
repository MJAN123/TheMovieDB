import React, { useEffect, useState } from "react";
import Loading from "../Loader";
import ShowMovies from "../ShowMovie";
import "./style.css";

import { DebounceInput } from "react-debounce-input";

const Search = (props) => {
  const { fetchSearch, search, loading } = props;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetchSearch(searchTerm);
    }
  }, [searchTerm]);

  const renderSearchList = () => {
    if (loading) {
      return <Loading />;
    } else if (search && search.results) {
      return <ShowMovies moviesList={search} />;
    }
  };

  return (
    <div className="search">
      <div className="search-result">
        <DebounceInput
          placeholder=" Search Term"
          debounceTimeout={1000}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div>{renderSearchList()}</div>
      </div>
    </div>
  );
};

export default Search;
