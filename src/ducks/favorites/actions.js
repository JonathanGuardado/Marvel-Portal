import types from './types';

export default {

  addCharacterToFavorites: (id) => ({    
    type: types.CHARACTER_SELECTED_ADD,
    id
  }),
  removeCharacterFromFavorites: ( id) => ({
    type: types.CHARACTER_SELECTED_REMOVE,
    id
  }),
  addComicToFavorites: (id) => ({    
    type: types.COMIC_SELECTED_ADD,
    id
  }),
  removeComicFromFavorites: ( id) => ({
    type: types.COMIC_SELECTED_REMOVE,
    id
  }),
  addStoryToFavorites: (id) => ({    
    type: types.STORY_SELECTED_ADD,
    id
  }),
  removeStoryFromFavorites: ( id) => ({
    type: types.STORY_SELECTED_REMOVE,
    id
  }),
  setFavFlag: (flag) => ({
    type: types.FAVORITES_FLAG_SET,
    flag
  })
}