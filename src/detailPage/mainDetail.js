import React, { useState, useEffect } from "react";
import mainpro from "../assets/img/blog/product01-1.jpg";
import theme02 from "../assets/img/theme02.png";
import widget05 from "../assets/img/blog/widget05.jpg";
import floor_plan00 from "../assets/img/figure/floor_plan00.jpg";
import listing01 from "../assets/img/blog/listing01.jpg";
import About13 from "../assets/img/about/about13.jpg";
import About14 from "../assets/img/about/about14.jpg";
import About15 from "../assets/img/about/about15.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainDetail = () => {
	const history = useNavigate();
	const location = useLocation();
	const propertID = location.state.propertyId;
	const propertyIdFromLocalStorage = localStorage.getItem("propertyId");

	const [individualPropertyData, setIndividualPropertyData] = useState({});
	useEffect(() => {
		axios
			.get(
				`https://handoverapi.herokuapp.com/property/${
					typeof (propertID || propertyIdFromLocalStorage) !== "undefined" &&
					propertID
						? propertID._id
						: propertyIdFromLocalStorage
				}`
			)
			.then(function (response0) {
				// handle success
				setIndividualPropertyData(response0.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	// ...............Contact us fom start...................
	const initialSate = { bid: "" };
	const [data, setData] = useState(initialSate);
	var sellerId = JSON.parse(localStorage.getItem("userData"))._id;
	var propertyId = individualPropertyData._id;

	const handleInputs = async (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { bid } = data;
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Bearer ${JSON.parse(localStorage.getItem("token"))}`
		);
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: {
				bid: bid,
				propertyId: propertyId,
				sellerId: sellerId,
			},
			redirect: "follow",
		};
		await fetch("https://handoverapi.herokuapp.com/bidding/bid", requestOptions)
			.then((response) => {
				response.text();
				console.log("place a bid nowwwwww", response);
			})
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};
	// ..................................................................................................................
	// ...............Contact us fom End...................
	// belw property from contactus form......start
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
		<section class="single-listing-wrap1">
			<div class="container">
				<div class="single-property">
					<div class="content-wrapper">
						<div class="property-heading">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="single-list-cate">
										<div class="item-categoery">For Rent</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="single-list-price">
										AED {individualPropertyData.priceDemand}
									</div>
								</div>
							</div>
							<div class="row align-items-center">
								<div class="col-lg-8 col-md-12">
									<div class="single-verified-area">
										<div class="item-title">
											<h3>
												<a
												//  href="single-listing2.html"
												>
													{individualPropertyData.propertyTitle}
												</a>
											</h3>
										</div>
									</div>
									{/* <div class="single-item-address">
										<ul>
											<li>
												<i class="fas fa-map-marker-alt"></i>House#18, Road#07,
												Albany, New York, 08525 /
											</li>
											<li>
												<i class="fas fa-clock"></i>7 months ago /
											</li>
											<li>
												<i class="fas fa-eye"></i>Views: 1,230
											</li>
										</ul>
									</div> */}
								</div>
								<div class="col-lg-4 col-md-12">
									<div class="side-button">
										<ul>
											<li>
												<a href="with-sidebar2.html" class="side-btn">
													<i class="flaticon-share"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" class="side-btn">
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" class="side-btn">
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" class="side-btn">
													<i class="flaticon-printer"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-8">
								<div
									class="featured-thumb-slider-area wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div class="feature-box3 swiper-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="feature-img1 zoom-image-hover">
													<img
														src={propertID.images[0]}
														alt="feature"
														style={{
															widht: "798px",
															height: "420px",
															minWidth: "798px",
															minHeight: "420px",
														}}
													/>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product3.jpg"
														alt="feature"

														// width="798"
														// height="420"
													/>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product4.jpg"
														alt="feature"
														width="798"
														height="420"
													/>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product5.jpg"
														alt="feature"
														// width="798"
														// height="420"
													/>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product6.jpg"
														alt="feature"
														// width="798"
														// height="420"
													/>
												</div>
											</div>
										</div>
									</div>
									{/* <div class="featured-thum-slider2 swiper-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<div class="item-img">
													<img
														src="img/blog/product2.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="item-img">
													<img
														src="img/blog/product7.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>
											<div class="swiper-slide">
												<div class="item-img">
													<img
														src="img/blog/product8.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="item-img">
													<img
														src="img/blog/product9.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>

											<div class="swiper-slide">
												<div class="item-img">
													<img
														src="img/blog/product10.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								<div class="single-listing-box1">
									<div class="overview-area">
										<h3 class="item-title">Overview</h3>
										<div class="gallery-icon-box">
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-comment"></i>
												</div>
												<ul class="item-number">
													<li>ID No :</li>
													<li class="deep-clr">98560</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-home"></i>
												</div>
												<ul class="item-number">
													<li>Type :</li>
													<li class="deep-clr">
														{individualPropertyData.propertyType}
													</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-bed"></i>
												</div>
												<ul class="item-number">
													<li>Bed Room :</li>
													<li class="deep-clr">
														{individualPropertyData.bedrooms}
													</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-shower"></i>
												</div>
												<ul class="item-number">
													<li>ID No :</li>
													<li class="deep-clr">98560</li>
												</ul>
											</div>
										</div>
										<div class="gallery-icon-box">
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-home"></i>
												</div>
												<ul class="item-number">
													<li>Parking :</li>
													<li class="deep-clr">Yes</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-home"></i>
												</div>
												<ul class="item-number">
													<li>Area :</li>
													<li class="deep-clr">
														{individualPropertyData.area} sqft
													</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-pencil"></i>
												</div>
												<ul class="item-number">
													<li>Land Size :</li>
													<li class="deep-clr">15,000 sqft</li>
												</ul>
											</div>
											<div class="item-icon-box">
												<div class="item-icon">
													<i class="flaticon-two-overlapping-square"></i>
												</div>
												<ul class="item-number">
													<li>Year Build :</li>
													<li class="deep-clr">2022</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="overview-area listing-area">
										<h3 class="item-title">About This Listing</h3>
										<p>
											{individualPropertyData.description}
											{/* Praesent eros turpis, commodo vel justo at, pulvinar
											mollis eros. Mauris aliquet eu quam id ornareor bi ac quam
											enim. Cras vitae nulla condimentum, semper dolor non,
											faucibus dolor. Vivamus adip iscing eros quis orci
											fringilla, sed pretium lectus viverra. Pellentesque
											habitant morbi tristique senectus et netus et malesuada
											fames ac turpis egestas. */}
										</p>
										<p>
											Praesent eros turpis, commodo vel justo at, pulvinar
											mollis eros. Mauris aliquet eu quam id ornareor bi ac quam
											enim. Cras vitae nulla condimentum, semper dolor non,
											faucibus dolor. Vivamus adip iscing eros quis orci
											fringilla, sed pretium lectus viverra.
										</p>
									</div>
									<div class="overview-area single-details-box table-responsive">
										<h3 class="item-title">Details</h3>
										<table class="table-box1">
											<tr>
												<td class="item-bold">Id No</td>
												<td>98560</td>
												<td class="item-bold">Price</td>
												<td>$12,500</td>
											</tr>
											<tr>
												<td class="item-bold">Property Type</td>
												<td>Apartment</td>
												<td class="item-bold">Parking</td>
												<td>Yes</td>
											</tr>
											<tr>
												<td class="item-bold">Rooms</td>
												<td>04</td>
												<td class="item-bold">Property Status</td>
												<td>For Rent</td>
											</tr>
											<tr>
												<td class="item-bold">Bath Rooms</td>
												<td>03</td>
												<td class="item-bold">Land Area</td>
												<td>15,000 sqft</td>
											</tr>
											<tr>
												<td class="item-bold">Size</td>
												<td>1050 sqft</td>
												<td class="item-bold">Year Build</td>
												<td>2022</td>
											</tr>
										</table>
									</div>
									<div class="overview-area ameniting-box">
										<h3 class="item-title">Features & Amenities</h3>
										<div class="row">
											<div class="col-lg-4">
												<ul class="ameniting-list">
													<li>
														<i class="fas fa-check-circle"></i>TV Cable
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Air Conditioning
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Barbeque
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Gym
													</li>
												</ul>
											</div>
											<div class="col-lg-4">
												<ul class="ameniting-list">
													<li>
														<i class="fas fa-check-circle"></i>Swimming Pool
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Laundry
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Microwave
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Lawn
													</li>
												</ul>
											</div>
											<div class="col-lg-4">
												<ul class="ameniting-list">
													<li>
														<i class="fas fa-check-circle"></i>Sauna
													</li>
													<li>
														<i class="fas fa-check-circle"></i>Window Coverings
													</li>
													<li>
														<i class="fas fa-check-circle"></i>CC Camera
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="overview-area map-box">
										<h3 class="item-title">Map Location</h3>
										<div class="item-map">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.942936504207!2d90.42287424999999!3d23.774618500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640231732625!5m2!1sen!2sbd"
												width="731"
												height="349"
												style={{ border: "0" }}
												allowfullscreen=""
												loading="lazy"
											></iframe>
										</div>
									</div>
									<div class="overview-area floor-plan-box">
										<h3 class="item-title">Floor Plans</h3>
										<div id="accordion" class="accordion">
											<div class="card">
												<div class="card-header">
													<div
														class="heading-title"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="true"
														role="button"
													>
														<span>First Floor Plan</span>
														<div class="card-list">
															<ul>
																<li>
																	<i class="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i class="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i class="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="collapseOne"
													class="collapse show"
													data-bs-parent="#accordion"
												>
													<div class="card-body">
														<div class="item-img">
															<img src={floor_plan00} alt="shape" />
														</div>
													</div>
												</div>
											</div>
											<div class="card">
												<div class="card-header">
													<div
														class="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingtwo"
														aria-expanded="true"
														role="button"
													>
														<span>Second Floor Plan</span>
														<div class="card-list">
															<ul>
																<li>
																	<i class="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i class="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i class="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingtwo"
													class="collapse"
													data-bs-parent="#accordion"
												>
													<div class="card-body">
														<div class="item-img">
															<img
																src="img/figure/floor_plan.jpg"
																alt="shape"
															/>
														</div>
													</div>
												</div>
											</div>
											<div class="card">
												<div class="card-header">
													<div
														class="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingthree"
														aria-expanded="true"
														role="button"
													>
														<span>Third Floor Plan</span>
														<div class="card-list">
															<ul>
																<li>
																	<i class="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i class="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i class="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingthree"
													class="collapse"
													data-bs-parent="#accordion"
												>
													<div class="card-body">
														<div class="item-img">
															<img
																src="img/figure/floor_plan.jpg"
																alt="shape"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="overview-area video-box1 mb-4">
										<h3 class="item-title">Property Video</h3>
										<div class="item-img">
											<img
												src={listing01}
												//  alt="map" width="731" height="349"
											/>
											<div class="play-button">
												<div class="item-icon">
													<a
														href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
														class="play-btn play-btn-big"
													>
														<span class="play-icon style-2">
															<i class="fas fa-play"></i>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
									{/* <div class="overview-area nearby-area">
										<h3 class="item-title">Kalamridha Nearby Places</h3>
										<div class="nearby-box">
											<div class="media d-flex">
												<div class="flex-shrink-0">
													<div class="item-icon">
														<i class="fas fa-heartbeat"></i>
													</div>
												</div>
												<div class="media-body flex-grow-1 ms-3">
													<h4 class="small-title">Health & Medical</h4>
													<div class="row">
														<div class="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div class="col-lg-4">
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="nearby-box nearby-box-2">
											<div class="media d-flex">
												<div class="flex-shrink-0">
													<div class="item-icon">
														<i class="fas fa-utensils"></i>
													</div>
												</div>
												<div class="media-body flex-grow-1 ms-3">
													<h4 class="small-title">Restaurants</h4>
													<div class="row">
														<div class="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div class="col-lg-4">
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="nearby-box nearby-box-3">
											<div class="media d-flex">
												<div class="flex-shrink-0">
													<div class="item-icon">
														<i class="fas fa-graduation-cap"></i>
													</div>
												</div>
												<div class="media-body flex-grow-1 ms-3">
													<h4 class="small-title">Education</h4>
													<div class="row">
														<div class="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div class="col-lg-4">
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
															<div class="rating-area">
																<ul class="item-rating">
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																	<li>
																		<i class="fas fa-star"></i>
																	</li>
																</ul>
																<div class="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div class="product-video">
										<h3 class="item-title">360° Virtual Tour</h3>
										<div id="panorama">
											<iframe
												width="745"
												height="400"
												allowfullscreen
												style={{ borderStyle: "none" }}
												src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg"
											></iframe>
										</div>
									</div> */}
								</div>
							</div>
							<div class="col-lg-4 widget-break-lg sidebar-widget">
								<div class="widget widget-contact-box">
									<h3 class="widget-subtitle">Place a bid</h3>
									{/* <div class="media d-flex">
										<div class="flex-shrink-0">
											<div class="item-logo">
												<img
													src={theme02}
													// alt="logo"
													// width="100"
													// height="100"
												/>
											</div>
										</div>
										<div class="media-body flex-grow-1 ms-3">
											<h4 class="item-title">RadiusTheme</h4>
											<div class="item-phn">
												+ 132 899 6XXX{" "}
												<a href="single-listing1.html">
													<span>(Show)</span>
												</a>
											</div>
											<div class="item-mail">agent@radiustheme.com</div>
											<div class="item-rating">
												<ul>
													<li>
														<i class="fas fa-star"></i>
													</li>
													<li>
														<i class="fas fa-star"></i>
													</li>
													<li>
														<i class="fas fa-star"></i>
													</li>
													<li>
														<i class="fas fa-star"></i>
													</li>
													<li>
														<i class="fas fa-star"></i>
													</li>
													<li class="rating-count">(Reviews 15)</li>
												</ul>
											</div>
										</div>
									</div> */}
									{/* <ul class="wid-contact-button">
										<li>
											<a href="contact.html">
												<i class="fas fa-comment"></i>Quick Chat
											</a>
										</li>
										<li>
											<a href="contact.html">
												<i class="fas fa-share-alt"></i>Share
											</a>
										</li>
									</ul> */}
									<form class="contact-box rt-contact-form">
										<div class="row">
											<div class="form-group col-lg-12">
												<input
													type="text"
													class="form-control"
													name="bid"
													placeholder="Enter a bid Amount"
													data-error="Bid Amount is required"
													required
													value={data.bid}
													onChange={handleInputs}
												/>
											</div>

											{/* <div class="form-group col-lg-12">
												<input
													type="email"
													class="form-control"
													name="email"
													placeholder="E-mail"
													data-error="Phone is required"
													required
													value={data.email}
													onChange={handleInputs}
												/>
											</div>
											<div class="form-group col-lg-12">
												<textarea
													name="message"
													id="message"
													class="form-text"
													placeholder="Message"
													cols="30"
													rows="4"
													data-error="Message Name is required"
													required
													value={data.message}
													onChange={handleInputs}
												></textarea>
											</div> */}
											<div class="form-group col-lg-12">
												<div class="advanced-button">
													<button
														onClick={(e) => handleSubmit(e)}
														class="item-btn"
													>
														Place a Bid
													</button>
												</div>
											</div>
										</div>
										<div class="form-response"></div>
									</form>
								</div>
								<div class="widget widget-listing-box1">
									<h3 class="widget-subtitle">Latest Listing</h3>
									<div class="item-img">
										<a
											// href="single-listings2.html"
											onClick={() => {
												history("/detailpage", {
													state: { propertyId: dataPro[0] },
												});
											}}
										>
											<img
												src={dataPro[0]?.images[0]}
												style={{ width: "540px", height: "360px" }}
												alt="widget"
											/>
										</a>
										<div class="item-category-box1">
											<div class="item-category">For Rent</div>
										</div>
									</div>
									<div class="widget-content">
										<div class="item-category10">
											<a
											// href="single-listing2.html"
											>
												Villa
											</a>
										</div>
										<h4 class="item-title">
											<a
											// href="single-listing2.html"
											>
												{dataPro[0]?.propertyTitle}{" "}
											</a>
										</h4>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>
											{/* {Object.values(dataPro[0]?.location).join(",")} */}

											{/* 2150 S Jones Blvd,
											USA */}
										</div>
										<div class="item-price">
											AED {dataPro[0]?.priceDemand}
											{/* $11,000<span>/mo</span> */}
										</div>
									</div>
									{/* {dataPro.slice(1, 3).map((e) => {
										<div class="widget-listing">
											<div class="item-img">
												<a href="single-listing2.html">
													<img
														src={e.images[0]}
														style={{ width: "120px", height: "102px" }}
														alt="widget"
													/>
												</a>
											</div>
											<div class="item-content">
												<h5 class="item-title">
													<a href="single-listing2.html">
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
										</div>;
									})} */}
									{/* <div class="widget-listing">
										<div class="item-img">
											<a href="single-listing2.html">
												<img
													src="img/blog/widget3.jpg"
													alt="widget"
													width="120"
													height="102"
												/>
											</a>
										</div>
										<div class="item-content">
											<h5 class="item-title">
												<a href="single-listing2.html">
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
											<a href="single-listing2.html">
												<img
													src="img/blog/widget4.jpg"
													alt="widget"
													width="120"
													height="102"
												/>
											</a>
										</div>
										<div class="item-content">
											<h5 class="item-title">
												<a href="single-listing2.html">
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
								{/* <div class="widget widget-contact-box widget-price-range">
									<h3 class="widget-subtitle">Mortgage Calculator</h3>
									<p>
										Dorem ipsum dolor sit amet, consectetur adipisc ing elit.
										Nunc posuere.
									</p>
									<form class="contact-box">
										<div class="row">
											<div class="form-group col-lg-12">
												<label class="item-loan">Loan Amount :</label>
												<input
													type="text"
													class="form-control"
													name="fname"
													placeholder="$00.00"
													data-error="First Name is required"
													required
												/>
											</div>
											<div class="form-group col-lg-12">
												<label class="item-loan">Down Payment :</label>
												<input
													type="text"
													class="form-control"
													name="phone"
													placeholder="$00.00"
													data-error="Phone is required"
													required
												/>
											</div>
											<div class="form-group col-lg-12">
												<label class="item-loan">Years :</label>
												<input
													type="text"
													class="form-control"
													name="phone"
													placeholder="12 Years"
													data-error="Phone is required"
													required
												/>
											</div>
										</div>
									</form>

									<div class="price-range-wrapper">
										<div class="price-filter-wrap d-flex align-items-center">
											<div class="price-range-select">
												<div class="price-range range-title">
													Interest Rate in:
												</div>
												<div class="price-range" id="price-range-min"></div>
												<div class="price-range">:</div>
												<div class="price-range" id="price-range-max"></div>
											</div>
										</div>
										<div
											id="price-range-filter"
											class="price-range-filter"
										></div>
									</div>

									<ul class="wid-contact-button">
										<li>
											<a
											// href="single-listing2.html"
											>
												Calculate
											</a>
										</li>
										<li>
											<a
											// href="single-listing2.html"
											>
												<i class="fas fa-sync-alt"></i>Reset Form
											</a>
										</li>
									</ul>
								</div> */}
								<div class="widget widget-post">
									<div class="item-img">
										<img src={widget05} alt="widget" />
										<div class="circle-shape">
											<span class="item-shape"></span>
										</div>
									</div>
									<div class="item-content">
										<h4 class="item-title">Find Your Dream House</h4>
										<div class="item-price">$2,999</div>
										<div class="post-button">
											<a
												// href="single-listing2.html"
												class="item-btn"
											>
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainDetail;
