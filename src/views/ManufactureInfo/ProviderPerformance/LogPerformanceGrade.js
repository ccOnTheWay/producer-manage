/**
 * Created by fengxicai on 4/10/2017.
 * 历史绩效得分数据组件
 */

/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";



class LogPerformanceGrade extends Component{
    constructor(props){
        super(props)
        this.state = {
            barChartOption : this.getOption( this.initData(this.props.scoreData))
        }

    }
    //初始化数据
    initData (data){
        var dataName = ['成单率','价格波动','供货覆盖率','服务好评率','到货不及时投诉率','总额占比','拒单率','到货及时率','价格优势',"质量投诉率","询价单响应时间"];
        var dataValue = {};
        var date = [];
        //获取类型
        for(var i = 0 ,lg = data.length; i < lg ; i++){
            for(var  key in data[i].data){
                typeof  dataValue[key] == "object" ? dataValue[key].push(data[i].data[key]) : dataValue[key] = [data[i].data[key]]

            }
            date.push(data[i].date)
        }

        var chartData = {dataName:dataName,date:date,dataValue:dataValue}
        return chartData;
    }
    //chart option 配置项
    getOption(chartData) {


        var option =  {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:chartData.dataName
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : chartData.date
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : []
        };
        for(var i in chartData.dataName){
            option.series.push({"name" : chartData.dataName[i] ,"type" : "bar" , "data":chartData.dataValue[chartData.dataName[i]]})
        }
        return option
    }
    barchartClick(e){
        console.log(e.target)
        //  alert(1111)
    }
    render(){
        return (
            <div className="barChart  col-lg-8 col-md-8 col-sm-12 col-xs-12"  ref='barChart' data-index="111" data-connect="88888" onClick={(e)=>this.barchartClick(e)}>
                <p>历史绩效得分数据</p>
                <ReactEcharts ref='barChart'
                              option={this.state.barChartOption}
                              style={{height: 340}} />
            </div>

        )
    }
    componentDidMount(){
      

    }
}
export default LogPerformanceGrade

