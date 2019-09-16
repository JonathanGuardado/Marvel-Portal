
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getList : (data) =>  actions.characters.getCharacterList(data).promise.then(JSON.parse),  
  filteredValues: selectors.storiesFilters.getFilters(state).characters
});

const mapDispatchToProps = (dispatch) => ({  
  setValuesFilters:(o)  => dispatch(actions.storiesFilters.setCharacters(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
