import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state) => ({
	isFavorite: (id) => selectors.favorites.isComicFavorite(state, id)	
});

const mapDispatchToProps = (dispatch) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addComicToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeComicFromFavorites(o)
    )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
