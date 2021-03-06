import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  characters: [],
  stories: [],
  issue:undefined,
  format:undefined
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.CHARACTERS_LIST_SET: {
      return {
        ...state,
        characters: action.characters        
      };
    }
    case types.STORIES_LIST_SET: {
      return {
        ...state,
        stories: action.stories        
      };
    }
    case types.COMIC_NAME: {      
      return {
        ...state,
        name:action.name
      };
    }
    case types.COMICS_SORT_BY: {           
      return {
        ...state,
        sortBy:action.sortBy
      };
    }
    case types.ISSUE_LIST_SET: {      
      return {
        ...state,
        issue:action.issue
      };
    }
    case types.FORMAT_LIST_SET: {       
      return {
        ...state,
        format:action.format
      };
    }    
    case types.COMICS_LIST_FILTERS_RESET: {      
      return {
        name: undefined,
        characters: [],
        stories: [],
        issue:undefined,
        format:null
      };
    }
    default: {
      return state;
    }
  }
};
