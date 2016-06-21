function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // Return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log(state);
      console.log('Removing a comment');
      // Return the new state without the deleted comment
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.index),
        // After the deleted one to the end
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // Take the current state
      ...state,
      // Overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
