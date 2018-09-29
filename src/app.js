import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {editMode} from './actions/editMode';
import {setPagination} from './actions/pagination';
import selectBooks from './selectors/books';
const store = configureStore();

store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch(editMode())
// store.dispatch(editMode())

// console.log(store.getState().editMode.editMode);
// console.log(store.getState().books);
// console.log(selectBooks(store.getState().books, 1, 5));
store.dispatch(setPagination(0, 6));
// console.log(store.getState().pagination);
console.log(selectBooks(store.getState().books, store.getState().pagination));


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
