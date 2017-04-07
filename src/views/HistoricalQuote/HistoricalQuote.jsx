/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';
//import AddProvider from "./AddProvider"

class HistoryPrice extends Component{
    componentDidMount(){

    }
    render(){
        return (
          <div className="row">
            <div className="col-md-9">
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">搜索</button>
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <button type="button" className="btn btn-success pull-right">列表导出</button>
            </div>
            <div className="col-md-12">
              <div className="x_panel">
                <div className="x_content">
                  <div id="datatable_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">

                    <div className="row">
                      <div className="col-sm-12">
                        <table id="datatable" className="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="datatable_info">
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{width: 172+'px'}}>供应商名称</th>
                              <th className="sorting"  tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="Position: activate to sort column ascending" style={{width: 280+'px'}}>元器件信息</th>
                              <th className="sorting"  tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="Office: activate to sort column ascending" style={{width: 128+'px'}}>询价单号</th>
                              <th className="sorting"  tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending" style={{width: 67+'px'}}>状态</th>
                              <th className="sorting"  tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="Start date: activate to sort column ascending" style={{width: 128+'px'}}>含税单价</th>
                              <th className="sorting"  tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" aria-label="Salary: activate to sort column ascending" style={{width: 99+'px'}}>报价时间</th>
                            </tr>
                          </thead>


                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td>$162,700</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Angelica Ramos</td>
                              <td>Chief Executive Officer (CEO)</td>
                              <td>London</td>
                              <td>47</td>
                              <td>2009/10/09</td>
                              <td>$1,200,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                              <td>66</td>
                              <td>2009/01/12</td>
                              <td>$86,000</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Bradley Greer</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>41</td>
                              <td>2012/10/13</td>
                              <td>$132,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Brenden Wagner</td>
                              <td>Software Engineer</td>
                              <td>San Francisco</td>
                              <td>28</td>
                              <td>2011/06/07</td>
                              <td>$206,850</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                              <td>61</td>
                              <td>2012/12/02</td>
                              <td>$372,000</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Bruno Nash</td>
                              <td>Software Engineer</td>
                              <td>London</td>
                              <td>38</td>
                              <td>2011/05/03</td>
                              <td>$163,500</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Caesar Vance</td>
                              <td>Pre-Sales Support</td>
                              <td>New York</td>
                              <td>21</td>
                              <td>2011/12/12</td>
                              <td>$106,450</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Cara Stevens</td>
                              <td>Sales Assistant</td>
                              <td>New York</td>
                              <td>46</td>
                              <td>2011/12/06</td>
                              <td>$145,600</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2012/03/29</td>
                              <td>$433,060</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                      </div>
                      <div className="col-sm-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                          <ul className="pagination">
                            <li className="paginate_button previous disabled" id="datatable_previous"><a href="#" aria-controls="datatable" data-dt-idx="0" tabIndex="0">Previous</a></li>
                            <li className="paginate_button active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabIndex="0">1</a></li>
                            <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="2" tabIndex="0">2</a></li>
                            <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="3" tabIndex="0">3</a></li>
                            <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="4" tabIndex="0">4</a></li>
                            <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="5" tabIndex="0">5</a></li>
                            <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="6" tabIndex="0">6</a></li>
                            <li className="paginate_button next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabIndex="0">Next</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default HistoryPrice
