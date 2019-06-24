//libraries
import React, { Component } from 'react';

//components

//images
import kyc from "../../../assets/images/kyc.png"
import kyc2 from "../../../assets/images/kyc2.png"
import kycselfie from "../../../assets/images/kycselfie.png"

class BecomeFreelancer extends Component {
    render(){
        return(<div className="dashboard-content-container">
        <div className="dashboard-content-inner">
            <div className="row">

                <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">

                        <div className="headline">
                            <h3><i className="icon-feather-user-check"></i>Become a Freelancer</h3>
                        </div>

                        <div className="content with-padding padding-bottom-10">
                            <div className="row">

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Full Name</h5>
                                        <div className="input-with-icon">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" className="with-border" type="text" placeholder="First Name, Last Name"/>
                                            </div>
                                            <i className="icon-line-awesome-user"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Location</h5>
                                        <div className="input-with-icon">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" className="with-border" type="text" placeholder="Type a Zipcode"/>
                                            </div>
                                            <i className="icon-material-outline-location-on"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Date of Birth</h5>
                                        <div className="input-with-icon">
                                            <div id="autocomplete-container">
                                                <input id="autocomplete-input" className="with-border" type="text" placeholder="MM/DD/YYYY"/>
                                            </div>
                                            <i className="icon-line-awesome-calendar-o"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">
                        <div className="headline">
                            <h3><i className="icon-line-awesome-credit-card"></i>Upload Government I.D.</h3>
                        </div>

                        <div className="content with-padding padding-bottom-10">
                            <div className="row">

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Front Side</h5>
                                        <img src={kyc} alt="Front Side of ID example"/>
                                        <div className="uploadButton margin-top-30">
                                            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                            <label className="uploadButton-button ripple-effect" for="upload">Upload Image</label>
                                            <span className="uploadButton-file-name">A clear and easy to read image of the front side of your gov. issued I.D.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Back Side</h5>
                                        <img src={kyc2} alt="Front Side of ID example"/>
                                        <div className="uploadButton margin-top-30">
                                            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                            <label className="uploadButton-button ripple-effect" for="upload">Upload Image</label>
                                            <span className="uploadButton-file-name">A clear and easy to read image of the front side of your gov. issued I.D.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Selfie w/ ID</h5>
                                        <img src={kycselfie} alt="Front Side of ID example"/>
                                        <div className="uploadButton margin-top-30">
                                            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                            <label className="uploadButton-button ripple-effect" for="upload">Upload Image</label>
                                            <span className="uploadButton-file-name">A clear and easy to see image of you holding your gov. issued I.D.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12">
                    <a href="#" className="button ripple-effect big margin-top-30"><i className="icon-feather-plus"></i>Submit</a>
                </div>

            </div>

            <div className="dashboard-footer-spacer"></div>
            <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                    © 2019 <strong>Krow</strong>. All Rights Reserved.
                </div>
                <ul className="footer-social-links">
                    <li>
                        <a href="https://www.facebook.com/KrowNetwork/" title="Facebook" data-tippy-placement="top">
                            <i className="icon-brand-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/krownetwork" title="Twitter" data-tippy-placement="top">
                            <i className="icon-brand-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/krow.network/" title="Instagram" data-tippy-placement="top">
                            <i className="icon-brand-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/krow-network" title="LinkedIn" data-tippy-placement="top">
                            <i className="icon-brand-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </div>

        </div>
    </div>)
    }

}

export default BecomeFreelancer