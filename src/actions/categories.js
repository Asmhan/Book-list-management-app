import uuid from 'uuid';

// ADD_CATEGORY
export const addCategory = (
  {
    name = ''
  } = {}
) => ({
  type: 'ADD_CATEGORY',
  category: {
    id: uuid(),
    name
  }
});

// EDIT_CATEGORY
export const editCategory = (id, updates) => ({
  type: 'EDIT_CATEGORY',
  id,
  updates
});
