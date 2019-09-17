
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  placeholder : "Type Issue #",  
  initValue:selectors.comicsFilters.getFilters(state).issue  
  
});

const mapDispatchToProps = (dispatch) => ({  
  onSearch:(o)  => dispatch(actions.comicsFilters.setIssue(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
