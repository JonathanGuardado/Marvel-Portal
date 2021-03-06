import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  selectedData: [],  
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case types.COMICS_LIST: {                
      return {
        ...state,
        loading: true,
        error: {}
      };
    }
    case types.COMICS_LIST_SUCCESS: {
      const data = JSON.parse(action.result);       
      return {
        ...state,
        loading: false,
        error: {},
        data:data.data
      };
    }
    case types.COMICS_LIST_FAILURE: {
      const { error } = action;
      
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
