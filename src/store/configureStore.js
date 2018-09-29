import { createStore, combineReducers } from 'redux';
import booksReducer from '../reducers/books';
import categoriesReducer from '../reducers/categories';
import authorsReducer from '../reducers/authors';
import editModeReducer from '../reducers/editMode';
import paginationReducer from '../reducers/pagination';

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      categories: categoriesReducer,
      authors: authorsReducer,
      editMode: editModeReducer,
      pagination: paginationReducer
    })
  );

  return store;
};
