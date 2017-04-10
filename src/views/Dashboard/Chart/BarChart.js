/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";



class BarChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            barChartOption : this.getOption(this.initData(this.props.barChartData))
        }
    }
    //初始化数据
    initData (data){
        var dataName = []
        var dataValue = []
        data.map((ele,i)=>{
            dataName.push(ele.name);
            // 随机颜色?------------------------------😪
            dataValue.push({value : ele.value, itemStyle : {normal:{color: "rgb("  + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) +"," +   Math.floor(Math.random() * 255) + ")"}}})
        })
        var chartData = {dataName:dataName,dataValue:dataValue}
        return chartData;
    }
    //chart option 配置项
    getOption(chartData) {
        console.log(chartData)
        var option = {
            title: {
                text: '供应商数量（数量/位）',
                //子标题
                //subtext: 'From ExcelHome'
                //  sublink: 'http://e.weibo.com/1341556070/AjQH99che'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                   //event 鼠标 触碰提示
                    var tar = params[1] ? params[1] : params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : chartData.dataName
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack:  '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [{value : 0 , itemStyle : {normal:{color:"green"}}},
                        {value : 0 , itemStyle : {normal:{color:"red"}}},
                        {value : 0 , itemStyle : {normal:{color:"blue"}}},
                        {value : 0 , itemStyle : {normal:{color:"yellow"}}}]
                },
                {
                    name: '供应商数量',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:chartData.dataValue
                }
            ]
        };
        return option
    }
    barchartClick(e){
        console.log(e.target)
      //  alert(1111)
    }
    render(){
        return (
            <div className="barChart x_panel"  ref='barChart' data-index="111" data-connect="88888" onClick={(e)=>this.barchartClick(e)}>
                            <ReactEcharts ref='barChart'
                                          option={this.state.barChartOption}
                                          style={{height: 540}} />
            </div>

        )
    }
    componentDidMount(){
        this.refs.barChart.setAttribute("addAttr","111111")
        console.log(this.refs.barChart.getAttribute("addAttr"))

    }
}
export default BarChart
