import { setPage, addComment, addPost } from '../../redux/actions/actions';
import { comment, post } from '../fixtures/fixtures';

test('Should configure setPage action', () => {
  const action = setPage(2);
  expect(action).toEqual({
    type: 'SET_PAGE',
    page: 2
  });
});

test('Should configure setPage default action', () => {
  const action = setPage();
  expect(action).toEqual({
    type: 'SET_PAGE',
    page: 0
  });
});

test('Should configure addPost action', () => {
  const action = addPost(post);

  expect(action).toEqual({
    type: 'ADD_POST',
    post
  });
});

test('Should configure addComment action', () => {
  const action = addComment(comment);
  expect(action).toEqual({
    type: 'ADD_COMMENT',
    comment
  });
});
