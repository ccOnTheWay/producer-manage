/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';


class AddProvider extends Component{
    render(){
        return (
            <div className="row top_tiles ">
                <div className="animated flipInY col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tile-stats">
                        <div className="icon"><i className="fa fa-caret-square-o-right"></i></div>
                        <div className="count">179</div>
                        <h3>供应商总数</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                    </div>
                </div>
                <div className="animated flipInY col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tile-stats">
                        <div className="icon"><i className="fa fa-comments-o"></i></div>
                        <div className="count">179</div>
                        <h3>New Sign ups</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddProvider