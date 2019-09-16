
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.characters.getCharacterList(data).promise.then(JSON.parse),  
  filteredValues: selectors.comicsFilters.getFilters(state).characters
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.comicsFilters.setCharacters(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
