import React from 'react';
import AuthorForm from './AuthorForm';
import { editAuthor } from '../actions/authors';
import { connect } from 'react-redux';
import {getAuthor} from '../selectors/author';

class EditAuthor extends React.Component {
  render(){
    const {author, dispatch, history} = this.props;
    return (
      <div style={{padding: '10px 40px'}}>
        <h1>Edit Author: {author.name}</h1>
        <AuthorForm
          author={author}
          onSubmit={(author) => {
            dispatch(editAuthor(this.props.author.id, author));
            history.push('/author/' +this.props.author.id);
          }}
          onCancel={(e)=>{
            e.preventDefault();
            this.props.history.goBack();
          }}
        />
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    author: getAuthor(state.authors, props.match.params.authorId),
  };
};
export default connect(mapStateToProps)(EditAuthor);
