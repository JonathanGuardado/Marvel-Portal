export default {
    hasStories: state => state.data !== undefined,
    getStoryList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },
    getFilters: state => state.data,
    isLoading: state => state.loading,
  };
  