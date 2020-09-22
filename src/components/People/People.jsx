import React, { useEffect } from "react";
import ShowPeople from "../ShowPeople";
import Loading from "../Loader";
const People = (props) => {
  const { fetchPeople, people, loading } = props;

  useEffect(() => {
    console.log("Dispatching People action ", fetchPeople());
    fetchPeople();
  }, []);

  const renderPeople = () => {
    console.log("Loading", loading);

    if (loading) {
      return <Loading />;
    } else if (people && people.results) {
      return <ShowPeople peopleList={people} />;
    }
  };

  return <div style={{ margin: "90px" }}>{renderPeople()}</div>;
};

export default People;
