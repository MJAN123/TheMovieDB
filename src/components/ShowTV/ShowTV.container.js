import { connect } from "react-redux";
import { FetchTVDetailAction } from "../../store/Actions";
import ShowTV from "./ShowTV";

const mapDispatchToProps = (dispatch) => {
  return {
    TVDetail: (id) => dispatch(FetchTVDetailAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShowTV);
