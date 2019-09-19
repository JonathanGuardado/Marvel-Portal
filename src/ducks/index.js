import characters from "./characters";
import charactersFilters from "./charactersFilters";
import comics from "./comics";
import comicsFilters from "./comicsFilters";
import stories from "./stories";
import storiesFilters from "./storiesFilters";
import favorites from "./favorites";

import {
    combineActions,
    combineReducers,
    combineSelectors
  } from "./utils/reusableFactory";

  export const actions = combineActions({
    characters: characters.actions,
    charactersFilters: charactersFilters.actions,
    comics: comics.actions,
    comicsFilters: comicsFilters.actions,
    stories: stories.actions,
    storiesFilters: storiesFilters.actions,
    favorites: favorites.actions
  })
  export const selectors = combineSelectors({
    characters: characters.selectors,    
    charactersFilters: charactersFilters.selectors,    
    comics: comics.selectors,
    comicsFilters: comicsFilters.selectors,
    stories: stories.selectors,
    storiesFilters: storiesFilters.selectors,
    favorites: favorites.selectors
  })
  const appReducer = combineReducers({
    characters: characters.reducer,    
    charactersFilters: charactersFilters.reducer,    
    comics: comics.reducer,
    comicsFilters: comicsFilters.reducer,
    stories: stories.reducer,
    storiesFilters: storiesFilters.reducer,
    favorites: favorites.reducer
  })
  export const rootReducer = (state, action) => {
    if (action.type === "userPreferences:USERPREF_APPLICATION_CACHE_RESET") {
      console.log("Number of items currently in local storage " + localStorage.length);
      localStorage.clear();
      console.log("Number of items in local storage after cache reset " + localStorage.length);
      state = undefined;   
  
    }


    return appReducer(state, action);
  };