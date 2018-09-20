import activeTab from '../../redux/reducers/activeTab';

test('should set active page', () => {
  const action = {
    type: 'SET_PAGE',
    page: 1
  };
  const state = activeTab(undefined, action);
  expect(state).toBe(1);
});
