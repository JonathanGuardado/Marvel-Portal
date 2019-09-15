
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.comics.getComicsList(data).promise.then(JSON.parse),  
  filteredValues: selectors.charactersFilters.getFilters(state).comicsIds
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.charactersFilters.setComicsIds(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
