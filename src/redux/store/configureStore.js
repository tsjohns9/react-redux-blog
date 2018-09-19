import { createStore, combineReducers } from 'redux';
import activeTabReducer from '../reducers/activeTab';
import commentReducer from '../reducers/comments';
// import postsReducer from '../reducers/posts';

export default () => {
  const store = createStore(
    combineReducers({
      activeTab: activeTabReducer,
      comments: commentReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
