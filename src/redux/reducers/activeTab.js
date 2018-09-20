export default (state = 0, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.page;
    default:
      return state;
  }
};
