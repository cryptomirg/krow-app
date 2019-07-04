//libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//images
import macbook from '../../../assets/images/macbook.png';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="photo-section" data-background-image="images/chores.jpg">
                    <div className="text-content white-font">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 col-sm-12">
                                    <h2>
                                        Hire Locals To Do Chores <br /> Any Job, Any Time.
                                    </h2>
                                    <p>
                                        Join hundreds of others by hiring or earning money right in your neighborhood. We let you pick any service from
                                        cleaning, to lawn-mowing, to even pet-sitting on any day and time. Getting any to-do list done becomes possible with
                                        Krow! Sign up for free below.
                                    </p>
                                    <Link to="/login" className="button button-sliding-icon ripple-effect big margin-top-20">
                                        Get Started <i className="icon-material-outline-arrow-right-alt" />
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-8 col-sm-12">
                                    <img src={macbook} alt="krow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section padding-top-65 padding-bottom-65">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-headline centered margin-top-0 margin-bottom-5">
                                    <h3>How It Works?</h3>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4">
                                <div className="icon-box with-line">
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className="icon-line-awesome-lock" />
                                            <div className="icon-box-check">
                                                <i className="icon-material-outline-check" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Request a Job</h3>
                                    <p>Hire somebody for one of our many job types with a date/time tailored to you</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4">
                                <div className="icon-box with-line">
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className="icon-line-awesome-legal" />
                                            <div className="icon-box-check">
                                                <i className="icon-material-outline-check" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Get your Freelancer</h3>
                                    <p>A trusted Krow freelancer will show up to perform the task at the given time.</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4">
                                <div className="icon-box">
                                    <div className="icon-box-circle">
                                        <div className="icon-box-circle-inner">
                                            <i className=" icon-line-awesome-trophy" />
                                            <div className="icon-box-check">
                                                <i className="icon-material-outline-check" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Pay and Review</h3>
                                    <p>You pay and review your freelancer for the job they've done.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section padding-top-70 padding-bottom-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="counters-container">
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-suitcase" />
                                        <div className="counter-inner">
                                            <h3>
                                                <span>$21k+</span>
                                            </h3>
                                            <span className="counter-title">Money Processed</span>
                                        </div>
                                    </div>

                                    <div className="single-counter">
                                        <i className="icon-line-awesome-legal" />
                                        <div className="counter-inner">
                                            <h3>
                                                <span className="counter">305</span>
                                            </h3>
                                            <span className="counter-title">Jobs Posted</span>
                                        </div>
                                    </div>

                                    <div className="single-counter">
                                        <i className="icon-line-awesome-user" />
                                        <div className="counter-inner">
                                            <h3>
                                                <span className="counter">1,413</span>
                                            </h3>
                                            <span className="counter-title">Freelancers Available</span>
                                        </div>
                                    </div>

                                    <div className="single-counter">
                                        <i className="icon-line-awesome-trophy" />
                                        <div className="counter-inner">
                                            <h3>
                                                <span className="counter">97</span>%
                                            </h3>
                                            <span className="counter-title">Satisfaction Rate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
