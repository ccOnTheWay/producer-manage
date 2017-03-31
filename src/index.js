import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {  Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

// Test    <Route path="/" component={Test}/>
import Test from "./components/Test/Test"
// Full
import Full from "./containers/Full/Full"
ReactDOM.render(
    (<BrowserRouter history={history}>

        <Route path="/" component={Full}/>
    </BrowserRouter> ), document.getElementById('root')
);


