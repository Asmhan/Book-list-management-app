import uuid from 'uuid';

// ADD_AUTHOR
export const addAuthor = (
  {
    name = '',
    jobTitle = '',
    bio = ''
  } = {}
) => ({
  type: 'ADD_AUTHOR',
  author: {
    id: uuid(),
    name,
    jobTitle,
    bio
  }
});

// EDIT_AUTHOR
export const editAuthor = (id, updates) => ({
  type: 'EDIT_AUTHOR',
  id,
  updates
});
