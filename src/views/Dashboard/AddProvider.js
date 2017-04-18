/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';


class AddProvider extends Component{
    constructor(props){
        super(props)
        ;
        this.state = {
            providerSum: 179
        }
    }
    render(){
        return (
            <div className="row top_tiles ">
                <div className="animated flipInY col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tile-stats">
                        <div className="icon"><i className="fa fa-user"></i></div>
                        <div className="count">{this.state.providerSum}</div>
                        <h3>供应商总数</h3>
                        <p>Provider Sum</p>
                    </div>
                </div>
                <div className="animated flipInY col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tile-stats" onClick={()=>location.hash = "/supplier_list"}>
                        <div className="icon"><i className="fa fa-plus-square-o"></i></div>

                        <h3 style={{"lineHeight":"111px","color":"#73879C"}}>添加/删除供应商</h3>

                    </div>
                </div>
            </div>
        )
    }
}
export default AddProvider