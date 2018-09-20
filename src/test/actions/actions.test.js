import { setPage, addComment, addPost } from '../../redux/actions/actions';

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

  const action = addPost(post);

  expect(action).toEqual({
    type: 'ADD_POST',
    post
  });
});

test('Should configure addComment action', () => {
  const comment = {
    postId: 1,
    name: 'Anonymous User',
    email: 'email@email.com',
    body: 'ghjjh'
  };
  const action = addComment(comment);
  expect(action).toEqual({
    type: 'ADD_COMMENT',
    comment
  });
});
