/*
* 邀请供应商
* */
import React, {Component} from 'react';

class InviteSupplier extends Component {

    render() {

        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>邀请供应商</h2>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <form  data-parsley-validate className="form-horizontal form-label-left">

                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">供应商名称
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input ref="providerName"  type="text" name="providerName"  className="form-control col-md-7 col-xs-12" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">供应商联系人
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input  ref="providerLianman"   type="text" name="last-name" className="form-control col-md-7 col-xs-12" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">供应商联系方式</label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input ref="providerTel" className="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">供应商邮箱地址
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <input ref="providerEmail"  className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">供应商简介</label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <textarea ref="providerIntroduce" style={{"width":"100%","height":"200px"}}></textarea>
                            </div>
                        </div>
                        <div className="ln_solid"></div>
                        <div className="form-group">
                            <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                <button type="button" onClick={this.btnSubmit} className="btn btn-primary">确定提交</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    btnSubmit=()=>{
        var data = {
            providerName : this.refs.providerName.value ,   //供应商名称
            providerLianman :this.refs.providerLianman.value , //供应商联系人
            providerTel :this.refs.providerTel.value,  //供应商联系方式
            providerIntroduce :this.refs.providerIntroduce.value,  //供应商邮箱地址
            providerEmail :this.refs.providerEmail.value   //供应商简介
        }
    }
}
export default InviteSupplier
