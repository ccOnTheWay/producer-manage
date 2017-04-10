import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// Containers
import Home from "./containers/Index/Index"
//views
import Dashboard from "./views/Dashboard/Dashboard"
import HistoricalQuotation from "./views/HistoricalQuotation/HistoricalQuotation"
/*import DeleteAccount from "./views/DeleteAccount/DeleteAccount"
import InviteSupplier from "./views/InviteSupplier/InviteSupplier"
import LogOut from "./views/LogOut/LogOut"
import ManufactureInfo from "./views/ManufactureInfo/ManufactureInfo"
import PriorityLevel from "./views/PriorityLevel/PriorityLevel"
import Search from "./views/Search/Search"
import SupplierList from "./views/SupplierList/SupplierList"*/

export default(
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Home}>

      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="historical_quotation" name="historical_quotation" component={HistoricalQuotation}/>

      {/*<Route path="delete_account" name="delete_account" component={DeleteAccount}/>
      <Route path="invite_supplier" name="invite_supplier" component={InviteSupplier}/>
      <Route path="log_out" name="log_out" component={LogOut}/>
      <Route path="manufacture_info" name="manufacture_info" component={ManufactureInfo}/>
      <Route path="priority_level" name="priority_level" component={PriorityLevel}/>
      <Route path="search" name="search" component={Search}/>
      <Route path="supplier_list" name="supplier_list" component={SupplierList}/>*/}
    </Route>
  </Router>
);
