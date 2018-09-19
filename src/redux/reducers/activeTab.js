const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.page;
    default:
      return state;
  }
};
