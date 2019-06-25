//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //user attributes
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            referral: '',

            //display messages
            msg: '',
            errMsg: '',
            showMsg: false,
            showError: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    signUp = async () => {
        try {
            const user = await Auth.signUp({
                username: this.state.email,
                password: this.state.password
            });
            this.showMsg('Sign up successfully. Now redirecting...');
            console.log(user);
        } catch (error) {
            console.log(error);
            this.showErrorMsg(error.message);
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.showErrorMsg('Password do not match.');
        } else if (
            this.state.email === '' ||
            this.state.password === '' ||
            this.state.confirmPassword === '' ||
            this.state.name === ''
        ) {
            this.showErrorMsg('All fields cannot be empty.');
        } else {
            this.signUp();
            this.clearMsg();
        }
    }
    handleInputChange = attribute => async event => {
        await this.setState({ [attribute]: event.target.value });
    };

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
        return (
            <div>
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className=""
                                    style={{
                                        display: this.state.showError
                                            ? 'block'
                                            : 'none'
                                    }}
                                >
                                    {this.state.errMsg}
                                </div>

                                <div
                                    className=""
                                    style={{
                                        display: this.state.showMsg
                                            ? 'block'
                                            : 'none'
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
                                            onChange={this.handleInputChange(
                                                'name'
                                            )}
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
                                            onChange={this.handleInputChange(
                                                'email'
                                            )}
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
                                            onChange={this.handleInputChange(
                                                'password'
                                            )}
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
                                            onChange={this.handleInputChange(
                                                'confirmPassword'
                                            )}
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
                                            onChange={this.handleInputChange(
                                                'referral'
                                            )}
                                            required
                                        />
                                    </div>
                                </form>

                                <button
                                    className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                    type="submit"
                                    form="login-form"
                                    onClick={this.handleSubmit}
                                >
                                    Register
                                    <i className="icon-material-outline-arrow-right-alt" />
                                </button>
                                <p>
                                    By clicking Register you have agreed all of
                                    our Terms of Service
                                </p>

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
