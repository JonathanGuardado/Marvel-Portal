
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({    
  list:[{id:'comic',name:'comic'},{id:'magazine',name:'magazine'},{id:'trade paperback',name:'trade paperback'},{id:'hardcover',name:'hardcover'},{id:'digest',name:'digest'},{id:'graphic novel',name:'graphic novel'},{id:'digital comic',name:'digital comic'},{id:'infinite comic',name:'infinite comic'}],
  filteredValues: selectors.comicsFilters.getFilters(state).format ,
  isLoading:selectors.comics.isLoading(state).format 
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => (dispatch(actions.comicsFilters.setFormat(o)))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
