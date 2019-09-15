import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  selectedData: [],
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.STORIES_LIST: {                
      return {
        ...state,
        loading: true,
        error: {}
      };
    }
    case types.STORIES_LIST_SUCCESS: {
      const data = JSON.parse(action.result); 
      console.log(data)     
      return {
        ...state,
        loading: false,
        error: {},
        data:data.data
      };
    }
    case types.STORIES_LIST_FAILURE: {
      const { error } = action;
      console.log(action)
      return {
        ...state,
        loading: false,
        error
      };    
    }
    default: {
      return state;
    }
  }
};
