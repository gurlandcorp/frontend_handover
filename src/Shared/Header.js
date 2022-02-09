import Logo from "../logohandover.png";
import SearchSection from "./SearchSection";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
	// const history = useNavigate();
	return (
		<>
			<header className="header position-relative">
				<div id="rt-sticky-placeholder"></div>
				<div
					id="header-menu"
					className="header-menu menu-layout1 header-menu menu-layout3"
				>
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-xl-2 col-lg-2">
								<div className="logo-area">
									<Link to={'/'}
										className="temp-logo"
									>
										<img
											src={Logo}
											width="157"
											height="40"
											alt="logo"
											className="img-fluid"
										/>
									</Link>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
								<nav
									id="dropdown"
									className="template-main-menu template-main-menu-3"
								>
									<ul>
										<li>
											<NavLink to={'/'} >
												Home
											</NavLink>
											{/* <ul className="dropdown-menu-col-1">
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
											<NavLink to={'/about'}
											> About </NavLink>
										</li>
										<li>
											<NavLink to={'/properties'}
											> All Property </NavLink>
											{/* <ul className="dropdown-menu-col-1">
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
											<ul className="dropdown-menu-col-1">
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
										<li className="position-static hide-on-mobile-menu">
											<a href="index.html">Pages</a>
											<div className="template-mega-menu">
												<div className="container">
													<div className="row">
														<div className="col-3">
															<div className="menu-ctg-title">Pages</div>
															<ul className="sub-menu">
																<li>
																	<a href="blog1.html">
																		<i className="fas fa-chart-pie"></i>Blog 1
																	</a>
																</li>
																<li>
																	<a href="blog2.html">
																		<i className="fas fa-chart-pie"></i>Blog 2
																	</a>
																</li>
																<li>
																	<a href="blog-details1.html">
																		<i className="fas fa-chart-pie"></i>Blog Details
																		Page
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-3">
															<div className="menu-ctg-title">Pages</div>
															<ul className="sub-menu">
																<li>
																	<a href="agent-lists1.html">
																		<i className="fas fa-user"></i>Agent List Page
																	</a>
																</li>
																<li>
																	<a href="agency-lists1.html">
																		<i className="fas fa-user"></i>Agencies List
																		Page
																	</a>
																</li>
																<li>
																	<a href="agent-reviews.html">
																		<i className="fas fa-user"></i>Agent Reviews
																		Page
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-3">
															<div className="menu-ctg-title">Pages</div>
															<ul className="sub-menu">
																<li>
																	<a href="agent-reviews1.html">
																		<i className="far fa-money-bill-alt"></i>Agent
																		Reviews Page
																	</a>
																</li>
																<li>
																	<a href="about-1.html">
																		<i className="fas fa-camera"></i>About page
																	</a>
																</li>
																<li>
																	<a href="agent-lists1.html">
																		<i className="far fa-address-card"></i>Agent
																		List Page
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-3">
															<div className="menu-ctg-title">Pages</div>
															<ul className="sub-menu">
																<li>
																	<a href="pricing-1.html">
																		<i className="fas fa-chalkboard-teacher"></i>
																		Pricing Plan
																	</a>
																</li>
																<li>
																	<a href="404.html">
																		<i className="fas fa-exclamation-triangle"></i>
																		Error Page
																	</a>
																</li>
																<li>
																	<a href="contact.html">
																		<i className="fas fa-spinner"></i>Contact Page
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li> */}
										<li className="hide-on-desktop-menu">
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
											<NavLink to={'/contact'}
											>
												Contact
											</NavLink>
										</li>
									</ul>
								</nav>
							</div>
							<div className="col-xl-4 col-lg-4 d-flex justify-content-end">
								<div className="header-action-layout1">
									<ul className="action-list">
										<li className="action-item-style left-right-btn">
											<Link to={'/'}
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Compare"
											>
												<i className="flaticon-left-and-right-arrows icon-round"></i>
												<div className="item-count">0</div>
											</Link>
										</li>
										<li className="action-item-style wish-btn">
											<Link to={'/'}
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Favourites"
											>
												<i className="flaticon-heart icon-round"></i>
												<div className="item-count">0</div>
											</Link>
										</li>
										<li className="action-item-style my-account">
											<Link to={'/'}
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Sign In"
											>
												<i className="flaticon-user-1 icon-round"></i>
											</Link>
										</li>
										<li className="listing-button">
											<a href={'https://app.thehandover.com'} className="listing-btn">
												<span>
													<i className="fas fa-plus"></i>
												</span>
												<span className="item-text">Sign In</span>
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
