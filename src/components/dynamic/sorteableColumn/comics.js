
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  columnValue : 'title'
});

const mapDispatchToProps = (dispatch) => ({  
    toggleHandler:(o)  => dispatch(actions.comicsFilters.setSortBy(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
