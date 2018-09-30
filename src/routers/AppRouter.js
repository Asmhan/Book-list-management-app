import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Author from '../components/Author';
import AddAuthor from '../components/AddAuthor';
import { connect } from 'react-redux';


const AppRouter = (props)=> (
  <BrowserRouter>
    <div>
      <Header/>
      <div className="container">
        <Sidebar/>
        <div className="main-content">
          <Switch>
           <Route path="/" component={Home} exact={true}/>
           <Route path="/author/new" component={props.editMode ? AddAuthor : NotFoundPage} exact={true}/>
           <Route path="/author/:authorId" component={Author}/>
           <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)
const mapStateToProps = (state) => {
  return {
    editMode: state.editMode.editMode,
  };
};

export default connect(mapStateToProps)(AppRouter);
