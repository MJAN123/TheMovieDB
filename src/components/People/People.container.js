import People from "./People";
import { FetchPeopleAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const people = state.get("people");
  const loading = state.get("loading");
  return {
    people,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => dispatch(FetchPeopleAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
