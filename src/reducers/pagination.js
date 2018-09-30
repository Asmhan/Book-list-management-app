// Filters Reducer

const paginationsReducerDefaultState = {
  pageNumber: 0,
  itemsCountPerPage: 6
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
