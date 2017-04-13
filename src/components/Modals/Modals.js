/**
 * Created by fengxicai on 4/10/2017.
 进度条组件
 */


/*
 * title 弹出框按钮标题
 * name  弹出框标题
 * Children 内部html结构
 * class 弹出框的类名
 * */

import React, {Component} from 'react';

import "./Modals.css"

class Modals extends Component {
    render (){
        return (
            <div className="modalBox">
                <a data-toggle="modal" data-target={"."+this.props.class}>{this.props.title}</a>

                <div className={"modal fade "+ this.props.class}  role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content"  style={{"position":"relative","zIndex":1111}} >
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                                </button>
                                <h4 className="modal-title">{this.props.name}</h4>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Modals
