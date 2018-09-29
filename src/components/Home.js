import React from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import selectBooks from '../selectors/books';
import {setPagination} from '../actions/pagination';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    const startFromPaginationItem = (this.state.activePage -1) * 6
    this.props.dispatch(setPagination(startFromPaginationItem, startFromPaginationItem + 6))
  }
  render(){
    const {books, editMode} = this.props;
    return (
      <div>
        <ul>
         {
           books.map((book)=>{
             return (
               <li key={book.id} className="book-item">
                 <img src={book.image} style={{height: 250}}/>
                 <div style={{padding: 20}}>
                   <div className="book-title-and-edit-btn-container">
                     <div style={{fontSize: 25}}>
                       <Link to={"/book/" + book.id} className="book-title">{book.title}</Link>
                     </div>
                     {
                       editMode
                       &&
                       <Link to={"/book/" + book.id + "/edit"} className="edit-btn">
                         <i class="material-icons edit-icon">create</i>Edit
                       </Link>
                     }
                     </div>
                     <p>{book.description}</p>
                 </div>
               </li>)
           })
         }
        </ul>

        <Pagination
         hideFirstLastPages
         activePage={this.state.activePage}
         itemsCountPerPage={6}
         totalItemsCount={this.props.booksLength}
         pageRangeDisplayed={5}
         prevPageText={<i className='material-icons'>chevron_left</i>}
         nextPageText={<i className='material-icons'>chevron_right</i>}
         onChange={this.handlePageChange}
         innerClass	="pagination"
         itemClass="pagination-item"
         itemClassNext="pagination-next-item"
         itemClassPrev="pagination-previous-item"
         activeClass="active-page"
         activeLinkClass="active-page-link"
         linkClassPrev="link-class-prev"
         linkClassNext="link-class-next"
         linkClass="link-class"
       />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    books: selectBooks(state.books, state.pagination),
    editMode: state.editMode.editMode,
    booksLength: state.books.length
  };
};

export default connect(mapStateToProps)(Home);
