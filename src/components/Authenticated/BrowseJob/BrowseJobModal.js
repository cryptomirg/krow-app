//libraries
import React, { Component } from 'react';

class BrowseJobModal extends Component {
    render() {
        return (
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <h3 className="margin-top-50">Add a Payment Method</h3>
                            <div className="payment margin-top-30">
                                <div className="payment-tab">
                                    <div className="payment-tab-trigger">
                                        <input
                                            type="radio"
                                            name="cardType"
                                            id="creditCart"
                                            value="creditCard"
                                        />
                                        <label for="creditCart">
                                            Add Credit / Debit Card
                                        </label>
                                        <img
                                            className="payment-logo"
                                            src="https://i.imgur.com/IHEKLgm.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="payment-tab-content">
                                        <div className="row payment-form-row">
                                            <div className="col-md-6">
                                                <div className="card-label">
                                                    <input
                                                        id="nameOnCard"
                                                        name="nameOnCard"
                                                        required
                                                        type="text"
                                                        placeholder="Cardholder Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card-label">
                                                    <input
                                                        id="cardNumber"
                                                        name="cardNumber"
                                                        placeholder="Credit Card Number"
                                                        required
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="card-label">
                                                    <input
                                                        id="expiryDate"
                                                        placeholder="Expiry Month"
                                                        required
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="card-label">
                                                    <label for="expiryDate">
                                                        Expiry Year
                                                    </label>
                                                    <input
                                                        id="expirynDate"
                                                        placeholder="Expiry Year"
                                                        required
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="card-label">
                                                    <input
                                                        id="cvv"
                                                        required
                                                        type="text"
                                                        placeholder="CVV"
                                                    />
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className="button dark ripple-effect margin-top-5 margin-bottom-10"
                                            >
                                                Submit
                                                <i className="icon-feather-check" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="content">
                                <div className="section-headline margin-top-45 margin-bottom-12">
                                    <h5>Select your Default Payment Method</h5>
                                </div>

                                <select className="selectpicker">
                                    <option
                                        data-icon="icon-brand-cc-visa"
                                        selected
                                    >
                                        8352
                                    </option>
                                    <option data-icon="icon-brand-cc-mastercard">
                                        6742
                                    </option>
                                    <option data-icon="icon-brand-cc-discover">
                                        1234
                                    </option>
                                    <option data-icon="icon-brand-cc-paypal">
                                        Paypal
                                    </option>
                                </select>
                            </div>
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

export default BrowseJobModal;
