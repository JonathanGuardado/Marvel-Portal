import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';

export default {

  reset: () => ({
    type: types.COMICS_LIST_FILTERS_RESET,
  }),
  setComicsIds: (charactersIds) => ({
    type: types.CHARACTERS_LIST_SET,
    charactersIds
  }),
  setStoriesIds: (storiesIds) => ({
    type: types.STORIES_LIST_SET,
    storiesIds
  }),
  setName: (name) => ({
    type: types.COMIC_NAME,
    name
  })
}