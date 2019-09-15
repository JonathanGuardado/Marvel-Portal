
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
});

const mapDispatchToProps = (dispatch) => ({  
    clearFilters:()  => dispatch(actions.charactersFilters.reset())
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
