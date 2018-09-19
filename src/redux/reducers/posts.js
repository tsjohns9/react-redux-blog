export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      const setId = () => {
        if (!state.length) {
          action.post.id = 51;
        } else {
          const lastPostId = state.slice(-1)[0].id;
          action.post.id = lastPostId + 1;
        }
      };
      setId();
      return [...state, action.post];
    default:
      return state;
  }
};
