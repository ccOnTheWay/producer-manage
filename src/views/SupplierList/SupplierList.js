import React, {Component} from 'react';
import faker from 'faker';
import {Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton,InsertModalFooter} from 'react-bootstrap-table';
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

    this.onAfterDeleteRow = (rowKeys) => {
      alert('The rowkey you drop: ' + rowKeys);
    }

    this.customConfirm = (next, dropRowKeys) => {
      const dropRowKeysStr = dropRowKeys.join(',');
      if (confirm(`确认删除本条记录吗?`)) {
        next();
      }
    }

    this.createCustomDeleteButton = (onClick) => {
      return (
        <DeleteButton btnText='删除'/>
      );
    }

    this.createCustomInsertButton = (onClick) => {
      return (
        <InsertButton
          btnText='添加'
        />
      );
    }

    this.createCustomModalFooter = (closeModal, save) => {
      return (
        <InsertModalFooter
          className='my-custom-class'
          saveBtnText='保存'
          closeBtnText='取消'/>
      );
    }

    this.onRowClick = (row) => {
      let href = "#/manufacture_info/" + row.supID;
      // window.location.href = "";
      window.location.href = href;
    }
    this.options = {
      defaultSortName: 'supName',
      defaultSortOrder: 'desc',
      deleteBtn: this.createCustomDeleteButton,
      handleConfirmDeleteRow: this.customConfirm,
      afterDeleteRow:this.onAfterDeleteRow,
      insertBtn: this.createCustomInsertButton,
      insertModalFooter: this.createCustomModalFooter,
      onRowClick: this.onRowClick
    };
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
        // onSelect: (row, isSelected, e) => this.onRowSelect(row, isSelected, e)
      }
    })
  }
  render() {
    return (
      <div className="col-md-12">

        <div className="datatable_wrapper">
          <BootstrapTable data={this.state.producers} pagination options={this.options} selectRow={this.state.selectRowProp} deleteRow insertRow={ true }>
            <TableHeaderColumn dataField="supID" isKey className="idStyle" columnClassName="idStyle"></TableHeaderColumn>
            <TableHeaderColumn dataField="supName" dataSort tdStyle={ { color: '#009DDA',cursor:"pointer" } } >供应商名称</TableHeaderColumn>
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
