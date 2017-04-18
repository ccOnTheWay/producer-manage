import React, {Component} from 'react';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';
// import '../../../src/assets/css/table.css'
import faker from 'faker';
import {Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import "./main.css"

class SupplierList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producers: [],
      selectRowProp: {},
      selectedRow: []
    }
    this.options = {
      defaultSortName: 'supName', // default sort column supID
      defaultSortOrder: 'desc' // default sort order
    };
  }

  onRowSelect(row, isSelected, e) {
    // let rowStr = '';
    // for (const prop in row) {
    //   rowStr += prop + ': "' + row[prop] + '"';
    // }
    // console.log(row.supID);
    // console.log(isSelected);
    let selectedRow = this.state.selectedRow.slice();
    if (isSelected) {
      selectedRow.push(row.supID)
    } else {
      // console.log(selectedRow.indexOf(row.supID));
      selectedRow.splice(selectedRow.indexOf(row.supID), 1)
    }
    this.setState({selectedRow: selectedRow})

    // console.log(e);
    // console.log(row);

    // alert(`is selected: ${isSelected}, ${rowStr}`);
  }

  onSelectAll(isSelected, rows) {
    // alert(`is select all: ${isSelected}`);
    // if (isSelected) {
    //   alert('Current display and selected data: ');
    // } else {
    //   alert('unselect rows: ');
    // }
    // for (let i = 0; i < rows.length; i++) {
    //   alert(rows[i].id);
    // }
  }

  deleteRow() {
    let producers = this.state.producers;
    for (var i = 0; i < this.state.selectedRow.length; i++) {
      for (var j = 0; j < this.state.producers.length; j++) {
        if (this.state.producers[j].supID === this.state.selectedRow[i]) {
          // producers = producers.splice(producers.indexOf(this.state.producers[j]), 1)
          producers.splice(producers.indexOf(this.state.producers[j]), 1);
          // console.log(producers.indexOf(this.state.producers[j]));
        }
      }
    }
    this.setState({
      producers:producers
    })
  }

  componentWillMount() {
    var producers = this.state.producers;
    for (var i = 0; i < 5; i++) {
      producers.push({
        supID: faker.random.number(),
        supName: faker.name.findName(),
        contact: faker.name.findName(),
        contact_info: faker.name.findName(),
        level: faker.name.findName(),
        scope: faker.name.findName(),
        yieldly: faker.name.findName(),
        status: faker.name.findName()
      })
    }

    this.setState({
      producers: producers,
      selectRowProp: {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelected, e) => this.onRowSelect(row, isSelected, e),
        onSelectAll: this.onSelectAll
      }
    })
  }
  render() {
    return (
      <div className="col-md-12">

        <div className="datatable_wrapper">
          <div className="row">
            <div className="col-md-12">
              <Button bsStyle="primary">添加</Button>
              <Button bsStyle="default" onClick={() => this.deleteRow()}>删除</Button>
            </div>
          </div>
          <BootstrapTable data={this.state.producers} pagination options={this.options} selectRow={this.state.selectRowProp}>
            <TableHeaderColumn dataField="supID" isKey className="idStyle" columnClassName="idStyle"></TableHeaderColumn>
            <TableHeaderColumn dataField="supName" dataSort>供应商名称</TableHeaderColumn>
            <TableHeaderColumn dataField="contact" dataSort>联系人</TableHeaderColumn>
            <TableHeaderColumn dataField="contact_info" dataSort>联系方式</TableHeaderColumn>
            <TableHeaderColumn dataField="level" dataSort>等级</TableHeaderColumn>
            <TableHeaderColumn dataField="scope" dataSort>供货范围</TableHeaderColumn>
            <TableHeaderColumn dataField="yieldly" dataSort>生产地</TableHeaderColumn>
            <TableHeaderColumn dataField="status" dataSort>状态</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default SupplierList;
