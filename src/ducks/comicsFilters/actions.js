import types from './types';

export default {

  reset: () => ({
    type: types.COMICS_LIST_FILTERS_RESET,
  }),
  setCharacters: (characters) => ({
    type: types.CHARACTERS_LIST_SET,
    characters
  }),
  setStories: (stories) => ({
    type: types.STORIES_LIST_SET,
    stories
  }),
  setName: (name) => ({
    type: types.COMIC_NAME,
    name
  }),
  setFormat: (format) => ({    
    type: types.FORMAT_LIST_SET,
    format
  }),
  setIssue: (issue) => ({
    type: types.ISSUE_LIST_SET,
    issue
  }),
  setSortBy: (sortBy) => ({
    type: types.COMICS_SORT_BY,
    sortBy
  })
}