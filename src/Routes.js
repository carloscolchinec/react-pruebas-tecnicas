import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostDestacados from './components/posts/PostDestacados';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/post-destacados" component={PostDestacados} />
      </Switch>
    </Router>
  );
};

export default Routes;
