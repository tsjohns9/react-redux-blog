import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './components/Routes/routes';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <AppRouter />
      </Provider>
    );
  }
}
