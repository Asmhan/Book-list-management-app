import uuid from 'uuid';

// ADD_BOOK
export const addBook = (
  {
    title = '',
    description = '',
    isbn = '',
    author = '',
    category = '',
    publishYear = 1990,
    numberOfPages = 5
  } = {}
) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    title,
    description,
    isbn,
    author,
    category,
    publishYear,
    numberOfPages
  }
});


// EDIT_BOOK
export const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates
});
