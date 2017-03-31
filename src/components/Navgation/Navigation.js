/**
 * Created by fengxicai on 3/31/2017.
 */
import "../Common/vendors/font-awesome/css/font-awesome.min.css";
import "../Common/vendors/nprogress/nprogress.css";
import "../Common/vendors/iCheck/skins/flat/green.css";
////bootstrap-progressbar -->
import "../Common/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css";
////JQVMap -->
import "../Common/vendors/jqvmap/dist/jqvmap.min.css"
////bootstrap-daterangepicker -->
import "../Common/vendors/bootstrap-daterangepicker/daterangepicker.css";

////Custom Theme Style -->
import "../Common/build/css/custom.min.css";
import React, { Component } from 'react';
class Navigation extends Component {
    reader(){
        return (

            <div className="navigation col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: 0}}>
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
                    </div>

                    <div className="clearfix"></div>


                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>John Doe</h2>
                        </div>
                    </div>


                    <br />




                </div>
            </div>


        )
    }
}
    export default Navigation;