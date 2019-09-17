import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({  
	favFlag: selectors.favorites.getFavFlag(state),	  
	comics: selectors.comics.getComicList(state),	
	favorites: selectors.favorites.getFavoriteComics(state),	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getComicsList: data => {
		return dispatch(actions.comics.getComicsList(data));
	},
	sortBy:(o)  => dispatch(actions.comicsFilters.setSortBy(o)),
	setFavFlag:(f) => dispatch(actions.favorites.setFavFlag(f))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
