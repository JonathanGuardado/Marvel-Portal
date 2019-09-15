import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';

export default {

  getComicList: (data) => {
    const { storiesApi } = config;
    return {
      type: types.STORIES_LIST,
      promise: fetchWrapper(storiesApi)
        .get(data)
    };
  }  
}