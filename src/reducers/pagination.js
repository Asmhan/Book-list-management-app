// Filters Reducer

const paginationsReducerDefaultState = {
  pageNumber: 1,
  itemsCountPerPage: 5
};

export default (state = paginationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PAGINATION':
      return {
        pageNumber: action.pageNumber,
        itemsCountPerPage: action.itemsCountPerPage
      };
    default:
      return state;
  }
};
