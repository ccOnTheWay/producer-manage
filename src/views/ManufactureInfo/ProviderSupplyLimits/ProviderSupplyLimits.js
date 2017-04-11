/**
 * Created by fengxicai on 4/10/2017.
 * 供应商供货范围
 */

import React, { Component } from 'react';

import Tabel from "../../../components/Tabel/Tabel"




var ProviderSupplyLimitsTabelHeader = ["元器件类别","质量等级","生产厂商"]

var ProviderSupplyLimitsTabelItem = [["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"],
                                    ["电阻器","工业级及以下","Samsung"]]

var nowGradeTableData = [
    {"元器件类别":"电阻器","价格优势":"工业级及以下"},
    {"元器件类别":"电阻器","价格优势":"工业级及以下"},
    {"元器件类别":"电阻器","价格优势":"工业级及以下"}
];



class ProviderSupplyLimits extends Component{
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
                    <h2>供应商纸质详情</h2>
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




export default ProviderSupplyLimits