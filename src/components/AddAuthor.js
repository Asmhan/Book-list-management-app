import React from 'react';
import AuthorForm from './AuthorForm';
import { addAuthor } from '../actions/authors';
import { connect } from 'react-redux';

class AddAuthor extends React.Component {
  render(){
    const {dispatch, history} = this.props;
    return (
      <div style={{padding: '10px 40px'}}>
        <h1>Add new Author</h1>
        <AuthorForm
          onSubmit={(author) => {
            dispatch(addAuthor(author));
            history.push('/');
          }}
          onCancel={(e)=>{
            e.preventDefault();
            history.goBack();
          }}
        />
      </div>
    )
  }
}

export default connect()(AddAuthor);
