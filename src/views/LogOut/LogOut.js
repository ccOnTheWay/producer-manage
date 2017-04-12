import React, {Component} from 'react';

import "./LogOut.css"

class LogOut extends Component {
    render (){
        return (
            <div className={"LogOut modal fade " + this.props.class} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            <h3>是否要{this.props.title}此用户</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={()=>this.props.modalClick()}>{this.props.title}</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default LogOut