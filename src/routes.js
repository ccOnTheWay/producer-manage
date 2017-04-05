import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Home from "./containers/Index/Index"
import HomeMain from "./views/HomeMain/HomeMain"
import HistoryPrice from "./views/HistoryPrice/HistoryPrice"

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Home}>
        <IndexRoute component={HomeMain}/>
        <Route path="dashboard" name="Dashboard" component={HomeMain}/>
        <Route path="historyPrice" name="HistoryPrice" component={HistoryPrice}/>
    </Route>
  </Router>
  );
