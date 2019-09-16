
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  columnValue : 'name'
});

const mapDispatchToProps = (dispatch) => ({  
    toggleHandler:(o)  => dispatch(actions.charactersFilters.setSortBy(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
