//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
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
                                    <h3>Forgot My Password</h3>
                                </div>

                                <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input
                                            type="text"
                                            className="input-text with-border"
                                            name="emailaddress"
                                            id="emailaddress"
                                            placeholder="Enter your Email Address or Phone Number"
                                            required
                                        />
                                    </div>
                                </form>

                                <button
                                    className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                    type="submit"
                                    form="login-form"
                                >
                                    Send Reset Link
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
