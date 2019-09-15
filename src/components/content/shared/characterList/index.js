import { connect } from "react-redux";
import { selectors, actions } from "../../../../ducks";
import view from "./index.jsx";

const mapStateToProps = (state, ownProps) => ({
    filters: selectors.characters.getFilters(state),
	characters: selectors.characters.getCharacterList(state, ownProps.orderId)	
});

const mapDispatchToProps = (dispatch, state, props) => ({
	getCharactersList: data => {
		return dispatch(actions.characters.getCharactersList(data));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
