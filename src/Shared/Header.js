import Logo from "../logohandover.png";
import SearchSection from "./SearchSection";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const history = useNavigate();
	return (
		<>
			<header class="header position-relative">
				<div id="rt-sticky-placeholder"></div>
				<div
					id="header-menu"
					class="header-menu menu-layout1 header-menu menu-layout3"
				>
					<div class="container">
						<div class="row d-flex align-items-center">
							<div class="col-xl-2 col-lg-2">
								<div class="logo-area">
									<a
										onClick={() => {
											history("/");
										}}
										class="temp-logo"
									>
										<img
											src={Logo}
											width="157"
											height="40"
											alt="logo"
											class="img-fluid"
										/>
									</a>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
								<nav
									id="dropdown"
									class="template-main-menu template-main-menu-3"
								>
									<ul>
										<li>
											<a
												onClick={() => {
													history("/");
												}}
												class="active"
											>
												Home
											</a>
											{/* <ul class="dropdown-menu-col-1">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Page 2</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Page 3</a>
                        </li>
                        <li>
                          <a href="index4.html">Home Page 4</a>
                        </li>
                        <li>
                          <a href="index5.html">Home Page 5</a>
                        </li>
                      </ul> */}
										</li>
										<li>
											<a
												// href="about-1.html"
												onClick={() => {
													history("/about");
												}}
											>
												About
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													history("/allListing");
												}}
											>
												All Property
											</a>
											{/* <ul class="dropdown-menu-col-1">
                        <li>
                          <a href="half-map1.html">Properties Map Grid</a>
                        </li>
                        <li>
                          <a href="half-map2.html">Properties Map List</a>
                        </li>
                        <li>
                          <a href="with-sidebar.html">Properties Grid</a>
                        </li>
                        <li>
                          <a href="with-sidebar2.html">Properties List</a>
                        </li>
                        <li>
                          <a href="without-sidebar.html">
                            Properties Full Width
                          </a>
                        </li>
                        <li>
                          <a href="single-listing1.html">Single Property 1</a>
                        </li>
                        <li>
                          <a href="single-listing2.html">Single Property 2</a>
                        </li>
                        <li>
                          <a href="single-listing3.html">Single Property 3</a>
                        </li>
                      </ul> */}
										</li>
										{/* <li>
											<a href="agent-lists1.html">Agents</a>
											<ul class="dropdown-menu-col-1">
												<li>
													<a href="agent-lists1.html">Agent List Page</a>
												</li>
												<li>
													<a href="agency-lists1.html">Agencies List Page</a>
												</li>
												<li>
													<a href="single-agent1.html">Single Agent Page</a>
												</li>
												<li>
													<a href="single-agency1.html">Single Agency Page</a>
												</li>
											</ul>
										</li>
										<li class="position-static hide-on-mobile-menu">
											<a href="index.html">Pages</a>
											<div class="template-mega-menu">
												<div class="container">
													<div class="row">
														<div class="col-3">
															<div class="menu-ctg-title">Pages</div>
															<ul class="sub-menu">
																<li>
																	<a href="blog1.html">
																		<i class="fas fa-chart-pie"></i>Blog 1
																	</a>
																</li>
																<li>
																	<a href="blog2.html">
																		<i class="fas fa-chart-pie"></i>Blog 2
																	</a>
																</li>
																<li>
																	<a href="blog-details1.html">
																		<i class="fas fa-chart-pie"></i>Blog Details
																		Page
																	</a>
																</li>
															</ul>
														</div>
														<div class="col-3">
															<div class="menu-ctg-title">Pages</div>
															<ul class="sub-menu">
																<li>
																	<a href="agent-lists1.html">
																		<i class="fas fa-user"></i>Agent List Page
																	</a>
																</li>
																<li>
																	<a href="agency-lists1.html">
																		<i class="fas fa-user"></i>Agencies List
																		Page
																	</a>
																</li>
																<li>
																	<a href="agent-reviews.html">
																		<i class="fas fa-user"></i>Agent Reviews
																		Page
																	</a>
																</li>
															</ul>
														</div>
														<div class="col-3">
															<div class="menu-ctg-title">Pages</div>
															<ul class="sub-menu">
																<li>
																	<a href="agent-reviews1.html">
																		<i class="far fa-money-bill-alt"></i>Agent
																		Reviews Page
																	</a>
																</li>
																<li>
																	<a href="about-1.html">
																		<i class="fas fa-camera"></i>About page
																	</a>
																</li>
																<li>
																	<a href="agent-lists1.html">
																		<i class="far fa-address-card"></i>Agent
																		List Page
																	</a>
																</li>
															</ul>
														</div>
														<div class="col-3">
															<div class="menu-ctg-title">Pages</div>
															<ul class="sub-menu">
																<li>
																	<a href="pricing-1.html">
																		<i class="fas fa-chalkboard-teacher"></i>
																		Pricing Plan
																	</a>
																</li>
																<li>
																	<a href="404.html">
																		<i class="fas fa-exclamation-triangle"></i>
																		Error Page
																	</a>
																</li>
																<li>
																	<a href="contact.html">
																		<i class="fas fa-spinner"></i>Contact Page
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li> */}
										<li class="hide-on-desktop-menu">
											<a href="index.html">Pages</a>
											<ul>
												<li>
													<a href="about-1.html">About</a>
												</li>
												<li>
													<a href="with-sidebar2.html">Property</a>
												</li>
												<li>
													<a href="blog1.html">Blog</a>
												</li>
												<li>
													<a href="404.html">404 Error</a>
												</li>
												<li>
													<a href="contact.html">Contact</a>
												</li>
											</ul>
										</li>
										<li>
											<a
												// href="contact.html"
												onClick={() => {
													history("/contact");
												}}
											>
												Contact
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div class="col-xl-4 col-lg-4 d-flex justify-content-end">
								<div class="header-action-layout1">
									<ul class="action-list">
										<li class="action-item-style left-right-btn">
											<a
												href="compare.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Compare"
											>
												<i class="flaticon-left-and-right-arrows icon-round"></i>
												<div class="item-count">0</div>
											</a>
										</li>
										<li class="action-item-style wish-btn">
											<a
												href="favourite.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Favourites"
											>
												<i class="flaticon-heart icon-round"></i>
												<div class="item-count">0</div>
											</a>
										</li>
										<li class="action-item-style my-account">
											<a
												href="account.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Sign In"
											>
												<i class="flaticon-user-1 icon-round"></i>
											</a>
										</li>
										<li class="listing-button">
											<a href="post-add.html" class="listing-btn">
												<span>
													<i class="fas fa-plus-circle"></i>
												</span>
												<span class="item-text">Add Property</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SearchSection />
			</header>
		</>
	);
};

export default Header;
