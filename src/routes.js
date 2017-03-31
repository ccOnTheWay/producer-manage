/**
 * Created by fengxicai on 3/31/2017.
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-route';

// Containers
//import Full from './containers/Full/'

//Test
import Test from "./components/Test/"

export default (
    <Router history={hashHistory}>
        <Route path="/" name="Home" component={Test}>
          
        </Route>
      
    </Router>
);
