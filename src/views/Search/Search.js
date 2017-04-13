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
    this.state={
      data: [],
      showModal: false,
      columns: [{
          header: '序号',
          accessor: 'supID'
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
      ],
      eleComponentsCls:[
        "电阻器",
        "电容器",
        "感性及磁性元件",
        "熔断器",
        "连接器",
        "滤波器",
        "继电器",
        "频率元器件",
        "二极管",
        "晶体管",
        "光电子器件",
        "单片集成电路",
        "混合集成电路",
        "开关",
        "线缆和光缆",
        "温控元器件"
      ],

    }
  }

  changeTable (index){
    let data=[];
    

    for (var i=0; i < 59; i++) {
      data.push({
        supID: '1',
        supName: 'faker.name.findName()',
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
  componentWillMount() {
    let data=this.state.data;
    for (var i=0; i < 59; i++) {
      data.push({
        supID: faker.random.number(),
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
    const items = this.state.eleComponentsCls;
    return (
      <div>
        <div className="col-md-12">
          <div className="x_panel">
              <div className="x_title">
                <h2>供应商筛选条件</h2>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                {
                  items.map((item,index) =>
                    <button type="button" className="btn btn-round btn-success" onClick={()=>this.changeTable(index)} key={index} >{item.toString() }</button>
                  )
                }
              </div>
            </div>
        </div>
        <div className="dataTables_wrapper col-md-12" >
          <ReactTable
            data={
              this.state.data
            }
            columns={
              this.state.columns
            }
            defaultPageSize={
              10
            }
            nextText={
              '下一页'
            }
            previousText={
              '上一页'
            }
            loadingText={
              '正在加载'
            }
            noDataText={
              '没有下一页'
            }
            pageText={
              '页码'
            }
            ofText={
              '共'
            }
            rowsText={
              '条每行'
            }
          />
        </div>
      </div>
    )
  }
}

export default Search;
