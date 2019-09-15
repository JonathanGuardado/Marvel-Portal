import config from '../../config/endpointsConf';
import fetchWrapper from '../../lib/fetchWrapper';
import types from './types';

export default {

  getCharacterList: (data) => {
    const { charactersApi } = config;
    return {
      type: types.CHARACTERS_LIST,
      promise: fetchWrapper(charactersApi)
        .get(data)
    };
  }  
}