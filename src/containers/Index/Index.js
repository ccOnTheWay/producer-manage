// common assets
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../../assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../assets/vendors/build/css/custom.min.css";
//
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import LogOut from "../../views/LogOut/LogOut"

class Index extends Component {
  render() {
    return (
      <div className="container body">
        <div className="main_container">
          <Sidebar/>
          <Header/>
          <div className="right_col" role="main">
            {this.props.children}
          </div>
          <Footer/>
        </div>
        <LogOut title="注销" class="logout" modalClick={this.logOut} />
        <LogOut title="退出" class="quit" modalClick={this.quit} />
      </div>

    );
  }
  logOut(){
    location.href = "https://www.cissdata.com/user/login "
  }
  quit(){
    location.href = "https://www.cissdata.com/ "
  }
}

export default Index;
