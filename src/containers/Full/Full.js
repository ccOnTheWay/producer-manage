/**
 * Created by fengxicai on 3/31/2017.
 */
import 'bootstrap/dist/css/bootstrap.css';


import "../../components/Common/font-awesome/css/font-awesome.min.css";
import "../../components/Common/nprogress/nprogress.css";
import "../../components/Common/iCheck/skins/flat/green.css";
////bootstrap-progressbar -->
import "../../components/Common/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css";
////JQVMap -->
import "../../components/Common/jqvmap/dist/jqvmap.min.css"
////bootstrap-daterangepicker -->
import "../../components/Common/bootstrap-daterangepicker/daterangepicker.css";

////Custom Theme Style -->
import "../../components/Common/build/css/custom.min.css";



import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

import Navigation from "../../components/Navgation/Navigation"
import TopNav from "../../components/TopNav/TopNav"
class Full extends Component {
    render() {
        return (
            <div className="container body">


                <div className="main main_container">
                    <Navigation />
                    <TopNav />
                </div>
            </div>
        );
    }
}

export default Full;

/*
<Breadcrumbs
    wrapperElement="ol"
    wrapperClass="breadcrumb"
    itemClass="breadcrumb-item"
    separator=""
    routes={this.props.routes}
    params={this.props.params}
/>
*/
