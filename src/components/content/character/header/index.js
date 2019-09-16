import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
