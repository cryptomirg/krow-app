//libraries
import React, { Component } from 'react';

//components
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import SideNav from './SideNav';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            initial: true
        };

        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    async toggleSideNav() {
        await this.setState({ show: !this.state.show, initial: false });
    }

    render() {
        return (
            <div id="wrapper">
                <TopNav toggleSideNav={this.toggleSideNav} />
                <div className="clearfix" />
                <div className="dashboard-container">
                    <SideNav
                        show={this.state.show}
                        initial={this.state.initial}
                    />
                    {this.props.children}
                    {/* <BottomNav /> */}
                </div>
            </div>
        );
    }
}

export default Navigation;
