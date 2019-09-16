
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.comics.getComicsList(data).promise.then(JSON.parse),  
  filteredValues: selectors.storiesFilters.getFilters(state).comics
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.storiesFilters.setComics(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
