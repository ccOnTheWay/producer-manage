/**
 * Created by fengxicai on 3/31/2017.
 */

import React, { Component } from 'react';
import userImg from '../../assets/img/img.jpg';
import "./Header.css";
import Action from "../../assets/tools/Action";
const TopNavData = {
    title : ["供应商管理","历史报价","供应商列表","供应商筛选","设置商家权重","商家详情","邀请供应商"]
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
                  <h3 className="page-name">{TopNavData.title[this.state.topNavTitleNub]}</h3>
                </div>

                <ul className="nav navbar-nav navbar-right">
                  <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right nav_top_search">
                    <div className="input-group">
                      <input type="text" className="form-control"  ref="searchValue" placeholder="
输入厂家名称/产品类别/品牌名称进行搜索" />
                      <span className="input-group-btn">
                        <button onClick={()=>this.searchBtnClick()} className="btn btn-default" type="button">搜索</button>
                      </span>
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          </div>


          )
    }
    searchBtnClick(){
        console.log(this.refs.searchValue.value)
        var value = this.refs.searchValue.value ? this.refs.searchValue.value : "二极管" ;
        this.setState({
            topNavTitleNub : 3
        });
        location.hash = "#/search/" + value ;
        // 接收 hash  this.state.params.searchItem
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
