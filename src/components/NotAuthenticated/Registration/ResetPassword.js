//libraries
import React, { Component } from 'react';
class ResetPassword extends Component {
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
                                    <h3>Reset Your Password</h3>
                                </div>

                                <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input
                                            type="text"
                                            className="input-text with-border"
                                            name="emailaddress"
                                            id="emailaddress"
                                            placeholder="Enter New Password"
                                            required
                                        />
                                    </div>

                                    <div className="input-with-icon-left">
                                        <i className="icon-material-outline-lock" />
                                        <input
                                            type="password"
                                            className="input-text with-border"
                                            name="password"
                                            id="password"
                                            placeholder="Confirm New Password"
                                            required
                                        />
                                    </div>
                                </form>
                                <button
                                    className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                    type="submit"
                                    form="login-form"
                                >
                                    Reset Password
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="margin-top-70" />
            </div>
        );
    }
}

export default ResetPassword;
