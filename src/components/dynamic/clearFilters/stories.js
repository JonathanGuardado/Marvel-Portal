
import { connect } from 'react-redux';
import { actions } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
});

const mapDispatchToProps = (dispatch) => ({  
    clearFilters:()  => dispatch(actions.storiesFilters.reset())
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
