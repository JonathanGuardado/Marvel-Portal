import { connect } from "react-redux";
import { selectors, actions } from "../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => (console.log(state, ownProps),{
    filters: selectors.characters.getFilters(state),    
	character: selectors.characters.getCharacterById(state,parseInt(ownProps.match.params.id))	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);

    