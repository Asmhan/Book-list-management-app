import {addBook, editBook} from '../../actions/books';

test('should setup edit book action object', ()=>{
  const action = editBook('12345', {
    title: 'Javascript book',
    description: 'Javascript is an amazing language'
  })

  expect(action).toEqual({
    type: 'EDIT_BOOK',
    id: '12345',
    updates: {
      title: 'Javascript book',
      description: 'Javascript is an amazing language'
    }
  })
})

test("should setup add book action with provided values", ()=>{
   const bookData = {
     title: 'Javascript book',
     description: 'Javascript is an amazing language',
     isbn: '2344443',
     author: '12345668999990',
     category: '56788900000',
     publishYear: 1990,
     numberOfPages: 5
   }
   const action = addBook(bookData);
   expect(action).toEqual({
     type: 'ADD_BOOK',
     book: {
       ...bookData,
       id: expect.any(String),
     }
   })
})

test("should setup add book action with default values", ()=>{
  const action = addBook();
  expect(action).toEqual({
    type: 'ADD_BOOK',
    book: {
      title: '',
      description: '',
      isbn: '',
      author: '',
      category: '',
      publishYear: 1990,
      numberOfPages: 5,
      id: expect.any(String),
    }
  })
})
