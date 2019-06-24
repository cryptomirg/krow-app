//libraries
import React, { Component } from 'react';

class Setting extends Component {
    render() {
        return (
            <div className="dashboard-content-container">
                <div className="dashboard-content-inner">
                    <div className="dashboard-headline">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box margin-top-0">
                                    <div className="headline">
                                        <h3>
                                            <i className="icon-material-outline-account-circle" />{' '}
                                            My Account
                                        </h3>
                                    </div>

                                    <div className="content with-padding padding-bottom-0">
                                        <div className="row">
                                            <div className="col-auto">
                                                <div
                                                    className="avatar-wrapper"
                                                    data-tippy-placement="bottom"
                                                    title="Change Avatar"
                                                >
                                                    <img
                                                        className="profile-pic"
                                                        src="images/user-avatar-placeholder.png"
                                                        alt=""
                                                    />
                                                    <div className="upload-button" />
                                                    <input
                                                        className="file-upload"
                                                        type="file"
                                                        accept="image/*"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="submit-field">
                                                            <h5>First Name</h5>
                                                            <input
                                                                type="text"
                                                                className="with-border"
                                                                value="Tom"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6">
                                                        <div className="submit-field">
                                                            <h5>Last Name</h5>
                                                            <input
                                                                type="text"
                                                                className="with-border"
                                                                value="Smith"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6">
                                                        <div className="submit-field">
                                                            <h5>
                                                                Become a
                                                                Freelancer
                                                            </h5>
                                                            <div className="account-type">
                                                                <div>
                                                                    <input
                                                                        type="radio"
                                                                        name="account-type-radio"
                                                                        id="employer-radio"
                                                                        className="account-type-radio"
                                                                    />
                                                                    <a
                                                                        href="dashboard-post-a-job.html"
                                                                        className="button dark"
                                                                    >
                                                                        Start
                                                                        Earning
                                                                        Money
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6">
                                                        <div className="submit-field">
                                                            <h5>Email</h5>
                                                            <input
                                                                type="text"
                                                                className="with-border"
                                                                value="tom@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12">
                                <div id="test1" className="dashboard-box">
                                    <div className="headline">
                                        <h3>
                                            <i className="icon-material-outline-lock" />{' '}
                                            Password & Security
                                        </h3>
                                    </div>

                                    <div className="content with-padding">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <div className="submit-field">
                                                    <h5>Current Password</h5>
                                                    <input
                                                        type="password"
                                                        className="with-border"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-4">
                                                <div className="submit-field">
                                                    <h5>New Password</h5>
                                                    <input
                                                        type="password"
                                                        className="with-border"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-4">
                                                <div className="submit-field">
                                                    <h5>Repeat New Password</h5>
                                                    <input
                                                        type="password"
                                                        className="with-border"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <a
                                    href="#"
                                    className="button ripple-effect big margin-top-30"
                                >
                                    Save Changes
                                </a>
                            </div>
                        </div>
                        <div className="dashboard-footer-spacer" />
                        <div className="small-footer margin-top-15">
                            <div className="small-footer-copyrights">
                                © 2019 <strong>Krow</strong>. All Rights
                                Reserved.
                            </div>
                            <ul className="footer-social-links">
                                <li>
                                    <a
                                        href="https://www.facebook.com/KrowNetwork/"
                                        title="Facebook"
                                        data-tippy-placement="top"
                                    >
                                        <i className="icon-brand-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/krownetwork"
                                        title="Twitter"
                                        data-tippy-placement="top"
                                    >
                                        <i className="icon-brand-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/krow.network/"
                                        title="Instagram"
                                        data-tippy-placement="top"
                                    >
                                        <i className="icon-brand-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/krow-network"
                                        title="LinkedIn"
                                        data-tippy-placement="top"
                                    >
                                        <i className="icon-brand-linkedin-in" />
                                    </a>
                                </li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;
