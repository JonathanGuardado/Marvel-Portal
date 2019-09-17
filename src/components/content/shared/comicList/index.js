import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({    
	comics: selectors.comics.getComicList(state)	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getComicsList: data => {
		return dispatch(actions.comics.getComicsList(data));
	},
	sortBy:(o)  => dispatch(actions.comicsFilters.setSortBy(o))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
