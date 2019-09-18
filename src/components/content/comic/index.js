import { connect } from "react-redux";
import { selectors,actions } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({	   	
	isLoadingCharacters: selectors.characters.isLoading(state), 
	isFavorite: (id) => selectors.favorites.isComicFavorite(state, id),
	comic: selectors.comics.getComicById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addComicToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeComicFromFavorites(o))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
