import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  comicsIds: [],
  storiesIds: [],
  sortBy:undefined
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.COMICS_LIST_SET: {
      return {
        ...state,
        comicsIds: action.comicsIds        
      };
    }
    case types.STORIES_LIST_SET: {
      return {
        ...state,
        storiesIds: action.storiesIds        
      };
    }
    case types.CHARACTER_NAME: {      
      return {
        ...state,
        name:action.name
      };
    }
    case types.CHARACTERS_SORT_BY: {     
      console.log(action.sortBy) 
      return {
        ...state,
        sortBy:action.sortBy
      };
    }
    case types.CHARACTER_FILTERS_RESET: {      
      return {
        name: undefined,
        comicsIds: [],
        storiesIds: []
      };
    }
    
    default: {
      return state;
    }
  }
};
