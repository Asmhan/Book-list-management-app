import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Author from '../components/Author';

const AppRouter = (props)=> (
  <BrowserRouter>
    <div>
      <Header/>
      <div className="container">
        <Sidebar/>
        <div className="main-content">
          <Switch>
           <Route path="/" component={Home} exact={true}/>
           <Route path="/author/:authorId" component={Author} exact={true}/>
           <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter;
