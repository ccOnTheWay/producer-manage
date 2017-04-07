/**
 * Created by fengxicai on 3/31/2017.
 */

import React, { Component } from 'react';
import userImg from '../../assets/img/img.jpg';
import "./Header.css";
import Action from "../../assets/tools/Action";
const TopNavData = {
    title : ["供应商管理","历史报价","设置商家权重","商家详情","邀请商家","搜索结果"]
}

class Header extends Component{
     constructor(props){
            super(props)
            this.state = {
                topNavTitleNub : 0
            }
        }
    render(){
        return(
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="title">
                            <h3>{TopNavData.title[this.state.topNavTitleNub]}</h3>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="">
                                <a href="##" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src={userImg} alt="" />John Doe
                                        <span className="fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li><a href="##"> Profile</a></li>
                                    <li>
                                        <a href="##">
                                            <span className="badge bg-red pull-right">50%</span>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li><a href="##">Help</a></li>
                                    <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                </ul>
                            </li>

                            <li role="presentation" className="dropdown">
                                <a href="##" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="badge bg-green">6</span>
                                </a>
                                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                    <li>
                                        <a>
                                            <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image"><img src="images/img.jpg" alt="Profile" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="text-center">
                                            <a>
                                                <strong>See All Alerts</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

    )
    }
    componentWillMount (){
        		Action.on('changeTopNavTitle',function(val){
        			this.setState({
        				topNavTitleNub : val
        			})
        		}.bind(this))
        	}
}



export default Header
