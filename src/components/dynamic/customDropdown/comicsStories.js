
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.stories.getStoriesList(data).promise.then(JSON.parse),  
  filteredValues: selectors.comicsFilters.getFilters(state).stories
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.comicsFilters.setStories(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
