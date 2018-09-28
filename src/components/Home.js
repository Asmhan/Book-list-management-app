import React from 'react';
import { connect } from 'react-redux';

const Home = (props) =>(
  <div>
    <h1>Books</h1>
    <ul>
     {
       props.books.map((book)=>{
         return (
           <li key={book.id}>
             <h3>{book.title}</h3>
             <p>{book.description}</p>
           </li>)
       })
     }
    </ul>

    <h1>Authors</h1>
    <ul>
     {
       props.authors.map((author)=>{
         return (
           <li key={author.id}>
             <h3>{author.name}</h3>
             <p>author.bio</p>
           </li>)
       })
     }
    </ul>

    <h1>Categories</h1>
    <ul>
     {
       props.categories.map((category)=>{
         return (
           <li key={category.id}>
             <h3>{category.name}</h3>
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
    categories: state.categories
  };
};

export default connect(mapStateToProps)(Home);
