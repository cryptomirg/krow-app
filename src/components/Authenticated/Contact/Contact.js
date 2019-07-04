//libraries
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="dashboard-content-container">
                <div className="dashboard-content-inner">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
                            <section id="contact" className="margin-bottom-60">
                                <h3 className="headline margin-top-15 margin-bottom-35">
                                    Any questions, comments, or concerns? Feel
                                    free to contact us!
                                </h3>
                                <form
                                    method="post"
                                    name="contactform"
                                    id="contactform"
                                    autocomplete="on"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-with-icon-left">
                                                <input
                                                    className="with-border"
                                                    name="name"
                                                    type="text"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required="required"
                                                />
                                                <i className="icon-material-outline-account-circle" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-with-icon-left">
                                                <input
                                                    className="with-border"
                                                    name="email"
                                                    type="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                    pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                                                    required="required"
                                                />
                                                <i className="icon-material-outline-email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-with-icon-left">
                                        <input
                                            className="with-border"
                                            name="subject"
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            required="required"
                                        />
                                        <i className="icon-material-outline-assignment" />
                                    </div>

                                    <div>
                                        <textarea
                                            className="with-border"
                                            name="comments"
                                            cols="40"
                                            rows="5"
                                            id="comments"
                                            placeholder="Message"
                                            spellcheck="true"
                                            required="required"
                                        />
                                    </div>

                                    <input
                                        type="submit"
                                        className="submit button margin-top-15"
                                        id="submit"
                                        value="Submit Message"
                                    />
                                </form>
                            </section>
                        </div>
                    </div>
                    <div className="dashboard-footer-spacer" />
                    <div className="small-footer margin-top-15">
                        <div className="small-footer-copyrights">
                            © 2019 <strong>Krow</strong>. All Rights Reserved.
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
        );
    }
}

export default Contact;
