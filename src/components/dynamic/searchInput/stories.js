
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  placeholder : "Search Stories by Name",
  initValue:selectors.storiesFilters.getFilters(state).name  
  
});

const mapDispatchToProps = (dispatch) => ({  
  onSearch:(o)  => dispatch(actions.storiesFilters.setName(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
