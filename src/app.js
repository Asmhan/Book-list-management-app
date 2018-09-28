import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {editMood} from './actions/editMood';
const store = configureStore();

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(editMood())
store.dispatch(editMood())

console.log(store.getState().editMood.editMood);
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
