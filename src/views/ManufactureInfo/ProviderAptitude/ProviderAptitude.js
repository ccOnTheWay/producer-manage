/*
* 供应商资质详情
* */
import React, { Component } from 'react';

import Tabel from "../../../components/Tabel/Tabel"

var nowGradeTableData = [{"项目":"表现（0-1）","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"权重","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"得分=表现*权重","价格优势":"2","价格波动":"","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
];



class ProviderAptitude extends Component{
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
                    <Tabel tabelItem={nowGradeTableData} />
                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default ProviderAptitude