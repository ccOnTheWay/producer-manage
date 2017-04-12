/**
 * Created by fengxicai on 3/31/2017.
 */
import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../../../src/assets/css/table.css'
import faker from 'faker';

  class HistoricalQuotation extends Component {
    constructor(props){
      super(props);

      this.state = {
        data : [],
        columns : [

            {
              header: '供应商名称',
              accessor: 'supName'
            }, {
              header: '元器件信息',
              id: 'info',
              accessor: d => d.info
            },
            {
              header: '询价单号',
              accessor: 'serNum'
            },
            {
              header: '状态',
              accessor: 'status'
            },
            {
              header: '含税单价',
              accessor: 'price'
            },
            {
              header: '报价时间',
              accessor: 'time'
            }
        ]
      }
    }

    componentWillMount(){

      var data = this.state.data;

      for (var i = 0; i < 59; i++) {
        data.push({
          supName: faker.name.findName(),
          info: faker.name.findName(),
          serNum: faker.random.number(),
          status:faker.name.findName(),
          price:faker.random.number(),
          time:faker.date.weekday()
        })
      }

      this.setState({
        data:data
      })
    }
    render() {

      return (
        <ReactTable
          className="dataTables_wrapper"
          data={this.state.data}
          columns={this.state.columns}
          defaultPageSize={10}
          nextText={'下一页'}
          previousText={'上一页'}
          loadingText={'正在加载'}
          noDataText={'没有下一页'}
          pageText={'页码'}
          ofText={'共'}
          rowsText={'条每行'}
          showFilters={true}
        />
      )
    }
  }
  export default HistoricalQuotation
