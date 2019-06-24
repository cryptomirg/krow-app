//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 offset-xl-3">
                            <div className="login-register-page">
                                <div className="welcome-text">
                                    <h3 style={{ fontSize: '26px' }}>
                                        Let's create your account!
                                    </h3>
                                    <span>
                                        Already have an account?{' '}
                                        <Link to="/login">Login!</Link>
                                    </span>
                                </div>

                                <form method="post" id="register-account-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-feather-user" />
                                        <input
                                            type="text"
                                            className="input-text with-border"
                                            name="emailaddress-register"
                                            id="emailaddress-register"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>

                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input
                                            type="text"
                                            className="input-text with-border"
                                            name="emailaddress-register"
                                            id="emailaddress-register"
                                            placeholder="Email Address or Phone Number"
                                            required
                                        />
                                    </div>

                                    <div
                                        className="input-with-icon-left"
                                        title="Should be at least 8 characters long"
                                        data-tippy-placement="bottom"
                                    >
                                        <i className="icon-material-outline-lock" />
                                        <input
                                            type="password"
                                            className="input-text with-border"
                                            name="password-register"
                                            id="password-register"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>

                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-lock" />
                                        <input
                                            type="password"
                                            className="input-text with-border"
                                            name="password-repeat-register"
                                            id="password-repeat-register"
                                            placeholder="Repeat Password"
                                            required
                                        />
                                    </div>

                                    <div className="input-with-icon-left">
                                        <i className="icon-feather-link" />
                                        <input
                                            type="password"
                                            className="input-text with-border"
                                            name="password-repeat-register"
                                            id="password-repeat-register"
                                            placeholder="Referral Code (Optional)"
                                            required
                                        />
                                    </div>
                                </form>

                                <button
                                    className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                    type="submit"
                                    form="login-form"
                                >
                                    Register{' '}
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>

                                <div className="social-login-separator">
                                    <span>or</span>
                                </div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect">
                                        <i className="icon-brand-facebook-f" />{' '}
                                        Register via Facebook
                                    </button>
                                    <button className="google-login ripple-effect">
                                        <i className="icon-brand-google-plus-g" />{' '}
                                        Register via Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="margin-top-70" />
            </div>
        );
    }
}

export default Register;
