import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Home';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
