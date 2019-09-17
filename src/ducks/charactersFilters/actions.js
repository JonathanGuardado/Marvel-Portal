import types from './types';

export default {

  reset: () => ({
    type: types.CHARACTER_FILTERS_RESET,
  }),
  setComicsIds: (comicsIds) => ({
    type: types.COMICS_LIST_SET,
    comicsIds
  }),
  setStoriesIds: (storiesIds) => ({
    type: types.STORIES_LIST_SET,
    storiesIds
  }),
  setName: (name) => ({
    type: types.CHARACTER_NAME,
    name
  }),
  setSortBy: (sortBy) => ({
    type: types.CHARACTERS_SORT_BY,
    sortBy
  })
}