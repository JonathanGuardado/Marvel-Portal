import { connect } from 'react-redux';
import { selectors, actions } from '../../../ducks';
import view from './index.jsx';

const mapStateToProps = (state) => ({
  filters: selectors.characters.getFilters(state),
  isCharacterListLoading: selectors.characters.isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    getCharacterList: (filters) => dispatch(actions.characters.getCharacterList(filters))
  
});


export default connect(mapStateToProps, mapDispatchToProps)(view);
