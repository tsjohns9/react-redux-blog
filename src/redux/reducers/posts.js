export default (state = null, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    default:
      return state;
  }
};
