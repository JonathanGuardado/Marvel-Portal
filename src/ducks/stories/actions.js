import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';
import _ from "lodash";

export default {

  getStoriesList: ({name,characters,comics}) => {
    const { storiesApi } = config;
    const charactersIds = _.join(_.map(characters, c => c.id), ",");
    const comicsIds = _.join(_.map(comics, s => s.id), ",");
    return {
      type: types.STORIES_LIST,
      promise: fetchWrapper(storiesApi)
        .get({
          characters: charactersIds || undefined,
          comics: comicsIds || undefined
        })
    };
  }
}