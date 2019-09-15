import characters from "./characters";

import {
    combineActions,
    combineReducers,
    combineSelectors
  } from "./utils/reusableFactory";

  export const actions = combineActions({
    characters: characters.actions
  })
  export const selectors = combineSelectors({
    characters: characters.selectors
  })
  const appReducer = combineReducers({
    characters: characters.reducer
  })
  export const rootReducer = (state, action) => {
    if (action.type == "userPreferences:USERPREF_APPLICATION_CACHE_RESET") {
      console.log("Number of items currently in local storage " + localStorage.length);
      localStorage.clear();
      console.log("Number of items in local storage after cache reset " + localStorage.length);
      state = undefined;
  
      // clear ALL of the workbox cache
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
          return caches.delete(key);
        })
      )).then(() => {
        console.log('Cache cleared!');
      })
    }


    return appReducer(state, action);
  };