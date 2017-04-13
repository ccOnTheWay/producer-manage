/**
 * Created by fengxicai on 4/10/2017.
 * 交易信息
 */


import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";
import Tabel from "../../../components/Tabel/Tabel"


//<br />STMicroelectronic<br />LQFP-48 工业级<br />210400230011r IC MCU 32BIT 64KB FLASH 48LQFP

class TradeMsg extends Component{
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
                    <h2>交易信息</h2>
                    <select name="" id="">
                        <option value="0">按周</option>
                        <option value="0">按月</option>
                        <option value="0">按年</option>
                    </select>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <div className="tradeMsg-left col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    {/*交易总额占比*/}
                        <GaugeChart TradeMsgChart={this.props.tradeData.tradeMsgChart}/>
                    </div>
                    <div className="tradeMsg-right col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <TradeMsgTab></TradeMsgTab>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}


class GaugeChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            pieChartOption : this.getOption(this.props.TradeMsgChart)
        }

    }
    getOption(chartData) {
        var option =  {
            "title":{
                text: '该商家历史交易总额：' +  chartData.totalSum  + '万元'
            },
            "toolbox": {
                "show": false,
                "feature": {
                    "mark": {
                        "show": true
                    },
                    "restore": {
                        "show": true
                    },
                    "saveAsImage": {
                        "show": true
                    }
                }
            },
            "series": [{
                "name": "指标",
                "type": "gauge",
                "startAngle": 180, //总的360，设置180就是半圆
                "endAngle": 0,
                "center": ["50%", "77%"], //整体的位置设置
                "radius": 160,
                "axisLine": {
                    "lineStyle": {
                        "width": 50, //柱子的宽度
                        "color": [[ (chartData.recentMonthSUm/chartData.totalSum).toFixed(2), "#2d99e2"], [1, "#dce3ec"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "show": false
                },
                "splitLine": {
                    "show": false
                },
                "pointer": {
                    "width": 20, //指针的宽度
                    "length": "80%", //指针长度，按照半圆半径的百分比
                    "color": "#2d99e2"
                },
                "title": {
                    "show": true,
                    "offsetCenter": [25, "25%"], //标题位置设置
                    "textStyle": { //标题样式设置
                        "color": "#2d99e2",
                        "fontSize": 15,
                        "fontFamily": "微软雅黑",
                        "fontWeight": "bold"
                    }
                },
                "detail": {
                    "show": false
                },
                "data": [{ //显示数据
                    "value":((chartData.recentMonthSUm/chartData.totalSum)*100).toFixed(2),
                    "name": "近一个月总占额比 " +((chartData.recentMonthSUm/chartData.totalSum)*100).toFixed(2) +"%（" + chartData.recentMonthSUm +"）万元"
                }]
            }]
        };
        return option
    }
    render(){
        return (

            <div className="GaugeChart">

                <ReactEcharts ref='echarts_react'
                              option={this.state.pieChartOption}
                              style={{height: 350}} />

            </div>
        )
    }
    
}

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import faker from 'faker';









class TradeMsgTab extends Component {
    constructor(props){
        super(props)
        this.state = ({
            styles : {
            primary:{
                textAlign:'center'
            }
            },
            columns : [
                {
                    header: '序号',
                    accessor: 'serialNub'
                }, {
                    header: '产品编号',
                    accessor: "productNub"
                }, {
                    header: '产品类型',
                    accessor: 'productType'
                }, {
                    header: '订单编号',
                    accessor: 'orderNub'
                }, {
                    header: '订单单价（元）',
                    accessor: 'orderPrice'
                }, {
                    header: '订单日期',
                    accessor: 'orderDate'
                }
            ],
            TradeMsgTabData:[]
        })

    }
    componentWillMount(){
        /*
        * {
         serialNub: i, //序号
         productNub: faker.random.number(), // 产品编号
         productType:faker.name.findName(),  //产品类型
         orderNub: faker.random.number(),//订单编号
         orderPrice:faker.random.number(),  //订单单价（元）
         orderDate:faker.date.weekday()//订单日期
         }
        *
        *
        *
        * */
        var data = [];
        for (var i = 0; i < 20; i++) {
            data.push({
                serialNub: i,
                productNub: faker.random.number(),
                vendor: faker.random.number(),
                productType:faker.name.findName(),
                orderNub: faker.random.number(),
                orderPrice:faker.random.number(),
                orderDate:faker.date.weekday()
            })
        }
        this.setState({
            TradeMsgTabData : data
        })
    }
    render() {
        return (
                <ReactTable
                    className="dataTables_wrapper table table-bordered"
                    data={this.state.TradeMsgTabData}
                    columns={this.state.columns}
                    defaultPageSize={10}
                    nextText={'下一页'}
                    previousText={'上一页'}
                    loadingText={'正在加载'}
                    noDataText={'没有下一页'}
                    pageText={'页码'}
                    ofText={'共'}
                    rowsText={'条每行'}
                    style={this.state.styles.primary}
                />
        )
    }
}

export default TradeMsg
