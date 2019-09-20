import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
	favFlag: selectors.favorites.getFavFlag(state),	
	error: selectors.characters.errors(state),	 
	characters: selectors.characters.getCharacterList(state),	
	favorites: selectors.favorites.getFavoriteCharacters(state),	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getCharactersList: data => {
		return dispatch(actions.characters.getCharactersList(data));
	},
	sortBy:(o)  => dispatch(actions.charactersFilters.setSortBy(o)),
	setFavFlag:(f) => dispatch(actions.favorites.setFavFlag(f))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
