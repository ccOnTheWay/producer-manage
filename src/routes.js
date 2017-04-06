import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Home from "./containers/Index/Index"
import Dashboard from "./views/Dashboard/Dashboard"


export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Home}>
      {/**/}
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
    </Route>
  </Router>
  );
