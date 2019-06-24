//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BottomNav extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-top-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-rows-container">
                                    <div className="footer-rows-left">
                                        <div className="footer-row">
                                            <div className="footer-row-inner footer-logo">
                                                <img
                                                    src="images/krowlogo2.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer-rows-right">
                                        <div className="footer-row">
                                            <div className="footer-row-inner">
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
                            </div>
                        </div>
                    </div>

                    <div className="footer-middle-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-2 col-lg-2 col-md-3">
                                    <div className="footer-links">
                                        <h3>Support</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span>Contact</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Privacy Policy</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Terms of Use</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-2 col-lg-2 col-md-3">
                                    <div className="footer-links">
                                        <h3>Login/Sign Up</h3>
                                        <ul>
                                            <li>
                                                <Link to="/login">
                                                    <span>Login</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/register">
                                                    <span>Sign Up</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12">
                                    <h3>
                                        <i className="icon-feather-mail" /> Sign
                                        Up For a Newsletter
                                    </h3>
                                    <p>
                                        Weekly breaking news, analysis and
                                        cutting edge advices on job searching.
                                    </p>
                                    <form
                                        action="#"
                                        method="get"
                                        className="newsletter"
                                    >
                                        <input
                                            type="text"
                                            name="fname"
                                            placeholder="Enter your email address"
                                        />
                                        <button type="submit">
                                            <i className="icon-feather-arrow-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    © 2019 <strong>Krow</strong>. All Rights
                                    Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomNav;
