import React from 'react';
import { connect } from 'react-redux';
import {setPagination} from '../actions/pagination';
import BooksList from './BooksList';
import {selectBooksById, selectBooksPerPage} from '../selectors/books';
import {getAuthor} from '../selectors/author';
import {Link} from 'react-router-dom';
import EditBtn from './EditBtn'
import Pagination from "./Pagination";

class Author extends React.Component {
  componentDidMount(){
    this.props.dispatch(setPagination(0, 4))
  }
  render(){
    const {books, editMode, author, dispatch, booksLength} = this.props;
    return(
      <div>
        <div className="author-personal-data-container">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <h2>{author.name}</h2>
            <EditBtn forwardLink={"/author/" + author.id + "/book/"} editMode={editMode}/>
          </div>
          <h5>{'-'+author.jobTitle}</h5>
          <p>{author.bio}</p>
        </div>
        <BooksList books={books} editMode={editMode}/>
        <Pagination itemsCountPerPage={4} dispatch={dispatch} booksLength={booksLength}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    author: getAuthor(state.authors, props.match.params.authorId),
    books: selectBooksPerPage( selectBooksById(state.books, props.match.params.authorId), state.pagination),
    editMode: state.editMode.editMode,
    booksLength: selectBooksById(state.books, props.match.params.authorId).length
  };
};

export default connect(mapStateToProps)(Author);
