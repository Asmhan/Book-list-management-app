// Get visible expenses

export default (books, {pageNumber, itemsCountPerPage} ) => {
  return books.slice(pageNumber, itemsCountPerPage);
};
