export default (state = {editMood: false}, action)=>{
  switch (action.type) {
    case 'EDIT_MOOD':
      return {
        editMood: !state.editMood
      };
    default:
      return state
  }
}
