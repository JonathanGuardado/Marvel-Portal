
export default (stateId, reducer) => {
  let cache; // make the cache default to undefined
  
  return (
    state = cache
    ,
    action
  ) => {
    const newState = reducer(state, action);
    localStorage.setItem(stateId, JSON.stringify(newState));    
    return newState;
  };
};
