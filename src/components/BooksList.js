import React from 'react';
import {Link} from 'react-router-dom';
import EditBtn from './EditBtn';
import {setSearchText} from '../actions/search';

export default class BooksList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
  }
  onSearchChange = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    this.setState(() => ({ searchText }));
    this.props.dispatch(setSearchText(searchText));
  };
  render(){
    const {books, editMode} = this.props;
    return (
      <div>
        <div style={{margin: '20px 40px 0 40px'}}>
          <input
            type="text"
            placeholder="Search by book's title, author,or ISBN"
            value={this.state.searchText}
            onChange={this.onSearchChange}
          />
        </div>
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
                     <EditBtn forwardLink={"/book/" + book.id + "/edit"} editMode={editMode}/>
                     </div>
                     <p>{book.description}</p>
                 </div>
               </li>
             )
           })
         }
        </ul>
      </div>
    )
  }
}
