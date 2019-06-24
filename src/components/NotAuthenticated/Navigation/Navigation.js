//libraries
import React, { Component } from 'react';

//components
import TopNav from './TopNav';
import BottomNav from './BottomNav';

class NotAuthenticatedNavigation extends Component {
    render() {
        return (
            <div id="wrapper">
                <TopNav />
                <div className="clearfix" />
                <div>{this.props.children}</div>
                <div className="margin-top-70" />
                <BottomNav />
            </div>
        );
    }
}

export default NotAuthenticatedNavigation;
