import React, { useEffect } from "react";
import ShowMovies from "../ShowMovie";

const People = (props) => {
  const { fetchPeople, people } = props;
  console.log("From People", people);

  useEffect(() => {
    console.log("Dispatching People action ", fetchPeople());
    fetchPeople();
  }, []);
  return (
    <div style={{ margin: "90px" }}>
      {people && people.results && <ShowMovies moviesList={people} />}
    </div>
  );
};

export default People;
