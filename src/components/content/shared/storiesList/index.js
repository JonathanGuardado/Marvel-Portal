import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
    filters: selectors.stories.getFilters(state),
	stories: selectors.stories.getStoriesList(state)	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getStoriesList: data => {
		return dispatch(actions.stories.getStoriesList(data));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
