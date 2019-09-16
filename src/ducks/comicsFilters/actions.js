import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';

export default {

  reset: () => ({
    type: types.COMICS_LIST_FILTERS_RESET,
  }),
  setCharacters: (characters) => ({
    type: types.CHARACTERS_LIST_SET,
    characters
  }),
  setStories: (stories) => ({
    type: types.STORIES_LIST_SET,
    stories
  }),
  setName: (name) => ({
    type: types.COMIC_NAME,
    name
  }),
  setSortBy: (sortBy) => ({
    type: types.COMICS_SORT_BY,
    sortBy
  })
}