//libraries
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions/user.action';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //sign in
            email: '',
            password: '',

            //display messages
            msg: '',
            errMsg: '',
            showMsg: false,
            showError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = attribute => async event => {
        await this.setState({ [attribute]: event.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        const { dispatch } = this.props;

        if (email || password) {
            dispatch(userActions.login(email, password));
            this.clearMsg();
        } else {
            this.showErrorMsg('All fields cannot be empty.');
        }
    }

    showMsg(msg) {
        this.setState({
            showMsg: true,
            msg: msg,
            showError: false,
            errMsg: ''
        });
    }

    showErrorMsg(msg) {
        this.setState({
            showMsg: false,
            msg: '',
            showError: true,
            errMsg: msg
        });
    }

    clearMsg() {
        this.setState({
            showMsg: false,
            msg: '',
            showError: false,
            errMsg: ''
        });
    }
    render() {
        if (this.state.signedIn) {
            return <Redirect push to="/secureHome" />;
        }
        return (
            <div>
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="error-msg"
                                    style={{
                                        display: this.state.showError ? 'block' : 'none'
                                    }}
                                >
                                    {this.state.errMsg}
                                </div>

                                <div
                                    className="msg"
                                    style={{
                                        display: this.state.showMsg ? 'block' : 'none'
                                    }}
                                >
                                    {this.state.msg}
                                </div>
                            </div>
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
                                        Don't have an account? <Link to="/register">Sign Up!</Link>
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
                                            onChange={this.handleInputChange('email')}
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
                                            onChange={this.handleInputChange('password')}
                                            required
                                        />
                                    </div>
                                    <Link to="/forgotPassword">Forgot Password?</Link>
                                </form>
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" onClick={this.handleSubmit}>
                                    Log In
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>
                                <div className="social-login-separator">
                                    <span>or</span>
                                </div>
                                <div className="social-login-buttons">
                                    <button className="facebook-login ripple-effect">
                                        <i className="icon-brand-facebook-f" /> Login via Facebook
                                    </button>
                                    <button className="google-login ripple-effect">
                                        <i className="icon-brand-google-plus-g" /> Login via Google
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

function mapStateToProps(state) {
    const { loggingIn } = state.users;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
