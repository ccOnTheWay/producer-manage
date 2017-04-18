/**
 * Created by fengxicai on 4/10/2017.
 * 供应商供货范围
 */

import React, { Component } from 'react';

import faker from 'faker';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
const columns = [

    {
        header: '元器件类别',
        accessor: 'elementClass'
    }, {
        header: '质量等级',
        accessor: "qualityGrade"
    },
    {
        header: '生产厂商',
        accessor: 'vendor'
    }
]
const data = [];

for (var i = 0; i < 20; i++) {
    data.push({
        elementClass: faker.name.findName(),
        qualityGrade: faker.name.findName(),
        vendor: faker.random.number(),
        status:faker.name.findName()
    })
}


const styles = {
    primary:{
        textAlign:'center'
    }
}
class ProviderSupplyLimits extends Component {
    constructor(props){
        super(props)
        this.state = ({
            limitsData:[]
        })

    }
    componentWillMount(){
        /*
         * {
         {
         header: '元器件类别',
         accessor: 'elementClass'
         }, {
         header: '质量等级',
         accessor: "qualityGrade"
         },
         {
         header: '生产厂商',
         accessor: 'vendor'
         }
         }
         *
         *
         *
         * */
        var data = [];
        for (var i = 0; i < 50; i++) {
            data.push({
                elementClass: faker.name.findName(),
                qualityGrade: faker.name.findName(),
                vendor: faker.random.number(),
                status:faker.name.findName()
            })
        }
        this.setState({
            limitsData : data
        })
    }
    render() {

        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>供应商供货范围</h2>
                    <div className="clearfix"></div>
                </div>
                <BootstrapTable data={this.state.limitsData} pagination >
                    <TableHeaderColumn dataField="elementClass" isKey  dataSort>元器件类别</TableHeaderColumn>
                    <TableHeaderColumn dataField="qualityGrade" dataSort>质量等级</TableHeaderColumn>
                    <TableHeaderColumn dataField="vendor" dataSort>生产厂商</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
export default ProviderSupplyLimits
