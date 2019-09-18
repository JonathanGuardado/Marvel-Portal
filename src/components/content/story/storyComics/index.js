import { connect } from "react-redux";
import { selectors,actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({	
	isLoadingComics: selectors.comics.isLoading(state), 
	story: selectors.stories.getStoryById(state,parseInt(ownProps.match.params.id)),
	isFavorite: (id) => selectors.favorites.isStoryFavorite(state, id)
});

const mapDispatchToProps = (dispatch, state, props) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addStoryToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeStoryFromFavorites(o))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
