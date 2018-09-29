import React from 'react';
import {Link} from 'react-router-dom';

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
    )
  }
}
