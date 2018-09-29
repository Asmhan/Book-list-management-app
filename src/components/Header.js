import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {editMode} from '../actions/editMode';

const accessAlert = (item) =>{
  alert('If you want adding new ' + item + ', please enable Edit Mode first !!');
}

const Header = (props) => (
  <header className={props.editMode ? "active-edit-mode-header" : "inactive-edit-mode-header"}>
    <NavLink to="/" activeClassName="is-active" className="home-title" exact={true}>
      Book Listing {props.editMode && <span className="edit-mode-label">Edit Mode</span>}
    </NavLink>
    <div>
      {props.editMode ?
        <NavLink to="/book/new" className="btn add-btns">New Book</NavLink>
        :
        <button onClick={(e)=>accessAlert('book')} className="btn add-btns">New Book</button>
      }
      {props.editMode ?
        <NavLink to="/author/new" className="btn add-btns">New Author</NavLink>
        :
        <button onClick={(e)=>accessAlert('author')} className="btn add-btns">New Author</button>
      }
      {props.editMode ?
        <NavLink to="/category/new" className="btn add-btns">New Category</NavLink>
        :
        <button onClick={(e)=>accessAlert('category')} className="btn add-btns">New Category</button>
      }
      <button
         className={props.editMode ? "btn active-edit-mode-btn" : "btn inactive-edit-mode-btn"}
         onClick={(e)=>{
           e.preventDefault();
           props.dispatch(editMode());
         }}>
         {props.editMode ? 'Exit Edit Mode' : 'Edit Mode'}
      </button>
    </div>
  </header>
)

const mapStateToProps = (state) => {
  return {
    editMode: state.editMode.editMode
  };
};

export default connect(mapStateToProps)(Header);
