export const setPage = (page = 0) => ({
  type: 'SET_PAGE',
  page
});

export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts
});

export const getPost = postId => ({
  type: 'GET_POST',
  postId
});
