import postsReducer from '../../redux/reducers/posts';
import { post } from '../fixtures/fixtures';

test('should create new comment', () => {
  const action = {
    type: 'ADD_POST',
    post
  };
  const state = postsReducer(undefined, action);
  expect(state).toEqual([post]);
});
