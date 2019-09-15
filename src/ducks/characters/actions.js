import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';
import _ from "lodash";

export default {

  getCharacterList: ({name,comicsIds,storiesIds}) => {
    const { charactersApi } = config;    
    const comics = _.join(_.map(comicsIds, c => c.id), ",");
    const stories = _.join(_.map(storiesIds, s => s.id), ",");
    return {
      type: types.CHARACTERS_LIST,
      promise: fetchWrapper(charactersApi)
        .get({
          nameStartsWith: name || undefined,
          comics: comics || undefined,
          stories: stories || undefined
        })
    };
  }  
}