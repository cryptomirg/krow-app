//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//images
import user from '../../../assets/images/user-avatar-placeholder.png';

class ProfileDropdown extends Component {
    render() {
        return (
            <div className="header-notifications-dropdown">
                <div className="user-status">
                    <div className="user-details">
                        <div className="user-avatar status-online">
                            <img src={user} alt="" />
                        </div>
                        <div className="user-name">Tom Smith</div>
                    </div>
                </div>

                <ul className="user-menu-small-nav">
                    <li>
                        <Link to="/become/freelancer">
                            <i className="icon-material-outline-person-pin" />
                            Make Money Doing Jobs
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting">
                            <i className="icon-material-outline-settings" />{' '}
                            Settings
                        </Link>
                    </li>
                    <li>
                        <a href="index-logged-out.html">
                            <i className="icon-material-outline-power-settings-new" />{' '}
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProfileDropdown;
