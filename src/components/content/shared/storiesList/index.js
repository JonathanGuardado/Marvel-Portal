import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
    favFlag: selectors.favorites.getFavFlag(state),	
	stories: selectors.stories.getStoriesList(state),
	favorites: selectors.favorites.getFavoriteStories(state),	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getStoriesList: data => {
		return dispatch(actions.stories.getStoriesList(data));
	},
	setFavFlag:(f) => dispatch(actions.favorites.setFavFlag(f))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
