/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';

import AddProvider from "./AddProvider"
import PieChart from "./Chart/PieChart"
import Breadcrumbs from "react-breadcrumbs";
import BarChart from "./Chart/BarChart"

import TendencyChart from "./Chart/TendencyChart"


// 饼状图 柱状图数据
const chartData = [
    {"name":"A类商家","value":105},
    {"name":"B类商家","value":635},
    {"name":"C类商家","value":135},
    {"name":"D类商家","value":900}
]
//趋势图数据
const tendencyChartData = [
                            {name: "A类", data: [
                                {date:"2.08",value:100},
                                {date:"2.15",value:110},
                                {date:"2.22",value:120},
                                {date:"3.01",value:120},
                                {date:"3.08",value:120},
                                {date:"3.15",value:140},
                                {date:"3.22",value:150},
                                {date:"3.29",value:160}
                            ]},
                            {name: "B类", data: [
                                {date:"2.08",value:50},
                                {date:"2.15",value:140},
                                {date:"2.22",value:110},
                                {date:"3.01",value:180},
                                {date:"3.08",value:10},
                                {date:"3.15",value:40},
                                {date:"3.22",value:50},
                                {date:"3.29",value:60}
                            ]},
                            {name: "C类", data: [
                                {date:"2.08",value:130},
                                {date:"2.15",value:110},
                                {date:"2.22",value:120},
                                {date:"3.01",value:120},
                                {date:"3.08",value:140},
                                {date:"3.15",value:140},
                                {date:"3.22",value:150},
                                {date:"3.29",value:100}
                            ]},
                            {name: "D类", data: [
                                {date:"2.08",value:40},
                                {date:"2.15",value:71},
                                {date:"2.22",value:92},
                                {date:"3.01",value:12},
                                {date:"3.08",value:82},
                                {date:"3.15",value:14},
                                {date:"3.22",value:45},
                                {date:"3.29",value:76}
                            ]}
                            ]


//热力图数据
var hotChartData = [
    {name: '北京',value: 100 },
    {name: '天津',value: 200 },
    {name: '上海',value: 333 },
    {name: '重庆',value:111 },
    {name: '河北',value:111 },
    {name: '河南',value:66 },
    {name: '云南',value:2006 },
    {name: '辽宁',value:66 },
    {name: '黑龙江',value:66 },
    {name: '湖南',value:66 },
    {name: '安徽',value:66 },
    {name: '山东',value:66 },
    {name: '新疆',value:66 },
    {name: '江苏',value:66 },
    {name: '浙江',value:66 },
    {name: '江西',value:66 },
    {name: '湖北',value:66 },
    {name: '广西',value:66 },
    {name: '甘肃',value:66 },
    {name: '山西',value:66 },
    {name: '内蒙古',value:66 },
    {name: '陕西',value:66 },
    {name: '吉林',value:66 },
    {name: '福建',value:66 },
    {name: '贵州',value:66 },
    {name: '广东',value:66 },
    {name: '青海',value:66 },
    {name: '西藏',value:66 },
    {name: '四川',value:66 },
    {name: '宁夏',value:66 },
    {name: '海南',value:66 },
    {name: '台湾',value:66 },
    {name: '香港',value:66 },
    {name: '澳门',value:66 }
]
class Dashboard extends Component{
    render(){
        return (
            <div className="Dashbord">
                <div className="topChart">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <AddProvider />
                       <PieChart pieChartData={chartData}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <BarChart  barChartData={chartData} />
                    </div>
                </div>
                <div className="bottomChart col-lg-12 col-sm-12 col-xs-12">
                    <TendencyChart tendencyChartData={tendencyChartData} hotChartData={hotChartData} />
                </div>
            </div>
              )
            }
        }

export default Dashboard
