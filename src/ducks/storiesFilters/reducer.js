import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  comicsIds: [],
  charactersIds: []
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.COMICS_LIST_SET: {
      return {
        ...state,
        comicsIds: action.comicsIds        
      };
    }
    case types.CHARACTERS_LIST_SET: {
      return {
        ...state,
        storiesIds: action.storiesIds        
      };
    }
    case types.STORY_NAME: {      
      return {
        ...state,
        name:action.name
      };
    }
    default: {
      return state;
    }
  }
};
