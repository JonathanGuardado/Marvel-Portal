import { connect } from "react-redux";
import { selectors, actions } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
	filters: selectors.charactersFilters.getFilters(state),    
	isLoadingComics: selectors.comics.isLoading(state), 
	isLoadingStories: selectors.stories.isLoading(state), 
	character: selectors.characters.getCharacterById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
