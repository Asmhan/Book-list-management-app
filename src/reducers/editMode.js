export default (state = {editMode: false}, action)=>{
  switch (action.type) {
    case 'EDIT_MODE':
      return {
        editMode: !state.editMode
      };
    default:
      return state
  }
}
