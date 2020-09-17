const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // don't mutate state here or the tests will fail
        let copy = [...state];
        copy.splice(action.index, 1);
        return copy;
  
      default:
        return state;
    }
};
  
const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
}
  
const store = Redux.createStore(immutableReducer);
  