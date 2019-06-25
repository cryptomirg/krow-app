//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { FaBars } from 'react-icons/fa';

//components
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
        await this.setState({ show: !this.state.show });
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
        let active;
        if (this.state.show) {
            active = 'active';
        } else {
            active = '';
        }
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

                                <FaBars
                                    className="toggleBar"
                                    size="30"
                                    onClick={this.props.toggleSideNav}
                                />
                            </div>

                            <div className="right-side">
                                <div className="header-widget">
                                    <div
                                        className={`header-notifications user-menu ${active}`}
                                    >
                                        <div
                                            className="header-notifications-trigger"
                                            onClick={this.toggleDropdown}
                                        >
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
                                        <ProfileDropdown
                                            show={this.state.show}
                                            initial={this.state.initial}
                                        />
                                    </div>
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
            </div>
        );
    }
}

export default TopNav;
