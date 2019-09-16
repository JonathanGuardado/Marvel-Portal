import { connect } from 'react-redux';
import { selectors, actions } from '../../../ducks';
import view from './index.jsx';

const mapStateToProps = (state) => ({  
  isComicsListLoading: selectors.comics.isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    getComicsList: (filters) => dispatch(actions.comics.getComicsList(filters))
  
});


export default connect(mapStateToProps, mapDispatchToProps)(view);
