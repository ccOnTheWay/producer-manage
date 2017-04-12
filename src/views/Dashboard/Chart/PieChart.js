/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';
//import AddProvider from "./AddProvider"
import ReactEcharts from "echarts-for-react";


class PieChart extends Component{
    constructor(props){
                super(props)
                this.state = {
                    pieChartOption : this.getOption(this.initData(this.props.pieChartData))
                }

            }
	//初始化数据
    initData (data){
        var dataName = []
		data.map((ele,i)=>{
			dataName.push(ele.name)
        })
		var chartData = {dataName:dataName,data:data}
		return chartData;
    }
	//chart option 配置项
	getOption(chartData) {
		
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		calculable: true,
		legend: {
			x: 'center',
			y: 'bottom',
			data: chartData.dataName
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
			name: '供应商占比',
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
			data:chartData.data
		}]
	}
	return option;
    }
	componentWillMount(){
		// this.setState({
		// 	pieChartOption : this.getOtion()
		// })
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



          //var   echartDonut = echarts.init(this.refs.echart_donut, theme);
       //   echartDonut.setOption(pieChartOption);
        }
}
export default PieChart
