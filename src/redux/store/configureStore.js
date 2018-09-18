import { createStore, combineReducers } from 'redux';
import activeTabReducer from '../reducers/activeTab';

export default () => {
  const store = createStore(
    combineReducers({
      activeTab: activeTabReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
