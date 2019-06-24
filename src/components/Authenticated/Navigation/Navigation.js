//libraries
import React, { Component } from 'react';

//components
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import SideNav from './SideNav';

class Navigation extends Component {
    render() {
        return (
            <div id="wrapper">
                <TopNav />
                <div className="clearfix" />
                <div className="dashboard-container">
                    <SideNav />
                    {this.props.children}
                    {/* <BottomNav /> */}
                </div>
            </div>
        );
    }
}

export default Navigation;
