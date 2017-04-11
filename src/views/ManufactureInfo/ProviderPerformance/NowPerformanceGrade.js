/**
 * Created by fengxicai on 4/10/2017.
 * 当前绩效得分
 */

import React, { Component } from 'react';

import Tabel from "../../../components/Tabel/Tabel"





class NowPerformanceGrade extends Component{
    constructor(props){
        super(props)

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
                    <Tabel tabelItem={this.props.nowGradeTableData} />
                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default NowPerformanceGrade