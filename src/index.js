import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

// Test
import Test from "./components/Test/Test"

//Full
//import Full from "./containers/Full/Full"    <Route path="/home" component={Full}/>


ReactDOM.render(
    (<Router history={history}>
        <Route path="/" component={Test}/>

    </Router> ), document.getElementById('root')
);


