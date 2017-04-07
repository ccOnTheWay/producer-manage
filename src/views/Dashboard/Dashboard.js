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
    {"name":"A类商家","value":335},
    {"name":"B类商家","value":635},
    {"name":"C类商家","value":135},
    {"name":"D类商家","value":900}
]
//趋势图数据

//热力图数据

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
                    <TendencyChart />
                </div>
            </div>
              )
            }
        }

export default Dashboard
