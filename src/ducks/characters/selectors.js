import _ from 'lodash';

export default {
    hasCharacters: state => state.data !== undefined,
    errors: state => state.error,
    getCharacterList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },
    getCharacterById: (state, id) => {
      if (_.find(state.data.results, (item) => item.id === id)) {
        return _.find(state.data.results, (item) => item.id === id)
      }      
    },
    getFilters: state => state.data,
    isLoading: state => state.loading,
  };
  