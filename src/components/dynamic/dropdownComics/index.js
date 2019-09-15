
import { connect } from 'react-redux';
import { actions, selectors } from '../../../ducks';
import view from './index.jsx';



const mapStateToProps = (state) => ({  
  getComicList : (data) =>  actions.comics.getComicsList(data).promise.then(JSON.parse),
  comicsList :  selectors.comics.getComicList(state),
  comicsFilters: selectors.charactersFilters.getFilters(state).comicsIds
});

const mapDispatchToProps = (dispatch) => ({  
  setComicsFilters:(o)  => dispatch(actions.charactersFilters.setComicsIds(o))
});




export default connect(mapStateToProps, mapDispatchToProps)(view);
