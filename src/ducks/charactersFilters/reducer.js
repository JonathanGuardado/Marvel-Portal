import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  name: undefined,
  comicsIds: [],
  storiesIds: []
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
    default: {
      return state;
    }
  }
};
