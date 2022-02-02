import Header from "../Shared/Header";
import BreadCrumb from "../Shared/BreadCrumb";
import FooterSection from "../Shared/FooterSection";
import Blog4 from "../assets/img/blog/blog4.jpg";
import Blog5 from "../assets/img/blog/blog5.jpg";
import Blog6 from "../assets/img/blog/blog6.jpg";
import Blog7 from "../assets/img/blog/blog7.jpg";
import Blog8 from "../assets/img/blog/blog8.jpg";
import Blog9 from "../assets/img/blog/blog9.jpg";
import Blog13 from "../assets/img/blog/blog13.jpg";
import Blog14 from "../assets/img/blog/blog14.jpg";
import Blog15 from "../assets/img/blog/blog15.jpg";
import Blog16 from "../assets/img/blog/blog16.jpg";
import Blog17 from "../assets/img/blog/blog17.jpg";
import Blog18 from "../assets/img/blog/blog18.jpg";
import Widget2 from "../assets/img/blog/widget2.jpg";
import Widget3 from "../assets/img/blog/widget3.jpg";
import Widget4 from "../assets/img/blog/widget4.jpg";
import Widget5 from "../assets/img/blog/widget5.jpg";
import Widget6 from "../assets/img/blog/widget6.jpg";
import JoiningBanner from "../Home/JoiningBanner";
import PropertyCard from "../Shared/PropertyCard";
import React, { useState, useEffect } from "react";
import PropertyCardForLG12 from "../Shared/PropertyCardForLG12";
import widget05 from "../assets/img/blog/widget05.jpg";

import api from "../services/api";
import axios from "axios";
const AllListing = () => {
	const [images, setImages] = useState([
		Blog4,
		Blog5,
		Blog6,
		Blog7,
		Blog8,
		Blog9,
		Blog13,
		Blog14,
		Blog15,
		Blog16,
		Blog17,
		Blog18,
	]);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(" https://handoverapi.herokuapp.com/property")
			.then(function (response) {
				// handle success
				console.log("hassan", response);
				setData(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	const [dataPro, setDataPro] = useState([]);
	useEffect(() => {
		axios
			.get("https://handoverapi.herokuapp.com/property/sort/desc")
			.then(function (response2) {
				// handle success
				console.log("data pross", response2);
				setDataPro(response2.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	return (
		<>
			<Header />
			<BreadCrumb title="All Listing" />
			<section class="grid-wrap3">
				<div class="container">
					<div class="row gutters-40">
						<div class="col-lg-4 widget-break-lg sidebar-widget">
							<div class="widget widget-advanced-search">
								<h3 class="widget-subtitle">Advanced Search</h3>
								<form
									// action="index.html"
									class="map-forms map-form-style-2"
								>
									<input
										type="text"
										class="form-control"
										placeholder="What are you looking for?"
									/>
									<div class="row">
										<div class="col-lg-12 pl-15 mb-0">
											<div class="rld-single-select">
												<select class="select single-select mr-0">
													<option value="1">Property Type</option>
													<option value="2">Family House</option>
													<option value="3">Apartment</option>
													<option value="3">Condo</option>
												</select>
											</div>
										</div>
										<div class="col-lg-12 pl-15 mb-0">
											<div class="rld-single-select">
												<select class="select single-select mr-0">
													<option value="1">All Categories</option>
													<option value="2">Rent</option>
													<option value="3">Sell</option>
													<option value="3">Buy</option>
												</select>
											</div>
										</div>
										<div class="col-lg-12 pl-15">
											<div class="rld-single-select">
												<select class="select single-select mr-0">
													<option value="1">All Cities</option>
													<option value="2">Los Angeles</option>
													<option value="3">Chicago</option>
													<option value="3">Philadelphia</option>
												</select>
											</div>
										</div>
									</div>
								</form>
								<div class="banner-search-wrap banner-search-wrap-2">
									<div class="rld-main-search rld-main-search3">
										<div class="main-search-field-2">
											{/* <!-- Area Range --> */}
											<div class="price-range-wrapper">
												<div class="range-box">
													<div class="price-label">Price:</div>
													<div
														id="price-range-filter-4"
														class="price-range-filter"
													></div>
													<div class="price-filter-wrap d-flex align-items-center">
														<div class="price-range-select">
															<div class="price-range range-title">$</div>
															<div
																class="price-range"
																id="price-range-min-4"
															></div>
															<div class="price-range">-</div>
															<div
																class="price-range"
																id="price-range-max-4"
															></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="filter-button">
											<a
												href="single-listing1.html"
												class="filter-btn1 search-btn"
											>
												Search<i class="fas fa-search"></i>
											</a>
										</div>
									</div>
									{/* <!--/ End Search Form --> */}
								</div>
							</div>
							<div class="widget widget-listing-box1">
								<h3 class="widget-subtitle">Latest Listing</h3>
								<div class="item-img">
									<a>
										<img
											src={dataPro[0]?.images[0]}
											style={{ width: "630px", height: "400px" }}
											alt="widget"

											// src={Widget6} alt="widget" width="630" height="400"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Rent</div>
									</div>
								</div>
								<div class="widget-content">
									<div class="item-category10">
										<a>Villa</a>
									</div>
									<h4 class="item-title">
										<a>
											{/* Modern Villa for House Highland Ave Los Angeles */}{" "}
											{dataPro[0]?.propertyTitle}
										</a>
									</h4>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey,California
									</div>
									<div class="item-price">
										{/* $11,000 */} AED {dataPro[0]?.priceDemand}
										{/* <span>/mo</span> */}
									</div>
								</div>
								{/* <div class="widget-listing">
									<div class="item-img">
										<a href="single-listing1.html">
											<img
												src={Widget2}
												alt="widget"
												width="120"
												height="102"
											/>
										</a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html">
												House Highland Ave Los Angeles
											</a>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$3,000<span>/mo</span>
										</div>
									</div>
								</div>
								<div class="widget-listing">
									<div class="item-img">
										<a href="single-listing1.html">
											<img
												src={Widget3}
												alt="widget"
												width="120"
												height="102"
											/>
										</a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html">
												House Highland Ave Los Angeles
											</a>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$1,200<span>/mo</span>
										</div>
									</div>
								</div>
								<div class="widget-listing no-brd">
									<div class="item-img">
										<a href="single-listing1.html">
											<img
												src={Widget4}
												alt="widget"
												width="120"
												height="102"
											/>
										</a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html">
												House Highland Ave Los Angeles
											</a>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$1,900<span>/mo</span>
										</div>
									</div>
								</div> */}
							</div>
							<div class="widget widget-post">
								<div class="item-img">
									<img src={widget05} alt="widget" width="690" height="850" />

									<div class="circle-shape">
										<span class="item-shape"></span>
									</div>
								</div>
								<div class="item-content">
									<h4 class="item-title">Find Your Dream House</h4>
									<div class="item-price">$2,999</div>
									<div class="post-button">
										<a class="item-btn">Shop Now</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="property-wrap-9">
								<div class="row justify-content-center">
									<div class="col-lg-12 col-md-12">
										<div class="item-shorting-box">
											<div class="shorting-title">
												<h4 class="item-title">9 Search Results Found</h4>
											</div>
											<div class="item-shorting-box-2">
												<div class="by-shorting">
													<div class="shorting">Sort by:</div>
													<select class="select single-select mr-0">
														<option value="1">Default</option>
														<option value="2">High Price</option>
														<option value="3">Medium Price</option>
														<option value="3">Low Price</option>
													</select>
												</div>
												<div class="grid-button">
													<ul class="nav nav-tabs" role="tablist">
														<li class="nav-item">
															<a
																class="nav-link active"
																data-bs-toggle="tab"
																href="#mylisting"
															>
																<i class="fas fa-th"></i>
															</a>
														</li>
														<li class="nav-item">
															<a
																class="nav-link"
																data-bs-toggle="tab"
																href="#reviews"
															>
																<i class="fas fa-list-ul"></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-style-1 tab-style-3">
									<div class="tab-content" id="myTabContent">
										<div
											class="tab-pane fade show active"
											id="mylisting"
											role="tabpanel"
										>
											<div class="row">
												{data.slice(0, 7).map((i) => {
													return <PropertyCard img={i} data={i} />;
												})}
											</div>

											<div class="pagination-style-1">
												<ul class="pagination">
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
															aria-label="Previous"
														>
															<span aria-hidden="true">&laquo;</span>
															<span class="sr-only">Previous</span>
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link active"
															// href="with-sidebar2.html"
														>
															1
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															2
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															3
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															4
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
															aria-label="Next"
														>
															<span aria-hidden="true">&raquo;</span>
															<span class="sr-only">Next</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="tab-pane fade" id="reviews" role="tabpanel">
											<div class="row">
												{images.map((i) => {
													return <PropertyCardForLG12 img={i} />;
												})}
											</div>
											<div class="pagination-style-1">
												<ul class="pagination">
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar.html"
															aria-label="Previous"
														>
															<span aria-hidden="true">&laquo;</span>
															<span class="sr-only">Previous</span>
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link active"
															// href="with-sidebar2.html"
														>
															1
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															2
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															3
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
														>
															4
														</a>
													</li>
													<li class="page-item">
														<a
															class="page-link"
															// href="with-sidebar2.html"
															aria-label="Next"
														>
															<span aria-hidden="true">&raquo;</span>
															<span class="sr-only">Next</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoiningBanner />
			<FooterSection />
		</>
	);
};

export default AllListing;
