import React, { useState, useEffect } from "react";
// import mainpro from "../assets/img/blog/product01-1.jpg";
// import theme02 from "../assets/img/theme02.png";
import widget05 from "../assets/img/blog/widget05.jpg";
import floor_plan00 from "../assets/img/figure/floor_plan00.jpg";
import listing01 from "../assets/img/blog/listing01.jpg";
// import About13 from "../assets/img/about/about13.jpg";
// import About14 from "../assets/img/about/about14.jpg";
// import About15 from "../assets/img/about/about15.jpg";
// import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL, APP_URL } from "../constant";

const MainDetail = (props) => {
	// const history = useNavigate();
	// const location = useLocation();
	// const propertID = location.state.propertyId;
	// const propertyIdFromLocalStorage = localStorage.getItem("propertyId");

	const [individualPropertyData, setIndividualPropertyData] = useState({});

	// ...............Contact us fom start...................
	const initialSate = { bid: "" };
	const [data, setData] = useState(initialSate);
	var propertyId = props.id;

	const handleInputs = async (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		var sellerId = JSON.parse(localStorage.getItem("userData"))._id;
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
		await fetch(API_URL+"/bidding/bid", requestOptions)
			.then((response) => {
				response.text();
				console.log("place a Bid nowwwwww", response);
			})
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};

	// ..................................................................................................................
	// ...............Contact us fom End...................
	// belw property from contactus form......start
	const [dataPro, setDataPro] = useState([]);
	useEffect(() => {
		
			axios.get(API_URL+`/property/${typeof (props.id) !== "undefined" && props.id}`)
			.then(function (response) {
				// handle success
				setIndividualPropertyData(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

			axios.get("https://handoverapi.herokuapp.com/property/sort/desc")
			.then(function (response2) {
				// handle success
				setDataPro(response2.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, [props.id]);

	return (
		<section className="single-listing-wrap1">
			<div className="container">
				<div className="single-property">
					<div className="content-wrapper">
						<div className="property-heading">
							<div className="row">
								<div className="col-lg-6 col-md-12">
									<div className="single-list-cate">
										<div className="item-categoery">For Rent</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="single-list-price">
										AED {individualPropertyData.priceDemand}
									</div>
								</div>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-8 col-md-12">
									<div className="single-verified-area">
										<div className="item-title">
											<h3>
												<a
												//  href="single-listing2.html"
												>
													{individualPropertyData.propertyTitle}
												</a>
											</h3>
										</div>
									</div>
									{/* <div className="single-item-address">
										<ul>
											<li>
												<i className="fas fa-map-marker-alt"></i>House#18, Road#07,
												Albany, New York, 08525 /
											</li>
											<li>
												<i className="fas fa-clock"></i>7 months ago /
											</li>
											<li>
												<i className="fas fa-eye"></i>Views: 1,230
											</li>
										</ul>
									</div> */}
								</div>
								<div className="col-lg-4 col-md-12">
									<div className="side-button">
										<ul>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-share"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-printer"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8">
								<div
									className="featured-thumb-slider-area wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="feature-box3 swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													{
														individualPropertyData!=undefined && individualPropertyData!='' && individualPropertyData.images != undefined ?
														(
															<img
																src={individualPropertyData.images[0]}
																alt="feature"
																style={{
																	widht: "798px",
																	height: "420px",
																	minWidth: "798px",
																	minHeight: "420px",
																}}
															/>
														) : (
															''
														)
													}
												</div>
											</div>
											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product3.jpg"
														alt="feature"

														// width="798"
														// height="420"
													/>
												</div>
											</div>

											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product4.jpg"
														alt="feature"
														width="798"
														height="420"
													/>
												</div>
											</div>

											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product5.jpg"
														alt="feature"
														// width="798"
														// height="420"
													/>
												</div>
											</div>

											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
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
									{/* <div className="featured-thum-slider2 swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="item-img">
													<img
														src="img/blog/product2.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="item-img">
													<img
														src="img/blog/product7.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="item-img">
													<img
														src="img/blog/product8.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>

											<div className="swiper-slide">
												<div className="item-img">
													<img
														src="img/blog/product9.jpg"
														alt="feature"
														width="154"
														height="100"
													/>
												</div>
											</div>

											<div className="swiper-slide">
												<div className="item-img">
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
								<div className="single-listing-box1">
									<div className="overview-area">
										<h3 className="item-title">Overview</h3>
										<div className="gallery-icon-box">
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-comment"></i>
												</div>
												<ul className="item-number">
													<li>ID No :</li>
													<li className="deep-clr">98560</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Type :</li>
													<li className="deep-clr">
														{individualPropertyData.propertyType}
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-bed"></i>
												</div>
												<ul className="item-number">
													<li>Bed Room :</li>
													<li className="deep-clr">
														{individualPropertyData.bedrooms}
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-shower"></i>
												</div>
												<ul className="item-number">
													<li>ID No :</li>
													<li className="deep-clr">98560</li>
												</ul>
											</div>
										</div>
										<div className="gallery-icon-box">
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Parking :</li>
													<li className="deep-clr">Yes</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Area :</li>
													<li className="deep-clr">
														{individualPropertyData.area} sqft
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-pencil"></i>
												</div>
												<ul className="item-number">
													<li>Land Size :</li>
													<li className="deep-clr">15,000 sqft</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-two-overlapping-square"></i>
												</div>
												<ul className="item-number">
													<li>Year Build :</li>
													<li className="deep-clr">2022</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="overview-area listing-area">
										<h3 className="item-title">About This Listing</h3>
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
									<div className="overview-area single-details-box table-responsive">
										<h3 className="item-title">Details</h3>
										<table className="table-box1">
											<tbody>
												<tr>
													<td className="item-bold">Id No</td>
													<td>98560</td>
													<td className="item-bold">Price</td>
													<td>$12,500</td>
												</tr>
												<tr>
													<td className="item-bold">Property Type</td>
													<td>Apartment</td>
													<td className="item-bold">Parking</td>
													<td>Yes</td>
												</tr>
												<tr>
													<td className="item-bold">Rooms</td>
													<td>04</td>
													<td className="item-bold">Property Status</td>
													<td>For Rent</td>
												</tr>
												<tr>
													<td className="item-bold">Bath Rooms</td>
													<td>03</td>
													<td className="item-bold">Land Area</td>
													<td>15,000 sqft</td>
												</tr>
												<tr>
													<td className="item-bold">Size</td>
													<td>1050 sqft</td>
													<td className="item-bold">Year Build</td>
													<td>2022</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="overview-area ameniting-box">
										<h3 className="item-title">Features & Amenities</h3>
										<div className="row">
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>TV Cable
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Air Conditioning
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Barbeque
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Gym
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>Swimming Pool
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Laundry
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Microwave
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Lawn
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>Sauna
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Window Coverings
													</li>
													<li>
														<i className="fas fa-check-circle"></i>CC Camera
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="overview-area map-box">
										<h3 className="item-title">Map Location</h3>
										<div className="item-map">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.942936504207!2d90.42287424999999!3d23.774618500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640231732625!5m2!1sen!2sbd"
												width="731"
												height="349"
												style={{ border: "0" }}
												allowFullScreen=""
												loading="lazy"
											></iframe>
										</div>
									</div>
									<div className="overview-area floor-plan-box">
										<h3 className="item-title">Floor Plans</h3>
										<div id="accordion" className="accordion">
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="true"
														role="button"
													>
														<span>First Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="collapseOne"
													className="collapse show"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
															<img src={floor_plan00} alt="shape" />
														</div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingtwo"
														aria-expanded="true"
														role="button"
													>
														<span>Second Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingtwo"
													className="collapse"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
															<img
																src="img/figure/floor_plan.jpg"
																alt="shape"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingthree"
														aria-expanded="true"
														role="button"
													>
														<span>Third Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingthree"
													className="collapse"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
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
									<div className="overview-area video-box1 mb-4">
										<h3 className="item-title">Property Video</h3>
										<div className="item-img">
											<img
												src={listing01}
												//  alt="map" width="731" height="349"
											/>
											<div className="play-button">
												<div className="item-icon">
													<a
														href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
														className="play-btn play-btn-big"
													>
														<span className="play-icon style-2">
															<i className="fas fa-play"></i>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="overview-area nearby-area">
										<h3 className="item-title">Kalamridha Nearby Places</h3>
										<div className="nearby-box">
											<div className="media d-flex">
												<div className="flex-shrink-0">
													<div className="item-icon">
														<i className="fas fa-heartbeat"></i>
													</div>
												</div>
												<div className="media-body flex-grow-1 ms-3">
													<h4 className="small-title">Health & Medical</h4>
													<div className="row">
														<div className="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div className="col-lg-4">
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="nearby-box nearby-box-2">
											<div className="media d-flex">
												<div className="flex-shrink-0">
													<div className="item-icon">
														<i className="fas fa-utensils"></i>
													</div>
												</div>
												<div className="media-body flex-grow-1 ms-3">
													<h4 className="small-title">Restaurants</h4>
													<div className="row">
														<div className="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div className="col-lg-4">
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="nearby-box nearby-box-3">
											<div className="media d-flex">
												<div className="flex-shrink-0">
													<div className="item-icon">
														<i className="fas fa-graduation-cap"></i>
													</div>
												</div>
												<div className="media-body flex-grow-1 ms-3">
													<h4 className="small-title">Education</h4>
													<div className="row">
														<div className="col-lg-8">
															<ul>
																<li>
																	Born Knowing Birth and Lactation Support
																	(12.61 miles)
																</li>
																<li>Tapestry Birth Collective (14.38 miles)</li>
																<li>Susan Cutter Healing Arts (7.75 miles)</li>
															</ul>
														</div>
														<div className="col-lg-4">
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
															<div className="rating-area">
																<ul className="item-rating">
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																	<li>
																		<i className="fas fa-star"></i>
																	</li>
																</ul>
																<div className="item-number">(05 Reviews)</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
									{/* <div className="product-video">
										<h3 className="item-title">360° Virtual Tour</h3>
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
							<div className="col-lg-4 widget-break-lg sidebar-widget">
								<div className="widget widget-contact-box">
									<h3 className="widget-subtitle">Place a Bid</h3>
									{/* <div className="media d-flex">
										<div className="flex-shrink-0">
											<div className="item-logo">
												<img
													src={theme02}
													// alt="logo"
													// width="100"
													// height="100"
												/>
											</div>
										</div>
										<div className="media-body flex-grow-1 ms-3">
											<h4 className="item-title">RadiusTheme</h4>
											<div className="item-phn">
												+ 132 899 6XXX{" "}
												<a href="single-listing1.html">
													<span>(Show)</span>
												</a>
											</div>
											<div className="item-mail">agent@radiustheme.com</div>
											<div className="item-rating">
												<ul>
													<li>
														<i className="fas fa-star"></i>
													</li>
													<li>
														<i className="fas fa-star"></i>
													</li>
													<li>
														<i className="fas fa-star"></i>
													</li>
													<li>
														<i className="fas fa-star"></i>
													</li>
													<li>
														<i className="fas fa-star"></i>
													</li>
													<li className="rating-count">(Reviews 15)</li>
												</ul>
											</div>
										</div>
									</div> */}
									{/* <ul className="wid-contact-button">
										<li>
											<a href="contact.html">
												<i className="fas fa-comment"></i>Quick Chat
											</a>
										</li>
										<li>
											<a href="contact.html">
												<i className="fas fa-share-alt"></i>Share
											</a>
										</li>
									</ul> */}
									<form className="contact-box rt-contact-form">
										<div className="row">
											{/* <div className="form-group col-lg-12">
												<input
													type="text"
													className="form-control"
													name="bid"
													placeholder="Enter a bid Amount"
													data-error="Bid Amount is required"
													required
													value={data.bid}
													onChange={handleInputs}
												/>
											</div> */}

											{/* <div className="form-group col-lg-12">
												<input
													type="email"
													className="form-control"
													name="email"
													placeholder="E-mail"
													data-error="Phone is required"
													required
													value={data.email}
													onChange={handleInputs}
												/>
											</div>
											<div className="form-group col-lg-12">
												<textarea
													name="message"
													id="message"
													className="form-text"
													placeholder="Message"
													cols="30"
													rows="4"
													data-error="Message Name is required"
													required
													value={data.message}
													onChange={handleInputs}
												></textarea>
											</div> */}
											<div className="form-group col-lg-12">
												<div className="advanced-button">
													<a href={`${APP_URL}/property/bid/${individualPropertyData._id}`}
														className="item-btn"
													>
														Place a Bid
													</a>
												</div>
											</div>
										</div>
										<div className="form-response"></div>
									</form>
								</div>
								<div className="widget widget-listing-box1">
									<h3 className="widget-subtitle">Latest Listing</h3>
									<div className="item-img">
										<Link to={'/property/'+dataPro[0]?._id} >
											<img
												src={dataPro[0]?.images[0]}
												style={{ width: "540px", height: "360px" }}
												alt="widget"
											/>
										</Link>
										<div className="item-category-box1">
											<div className="item-category">For Rent</div>
										</div>
									</div>
									<div className="widget-content">
										<div className="item-category10">
											<a
											// href="single-listing2.html"
											>
												Villa
											</a>
										</div>
										<h4 className="item-title">
											<a
											// href="single-listing2.html"
											>
												{dataPro[0]?.propertyTitle}{" "}
											</a>
										</h4>
										<div className="location-area">
											<i className="flaticon-maps-and-flags"></i>
											{/* {Object.values(dataPro[0]?.location).join(",")} */}

											{/* 2150 S Jones Blvd,
											USA */}
										</div>
										<div className="item-price">
											AED {dataPro[0]?.priceDemand}
											{/* $11,000<span>/mo</span> */}
										</div>
									</div>
									{/* {dataPro.slice(1, 3).map((e) => {
										<div className="widget-listing">
											<div className="item-img">
												<a href="single-listing2.html">
													<img
														src={e.images[0]}
														style={{ width: "120px", height: "102px" }}
														alt="widget"
													/>
												</a>
											</div>
											<div className="item-content">
												<h5 className="item-title">
													<a href="single-listing2.html">
														House Highland Ave Los Angeles
													</a>
												</h5>
												<div className="location-area">
													<i className="flaticon-maps-and-flags"></i>California
												</div>
												<div className="item-price">
													$3,000<span>/mo</span>
												</div>
											</div>
										</div>;
									})} */}
									{/* <div className="widget-listing">
										<div className="item-img">
											<a href="single-listing2.html">
												<img
													src="img/blog/widget3.jpg"
													alt="widget"
													width="120"
													height="102"
												/>
											</a>
										</div>
										<div className="item-content">
											<h5 className="item-title">
												<a href="single-listing2.html">
													House Highland Ave Los Angeles
												</a>
											</h5>
											<div className="location-area">
												<i className="flaticon-maps-and-flags"></i>California
											</div>
											<div className="item-price">
												$1,200<span>/mo</span>
											</div>
										</div>
									</div>
									<div className="widget-listing no-brd">
										<div className="item-img">
											<a href="single-listing2.html">
												<img
													src="img/blog/widget4.jpg"
													alt="widget"
													width="120"
													height="102"
												/>
											</a>
										</div>
										<div className="item-content">
											<h5 className="item-title">
												<a href="single-listing2.html">
													House Highland Ave Los Angeles
												</a>
											</h5>
											<div className="location-area">
												<i className="flaticon-maps-and-flags"></i>California
											</div>
											<div className="item-price">
												$1,900<span>/mo</span>
											</div>
										</div>
									</div> */}
								</div>
								{/* <div className="widget widget-contact-box widget-price-range">
									<h3 className="widget-subtitle">Mortgage Calculator</h3>
									<p>
										Dorem ipsum dolor sit amet, consectetur adipisc ing elit.
										Nunc posuere.
									</p>
									<form className="contact-box">
										<div className="row">
											<div className="form-group col-lg-12">
												<label className="item-loan">Loan Amount :</label>
												<input
													type="text"
													className="form-control"
													name="fname"
													placeholder="$00.00"
													data-error="First Name is required"
													required
												/>
											</div>
											<div className="form-group col-lg-12">
												<label className="item-loan">Down Payment :</label>
												<input
													type="text"
													className="form-control"
													name="phone"
													placeholder="$00.00"
													data-error="Phone is required"
													required
												/>
											</div>
											<div className="form-group col-lg-12">
												<label className="item-loan">Years :</label>
												<input
													type="text"
													className="form-control"
													name="phone"
													placeholder="12 Years"
													data-error="Phone is required"
													required
												/>
											</div>
										</div>
									</form>

									<div className="price-range-wrapper">
										<div className="price-filter-wrap d-flex align-items-center">
											<div className="price-range-select">
												<div className="price-range range-title">
													Interest Rate in:
												</div>
												<div className="price-range" id="price-range-min"></div>
												<div className="price-range">:</div>
												<div className="price-range" id="price-range-max"></div>
											</div>
										</div>
										<div
											id="price-range-filter"
											className="price-range-filter"
										></div>
									</div>

									<ul className="wid-contact-button">
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
												<i className="fas fa-sync-alt"></i>Reset Form
											</a>
										</li>
									</ul>
								</div> */}
								<div className="widget widget-post">
									<div className="item-img">
										<img src={widget05} alt="widget" />
										<div className="circle-shape">
											<span className="item-shape"></span>
										</div>
									</div>
									<div className="item-content">
										<h4 className="item-title">Find Your Dream House</h4>
										<div className="item-price">$2,999</div>
										<div className="post-button">
											<a
												// href="single-listing2.html"
												className="item-btn"
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
