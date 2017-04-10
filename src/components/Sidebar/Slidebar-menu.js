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
                        <li><a><i className="fa fa-desktop"></i> 账户设置</a></li>
                        <li><a><i className="fa fa-table"></i> Tables </a></li>
                        <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation </a></li>
                        <li><a><i className="fa fa-clone"></i>Layouts </a></li>
                    </ul>
                </div>
            </div>



    )
    }

}

    export default SlidebarMenu;
