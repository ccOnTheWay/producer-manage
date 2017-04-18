/**
 * Created by fengxicai on 3/31/2017.
 */


import userImg from '../../assets/img/img.jpg';
import React, { Component } from 'react';
import SlidebarMenu from "./Slidebar-menu"
import logo from "../../assets/img/logo_ico.png"
class Navigation extends Component {
    render(){
        return (

            <div className="navigation col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: 0}}>
                        <a href="#/" className="site_title"><img width="30" height="30" style={{"margin":"0 10px"}} src={logo} alt="赛思库"/><span>CissData</span></a>
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
