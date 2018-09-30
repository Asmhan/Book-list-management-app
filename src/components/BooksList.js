import React from 'react';
import {Link} from 'react-router-dom';
import EditBtn from './EditBtn';
export default class BooksList extends React.Component {
  render(){
    const {books, editMode} = this.props;
    return (
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
             </li>)
         })
       }
      </ul>
    )
  }
}
