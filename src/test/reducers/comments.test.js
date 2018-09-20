import commentReducer from '../../redux/reducers/comments';

test('should create new comment', () => {
  const comment = {
    postId: 1,
    name: 'Anonymous User',
    email: 'email@email.com',
    body: 'ghjjh'
  };
  const action = {
    type: 'ADD_COMMENT',
    comment
  };
  const state = commentReducer(undefined, action);
  expect(state).toEqual([comment]);
});
