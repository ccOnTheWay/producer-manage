/*
* 供应商资质详情
* */
import React, { Component } from 'react';

import Modals from "../../../components/Modals/Modals"

import aptitudeImg from "../../../assets/img/yx-certification.jpg"

var nowGradeTableData = [{"项目":"表现（0-1）","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"权重","价格优势":"0.20","价格波动":"0","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
    {"项目":"得分=表现*权重","价格优势":"2","价格波动":"","供货覆盖率":"0","询价响应时间":"0.20","成单率":"0.90"},
];


var aptitudeDetails = [{
    title : "营业执照",
    remark : "无" ,
    validty : "2020-6-6",
    state : "有效",
    img : aptitudeImg
},
    {
        title : "税务登记号",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },
    {
        title : "中人民共和国组织机构代码",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "保密资质单位证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "代理资格证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "代理资格证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "代理资格证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "代理资格证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    },{
        title : "代理资格证书",
        remark : "无" ,
        validty : "2020-6-6",
        state : "有效",
        img : aptitudeImg
    }
]


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
                    <h2>供应商资质详情</h2>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">

                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>资质名称</th>
                            <th>备注</th>
                            <th>有限期至</th>
                            <th>状态</th>
                            <th>查看扫描件</th>
                        </tr>
                        </thead>
                        <tbody>
                        {aptitudeDetails.map((item,index)=>{
                           return (
                               <tr key={index}>
                                   <td>{item.title}</td>
                                   <td>{item.remark}</td>
                                   <td>{item.validty}</td>
                                   <td>{item.state}</td>
                                   <td>
                                       {/*Small modal*/}
                                       <Modals title="查看" name={item.title} class={"aptitude"+index}>
                                           <img src={item.img} style={{"display":"block","margin":"auto"}} alt="" />
                                       </Modals>
                                   </td>
                               </tr>
                           )
                        })}

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
    componentDidMount(){


    }
}




export default ProviderAptitude