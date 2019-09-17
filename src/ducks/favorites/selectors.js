import _ from "lodash";
export default {
  getFavoriteCharacters: state => state.characters,
  getFavoriteComics: state => state.comics,
  getFavoriteStories: state => state.stories,
  getFavFlag: state => state.favFlag,
  isCharacterFavorite: (state, id) =>  _.find(state.characters, c => c.id === id) !==  undefined,
  isComicFavorite: (state, id) =>  _.find(state.comics, c => c.id === id) !==  undefined,
  isStoryFavorite: (state, id) =>  _.find(state.stories, c => c.id === id) !==  undefined 
  };
  