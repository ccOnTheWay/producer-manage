/**
 * Created by fengxicai on 4/10/2017.
 * 供应商供货范围
 */

import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import faker from 'faker';

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

    render() {

        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>供应商供货范围</h2>
                    <div className="clearfix"></div>
                </div>
                <ReactTable
                    className="dataTables_wrapper table table-bordered"
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    nextText={'下一页'}
                    previousText={'上一页'}
                    loadingText={'正在加载'}
                    noDataText={'没有下一页'}
                    pageText={'页码'}
                    ofText={'共'}
                    rowsText={'条每行'}
                    style={styles.primary}
                    showFilters={true}
                />
            </div>
        )
    }
}
export default ProviderSupplyLimits
