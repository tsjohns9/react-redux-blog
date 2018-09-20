import postsReducer from '../../redux/reducers/posts';

test('should create new comment', () => {
  const post = {
    id: 51,
    userId: 1,
    author: 'Leanne Graham',
    shortBody: '',
    smallImage: 'https://via.placeholder.com/150/56a8c2',
    bigImage: 'https://via.placeholder.com/600/56a8c2',
    body: 'some body text',
    title: 'some title text'
  };
  const action = {
    type: 'ADD_POST',
    post
  };
  const state = postsReducer(undefined, action);
  expect(state).toEqual([post]);
});
