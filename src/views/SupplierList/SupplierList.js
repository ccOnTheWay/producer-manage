import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../../../src/assets/css/table.css'
import faker from 'faker';
import {Modal, Button, Tooltip, Popover} from 'react-bootstrap';
import { getStates, matchStateToTerm, sortStates, styles } from './utils';
import Autocomplete from 'react-autocomplete';
class SupplierList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      showModal:false,
      columns : [
          {
            header: '序号',
            accessor: 'supID',
            render: row => (
              <input type="checkbox" value=""/>
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

  componentWillMount(){

    var data = this.state.data;

    for (var i = 0; i < 59; i++) {
      data.push({
        supID: faker.random.number(),
        supName:faker.name.findName(),
        contact:faker.name.findName(),
        status:faker.name.findName(),
        level:faker.name.findName(),
        scope:faker.name.findName(),
        yieldly:faker.name.findName(),
        status:faker.name.findName()
      })
    }

    this.setState({
      data:data
    })
  }
  getInitialState() {
    return {
      showModal: false ,
       value: 'Ma'
    };

  }

  close =()=> {
    this.setState({ showModal: false });
  }

  open =()=> {
    this.setState({ showModal: true });
  }

  render(){
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );


    return (
      <div>

      <div className="dataTables_wrapper">
        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          添加
        </Button>
        <Button>
          删除
        </Button>


        <ReactTable
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
        />


      </div>
      <Modal  show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
            <Modal.Title>请输入供应商名称</Modal.Title>
          </Modal.Header>
        <Modal.Body style={{height:"250px"}}>
          <Autocomplete
            value={this.state.value}
            inputProps={{name: "US state", id: "states-autocomplete"}}
            items={getStates()}
            getItemValue={(item) => item.name}
            shouldItemRender={matchStateToTerm}
            sortItems={sortStates}
            onChange={(event, value) => this.setState({ value })}
            onSelect={value => this.setState({ value })}
            renderItem={(item, isHighlighted) => (
              <div
                style={isHighlighted ? styles.highlightedItem : styles.item}
                key={item.abbr}
              >{item.name}</div>
            )}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close} bsStyle="primary">确定</Button>
          <Button onClick={this.close}>关闭</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}

export default SupplierList;
