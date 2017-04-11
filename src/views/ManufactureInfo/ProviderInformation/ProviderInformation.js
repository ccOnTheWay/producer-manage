/**
 * Created by fengxicai on 4/11/2017.
 */
import React, { Component } from 'react';

import faker from "faker"
console.log(faker.name.findName())

const probiderMsg = {
    basicMsg : {
        name : faker.name.firstName() , // 供应商名称
        address : faker.name.jobArea() , //供应商地址
        postcode : 1111111 //邮编
    }
}

class ProviderInformation extends Component{
    constructor(props){
        super(props)

    }
    barchartClick(e){
        console.log(e.target)
        //  alert(1111)
    }
    render(){
        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>基本信息</h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Settings 1</a>
                                </li>
                                <li><a href="#">Settings 2</a>
                                </li>
                            </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">

                    <table className="table table-striped">
                        <tbody>
                        <tr>
                            <td>供应商名称</td>
                            <td>{probiderMsg.basicMsg.firstName}</td>

                        </tr>
                        <tr>
                            <td>办公地址</td>
                            <td>{probiderMsg.basicMsg.address}</td>

                        </tr>
                        <tr>
                            <td>邮编</td>
                            <td>{probiderMsg.basicMsg.postcode}</td>
                        </tr>
                        <tr>
                            <td>供应商类型</td>
                            <td>原厂</td>

                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default ProviderInformation