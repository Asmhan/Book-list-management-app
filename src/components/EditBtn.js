import React from 'react';
import {Link} from 'react-router-dom';

const EditBtn = (props)=> {
  return (
     props.editMode &&
      <Link to={props.forwardLink} className="edit-btn">
        <i className="material-icons edit-icon">create</i>Edit
      </Link>

  )
}

export default EditBtn;
