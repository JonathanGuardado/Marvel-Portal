import _ from "lodash";

export default {
    errors: state => state.error,    
    getComicList: (state )=> {
      if(state.data){
    
          return state.data;
    
      }
      return [];
    },  
    getComicById: (state, id) => {
      if (_.find(state.data.results, (item) => item.id === id)) {
        return _.find(state.data.results, (item) => item.id === id)
      }      
    },  
    isLoading: state => state.loading,
  };
  