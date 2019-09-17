import { connect } from "react-redux";
import { selectors } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
	filters: selectors.charactersFilters.getFilters(state),    	
	isLoadingStories: selectors.stories.isLoading(state), 
	comic: selectors.comics.getComicById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
