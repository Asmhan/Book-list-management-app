//Search Filters Reducer

const searchReducerDefaultState = {
  text: ''
};

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        text: action.text
      };
    default:
      return state;
  }
};
