import commentReducer from '../../redux/reducers/comments';
import { comment } from '../fixtures/fixtures';
test('should create new comment', () => {
  const action = {
    type: 'ADD_COMMENT',
    comment
  };
  const state = commentReducer(undefined, action);
  expect(state).toEqual([comment]);
});
