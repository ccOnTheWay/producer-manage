/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';

import AddProvider from "./AddProvider"
import PieChart from "./Chart/PieChart"
class Dashboard extends Component{
    render(){
        return (
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                   <AddProvider />
                   <PieChart />
                </div>
              )
                    }
                    }

export default Dashboard
