/**
 * Created by fengxicai on 4/10/2017.
 进度条组件
 */


    /*
    * title 进度条标题
    * nub  进度条长度
    * count 总长度
    * */

import React, {Component} from 'react';

import "./Progress.css"

class Progress extends Component {
    render (){
        return (
            <div className="Progress widget_summary">
                <div className="w_left w_25">
                    <span>{this.props.title}</span>
                </div>
                <div className="w_center w_55">
                    <div className="progress">
                        <div className="progress-bar bg-green" style={{width : this.props.nub / this.props.count * 100 + "%"}}>
                            {this.props.nub}
                        </div>
                        {this.props.count}
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>

        )
    }
}


export default Progress
