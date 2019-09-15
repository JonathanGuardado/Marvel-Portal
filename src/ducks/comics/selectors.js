export default {
    hasComics: state => state.data !== undefined,
    getComicList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },    
    isLoading: state => state.loading,
  };
  