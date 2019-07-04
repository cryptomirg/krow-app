//libraries
import React, { Component } from 'react';

//components

class DashboardModal extends Component {
    render() {
        return (
            <div>
            <div id="small-dialog-2" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
            <div className="sign-in-form">
    
                <ul className="popup-tabs-nav">
                </ul>
    
                <div className="popup-tabs-container">

                    <div className="popup-tab-content" id="tab2">

                        <div className="welcome-text">
                            <h3>Leave a Review</h3>
                            <span>Rate <a href="#">Peter Valentín</a> for the job <a href="#">Mowing Grass</a> </span>
                        </div>

                        <form method="post" id="leave-review-form">
    
                            <div className="feedback-yes-no">
                                <strong>Was the freelancer on time?</strong>
                                <div className="radio">
                                    <input id="radio-1" name="radio" type="radio" required/>
                                    <label for="radio-1"><span className="radio-label"></span> Yes</label>
                                </div>
    
                                <div className="radio">
                                    <input id="radio-2" name="radio" type="radio" required/>
                                    <label for="radio-2"><span className="radio-label"></span> No</label>
                                </div>
                            </div>
    
                            <div className="feedback-yes-no">
                                <strong>Did the freelancer act in a professional manner?</strong>
                                <div className="radio">
                                    <input id="radio-3" name="radio2" type="radio" required/>
                                    <label for="radio-3"><span className="radio-label"></span> Yes</label>
                                </div>
    
                                <div className="radio">
                                    <input id="radio-4" name="radio2" type="radio" required/>
                                    <label for="radio-4"><span className="radio-label"></span> No</label>
                                </div>
                            </div>
    
                            <div className="feedback-yes-no">
                                <strong>Your Rating</strong>
                                <div className="leave-rating">
                                    <input type="radio" name="rating" id="rating-radio-1" value="1" required/>
                                    <label for="rating-radio-1" className="icon-material-outline-star"></label>
                                    <input type="radio" name="rating" id="rating-radio-2" value="2" required/>
                                    <label for="rating-radio-2" className="icon-material-outline-star"></label>
                                    <input type="radio" name="rating" id="rating-radio-3" value="3" required/>
                                    <label for="rating-radio-3" className="icon-material-outline-star"></label>
                                    <input type="radio" name="rating" id="rating-radio-4" value="4" required/>
                                    <label for="rating-radio-4" className="icon-material-outline-star"></label>
                                    <input type="radio" name="rating" id="rating-radio-5" value="5" required/>
                                    <label for="rating-radio-5" className="icon-material-outline-star"></label>
                                </div>
                                <div className="clearfix"></div>
                            </div>
    
                            <textarea className="with-border" placeholder="Comment (For Our Use, The Freelancer Will Not See This)" name="message2" id="message2" cols="7" required></textarea>
    
                        </form>

                        <button className="button full-width button-sliding-icon ripple-effect" type="submit" form="leave-review-form">Leave a Review <i className="icon-material-outline-arrow-right-alt"></i></button>
    
                    </div>
    
                </div>
            </div>
        </div>

    
        <div id="small-dialog-3" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

            <div className="sign-in-form">
    
                <ul className="popup-tabs-nav">
                </ul>
    
                <div className="popup-tabs-container">

                    <div className="popup-tab-content" id="tab2">
 
                        <div className="welcome-text">
                            <h3>Cancel Order</h3>
                        </div>

                            <div className="checkbox">
                                <input type="checkbox" id="chekcbox1"/>
                                <label for="chekcbox1"><span className="checkbox-icon"></span>Please Confirm You Would Like to Cancel This Order</label>
                            </div>
                            <br/>
                            <div className="checkbox">
                                <input type="checkbox" id="chekcbox2"/>
                                <label for="chekcbox2"><span className="checkbox-icon"></span>I Understand I May Be Charged a Service Fee By Krow</label>
                            </div>
    
                            <textarea className="with-border" placeholder="Comments (Optional)" name="message2" id="message2" cols="7"></textarea>

                        <button className="button full-width button-sliding-icon ripple-effect" type="submit" form="leave-review-form">Cancel Order<i className="icon-material-outline-arrow-right-alt"></i></button>
    
                    </div>
    
                </div>
            </div>
        </div>
    
    
        <div id="small-dialog-5" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
    
            <div className="sign-in-form">
    
                <ul className="popup-tabs-nav">
                    <li><a href="#tab">Contact</a></li>
                </ul>
    
                <div className="popup-tabs-container">
    
                    <div className="popup-tab-content" id="tab">
    
                        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
    
                                        <section id="contact" className="margin-bottom-60">
                                            <h3 className="headline margin-top-15 margin-bottom-35">Any questions? Feel free to contact us!</h3>
    
                                            <form method="post" name="contactform" id="contactform" autocomplete="on">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-with-icon-left">
                                                            <input className="with-border" name="name" type="text" id="name" placeholder="Your Name" required="required" />
                                                            <i className="icon-material-outline-account-circle"></i>
                                                        </div>
                                                    </div>
    
                                                    <div className="col-md-6">
                                                        <div className="input-with-icon-left">
                                                            <input className="with-border" name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
                                                            <i className="icon-material-outline-email"></i>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="input-with-icon-left">
                                                    <input className="with-border" name="subject" type="text" id="subject" placeholder="Subject" required="required" />
                                                    <i className="icon-material-outline-assignment"></i>
                                                </div>
    
                                                <div>
                                                    <textarea className="with-border" name="comments" cols="40" rows="5" id="comments" placeholder="Message" spellcheck="true" required="required"></textarea>
                                                </div>
    
                                                <input type="submit" className="submit button margin-top-15" id="submit" value="Submit Message" />
    
                                            </form>
                                        </section>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="chekcbox1" required/>
                            <label for="chekcbox1"><span className="checkbox-icon"></span>I Understand the Terms & Conditions of this Order</label>
                        </div>
                        <button href="#" className="button blue" type="submit" form="leave-review-form">Confirm Order<i className="icon-material-outline-arrow-right-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="small-dialog-4" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
            <div className="sign-in-form">
    
                <ul className="popup-tabs-nav">
                    <li><a href="#tab">Hire Now</a></li>
                </ul>
    
                <div className="popup-tabs-container">
    
                    <div className="popup-tab-content" id="tab">
    
                        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-page-header-inner">
                                            <div className="freelancer-details">
                                                <div className="freelancer-details-list">
                                                    <ul>
                                                        <center>
                                                            <li>Location <strong><i className="icon-material-outline-location-on"></i>Newark, NJ</strong></li>
                                                            <li>Rate <strong>$18/Hour</strong></li>
                                                            <li>Date and Time<strong>12/08/2019, 6:30 PM - 9:00 PM</strong></li>
                                                            <li>Total Cost<strong>$45</strong></li>
                                                        </center>
                                                    </ul>
                                                    <div className="section-headline margin-top-45 margin-bottom-12">
                                                        <h5>Select a Payment Method</h5>
                                                    </div>
    
                                                    <select className="selectpicker">
                                                        <option data-icon="icon-brand-cc-visa" selected>8352</option>
                                                        <option data-icon="icon-brand-cc-mastercard">6742</option>
                                                        <option data-icon="icon-brand-cc-discover">1234</option>
                                                        <option data-icon="icon-brand-cc-paypal">Paypal</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="chekcbox1" required/>
                            <label for="chekcbox1"><span className="checkbox-icon"></span>I Understand the Terms & Conditions of this Order</label>
                        </div>
                        <button href="#" className="button blue" type="submit" form="leave-review-form">Confirm Order<i className="icon-material-outline-arrow-right-alt"></i></button>

                    </div>
                </div>
            </div>
        </div>
    

        <div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">
    
            <div className="sign-in-form">
    
                <ul className="popup-tabs-nav">
                    <li><a href="#tab">Freelancer</a></li>
                </ul>
    
                <div className="popup-tabs-container">
    
                    <div className="popup-tab-content" id="tab">
    
                        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-page-header-inner">
                                            <div className="left-side">
                                                <div className="header-image freelancer-avatar"><img src="images/user-avatar-big-02.jpg" alt=""/></div>
                                                <div className="header-details">
                                                    <h3>David Peterson <span>Washing Dishes</span></h3>
                                                    <ul>
                                                        <li>
                                                            <div className="verified-badge-with-title">Verified</div>
                                                        </li>
                                                        <li>
                                                            <div className="star-rating" data-rating="5.0"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="freelancer-details">
                                            <div className="freelancer-details-list">
                                                <ul>
                                                    <center>
                                                        <li>Location <strong><i className="icon-material-outline-location-on"></i>Newark, NJ</strong></li>
                                                        <li>Rate <strong>$18/Hour</strong></li>
                                                        <li>Date and Time<strong>12/08/2019, 6:30 PM - 8:30 PM</strong></li>
                                                    </center>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button href="#small-dialog-3" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10" type="submit" form="leave-review-form">Cancel Order<i className="icon-material-outline-arrow-right-alt"></i></button>

                    </div>
                </div>
                </div>
                </div>
                </div>
        );
    }
}

export default DashboardModal;
