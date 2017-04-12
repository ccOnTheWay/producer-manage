import React, {
  Component
} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../../../src/assets/css/table.css'
import faker from 'faker';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showModal: false,
      columns: [{
          header: '序号',
          accessor: 'supID',
          render: row => ( <
            input type = "checkbox"
            value = "" / >
          )
        }, {
          header: '供应商名称',
          accessor: 'supName'
        },
        {
          header: '联系人',
          accessor: 'contact'
        },
        {
          header: '联系方式',
          accessor: 'status'
        },
        {
          header: '等级',
          accessor: 'level'
        },
        {
          header: '供货范围',
          accessor: 'scope'
        },
        {
          header: '生产地',
          accessor: 'yieldly'
        },
        {
          header: '状态',
          accessor: 'status'
        }
      ]
    }
  }

  componentWillMount() {
    console.log(this);
    var data = this.state.data;

    for (var i = 0; i < 59; i++) {
      data.push({
        supID: +faker.random.number(),
        supName: faker.name.findName(),
        contact: faker.name.findName(),
        status: faker.name.findName(),
        level: faker.name.findName(),
        scope: faker.name.findName(),
        yieldly: faker.name.findName(),
        status: faker.name.findName()
      })
    }

    this.setState({
      data: data
    })
  }

  render() {
    return ( <
      div >

      <
      div className = "dataTables_wrapper" >
      <
      ReactTable data = {
        this.state.data
      }
      columns = {
        this.state.columns
      }
      defaultPageSize = {
        10
      }
      nextText = {
        '下一页'
      }
      previousText = {
        '上一页'
      }
      loadingText = {
        '正在加载'
      }
      noDataText = {
        '没有下一页'
      }
      pageText = {
        '页码'
      }
      ofText = {
        '共'
      }
      rowsText = {
        '条每行'
      }
      /> <
      /div> <
      /div>
    )
  }
}

export default Search;
