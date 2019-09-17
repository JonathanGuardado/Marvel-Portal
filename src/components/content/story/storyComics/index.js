import { connect } from "react-redux";
import { selectors } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => (console.log(state),{	
	isLoadingComics: selectors.comics.isLoading(state), 
	story: selectors.stories.getStoryById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
