/*
/!**
 * Created by fengxicai on 3/31/2017.
 *
 *  热力图
 *!/
import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";

console.log(require("echarts/map/js/china.js"))

class HotChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotChartOption : this.getOption()
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
    randomData () {
        return Math.round(Math.random()*1000);
    }
    //chart option 配置项
    getOption(chartData) {



        var option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['iphone3','iphone4','iphone5']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '重庆',value: this.randomData() },
                        {name: '河北',value: this.randomData() },
                        {name: '河南',value: this.randomData() },
                        {name: '云南',value: this.randomData() },
                        {name: '辽宁',value: this.randomData() },
                        {name: '黑龙江',value: this.randomData() },
                        {name: '湖南',value: this.randomData() },
                        {name: '安徽',value: this.randomData() },
                        {name: '山东',value: this.randomData() },
                        {name: '新疆',value: this.randomData() },
                        {name: '江苏',value: this.randomData() },
                        {name: '浙江',value: this.randomData() },
                        {name: '江西',value: this.randomData() },
                        {name: '湖北',value: this.randomData() },
                        {name: '广西',value: this.randomData() },
                        {name: '甘肃',value: this.randomData() },
                        {name: '山西',value: this.randomData() },
                        {name: '内蒙古',value: this.randomData() },
                        {name: '陕西',value: this.randomData() },
                        {name: '吉林',value: this.randomData() },
                        {name: '福建',value: this.randomData() },
                        {name: '贵州',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '青海',value: this.randomData() },
                        {name: '西藏',value: this.randomData() },
                        {name: '四川',value: this.randomData() },
                        {name: '宁夏',value: this.randomData() },
                        {name: '海南',value: this.randomData() },
                        {name: '台湾',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '重庆',value: this.randomData() },
                        {name: '河北',value: this.randomData() },
                        {name: '安徽',value: this.randomData() },
                        {name: '新疆',value: this.randomData() },
                        {name: '浙江',value: this.randomData() },
                        {name: '江西',value: this.randomData() },
                        {name: '山西',value: this.randomData() },
                        {name: '内蒙古',value: this.randomData() },
                        {name: '吉林',value: this.randomData() },
                        {name: '福建',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '西藏',value: this.randomData() },
                        {name: '四川',value: this.randomData() },
                        {name: '宁夏',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '台湾',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
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
                <ReactEcharts ref='hotChart'
                              option={this.state.hotChartOption}
                              style={{height: 540}} />
            </div>

        )
    }
    componentDidMount(){


    }
}
export default HotChart*/


import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

require("echarts/map/js/china.js");

class HotChart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            section : null
        }

       // this.initData(this.props.hotChartData)

    }
    initData(array){
        //取出最大值最小值
        var temp ;
        for (var i = 0; i < array.length; i++)
        {
            for (var j = 0; j < array.length - i; j++)
            {
                if (array[j].value > array[j + 1].value)
                {
                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        console.log(array)
    }
    getOption(data) {
        const option = {
            title: {
                text: '搜索指数热力地图',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                min: 0,
                max: 2500, //设置区间
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: [ '#fff', 'blue']
                }
            },
            toolbox: {
                show: true,

                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '搜索指数',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:data
                }
            ]
        };
        return option;
    }
    render() {

        return (
                <ReactEcharts
                        option={this.getOption(this.props.hotChartData)}
                        style={{height: '500px', width: '1000px'}}
                        className='hotChart' />
        );
    }
    componentDidMount(){
        
    }
}

export default HotChart;
