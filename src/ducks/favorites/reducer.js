import _ from "lodash";
import types from './types';

const INIT_STATE = {
  loading: false,
  data: [],
  error: {},
  characters:[],
  comics:[],
  stories:[],
  favFlag:false
};

export default (state = INIT_STATE, action = {}) => {
  switch (action.type) {    
    case types.CHARACTER_SELECTED_ADD: {
      const { id } = action;
      return {
        ...state,
        characters: [...state.characters, id ]
      };
    }
    case types.CHARACTER_SELECTED_REMOVE: {      
      return {
        ...state,
        characters: _.filter(state.characters,item => item.id !== action.id.id)
      };
    }
    case types.COMIC_SELECTED_ADD: {
      const { id } = action;
      return {
        ...state,
        comics: [...state.comics, id ]
      };
    }
    case types.COMIC_SELECTED_REMOVE: {
      return {
        ...state,
        comics: _.filter(state.comics,item => item.id !== action.id.id)
      };
    }
    case types.STORY_SELECTED_ADD: {
      const { id } = action;
      return {
        ...state,
        stories: [...state.stories, id ]
      };
    }
    case types.STORY_SELECTED_REMOVE: {
      
      return {
        ...state,
        stories: _.filter(state.stories,item => item.id !== action.id.id)
      };
    }
    case types.FAVORITES_FLAG_SET:{
      return {
        ...state,
        favFlag:action.flag
      };
    }
    
    default: {
      return state;
    }
  }
};
