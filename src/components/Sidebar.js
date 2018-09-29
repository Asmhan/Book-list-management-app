import React from 'react';
import { connect } from 'react-redux';
import SidebarList from './SidebarList';


const Sidebar = (props) =>(
   <div className="sidebar-container">
    <SidebarList items={props.categories} header="Categories" itemLink="/category/"/>
    <SidebarList items={props.authors} header="Authors" itemLink="/author/"/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Sidebar);
