//libraries
import React, {Component} from 'react';

class BrowseJob extends Component{
    render(){
        return(
            <div className="dashboard-content-container">
				<div className="dashboard-content-inner">
					<div className="row">

						<div className="col-xl-6 col-lg-6 content-left-offset">

						  <h3 className="page-title">Available Jobs</h3>

						  <div className="notify-box margin-top-15">
								<div className="input-with-icon-left no-border">
									<i className="icon-material-outline-location-on"></i>
									<input type="text" className="input-text" placeholder="Zipcode"/>
								</div>
						  </div>

						  <div className="tasks-list-container margin-top-35">

						    <a href="#small-dialog" className="task-listing popup-with-zoom-anim ripple-effect margin-top-5 margin-bottom-10">

						      <div className="task-listing-details">

						        <div className="task-listing-description">
						          <h3 className="task-listing-title">Cleaning</h3>
						          <ul className="task-icons">
						            <li><i className="icon-material-outline-location-on"></i>Main Street, Newark, NJ</li>
						            <li><i className="icon-material-outline-access-time"></i>06/20/2019 at 6:00 PM to 8:00 PM</li>
						          </ul>
						        </div>

						      </div>

						      <div className="task-listing-bid">
						        <div className="task-listing-bid-inner">
						          <div className="task-offers">
						            <strong>$42.00</strong>
						            <div className="star-rating" data-rating="4.2"></div>
						          </div>
						          <span className="button button-sliding-icon ripple-effect">Take Job<i className="icon-material-outline-arrow-right-alt"></i></span>
						        </div>
						      </div>
						    </a>

								<a href="#small-dialog" className="task-listing popup-with-zoom-anim ripple-effect margin-top-5 margin-bottom-10">

						      <div className="task-listing-details">
						        <div className="task-listing-description">
						          <h3 className="task-listing-title">Delivery</h3>
						          <ul className="task-icons">
						            <li><i className="icon-material-outline-location-on"></i>Halsey Street, Newark, NJ</li>
						            <li><i className="icon-material-outline-access-time"></i>06/21/2019 at 3:00 PM to 3:30 PM</li>
						          </ul>
						        </div>

						      </div>

						      <div className="task-listing-bid">
						        <div className="task-listing-bid-inner">
						          <div className="task-offers">
						            <strong>$12.00</strong>
						            <div className="star-rating" data-rating="3.0"></div>
						          </div>
						          <span className="button button-sliding-icon ripple-effect">Take Job<i className="icon-material-outline-arrow-right-alt"></i></span>
						        </div>
						      </div>
						    </a>

								<a href="#small-dialog" className="task-listing popup-with-zoom-anim ripple-effect margin-top-5 margin-bottom-10">

						      <div className="task-listing-details">
						        <div className="task-listing-description">
						          <h3 className="task-listing-title">Moving</h3>
						          <ul className="task-icons">
						            <li><i className="icon-material-outline-location-on"></i>Main Street, Newark, NJ</li>
						            <li><i className="icon-material-outline-access-time"></i>06/21/2019 at 6:00 PM to 7:00 PM</li>
						          </ul>
						        </div>

						      </div>

						      <div className="task-listing-bid">
						        <div className="task-listing-bid-inner">
						          <div className="task-offers">
						            <strong>$25.00</strong>
						            <div className="star-rating" data-rating="4.5"></div>
						          </div>
						          <span className="button button-sliding-icon ripple-effect">Take Job<i className="icon-material-outline-arrow-right-alt"></i></span>
						        </div>
						      </div>
						    </a>

								<a href="#small-dialog" className="task-listing popup-with-zoom-anim ripple-effect margin-top-5 margin-bottom-10">

						      <div className="task-listing-details">
						        <div className="task-listing-description">
						          <h3 className="task-listing-title">Cleaning</h3>
						          <ul className="task-icons">
						            <li><i className="icon-material-outline-location-on"></i>Main Street, Newark, NJ</li>
						            <li><i className="icon-material-outline-access-time"></i>06/21/2019 at 6:00 PM to 7:00 PM</li>
						          </ul>
						        </div>

						      </div>

						      <div className="task-listing-bid">
						        <div className="task-listing-bid-inner">
						          <div className="task-offers">
						            <strong>$38.00</strong>
						            <div className="star-rating" data-rating="5.0"></div>
						          </div>
						          <span className="button button-sliding-icon ripple-effect">Take Job<i className="icon-material-outline-arrow-right-alt"></i></span>
						        </div>
						      </div>
						    </a>

						  </div>

						</div>


						<div className="col-xl-6 col-md-6">
							<div className="headline">
								<h3><i className="icon-material-outline-assignment"></i>Job History</h3>
							</div>
							<div className="content">
								<ul className="dashboard-box-list">
									<li>
										<div className="invoice-list-item">
											<strong>Cleaning Garage</strong>
											<ul>
												<li><span className="unpaid">Upcoming</span></li>
												<li>Cost: $36</li>
												<li>Date: 12/08/2019</li>
												<li>Order #: 2134</li>
											</ul>
										</div>
										<div className="buttons-to-right">
											<a href="#small-dialog-4" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10">View Info</a>
										</div>
									</li>
									<li>
										<div className="invoice-list-item">
											<strong>Washing Dishes</strong>
											<ul>
												<li><span className="unpaid">Upcoming</span></li>
												<li>Cost: $36</li>
												<li>Date: 12/08/2019</li>
												<li>Order #: 2514</li>
											</ul>
										</div>
										<div className="buttons-to-right">
											<a href="#small-dialog-4" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10">View Info</a>
										</div>
									</li>
									<li>
										<div className="invoice-list-item">
											<strong>Mowing Grass</strong>
											<ul>
												<li><span className="paid">Complete (Not Rated)</span></li>
												<li>Cost: $26</li>
												<li>Date: 10/07/2019</li>
												<li>Order #: 1554</li>
											</ul>
										</div>
										<div className="buttons-to-right">
											<a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10">Leave a Review</a>
										</div>
									</li>
									<li>
										<div className="invoice-list-item">
											<strong>Raking Leaves</strong>
											<ul>
												<li>
													<div className="star-rating" data-rating="5.0"></div>
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
													<div className="star-rating" data-rating="4.4"></div>
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
			</div>

        )
    }
}

export default BrowseJob