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

        Action.emit('changeTopNavTitle',nub)

    }
    render(){
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <ul className="nav side-menu">
                        <li  onClick={()=>this.changeTopNav(0)}><Link to="/"><i className="fa fa-home"></i> 主页 </Link>
                        </li>
                        <li  onClick={()=>this.changeTopNav(1)}><Link to="historical_quotation"><i className="fa fa-edit"></i> 历史报价 </Link>
                        </li>
                        <li><a><i className="fa fa-desktop"></i> 账户设置</a></li>
                        <li><Link  to="supplier_list"><i className="fa fa-table"></i> 供应商列表 </Link></li>
                        <li><Link to="search"><i className="fa fa-bar-chart-o"></i> 供应商筛选 </Link></li>
                        <li><Link to="manufacture_info"><i className="fa fa-clone"></i>商家详情</Link></li>
                    </ul>
                </div>
            </div>



    )
    }

}

    export default SlidebarMenu;
