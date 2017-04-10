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
