import React, { useState, useEffect } from "react";
import Header from "../Shared/Header";
import FooterSection from "../Shared/FooterSection";
import contactImg from "../assets/img/blog/contact01.jpg";
import axios from "axios";
export default function Index() {
	const initialSate = {
		name: "",
		email: "",
		message: "",
	};
	const [data, setData] = useState(initialSate);

	const handleInputs = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, message } = data;
		axios
			.post(`https://handoverapi.herokuapp.com/contact/contactus`, {
				name,
				email,
				message,
			})
			.then(function (response1) {
				// handle success
                console.log('contact page',response1.data)
				setData(response1?.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};
	return (
		<>
			<Header />
			<section class="contact-wrap">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box1">
								<div class="contact-img">
									<img
										src={contactImg}
										alt="contact"
										height="502"
										width="607"
									/>
								</div>
								<div class="contact-content">
									<h3 class="contact-title">Office Information</h3>
									<div class="contact-list">
										<ul>
											<li>Homlisti Real Estate Agency</li>
											<li>(United Estate Of America) Co., Ltd.</li>
											<li>Bridge 8, Room 9201,</li>
											<li>#25 Jocker Goru Zhong Road,</li>
											<li>NYPD 200025 USA</li>
										</ul>
									</div>
									<div class="phone-box">
										<div class="item-lebel">Emergency Call :</div>
										<div class="phone-number">+86 21 6137 9292</div>
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
									</div>
									<div class="social-box">
										<div class="item-lebel">Social Share :</div>
										<ul class="item-social">
											<li>
												<a href="https://www.facebook.com/">
													<i class="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="https://twitter.com/">
													<i class="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="https://vimeo.com/">
													<i class="fab fa-vimeo-v"></i>
												</a>
											</li>
											<li>
												<a href="https://www.pinterest.com/">
													<i class="fab fa-pinterest-p"></i>
												</a>
											</li>
											<li>
												<a href="https://web.whatsapp.com/">
													<i class="fab fa-whatsapp"></i>
												</a>
											</li>
										</ul>
										<div class="item-icon">
											<i class="fas fa-share-alt"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box2">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116878.45300534296!2d90.4195470442074!3d23.731268144494663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635221509729!5m2!1sen!2sbd"
									width="600"
									height="550"
									// style="border:0;"
									allowfullscreen=""
									loading="lazy"
								></iframe>
								<div class="contact-content">
									<h3 class="contact-title">Quick Contact</h3>
									<p>
										Borem ipsum dolor sit amet conse ctetur adipisicing elit sed
										do eiusmod Eorem ipsum dolor sit amet conse ctetur.
									</p>
									<form class="contact-box rt-contact-form">
										<div class="row">
											<div class="form-group col-lg-6">
												<label>Name *</label>
												<input
													type="text"
													class="form-control"
													name="name"
													placeholder="First Name*"
													data-error="First Name is required"
													required
													value={data.name}
													onChange={handleInputs}
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-6">
												<label>Email *</label>
												<input
													type="email"
													class="form-control"
													name="email"
													placeholder="Email*"
													data-error="Email is required"
													required
													value={data.email}
													onChange={handleInputs}
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<label>Message *</label>
												<textarea
													name="message"
													id="message"
													class="form-text"
													placeholder="Message"
													cols="30"
													rows="5"
													data-error="Message Name is required"
													required
													value={data.message}
													onChange={handleInputs}
												></textarea>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<button
													onClick={(e) => handleSubmit(e)}
													class="item-btn"
												>
													Send message
												</button>
											</div>
										</div>
										<div class="form-response"></div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FooterSection />
		</>
	);
}
