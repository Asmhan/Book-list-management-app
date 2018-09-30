import React from 'react';
import AuthorForm from './AuthorForm';
export default class AddAuthor extends React.Component {
  render(){
    return (
      <div style={{padding: '10px 40px'}}>
        <h1>Add new Author</h1>
        <AuthorForm/>
      </div>
    )
  }
}
