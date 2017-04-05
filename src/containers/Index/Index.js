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
import TopNav from "../../components/TopNav/TopNav";
//主页main
import HomeMain from "../../views/HomeMain/HomeMain"
//历史报价main
import HistoryPrice from "../../views/HistoryPrice/HistoryPrice"
//账户设置main
import AdminSetting from "../../views/AdminSetting/AdminSetting"

import Routes from "../../routes"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }
    render() {
        return (
            <div className="container body">
                <div className="main main_container">
                    <Navigation />
                    <TopNav />
                    oeauaoeu
                    // {this.props.children}
                </div>
            </div>
        );
    }
    componentDidMount(){

    }

}

export default Index;
