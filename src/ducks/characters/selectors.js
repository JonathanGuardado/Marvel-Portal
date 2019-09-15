export default {
    hasCharacters: state => state.data !== undefined,
    getCharacterList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },
    getFilters: state => state.data,
    isLoading: state => state.loading,
  };
  