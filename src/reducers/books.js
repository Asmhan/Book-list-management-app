// Books Reducer
import data from '../books.json';

const booksReducerDefaultState = data.books;

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.book
      ];
    case 'EDIT_BOOK':
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            ...action.updates
          };
        } else {
          return book;
        };
      });
    default:
      return state;
  }
};
