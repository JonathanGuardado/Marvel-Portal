import { connect } from "react-redux";
import { selectors, actions } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
	filters: selectors.comicsFilters.getFilters(state),    	
	isLoadingCharacters: selectors.characters.isLoading(state), 
	comic: selectors.comics.getComicById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
