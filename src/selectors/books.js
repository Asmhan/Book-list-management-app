// select Books
 export const selectBooksPerPage = (books, {pageNumber, itemsCountPerPage} ) => {
  return books.sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  }).slice(pageNumber, itemsCountPerPage);
};

export const selectBooksById = (books, id)=> {
  return books.filter((book)=>{
    return book.author === id;
  })
}
