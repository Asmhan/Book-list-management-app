import React from 'react';
import { connect } from 'react-redux';

const Home = (props) =>(
  <div>
    <ul>
     {
       props.books.slice(0,6).map((book)=>{
         return (
           <li key={book.id} className="book-item">
             <img src={book.image} style={{height: 250}}/>
             <div style={{padding: 20}}>
               <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                 <div style={{fontSize: 25}}>{book.title}</div>
                 {
                   props.editMode && <button className="edit-btn"><i class="material-icons edit-icon">create</i>Edit</button>
                 }
                 </div>
                 <p>{book.description}</p>
             </div>
           </li>)
       })
     }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    books: state.books,
    authors: state.authors,
    categories: state.categories,
    editMode: state.editMode.editMode
  };
};

export default connect(mapStateToProps)(Home);
