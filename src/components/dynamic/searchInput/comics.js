
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  placeholder : "Search Comics by Title",
  initValue:selectors.comicsFilters.getFilters(state).name  
  
});

const mapDispatchToProps = (dispatch) => ({  
  onSearch:(o)  => dispatch(actions.comicsFilters.setName(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
