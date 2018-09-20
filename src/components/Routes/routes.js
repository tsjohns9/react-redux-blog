import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Home';
import ViewPost from '../ViewPost';
import About from '../About';
import Author from '../Author';
import CreatePost from '../CreatePost';

// handles all routes for the app
const AppRouter = () => (
  <Router>
    <div className="pb-5">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/create/post" component={CreatePost} exact={true} />
        <Route path="/author/:id" component={Author} exact={true} />
        <Route path="/post/:id" component={ViewPost} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
