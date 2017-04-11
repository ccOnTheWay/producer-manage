/**
 * Created by fengxicai on 4/10/2017.
 *  等级模块
 */
import React, { Component } from 'react';
import "./Grade.css"

//进度条
import Progress from "../../../components/Progress/Progress"
class Grade extends Component{
    constructor(props){
        super(props)

    }
    barchartClick(e){
       
        //  alert(1111)
    }
    render(){
        return (
            <div className="Grade col-lg-4 col-md-4 col-sm-12 col-xs-12" id="Grade"  ref='barChart' data-index="111" data-connect="88888" onClick={(e)=>this.barchartClick(e)}>
                <div className="productsName">{this.props.productsData.name}</div>
                <div className="gradeNub"><b>等级</b>{this.props.productsData.grade}</div>
                <Progress  title="评分" nub="22" count="100"/>
                <div className="progressRule">评分由资质得分和绩效得分构成</div>
                <Progress  title="资质得分" nub="6" count="10"/>
                <Progress  title="绩效得分" nub="67" count="90"/>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default Grade