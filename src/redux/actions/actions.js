export const setPage = (page = 0) => ({
  type: 'SET_PAGE',
  page
});

export const addComment = comment => ({
  type: 'ADD_COMMENT',
  comment
});

export const addPost = post => ({
  type: 'ADD_POST',
  post
});
