import React, { Component } from 'react';
import AppRouter from './components/Routes/routes';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { setPage } from './redux/actions/actions';

const store = configureStore();

store.dispatch(setPage());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
