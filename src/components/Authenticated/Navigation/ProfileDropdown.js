//libraries
import React, { Component } from 'react';
import { FaCircle, FaCog, FaPowerOff, FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

//images
import user from '../../../assets/images/user-avatar-placeholder.png';

class ProfileDropdown extends Component {
    render() {
        var from, to;
        if (this.props.initial) {
            from = { opacity: 1 };
            to = { opacity: 1 };
        } else {
            if (this.props.show) {
                from = {
                    opacity: 0
                };
                to = {
                    opacity: 1
                };
            } else {
                from = {
                    opacity: 1
                };
                to = {
                    opacity: 0
                };
            }
        }
        return (
            <Spring from={from} to={to}>
                {props => (
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
                )}
            </Spring>
        );
    }
}

// {
//     /* <div className="profileDropdown shadow" style={props}>
//     <div className="border-bottom">
//         <FaCircle className="inline-block" size="50" />
//         <p className="inline-block">Name</p>
//     </div>
//     <div className="display-block">
//         <FaCoins />
//         <NavLink className="navLink" to="/">
//             Earn Money
//         </NavLink>
//     </div>
//     <div className="display-block">
//         <FaCog />
//         <NavLink className="navLink" to="/">
//             Settings
//         </NavLink>
//     </div>
//     <div className="display-block">
//         <FaPowerOff />
//         <NavLink className="navLink" to="/">
//             Logout
//         </NavLink>
//     </div>
// </div> */
// }

export default ProfileDropdown;
