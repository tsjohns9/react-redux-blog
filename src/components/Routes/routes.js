import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Home';
import ViewPost from '../ViewPost';
import Footer from '../Footer';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/post/:id" component={ViewPost} exact={true} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default AppRouter;
