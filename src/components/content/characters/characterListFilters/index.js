import { connect } from 'react-redux';
import { selectors, actions } from '../../../../ducks';
import view from './index.jsx';

const mapStateToProps = (state) => ({
  filters: selectors.charactersFilters.getFilters(state),
  isCharacterListLoading: selectors.characters.isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    getCharacterList: (filters) => dispatch(actions.characters.getCharacterList(filters)).then(dispatch(actions.favorites.setFavFlag(false)))
  
});


export default connect(mapStateToProps, mapDispatchToProps)(view);
