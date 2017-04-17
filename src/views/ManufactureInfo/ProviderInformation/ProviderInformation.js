/**
 * Created by fengxicai on 4/11/2017.
 */
import React, { Component } from 'react';

import "./ProviderInformation.css"

import 'whatwg-fetch';



class ProviderInformation extends Component{
    constructor(props){
        super(props)
        this.state = {
            probiderMsg: {
                basicMsg: {     //基本信息
                    name: "贵州航天电器股份有限公司", // 供应商名称
                    address: "贵州市**区111号", //供应商地址
                    postcode: 1111111,//邮编
                    type: "原厂" //供应商类型
                },
                contactInfomation: { // 联系信息
                    linkMan: "张三", //联系人
                    linkManJob: "销售经理",  //联系人职务
                    tel: 88888888, //电话号码（座机）
                    faxNub: 89898989, //传真号
                    phone: 156666666, //手机号
                    email: "111111@cissdata.com",//邮箱
                    qq: 1112233344, //qq
                    firstTel: "手机", //首选联系方式
                    qualityDepartment: "可靠性检测部",  //质量负责部门名称
                    qualityLinkMan: "李四",   //质量负责部分联系人
                    qualityJob: "质检经理", //质量负责部门联系人职位
                    qualityTel: 1666666666    //质量负责部门联系方式
                },
                financialInformation: {    //财务信息
                    accountTitle: "贵州航天电器股份有限公司", //账户名称
                    address: "贵州市",   //地址
                    tel: 1999999999,   //电话
                    taxNub: 1000000000111111,  //税号
                    depositBank: "中国银行",  //开户银行
                    bankAccount: 62001111111111111,  //银行账号
                    registeredFund: 111111, //注册资金
                    paymentDate: 30  //付款周期
                }
            }
        }
    }
    componentWillMount(){
        /*var result = fetch('https://api.github.com',{mode: 'no-cors'})
        result.then(function(response) {
            console.log('response', response)
            console.log('header', response.headers.get('Content-Type'))

            return response.text()
        }).then(function(text) {
            console.log('got text', text)
        }).catch(function(ex) {
            console.log('failed', ex)
        })*/
        var result = fetch('http://op.juhe.cn/onebox/weather/query?cityname=%E6%B8%A9%E5%B7%9E&key=988133220d8fd9b30d81cf6ae1d8b4b2',{method:"GET", mode: 'cors',
            cache: 'default'})
        result.then(function(response) {
            console.log('response', response)
            console.log('header', response.headers.get('Content-Type'))
            return response.text()
        }).then(function(text) {
            console.log('got text', text)
        }).catch(function(ex) {
            console.log('failed', ex)
        })
        //084272c282f092f2ee16282d05a554b2ss
        // fetch("https://api.github.com/",{
        //    method: "GET",
        //     mode: 'no-cors',
        //    /* body: JSON.stringify(
        //              {"key":"084272c282f092f2ee16282d05a554b2",
        //             "page":2,
        //             "pagesize":10,
        //             "sort":"asc",
        //             "time": 1418745237}),*/
        //   /*  headers: {
        //        "Content-Type": "application/json"
        //     }*/
        //     //credentials: "same-origin"
        // }).then(function(res) {
        //     // res instanceof Response == true.
        //     console.log(res)
        //     if (res.type === 'opaque' || res.ok) {
        //         res.json().then(function(data) {
        //             console.log(data.entries);
        //         });
        //     } else {
        //         console.log("Looks like the response wasn't perfect, got status", res.status);
        //     }
        // }, function(e) {
        //     console.log("Fetch failed!", e);
        // });
           /* .then(function(response) {
            return response.text().then(function(text) {
                return text ? JSON.parse(text) : {}
            })
        }).then(function(json) {
            console.log(json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })*/
        this.setState(
            {
                probiderMsg: {
                    basicMsg: {     //基本信息
                        name: "贵州航天电器股份有限公司", // 供应商名称
                        address: "贵州市**区111号", //供应商地址
                        postcode: 1111111,//邮编
                        type: "原厂" //供应商类型
                    },
                    contactInfomation: { // 联系信息
                        linkMan: "张三", //联系人
                        linkManJob: "销售经理",  //联系人职务
                        tel: 88888888, //电话号码（座机）
                        faxNub: 89898989, //传真号
                        phone: 156666666, //手机号
                        email: "111111@cissdata.com",//邮箱
                        qq: 1112233344, //qq
                        firstTel: "手机", //首选联系方式
                        qualityDepartment: "可靠性检测部",  //质量负责部门名称
                        qualityLinkMan: "李四",   //质量负责部分联系人
                        qualityJob: "质检经理", //质量负责部门联系人职位
                        qualityTel: 1666666666    //质量负责部门联系方式
                    },
                    financialInformation: {
                        accountTitle: "贵州航天电器股份有限公司", //账户名称
                        address: "皮皮虾我们走",   //地址
                        tel: 1999999999,   //电话
                        taxNub: 1000000000111111,  //税号
                        depositBank: "中国银行",  //开户银行
                        bankAccount: 62001111111111111,  //银行账号
                        registeredFund: 666, //注册资金
                        paymentDate: 30  //付款周期
                    }
                }
            }
        )
    }
   
    render(){
        return (
            <div className="ProviderInformation">
                <div className="x_panel">
                    <div className="x_title">
                        <h2>基本信息</h2>
                        {/* <ul className="nav navbar-right panel_toolbox">
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
                         </ul>*/}
                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>供应商名称</td>
                                <td>{this.state.probiderMsg.basicMsg.firstName}</td>
                            </tr>
                            <tr>
                                <td>办公地址</td>
                                <td>{this.state.probiderMsg.basicMsg.address}</td>
                            </tr>
                            <tr>
                                <td>邮编</td>
                                <td>{this.state.probiderMsg.basicMsg.postcode}</td>
                            </tr>
                            <tr>
                                <td>供应商类型</td>
                                <td>原厂</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="x_panel">
                    <div className="x_title">
                        <h2>联系信息</h2>
                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>联系人</td>
                                <td>{this.state.probiderMsg.contactInfomation.linkMan}</td>
                            </tr>
                            <tr>
                                <td>联系人职务</td>
                                <td>{this.state.probiderMsg.contactInfomation.linkManJob}</td>
                            </tr>
                            <tr>
                                <td>电话号码（座机）</td>
                                <td>{this.state.probiderMsg.contactInfomation.tel}</td>
                            </tr>
                            <tr>
                                <td>传真号</td>
                                <td>{this.state.probiderMsg.contactInfomation.faxNub}</td>
                            </tr>
                            <tr>
                                <td>手机号</td>
                                <td>{this.state.probiderMsg.contactInfomation.phone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.probiderMsg.contactInfomation.email}</td>
                            </tr>
                            <tr>
                                <td>QQ号</td>
                                <td>{this.state.probiderMsg.contactInfomation.qq}</td>
                            </tr>
                            <tr>
                                <td>首选联系方式</td>
                                <td>{this.state.probiderMsg.contactInfomation.firstTel}</td>
                            </tr>
                            <tr>
                                <td>质量负责部门名称</td>
                                <td>{this.state.probiderMsg.contactInfomation.qualityDepartment}</td>
                            </tr>
                            <tr>
                                <td>质量负责部门联系人</td>
                                <td>{this.state.probiderMsg.contactInfomation.qualityLinkMan}</td>
                            </tr>
                            <tr>
                                <td>质量负责部门联系人职位</td>
                                <td>{this.state.probiderMsg.contactInfomation.qualityJob}</td>
                            </tr>
                            <tr>
                                <td>质量负责部部门联系方式</td>
                                <td>{this.state.probiderMsg.contactInfomation.qualityTel}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="x_panel">
                    <div className="x_title">
                        <h2>财务信息</h2>

                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>账户名称</td>
                                <td>{this.state.probiderMsg.financialInformation.accountTitle}</td>

                            </tr>
                            <tr>
                                <td>地址</td>
                                <td>{this.state.probiderMsg.financialInformation.address}</td>

                            </tr>
                            <tr>
                                <td>电话</td>
                                <td>{this.state.probiderMsg.financialInformation.tel}</td>
                            </tr>
                            <tr>
                                <td>税号</td>
                                <td>{this.state.probiderMsg.financialInformation.taxNub}</td>
                            </tr>
                            <tr>
                                <td>开户银行</td>
                                <td>{this.state.probiderMsg.financialInformation.depositBank}</td>
                            </tr>
                            <tr>
                                <td>银行账号</td>
                                <td>{this.state.probiderMsg.financialInformation.bankAccount}</td>
                            </tr>
                            <tr>
                                <td>注册资金（万元人名币）</td>
                                <td>{this.state.probiderMsg.financialInformation.registeredFund}万元</td>
                            </tr>
                            <tr>
                                <td>付款周期（天）</td>
                                <td>{this.state.probiderMsg.financialInformation.paymentDate}天</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default ProviderInformation