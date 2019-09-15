
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  placeholder : "Search Characters by Name",
  initValue:selectors.charactersFilters.getFilters(state).name  
  
});

const mapDispatchToProps = (dispatch) => ({  
  onSearch:(o)  => dispatch(actions.charactersFilters.setName(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
