/**
 * Created by fengxicai on 3/31/2017.
 * 柱状图
 */
import React, { Component } from 'react';
//import AddProvider from "./AddProvider"
import ReactEcharts from "echarts-for-react";

const pieChartData = [
    {"name":"A类商家","value":335},
    {"name":"B类商家","value":635},
    {"name":"C类商家","value":135},
    {"name":"D类商家","value":35},
    {"name":"E类商家","value":195}
]

const pieChartOption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['一级供应商', '二级供应商', '三级供应商', '四级供应商']
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore: {
                show: true,
                title: "Restore"
            },
            saveAsImage: {
                show: true,
                title: "Save Image"
            }
        }
    },
    series: [{
        name: 'Access to the resource',
        type: 'pie',
        radius: ['35%', '55%'],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        data: [{
            value: 335,
            name: '一级供应商'
        }, {
            value: 310,
            name: '二级供应商'
        }, {
            value: 234,
            name: '三级供应商'
        }, {
            value: 135,
            name: '四级供应商'
        }]
    }]
}

//var echartDonut = echarts.init(document.getElementById('echart_donut'), theme);

// echartDonut.setOption();


class PieChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            pieChartOption : pieChartOption
        }
    }
    initData (data){
        data.map((ele,i)=>{

        })
    }
    render(){
        return (
            <div className="pieChart">
                <div className="x_panel col-md-12 col-sm-12 col-xs-12">
                    <div className="x_title">
                        <h2>供应商等级分布</h2>
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

                        <ReactEcharts ref='echarts_react'
                                      option={this.state.pieChartOption}
                                      style={{height: 350}} />

                    </div>
                </div>
            </div>

        )
    }
    componentDidMount(){
        console.log(this.refs.echart_donut)
        console.log("~~~~let go react ")


        //var   echartDonut = echarts.init(this.refs.echart_donut, theme);
        //   echartDonut.setOption(pieChartOption);
    }
}
export default PieChart
