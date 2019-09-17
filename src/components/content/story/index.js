import { connect } from "react-redux";
import { selectors, actions } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({	
	isLoadingCharacters: selectors.characters.isLoading(state), 
	story: selectors.stories.getStoryById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
