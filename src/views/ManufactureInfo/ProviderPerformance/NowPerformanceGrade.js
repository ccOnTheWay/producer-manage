/**
 * Created by fengxicai on 4/10/2017.
 * 当前绩效得分
 */

import React, { Component } from 'react';

import Tabel from "../../../components/Tabel/Tabel"



class NowPerformanceGrade extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabelHeade : ["项目","价格优势","价格波动","供货覆盖率","询价响应时间","成单率","拒单率","到货及时率","到货不及时投诉率","质量投诉率","服务好评率","绩效合计"],
            nowPerformanceGrade:{  //当前绩效得分
            manifestation : { //表现
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
            }
        }
        }

    }
    barchartClick(e){
        console.log(e.target)
        //  alert(1111)
    }
    render(){
        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>当前绩效得分</h2>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {
                                this.state.tabelHeade.map((item,index)=>{
                                    return (
                                        <th key={index}>{item}</th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>表现（0-1）</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.priceAdvantage}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.priceWave}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.coverScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.enquiryTime}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.successScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.refuseScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.AOGinTimeScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.AOGcomplainScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.qualityComplainScale}</td>
                                <td>{this.state.nowPerformanceGrade.manifestation.serverGoodScale}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>权重</td>
                                <td>{this.state.nowPerformanceGrade.weight.priceAdvantage}</td>
                                <td>{this.state.nowPerformanceGrade.weight.priceWave}</td>
                                <td>{this.state.nowPerformanceGrade.weight.coverScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.enquiryTime}</td>
                                <td>{this.state.nowPerformanceGrade.weight.successScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.refuseScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.AOGinTimeScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.AOGcomplainScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.qualityComplainScale}</td>
                                <td>{this.state.nowPerformanceGrade.weight.serverGoodScale}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>得分=表现*权重</td>
                                <td>{(this.state.nowPerformanceGrade.weight.priceAdvantage * this.state.nowPerformanceGrade.manifestation.priceAdvantage).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.priceWave * this.state.nowPerformanceGrade.manifestation.priceWave).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.coverScale * this.state.nowPerformanceGrade.manifestation.coverScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.enquiryTime * this.state.nowPerformanceGrade.manifestation.enquiryTime).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.successScale * this.state.nowPerformanceGrade.manifestation.successScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.refuseScale * this.state.nowPerformanceGrade.manifestation.refuseScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.AOGinTimeScale * this.state.nowPerformanceGrade.manifestation.AOGinTimeScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.AOGcomplainScale * this.state.nowPerformanceGrade.manifestation.AOGcomplainScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.qualityComplainScale * this.state.nowPerformanceGrade.manifestation.qualityComplainScale).toFixed(2)}</td>
                                <td>{(this.state.nowPerformanceGrade.weight.serverGoodScale * this.state.nowPerformanceGrade.manifestation.serverGoodScale).toFixed(2)}</td>
                                <td ref="addPerformanceGrade">
                                    {/*绩效合计... →_→    →_→    →_→ */}
                                    {(this.state.nowPerformanceGrade.weight.priceAdvantage * this.state.nowPerformanceGrade.manifestation.priceAdvantage +
                                    this.state.nowPerformanceGrade.weight.priceWave * this.state.nowPerformanceGrade.manifestation.priceWave +
                                    this.state.nowPerformanceGrade.weight.coverScale * this.state.nowPerformanceGrade.manifestation.coverScale +
                                    this.state.nowPerformanceGrade.weight.enquiryTime * this.state.nowPerformanceGrade.manifestation.enquiryTime +
                                    this.state.nowPerformanceGrade.weight.successScale * this.state.nowPerformanceGrade.manifestation.successScale +
                                    this.state.nowPerformanceGrade.weight.refuseScale * this.state.nowPerformanceGrade.manifestation.refuseScale +
                                    this.state.nowPerformanceGrade.weight.AOGinTimeScale * this.state.nowPerformanceGrade.manifestation.AOGinTimeScale+
                                    this.state.nowPerformanceGrade.weight.AOGcomplainScale * this.state.nowPerformanceGrade.manifestation.AOGcomplainScale+
                                    this.state.nowPerformanceGrade.weight.qualityComplainScale * this.state.nowPerformanceGrade.manifestation.qualityComplainScale +
                                    this.state.nowPerformanceGrade.weight.serverGoodScale * this.state.nowPerformanceGrade.manifestation.serverGoodScale
                                ).toFixed(2)
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}




export default NowPerformanceGrade