/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';
import Action from "../../assets/tools/Action";
import {
  Link
} from 'react-router'
class SlidebarMenu extends Component {

    changeTopNav(nub){
        console.log(nub)
        Action.emit('changeTopNavTitle',nub)

    }
    render(){
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li  onClick={()=>this.changeTopNav(0)}><Link to="/"><i className="fa fa-home"></i> 主页 </Link>
                        </li>
                        <li  onClick={()=>this.changeTopNav(1)}><Link to="historical_quotation"><i className="fa fa-edit"></i> 历史报价 </Link>
                        </li>
                        <li><a><i className="fa fa-desktop"></i> 账户设置</a>
                            <ul className="nav child_menu">
                                <li  onClick={()=>this.changeTopNav(2)}><a href="##">设置商家权重</a></li>
                                <li  onClick={()=>this.changeTopNav(3)}><a href="##">商家详情</a></li>
                                <li  onClick={()=>this.changeTopNav(4)}><a href="##">邀请卖家</a></li>
                                <li ><a href="icons.html">注销</a></li>
                                <li><a href="glyphicons.html">退出登录</a></li>
                                <li><a href="widgets.html">Widgets</a></li>
                                <li><a href="invoice.html">Invoice</a></li>
                                <li><a href="inbox.html">Inbox</a></li>
                                <li><a href="calendar.html">Calendar</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-table"></i> Tables </a>
                            <ul className="nav child_menu">
                                <li><a href="tables.html">Tables</a></li>
                                <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation </a>
                            <ul className="nav child_menu">
                                <li><a href="chartjs.html">Chart JS</a></li>
                                <li><a href="chartjs2.html">Chart JS2</a></li>
                                <li><a href="morisjs.html">Moris JS</a></li>
                                <li><a href="echarts.html">ECharts</a></li>
                                <li><a href="other_charts.html">Other Charts</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-clone"></i>Layouts </a>
                            <ul className="nav child_menu">
                                <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                                <li><a href="fixed_footer.html">Fixed Footer</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="menu_section">
                    <h3>Live On</h3>
                    <ul className="nav side-menu">
                        <li><a><i className="fa fa-bug"></i> Additional Pages </a>
                            <ul className="nav child_menu">
                                <li><a href="e_commerce.html">E-commerce</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="project_detail.html">Project Detail</a></li>
                                <li><a href="contacts.html">Contacts</a></li>
                                <li><a href="profile.html">Profile</a></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-windows"></i> Extras </a>
                            <ul className="nav child_menu">
                                <li><a href="page_403.html">403 Error</a></li>
                                <li><a href="page_404.html">404 Error</a></li>
                                <li><a href="page_500.html">500 Error</a></li>
                                <li><a href="plain_page.html">Plain Page</a></li>
                                <li><a href="login.html">Login Page</a></li>
                                <li><a href="pricing_tables.html">Pricing Tables</a></li>
                            </ul>
                        </li>

                        <li><a href=""><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                    </ul>
                </div>

            </div>



    )
    }

}

    export default SlidebarMenu;
