//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProfileDropdown from './ProfileDropdown';

//images
import logo from '../../../assets/images/krowlogo.png';
import user from '../../../assets/images/user-avatar-placeholder.png';

class TopNav extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            initial: true
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    async toggleDropdown(event) {
        await this.setState({ show: !this.state.show, initial: false });
        console.log(this.state.show);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                show: false
            });
        }
    };

    render() {
        return (
            <div>
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
                                    <div className="header-notifications user-menu">
                                        <div className="header-notifications-trigger">
                                            <a href="#">
                                                <div
                                                    className="user-avatar status-online"
                                                    onClick={
                                                        this.toggleDropdown
                                                    }
                                                >
                                                    <img src={user} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <ProfileDropdown
                                    show={this.state.show}
                                    initial={this.state.initial}
                                />
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
            </div>
        );
    }
}

export default TopNav;
