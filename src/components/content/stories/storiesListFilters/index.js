import { connect } from 'react-redux';
import { selectors, actions } from '../../../../ducks';
import view from './index.jsx';

const mapStateToProps = (state) => ({
  filters: selectors.storiesFilters.getFilters(state),
  isStoriesListLoading: selectors.stories.isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    getStoriesList: (filters) => dispatch(actions.stories.getStoriesList(filters))
  
});


export default connect(mapStateToProps, mapDispatchToProps)(view);
