//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
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
                                    <h3>Login</h3>
                                    <span>
                                        Don't have an account?{' '}
                                        <Link to="/register">Sign Up!</Link>
                                    </span>
                                </div>
                                <form method="post" id="login-form">
                                    <div className="input-with-icon-left">
                                        <i className="icon-material-baseline-mail-outline" />
                                        <input
                                            type="text"
                                            className="input-text with-border"
                                            name="emailaddress"
                                            id="emailaddress"
                                            placeholder="Email Address"
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
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <Link to="/forgotPassword">
                                        Forgot Password?
                                    </Link>
                                </form>
                                <button
                                    className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                    type="submit"
                                    form="login-form"
                                >
                                    Log In{' '}
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>
                                <div className="social-login-separator">
                                    <span>or</span>
                                </div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect">
                                        <i className="icon-brand-facebook-f" />{' '}
                                        Login via Facebook
                                    </button>
                                    <button className="google-login ripple-effect">
                                        <i className="icon-brand-google-plus-g" />{' '}
                                        Login via Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="margin-top-70" />
            </div>
        );
    }
}

export default Login;
