/**
 * Created by fengxicai on 3/31/2017.
 */
import React, { Component } from 'react';

import ProviderPerformance from "./ProviderPerformance/ProviderPerformance"

import ProviderSupplyLimits from "./ProviderSupplyLimits/ProviderSupplyLimits"

import ProviderAptitude from "./ProviderAptitude/ProviderAptitude"

class ManufactureInfo extends Component{
    render(){
        return (
            <div className="x_content ManufactureInfo">


                <div className="" role="tabpanel" data-example-id="togglable-tabs">
                    <ul id="manufactureInfoNav" className="nav nav-tabs bar_tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#manufactureInfo_content1" id="performance-tab" role="tab" data-toggle="tab" aria-expanded="true">供应商绩效详情</a>
                        </li>
                        <li role="presentation" className=""><a href="#manufactureInfo_content2" role="tab" id="information-tab" data-toggle="tab" aria-expanded="false">供应商资料详情</a>
                        </li>
                        <li role="presentation" className=""><a href="#manufactureInfo_content3" role="tab" id="aptitude-tab" data-toggle="tab" aria-expanded="false">供应商资质详情</a>
                        </li>
                        <li role="presentation" className=""><a href="#manufactureInfo_content4" role="tab" id="goodsLimits-tab" data-toggle="tab" aria-expanded="false">供应商供货范围</a>
                        </li>
                    </ul>
                    <div id="manufactureInfoContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active in " id="manufactureInfo_content1" aria-labelledby="home-tab">
                            <ProviderPerformance />
                        </div>
                        <div role="tabpanel"  className="tab-pane fade" id="manufactureInfo_content2" aria-labelledby="profile-tab">
                            表格
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="manufactureInfo_content3" aria-labelledby="profile-tab">
                            <ProviderAptitude />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="manufactureInfo_content4" aria-labelledby="profile-tab">
                            <ProviderSupplyLimits></ProviderSupplyLimits>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ManufactureInfo
