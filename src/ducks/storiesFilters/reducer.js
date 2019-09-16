import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  comics: [],
  characters: []
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.COMICS_LIST_SET: {
      return {
        ...state,
        comics: action.comics        
      };
    }
    case types.CHARACTERS_LIST_SET: {
      return {
        ...state,
        characters: action.characters        
      };
    }
    case types.STORY_NAME: {      
      return {
        ...state,
        name:action.name
      };
    }
    case types.STORIES_FILTERS_RESET: {      
      return {
        name: undefined,
        characters: [],
        comics: []
      };
    }
    default: {
      return state;
    }
  }
};
