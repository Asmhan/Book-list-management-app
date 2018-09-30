import {getAuthor } from './author';

// select Books
 export var filteredBooksLength;

export const selectBooksPerPage = (books, authors=[], searchText, {pageNumber, itemsCountPerPage} ) => {
  const filteredBooks = books.filter((book)=>{
      const searchWithAuthor = authors.length > 0 ? getAuthor(authors, book.author).name.toLowerCase().includes(searchText.toLowerCase()) : false;
      return book.title.toLowerCase().includes(searchText.toLowerCase()) ||
             book.isbn.toLowerCase().includes(searchText.toLowerCase()) ||
             searchWithAuthor;
      });
  filteredBooksLength = filteredBooks.length;
  return filteredBooks.sort((a, b) => {
          return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
         }).slice(pageNumber, itemsCountPerPage);
};

export const selectBooksById = (books, id)=> {
  return books.filter((book)=>{
    return book.author === id;
  })
}
