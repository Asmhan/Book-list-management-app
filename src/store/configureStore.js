import { createStore, combineReducers } from 'redux';
import booksReducer from '../reducers/books';
import categoriesReducer from '../reducers/categories';
import authorsReducer from '../reducers/authors';
import editModeReducer from '../reducers/editMode';


export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      categories: categoriesReducer,
      authors: authorsReducer,
      editMode: editModeReducer
    })
  );

  return store;
};
