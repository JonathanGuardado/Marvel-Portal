import { connect } from "react-redux";
import { selectors } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({	
	isLoadingComics: selectors.comics.isLoading(state), 	
	character: selectors.characters.getCharacterById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

	
