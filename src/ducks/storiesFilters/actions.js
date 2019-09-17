import types from './types';

export default {

  reset: () => ({
    type: types.STORIES_FILTERS_RESET,
  }),
  setComics: (comics) => ({
    type: types.COMICS_LIST_SET,
    comics
  }),
  setCharacters: (characters) => ({
    type: types.CHARACTERS_LIST_SET,
    characters
  }),
  setName: (name) => ({
    type: types.STORY_NAME,
    name
  })
}