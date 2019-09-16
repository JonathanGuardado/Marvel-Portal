import { connect } from 'react-redux';
import { selectors, actions } from '../../../ducks';
import view from './index.jsx';

const mapStateToProps = (state) => ({  
  isStoriesListLoading: selectors.stories.isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({    
});


export default connect(mapStateToProps, mapDispatchToProps)(view);
