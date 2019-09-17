import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';
import _ from "lodash";

export default {

  getComicsList: ({name,sortBy,characters,stories,format,issue}) => {
    const { comicsApi } = config;
    const charactersIds = _.join(_.map(characters, c => c.id), ",");
    const storiesIds = _.join(_.map(stories, s => s.id), ",");        
    const formatToFind =   format ? format.id : null 
    
    return {
      type: types.COMICS_LIST,
      promise: fetchWrapper(comicsApi)
        .get({
          characters: charactersIds || undefined,
          stories: storiesIds || undefined,
          format: formatToFind || undefined,
          issueNumber: issue || undefined,
          titleStartsWith: name || undefined,
          orderBy: sortBy || undefined
        })
    };
  }
}