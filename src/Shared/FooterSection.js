import Insta1 from "../assets/img/instagram/insta01.jpg";
import Insta2 from "../assets/img/instagram/insta02.jpg";
import Insta3 from "../assets/img/instagram/insta03.jpg";
import Insta4 from "../assets/img/instagram/insta04.jpg";
import Insta5 from "../assets/img/instagram/insta05.jpg";
import Insta6 from "../assets/img/instagram/insta06.jpg";
import LogoLight from "../assets/img/logo_light.svg";
import Logo from "../logohandover.png";
import { useNavigate } from "react-router-dom";

const FooterSection = () => {
	const history = useNavigate();
	return (
		<>
			<footer class="footer-area">
				<div class="footer-top footer-top-style">
					<div class="container">
						<div class="row justify-content-between">
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
								<div class="footer-logo-area footer-logo-area-2">
									<div class="item-logo">
										<img
											src={Logo}
											style={{ width: "157px", height: "40px" }}
											//  width="157"
											//   height="40"
											//   alt="logo"
											class="img-fluid"
										/>
									</div>
									<p>
										Corem ipsum dolor sit amet consecte turad pisicing elit, sed
										do eiusmod tempor inci didunt ut labore et dolor.pisicing
										elit, sed do eiusmod tempor inci
									</p>
									<div class="item-social">
										<ul>
											<li>
												<a href="https://www.facebook.com/" target="_blank">
													<i class="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="https://twitter.com/" target="_blank">
													<i class="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="https://vimeo.com/" target="_blank">
													<i class="fab fa-vimeo-v"></i>
												</a>
											</li>
											<li>
												<a href="https://www.pinterest.com/" target="_blank">
													<i class="fab fa-pinterest-p"></i>
												</a>
											</li>
											<li>
												<a href="https://web.whatsapp.com/" target="_blank">
													<i class="fab fa-whatsapp"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
								<div class="footer-link footer-link-style-2">
									<div class="footer-title footer-title-style2">
										<h3>Quick Links</h3>
									</div>
									<div class="item-link">
										<ul>
											<li>
												<a onClick={() => history("/about")}>About Us </a>
											</li>
											<li>
												<a>Blogs & Articles </a>
											</li>
											<li>
												<a>Terms & Conditions</a>
											</li>
											<li>
												<a>Privacy Policy </a>
											</li>
											<li>
												<a onClick={() => history("/contact")}>Contact Us </a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div class="footer-insta">
									<div class="footer-title footer-title-style2">
										<h3>Instagram</h3>
									</div>
									<div class="insta-link">
										<ul>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta1}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta2}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta3}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta4}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta5}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
											<li>
												<div class="item-img">
													<a
														href="https://www.instagram.com/"
														class="insta-pic"
													>
														<img
															src={Insta6}
															width="86"
															height="73"
															alt="instagram"
														/>
													</a>
													<div class="item-overlay">
														<a
															href="https://www.instagram.com/"
															target="_blank"
														>
															<i class="fab fa-instagram"></i>
														</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div class="footer-contact footer-contact-style-2">
									<div class="footer-title footer-title-style2">
										<h3>Contact</h3>
									</div>
									<div class="footer-location">
										<ul>
											<li class="item-map">
												<i class="fas fa-map-marker-alt"></i>121 King St,
												Melbourne den 3000, Australia
											</li>
											<li>
												<a href="mailto:info@example.com">
													<i class="fas fa-envelope"></i>info@example.com
												</a>
											</li>
											<li>
												<a href="tel:+123596000">
													<i class="fas fa-phone-alt"></i>(+123) 596 000
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-bottom footer-bottom-style-2">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-6 col-md-6">
								<div class="copyright-area1">
									<ul>
										<li>
											<a href="about-1.html">Terms of Use</a>
										</li>
										<li>
											<a href="about-1.html">Privacy Policy</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-6 col-md-6">
								<div class="copyright-area2">
									<p>2022© All rightre served by RadiusTheme</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<a href="javascript:void(0)" id="back-to-top">
				<i class="fas fa-angle-double-up"></i>
			</a>
		</>
	);
};

export default FooterSection;
