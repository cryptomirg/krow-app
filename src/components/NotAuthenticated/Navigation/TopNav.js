//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//images
import logo from '../../../assets/images/krowlogo.png';

class TopNav extends Component {
    render() {
        return (
            <header
                id="header-container"
                className="fullwidth dashboard-header not-sticky"
            >
                <div id="header">
                    <div className="container">
                        <div className="left-side">
                            <div id="logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="header-widget">
                                <Link
                                    to="/login"
                                    className="button big margin-top-20"
                                >
                                    Login or Sign Up
                                </Link>
                            </div>
                            <span className="mmenu-trigger">
                                <button
                                    className="hamburger hamburger--collapse"
                                    type="button"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default TopNav;
