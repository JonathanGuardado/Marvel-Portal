import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  charactersIds: [],
  storiesIds: []
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.CHARACTERS_LIST_SET: {
      return {
        ...state,
        charactersIds: action.charactersIds        
      };
    }
    case types.STORIES_LIST_SET: {
      return {
        ...state,
        storiesIds: action.storiesIds        
      };
    }
    case types.COMIC_NAME: {      
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
