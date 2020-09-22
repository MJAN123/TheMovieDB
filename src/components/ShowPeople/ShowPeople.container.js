import { connect } from "react-redux";
import { FetchPeopleDetailAction } from "../../store/Actions";
import ShowPeople from "./ShowPeople";

const mapDispatchToProps = (dispatch) => {
  return {
    peopleDetail: (id) => dispatch(FetchPeopleDetailAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShowPeople);
