import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';
import _ from "lodash";

export default {

  getComicsList: ({title,characters,stories}) => {
    const { comicsApi } = config;
    const charactersIds = _.join(_.map(characters, c => c.OBJECT_ID), ",");
    const storiesIds = _.join(_.map(stories, s => s.OBJECT_ID), ",");
    return {
      type: types.COMICS_LIST,
      promise: fetchWrapper(comicsApi)
        .get({
          characters: charactersIds || undefined,
          stories: storiesIds || undefined,
          titleStartsWith: title || undefined,
        })
    };
  }
}