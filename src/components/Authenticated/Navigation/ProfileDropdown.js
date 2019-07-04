//libraries
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '@aws-amplify/auth';
import { connect } from 'react-redux';

//actions
import { userActions } from '../../../_actions/user.action';

//images
import user from '../../../assets/images/user-avatar-placeholder.png';

class ProfileDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedOut: false
        };

        this.logout = this.logout.bind(this);
    }

    //sign out user
    async logout() {
        const { dispatch } = this.props;
        await dispatch(userActions.logout());
        this.setState({ signedOut: true });
    }

    render() {
        if (this.state.signedOut) {
            return <Redirect push to="/secureHome" />;
        }
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
                            <i className="icon-material-outline-settings" /> Settings
                        </Link>
                    </li>
                    <li>
                        <p onClick={this.logout}>
                            <i className="icon-material-outline-power-settings-new" /> Logout
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect()(ProfileDropdown);
