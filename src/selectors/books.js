// select Books
 export const selectBooksPerPage = (books, {pageNumber, itemsCountPerPage} ) => {
  return books.slice(pageNumber, itemsCountPerPage);
};


export const selectBooksById = (books, id)=> {
  return books.filter((book)=>{
    return book.author === id;
  })
}
