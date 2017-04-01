import React from 'react';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';

// Containers
import Index from "./containers/Index/Index"

export default ( 
    <Router>
        <Route path="/" component={Index}/>
    </Router>
);