import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = (props)=> (
  <BrowserRouter>
    <div>
    <Header/>
    <Switch>
     <Route path="/" component={Home} exact={true}/>
     <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
