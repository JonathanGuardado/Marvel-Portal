
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.stories.getStoriesList(data).promise.then(JSON.parse),  
  filteredValues: selectors.charactersFilters.getFilters(state).storiesIds
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.charactersFilters.setStoriesIds(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
