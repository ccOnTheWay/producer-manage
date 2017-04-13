import React, {Component} from 'react';

import "./PriorityLevel.css"



class PriorityLevel extends Component {
    constructor(props){
        super(props)
        this.state = {
            weight:{
                priceAdvantage : 5 , //价格优势
                priceWave :5 , //价格波动
                coverScale : 5 , //供货覆盖率
                enquiryTime : 15 , //询价相应时间
                successScale : 15 , //成单率
                refuseScale :15 , //拒单率
                AOGinTimeScale : 20, //到货及时率
                AOGcomplainScale :15, //到货不及时投诉率
                qualityComplainScale : 5 , //质量投诉率
                serverGoodScale :5 //服务好评率
            },
            projectWord: ["priceAdvantage","priceWave","coverScale","enquiryTime","successScale","refuseScale","AOGinTimeScale","qualityComplainScale","serverGoodScale"],
            project:["价格优势","价格波动","供货覆盖率","询价响应时间","成单率","拒单率","到货及时率","到货不及时投诉率","质量投诉率","服务好评率"],
            btnState : true ,
            adjustNone : true ,
            weightSum : 90
        }

    }
    //默认权重值
    initdefaultWright(){
        const defaultWeight = {
            priceAdvantage : 5 , //价格优势
            priceWave :5 , //价格波动
            coverScale : 5 , //供货覆盖率
            enquiryTime : 15 , //询价相应时间
            successScale : 15 , //成单率
            refuseScale :15 , //拒单率
            AOGinTimeScale : 20, //到货及时率
            AOGcomplainScale :15, //到货不及时投诉率
            qualityComplainScale : 5 , //质量投诉率
            serverGoodScale :5 //服务好评率
        }
        return defaultWeight
    }
    //调整绩效评分
    setPriotityLevel(){
        if(this.state.weightSum > 90){
            alert("权重总和大于90"); return
        }else if(this.state.weightSum < 90){
            alert("权重总和小于90"); return
        }

        this.setState({
            btnState : !this.state.btnState ,
            adjustNone : !this.state.adjustNone
        })
    }
    //恢复默认权重
    defaultWeight(){
        this.setState({
            weight : this.initdefaultWright() ,
            weightSum : 90
        })
    }
    // 调整权重 up down
    upClick(item,nub){
        if(this.state.weight[item] <= 1&& nub == -1){return}
        var data = this.state.weight ;
        var sum = this.state.weightSum ;
        sum += nub ;
        data[item] =  +this.state.weight[item] + nub

        this.setState({
            weight :data ,
            weightSum : sum
        })
    }
    render() {
        var adjustBoxStyle = {display: this.state.adjustNone == true ? "none" : "block" }
        return (
            <div className="x_panel PriorityLevel">
                <div className="x_title">
                    <h2>设置绩效评分规则</h2>
                    <button className="btn  btn-primary" onClick={()=>this.setPriotityLevel()}>{this.state.btnState == true ? "调整绩效评分规则" : "确认绩效评分"}</button>
                    <button className="btn btn-default" onClick={()=>this.defaultWeight()}>恢复默认权重</button>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>项目</th>
                            <th>权重</th>
                            <th>默认权重</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.projectWord.map((item,index)=>{
                              return (
                                  <tr key={index}>
                                      <td>{this.state.project[index]}</td>
                                      <td className="adjustBox">
                                          <i>{this.state.weight[item]}</i>
                                          <div className="adjustGrade" style={adjustBoxStyle}>
                                              <div className="up"   data-state={item}  onClick={()=>this.upClick(item,+1)}><i className="fa fa-sort-asc"></i></div>
                                              <div className="down"   data-state={item}  onClick={()=>this.upClick(item,-1)}><i className="fa fa-sort-desc"></i></div>
                                          </div>
                                      </td>
                                      <td>{this.initdefaultWright()[item]}</td>
                                  </tr>
                              )
                            })
                        }
                        </tbody>
                    </table>
                    <p>权重总和：90 , 当前权重总和：<b style={{"color": this.state.weightSum != 90 ? "red" : "green"}}>{this.state.weightSum}</b></p>
                </div>
            </div>
        )
    }

}
export default PriorityLevel