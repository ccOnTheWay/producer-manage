/**
 * Created by fengxicai on 3/31/2017.
 *
 * 趋势图
 */
import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";


import HotChart from "./HotChart"


class TendencyChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            chartOption : this.getOption(this.initData(this.props.tendencyChartData))
        }
    }
    //初始化数据
    initData (data){
        var dataName = [];
        var dataValue = [];
        var date = [];
        var seriesData = []
        data.map((ele,i)=>{
            //获取name
            dataName.push(ele.name);
            //获取value
           for(var i in ele.data){
               dataValue.push(ele.data[i].value)
           }
            seriesData.push({name:ele.name,type:"bar",data:dataValue})
            dataValue = [];
        })
        //获取日期

        for(var  i in data[0].data){

          date.push(data[0].data[i].date)
        }
        var chartData = {dataName:dataName,date:date,seriesData:seriesData}
        return chartData;
    }
    //chart option 配置项
    getOption(chartData) {
        console.log(chartData)
        var option =  {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:chartData.dataName
            },
            xAxis: [
                {
                    type: 'category',
                    data:chartData.date,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '数量',
                    min: 0,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: chartData.seriesData
        };

        return option
    }
    render(){
        console.log(this.state.chartOption)
        return (

            <div className="x_content">


                <div className="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">趋势图</a>
                        </li>
                        <li role="presentation" className=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">热力图</a>
                        </li>

                    </ul>
                    <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                            <ReactEcharts option={this.state.chartOption}
                                          style={{height: 350}} />
                        </div>
                        <div role="tabpanel" style={{width:"100%"}} className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                            <HotChart hotChartData={this.props.hotChartData} />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
    componentDidMount(){


    }
}
export default TendencyChart
