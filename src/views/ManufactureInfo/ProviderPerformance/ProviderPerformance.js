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

//当前绩效得分  --- 数据在NowPerformanceGrade.js
import  NowPerformanceGrade from "./NowPerformanceGrade"
/*
*
*  { manifestation : { //表现
 priceAdvantage : 0.6 , //价格优势
 priceWave : 0.5 , //价格波动
 coverScale : 0.3 , //供货覆盖率
 enquiryTime : 0.8 , //询价相应时间
 successScale : 0.6 , //成单率
 refuseScale : 0.9 , //拒单率
 AOGinTimeScale : 0.9 , //到货及时率
 AOGcomplainScale : 0.9, //到货不及时投诉率
 qualityComplainScale : 0.9 , //质量投诉率
 serverGoodScale : 0.6 //服务好评率
 },
 weight : { //权重
 priceAdvantage : 5 ,
 priceWave : 5 ,
 coverScale : 5 ,
 enquiryTime : 15 ,
 successScale :10 ,
 refuseScale :5 ,
 AOGinTimeScale : 10 ,
 AOGcomplainScale : 15,
 qualityComplainScale : 10 ,
 serverGoodScale :5
 }}
* */


//交易信息
import TradeMsg from "./TradeMsg"


//交易信息：
var tradeData = {tradeList:
   /*
    {
    serialNub: i, //序号
    productNub: faker.random.number(), // 产品编号
    productType:faker.name.findName(),  //产品类型
    orderNub: faker.random.number(),//订单编号
    orderPrice:faker.random.number(),  //订单单价（元）
    orderDate:faker.date.weekday()//订单日期
    }
   * */
    [{"serialNub":0,"productNub":47465,"vendor":92906,"productType":"Domenica Bosco","orderNub":82028,"orderPrice":64596,"orderDate":"Tuesday"},
        {"serialNub":1,"productNub":43858,"vendor":99849,"productType":"Mose Lang","orderNub":21119,"orderPrice":77689,"orderDate":"Tuesday"},
        {"serialNub":2,"productNub":91498,"vendor":25880,"productType":"Amani Jacobi","orderNub":94131,"orderPrice":14896,"orderDate":"Monday"},
        {"serialNub":3,"productNub":85813,"vendor":86140,"productType":"Lue Rippin","orderNub":85927,"orderPrice":35454,"orderDate":"Tuesday"},
        {"serialNub":4,"productNub":26064,"vendor":35969,"productType":"Ivy Pacocha","orderNub":36004,"orderPrice":94990,"orderDate":"Thursday"},
        {"serialNub":5,"productNub":34127,"vendor":60837,"productType":"Norberto Murray","orderNub":78405,"orderPrice":30240,"orderDate":"Friday"}]
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
                <NowPerformanceGrade />
                {/*交易信息*/}
                <TradeMsg tradeData={tradeData} />
            </div>
        )
    }
    componentDidMount(){


    }
}
export default ProviderPerformance
