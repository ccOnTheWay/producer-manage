/**
 * Created by fengxicai on 4/10/2017.
 */

/*
 * tabelItem 表格数据
 * */

import React, {Component} from 'react';




class Tabel extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabelHeader : this.initData(this.props.tabelItem)
        }
    }
    //初始化表头
    initData(data){
        var key = [];
        for(var i in data[0]){
            key.push(i)
        };
        return key ;
    }
    render(){
        return (
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {
                                this.state.tabelHeader.map((item,index)=>{
                                    return (
                                        <th key={index}>{item}</th>
                                    )
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.tabelItem.map((item,index)=>{
                                var itemTd = []
                                for( var j in this.state.tabelHeader){
                                    itemTd.push(<td key={j}>{item[this.state.tabelHeader[j]]}</td>)
                                }
                                return (
                                    <tr key={index}>
                                        {itemTd}
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
        )
    }
}

export default Tabel
