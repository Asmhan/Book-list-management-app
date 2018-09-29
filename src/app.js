import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {editMode} from './actions/editMode';
const store = configureStore();

store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch(editMode())
// store.dispatch(editMode())

// console.log(store.getState().editMode.editMode);
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
