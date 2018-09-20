import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../../../components/Comment';

test('should render Header correctly', () => {
  console.log(Comment);
  const wrapper = shallow(
    <Comment name={'trevor johnson'} body={'adsf fdsa kmckd ak;iw'} />
  );
  console.log(wrapper);
  expect(wrapper).toMatchSnapshot();
});
