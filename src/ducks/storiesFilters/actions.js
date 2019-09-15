import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';

export default {

  reset: () => ({
    type: types.STORIES_FILTERS_RESET,
  }),
  setComicsIds: (comicsIds) => ({
    type: types.COMICS_LIST_SET,
    comicsIds
  }),
  setCharactersIds: (charactersIds) => ({
    type: types.CHARACTERS_LIST_SET,
    charactersIds
  }),
  setName: (name) => ({
    type: types.CHARACTER_NAME,
    name
  })
}