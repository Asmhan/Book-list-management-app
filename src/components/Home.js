import React from 'react';
import { connect } from 'react-redux';
import Pagination from "./Pagination";
import {selectBooksPerPage} from '../selectors/books';
import BooksList from './BooksList';
import {setPagination} from '../actions/pagination';

class Home extends React.Component{
  componentDidMount(){
    this.props.dispatch(setPagination(0, 6))
  }
  render(){
    const {books, editMode, booksLength, dispatch} = this.props;
    return (
      <div>
        <BooksList books={books} editMode={editMode}/>
        <Pagination itemsCountPerPage={6} booksLength={booksLength} dispatch={dispatch}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    books: selectBooksPerPage(state.books, state.pagination),
    editMode: state.editMode.editMode,
    booksLength: state.books.length
  };
};

export default connect(mapStateToProps)(Home);
