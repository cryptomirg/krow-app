//libraries
import React, { Component } from 'react';

//components

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-content-container">
                <div className="dashboard-content-inner">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="dashboard-headline">
                                <h3>Howdy, Tom!</h3>
                                <span>Hire Somebody Instantly!</span>
                            </div>

                            <div className="input-with-icon-left no-border">
                                <select
                                    className="selectpicker"
                                    placeholder="Job Type"
                                >
                                    <option>Home Cleaning</option>
                                    <option>Car Wash</option>
                                    <option>Power Washing</option>
                                    <option>Pet Services</option>
                                    <option>Moving Boxes/Manual Labor</option>
                                    <option href="pages-contact.html">
                                        Request a Service
                                    </option>
                                </select>
                            </div>

                            <div className="input-with-icon-left no-border">
                                <i className="icon-material-outline-add" />
                                <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Additional Information (e.g. Cleaning a Garage)"
                                />
                            </div>

                            <div className="input-with-icon-left no-border">
                                <i className="icon-material-outline-location-on" />
                                <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Address of Job"
                                />
                            </div>

                            <div className="input-with-icon-left no-border">
                                <i className="icon-material-outline-date-range" />
                                <input
                                    type="text"
                                    className="input-text"
                                    placeholder="Date and Time"
                                />
                            </div>

                            <div className="profile-overview">
                                <div className="overview-item">
                                    <strong>$18.00</strong>
                                    <span>Hourly Rate</span>
                                </div>
                                <div className="overview-item">
                                    <strong>2.50</strong>
                                    <span>Hours Hired</span>
                                </div>
                                <div className="overview-item">
                                    <strong>$45.00</strong>
                                    <span>Total Cost</span>
                                </div>
                            </div>

                            <a
                                href="#small-dialog-4"
                                className="button dark popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                            >
                                Hire Now
                                <i className="icon-feather-check" />
                            </a>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="headline">
                                <h3>
                                    <i className="icon-material-outline-assignment" />
                                    Past Orders
                                </h3>
                            </div>
                            <div className="content">
                                <ul className="dashboard-box-list">
                                    <li>
                                        <div className="invoice-list-item">
                                            <strong>Cleaning Garage</strong>
                                            <ul>
                                                <li>
                                                    <span className="unpaid">
                                                        Not Filled Yet
                                                    </span>
                                                </li>
                                                <li>Cost: $36</li>
                                                <li>Date: 12/08/2019</li>
                                                <li>Order #: 2134</li>
                                            </ul>
                                        </div>
                                        <div className="buttons-to-right">
                                            <a
                                                href="#small-dialog-3"
                                                className="button gray popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                                            >
                                                Cancel Order
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="invoice-list-item">
                                            <strong>Washing Dishes</strong>
                                            <ul>
                                                <li>
                                                    <span className="paid">
                                                        In Progress (Filled)
                                                    </span>
                                                </li>
                                                <li>Cost: $36</li>
                                                <li>Date: 12/08/2019</li>
                                                <li>Order #: 2514</li>
                                            </ul>
                                        </div>
                                        <div className="buttons-to-right">
                                            <a
                                                href="#small-dialog"
                                                className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                                            >
                                                View Info
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="invoice-list-item">
                                            <strong>Mowing Grass</strong>
                                            <ul>
                                                <li>
                                                    <span className="paid">
                                                        Not Rated
                                                    </span>
                                                </li>
                                                <li>Cost: $26</li>
                                                <li>Date: 10/07/2019</li>
                                                <li>Order #: 1554</li>
                                            </ul>
                                        </div>
                                        <div className="buttons-to-right">
                                            <a
                                                href="#small-dialog-2"
                                                className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"
                                            >
                                                Leave a Review
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="invoice-list-item">
                                            <strong>Raking Leaves</strong>
                                            <ul>
                                                <li>
                                                    <div
                                                        className="star-rating"
                                                        data-rating="5.0"
                                                    />
                                                </li>
                                                <li>Cost: $45</li>
                                                <li>Date: 12/06/2019</li>
                                                <li>Order #: 1252</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="invoice-list-item">
                                            <strong>Car Wash</strong>
                                            <ul>
                                                <li>
                                                    <div
                                                        className="star-rating"
                                                        data-rating="4.4"
                                                    />
                                                </li>
                                                <li>Cost: $75</li>
                                                <li>Date: 06/05/2019</li>
                                                <li>Order #: 1234</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
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

export default Dashboard;
