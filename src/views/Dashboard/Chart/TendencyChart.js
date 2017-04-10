/**
 * Created by fengxicai on 3/31/2017.
 *
 * 趋势图
 */
import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";



class TendencyChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            chartOption : this.getOption()
        }
    }
    //初始化数据
    initData (data){
        var dataName = []
        var dataValue = []
        data.map((ele,i)=>{
            dataName.push(ele.name);
        })
        //var chartData = {dataName:dataName,dataValue:dataValue}
        //return chartData;
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
                data:['蒸发量','降水量','平均温度']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'bar',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };

        return option
    }
    render(){
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
                        <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                booth letterpress, commodo enim craft beer mlkshk aliquip</p>
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
