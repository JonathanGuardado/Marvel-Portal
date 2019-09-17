import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state) => ({
	isFavorite: (id) => selectors.favorites.isStoryFavorite(state, id)	
});

const mapDispatchToProps = (dispatch) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addStoryToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeStoryFromFavorites(o)
    )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
