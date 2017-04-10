/**
 * Created by fengxicai on 3/31/2017.
 */


import userImg from '../../assets/img/img.jpg';
import React, { Component } from 'react';
import SlidebarMenu from "./Slidebar-menu"
class Navigation extends Component {
    render(){
        return (

            <div className="navigation col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: 0}}>
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>供应商管理</span></a>
                    </div>

                    <div className="clearfix"></div>


                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src={userImg} alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>欢迎</span>
                            <h2>管理员</h2>
                        </div>
                    </div>
                    <br />
                    <SlidebarMenu></SlidebarMenu>
                </div>
            </div>


        )
    }
}
    export default Navigation;
