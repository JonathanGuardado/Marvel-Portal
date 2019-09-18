import { connect } from "react-redux";
import { selectors ,actions} from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
	filters: selectors.charactersFilters.getFilters(state),    	
	isLoadingStories: selectors.stories.isLoading(state), 
	isFavorite: (id) => selectors.favorites.isCharacterFavorite(state, id),
	character: selectors.characters.getCharacterById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addCharacterToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeCharacterFromFavorites(o))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
