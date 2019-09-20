import _ from "lodash";

export default {
    hasStories: state => state.data !== undefined,
    errors: state => state.error,
    getStoriesList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },
    getStoryById: (state, id) => {
      if (_.find(state.data.results, (item) => item.id === id)) {
        return _.find(state.data.results, (item) => item.id === id)
      }      
    },
    getFilters: state => state.data,
    isLoading: state => state.loading,
  };
  