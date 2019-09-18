import { connect } from "react-redux";
import { selectors ,actions} from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({	
	isLoadingComics: selectors.comics.isLoading(state), 	
	character: selectors.characters.getCharacterById(state,parseInt(ownProps.match.params.id)),
	isFavorite: (id) => selectors.favorites.isCharacterFavorite(state, id),
});

const mapDispatchToProps = (dispatch, state, props) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addCharacterToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeCharacterFromFavorites(o))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
