import React, {Component} from 'react';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';
// import '../../../src/assets/css/table.css'
import faker from 'faker';
import ReactToastr from "react-toastr";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
// import {Modal, Button, Tooltip, Popover} from 'react-bootstrap';
// import { getStates, matchStateToTerm, sortStates, styles } from './utils';
// import Autocomplete from 'react-autocomplete';





class SupplierList extends Component {
  constructor(props){
    super(props);
    this.state = {
      prducers:[]
    }

    this.options ={
      defaultSortName: 'supName',  // default sort column supID
      defaultSortOrder: 'desc'  // default sort order
    };
  }
  componentWillMount(){

    var prducers = this.state.prducers;

    for (var i = 0; i < 59; i++) {
      prducers.push({
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
      prducers:prducers
    })
  }
  render(){
    return(
      <div className="col-md-12">

        <div className="datatable_wrapper">
          <BootstrapTable data={ this.state.prducers } pagination options={ this.options }>
            <TableHeaderColumn dataField="supID" isKey  dataSort>选择</TableHeaderColumn>
            <TableHeaderColumn dataField="supName"  dataSort>供应商名称</TableHeaderColumn>
            <TableHeaderColumn dataField="contact">联系人</TableHeaderColumn>
            <TableHeaderColumn dataField="status">联系方式</TableHeaderColumn>
            <TableHeaderColumn dataField="level">等级</TableHeaderColumn>
            <TableHeaderColumn dataField="scope">供货范围</TableHeaderColumn>
            <TableHeaderColumn dataField="yieldly">生产地</TableHeaderColumn>
            <TableHeaderColumn dataField="status">状态</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default SupplierList;
