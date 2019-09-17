import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state) => ({
	isFavorite: (id) => selectors.favorites.isCharacterFavorite(state, id)	
});

const mapDispatchToProps = (dispatch) => ({
	addToFavorites: (o) =>  dispatch(actions.favorites.addCharacterToFavorites(o)),
    removeFavorite: (o) =>  dispatch(actions.favorites.removeCharacterFromFavorites(o)
    )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
