import React from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import {setPagination} from '../actions/pagination';

export default class PaginationComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    const {dispatch, itemsCountPerPage} =this.props;
    this.setState({activePage: pageNumber});
    const startFromPaginationItem = (this.state.activePage -1) * itemsCountPerPage
    dispatch(setPagination(startFromPaginationItem, startFromPaginationItem + itemsCountPerPage))
  }
  render(){
    const {booksLength, itemsCountPerPage} = this.props;
    if (booksLength > itemsCountPerPage){
      return (
          <Pagination
           hideFirstLastPages
           activePage={this.state.activePage}
           itemsCountPerPage={itemsCountPerPage}
           totalItemsCount={booksLength}
           pageRangeDisplayed={9}
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
      )
    }else {
      return null;
    }
  }
}
