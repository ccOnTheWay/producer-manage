/**
 * Created by fengxicai on 4/10/2017.
 */
import React, { Component } from 'react';

// 评分模块
import Grade from "./Grade"
//历史绩效得分数据
import LogPerformanceGrade from "./LogPerformanceGrade"
const productsData = {
    name : "贵州航天电器股份有限公司", //公司名称
    grade : "D", //等级
    point : 73 , //评分 1-100
    aptitudePoint : 6 ,//资质得分 1-10
    performance: 67 , //绩效得分 1-100
    scoreData: [{date : "一月份" , data : {
        "成单率" : 1 ,
        "价格波动" : .6 ,
        "供货覆盖率" : .2 ,
        "服务好评率" : .3 ,
        "到货不及时投诉率" : .4,
        "总额占比" : .2,
        "拒单率" : .5 ,
        "到货及时率": .3 ,
        "价格优势" : .2 ,
        "质量投诉率"  : .6 ,
        "询价单响应时间" : .2
    }},{date : "二月份" , data : {
        "成单率" : .5 ,
        "价格波动" : .6 ,
        "供货覆盖率" : .2 ,
        "服务好评率" : .3 ,
        "到货不及时投诉率" : .4,
        "总额占比" : .2,
        "拒单率" : .5 ,
        "到货及时率": .3 ,
        "价格优势" : .2 ,
        "质量投诉率"  : .6 ,
        "询价单响应时间" : .2
    }},{date : "三月份" , data : {
        "成单率" : .9 ,
        "价格波动" : .6 ,
        "供货覆盖率" : .2 ,
        "服务好评率" : .3 ,
        "到货不及时投诉率" : .4,
        "总额占比" : .2,
        "拒单率" : .5 ,
        "到货及时率": .3 ,
        "价格优势" : .2 ,
        "质量投诉率"  : .6 ,
        "询价单响应时间" : .2
    }},
    ]
}

//当前绩效得分
import  NowPerformanceGrade from "./NowPerformanceGrade"
const nowPerformanceGradeData = [
    {"项目":"表现（0-1）","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"权重","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"得分=表现*权重","价格优势":"2","价格波动":"","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
];


//交易信息
import TradeMsg from "./TradeMsg"


//交易信息：
var tradeData = {tradeList: [
    // {nub ; 1 , productsNumber ："STM32F334C8T6" , productsClass : "电阻" ， orderNumber : "12989888" , orderState : 0/1 }
    {"序号": "1", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "2", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "3", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "4", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "5", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "6", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"},
    {"序号": "7", "产品编号": "STM32F334C8T6", "产品类型": "电阻", "订单编号": "12989888", "订单状态": "已提交订单"}]
,tradeMsgChart:{                 //交易信息图表数据
        totalSum : 200 ,         //历史交易总额
        recentMonthSUm : 55     //最近一个月总额
    }}






class ProviderPerformance extends Component{
    constructor(props){
        super(props)

    }
    barchartClick(e){
        console.log(e.target)
        //  alert(1111)
    }
    render(){
        return (
            <div className="Aptitude" id="Aptitude"  onClick={(e)=>this.barchartClick(e)}>

                <div className="aptitudeTop  x_panel">
                    {/* 评分等级模块 */}
                    <Grade  productsData={productsData} />
                    {/*历史绩效的份数据*/}
                    <LogPerformanceGrade scoreData={productsData.scoreData}/>
                </div>

                {/*当前绩效得分*/}
                <NowPerformanceGrade nowGradeTableData={nowPerformanceGradeData} />
                {/*交易信息*/}
                <TradeMsg tradeData={tradeData} />
            </div>
        )
    }
    componentDidMount(){


    }
}
export default ProviderPerformance
