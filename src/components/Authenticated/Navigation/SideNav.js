//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-inner" data-simplebar>
                    <div className="dashboard-nav-container">
                        <a href="#" className="dashboard-responsive-nav-trigger">
                            <span className="hamburger hamburger--collapse">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </span>
                            <span className="trigger-title">
                                Dashboard Navigation
                            </span>
                        </a>

                        <div className="dashboard-nav">
                            <div className="dashboard-nav-inner">
                                <ul data-submenu-title="Welcome to Krow!">
                                    <li>
                                        <Link to="/">
                                            <i className="icon-material-outline-home" />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/browse/jobs">
                                            <i className="icon-feather-package" />
                                            Browse Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/payment">
                                            <i className="icon-material-outline-account-balance-wallet" />
                                            Payment Methods
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/setting">
                                            <i className="icon-material-outline-settings" />{' '}
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            <i className="icon-material-outline-contact-support" />
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNav;
