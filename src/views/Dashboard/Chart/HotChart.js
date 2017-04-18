/*
/!**
 * Created by fengxicai on 3/31/2017.
 *
 *  热力图
 *!/
*/


import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import Progress from "../../../components/Progress/Progress"
import "./HotChart.css"
require("echarts/map/js/china.js");
import 'whatwg-fetch';
class HotChart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            chartData : this.props.hotChartData ,
            section :  this.getOption(this.initData(this.props.hotChartData)),
            cityData : this.initData(this.props.hotChartData).cityData
        }
    }
    initData(array) {
        //取出最大值最小值
        var temp;
        for (var i = 0; i < array.length; i++) {

            for (var j = 0; j < array.length - i - 1; j++) {

                if (array[j].value < array[j + 1].value) {
                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }

        }

        var hotData = {min:array[array.length -1].value,max:array[0].value,cityData:array}
        return hotData
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
                max: data.max, //设置区间
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ["#d9534f","#f1ad4e","#3498DB","#26B99A"]
                    //"#d9534f","#f1ad4e","#3498D","#26B99A"
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
                    data: data.cityData
                }
            ]
        };
        return option;
    }
    render() {
        var itemTd = [];
        var data = this.state.cityData;
        for(var i = 0 ; i < 10 ; i ++){

            itemTd.push(  <Progress key={i} title={data[i].name} nub={data[i].value} count={data[0].value}/>)

        }
        return (
            <div className="hotChart">
                <ReactEcharts
                        option={this.state.section}
                        style={{height: '500px', width: '1000px'}}
                        className='hotChart' />
                <div className="cityRank" style={{"position":"absolute","top":"130px","left":"880px","width":"160px"}}>
                    {
                        itemTd
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        var result = fetch("http://192.168.56.1/cors.php"
            //mode: 'no-cors',
        /*,{headers: {
                "Content-Type":"application/json"
            }
        }*/
        );
        result.then(function(response) {
            console.log('response', response);
            console.log('header', response.headers.get('Content-Type'));
            return response.text();
        }).then(function(text) {
            console.log(text);
            var newData = this.initData(JSON.parse(text));
            this.setState({
                section :  this.getOption(newData),
                cityData: newData.cityData
            })
        }.bind(this)).catch(function(ex) {
            console.log('failed', ex)
        })
    }
}

export default HotChart;
