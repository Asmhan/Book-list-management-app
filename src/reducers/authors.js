// Authors Reducer
import data from '../books.json';

const authorsReducerDefaultState = data.authors;

export default (state = authorsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_AUTHOR':
      return [
        ...state,
        action.author
      ];
    case 'EDIT_AUTHOR':
      return state.map((author) => {
        if (author.id === action.id) {
          return {
            ...author,
            ...action.updates
          };
        } else {
          return author;
        };
      });
    default:
      return state;
  }
};
