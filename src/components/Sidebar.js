import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (props) =>(
   <div className="sidebar-container">
    <h2>Categories</h2>
    <ul>
     {
       props.categories.slice(0, 4).map((category)=>{
         return (
           <li key={category.id}>
             <h5>{category.name}</h5>
           </li>)
       })
     }
    </ul>

    <h2>Authors</h2>
    <ul>
     {
       props.authors.slice(0, 4).map((author)=>{
         return (
           <li key={author.id}>
             <h5>{author.name}</h5>
           </li>)
       })
     }
    </ul>

  </div>
);

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Sidebar);
