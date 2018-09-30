import React from 'react';
import AuthorForm from './AuthorForm';
import { addAuthor } from '../actions/authors';
import { connect } from 'react-redux';

class AddAuthor extends React.Component {
  render(){
    return (
      <div style={{padding: '10px 40px'}}>
        <h1>Add new Author</h1>
        <AuthorForm
          onSubmit={(author) => {
            this.props.dispatch(addAuthor(author));
            this.props.history.push('/');
          }}
        />
      </div>
    )
  }
}

export default connect()(AddAuthor);
