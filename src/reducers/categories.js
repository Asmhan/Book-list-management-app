import data from '../books.json';

const categoriesReducerDefaultState = data.categories;

export default (state=categoriesReducerDefaultState, action)=>{
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        ...action.category
      ];
    case 'EDIT_CATEGORY':
      return state.map((category)=>{
        if (category.id === action.id) {
          return {
            ...category,
            ...action.updates
          };
        }else {
          return category;
        }
      });

    default:
      return state;
  }
}
