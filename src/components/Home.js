import React from 'react';
import { connect } from 'react-redux';
import Pagination from "./Pagination";
import {selectBooksPerPage, filteredBooksLength} from '../selectors/books';
import BooksList from './BooksList';
import {setPagination} from '../actions/pagination';
import {setSearchText} from '../actions/search';

class Home extends React.Component{
  componentDidMount(){
    this.props.dispatch(setPagination(0, 6))
    this.props.dispatch(setSearchText());
  }
  render(){
    const {books, editMode, booksLength, dispatch} = this.props;
    return (
      <div>
        <BooksList books={books} editMode={editMode} dispatch={dispatch}/>
        <Pagination itemsCountPerPage={6} booksLength={booksLength} dispatch={dispatch}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    books: selectBooksPerPage(state.books, state.authors, state.search.text, state.pagination),
    editMode: state.editMode.editMode,
    booksLength: filteredBooksLength
  };
};

export default connect(mapStateToProps)(Home);
