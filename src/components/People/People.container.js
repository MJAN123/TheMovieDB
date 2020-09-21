import People from "./People";
import { FetchPeopleAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = ({ people }) => {
  return {
    people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => dispatch(FetchPeopleAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
