import React, { useState, useEffect } from "react";
import Blog29 from "../assets/img/blog/blog29.jpg";
import Blog30 from "../assets/img/blog/blog30.jpg";
import Blog31 from "../assets/img/blog/blog31.jpg";
import Blog32 from "../assets/img/blog/blog32.jpg";
import Blog33 from "../assets/img/blog/blog33.jpg";
import Blog34 from "../assets/img/blog/blog34.jpg";
import api from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LatestListing = () => {
	const history = useNavigate();
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(" https://handoverapi.herokuapp.com/property/sort/desc")
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

	return (
		<section class="property-wrap-6">
			<div class="container">
				<div class="item-heading-center mb-20">
					<span class="section-subtitle">Latest Listings</span>
					<h2 class="section-title">Featured Property For Sale</h2>
					<div class="bg-title-wrap" style={{ display: "block" }}>
						<span class="background-title solid">Properties</span>
					</div>
				</div>
				<div class="row">
					{data.slice(0, 4).map((a) => {
						return (
							<div class="col-xl-6">
								<div
									class="property-box2 property-box5 wow animated fadeInUp"
									data-wow-delay=".6s"
								>
									<div class="item-img">
										<a
											onClick={() => {
												history("/detailpage", { state: { propertyId: a } });
											}}
										>
											<img
												src={a.images[0]}
												alt="blog"
												style={{ width: "220px", height: "170px" }}
											/>
										</a>
										<div class="react-icon">
											<ul>
												<li>
													<a
														href="favourite.html"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title="Favourites"
													>
														<i class="flaticon-heart"></i>
													</a>
												</li>
												<li>
													<a
														href="compare.html"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title="Compare"
													>
														<i class="flaticon-left-and-right-arrows"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="item-content item-content-property">
										<div class="verified-area">
											<h3 class="item-title">
												<a>{a.propertyTitle}</a>
											</h3>
										</div>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>
											{a.location.city}
											{/* Downey, California */}
										</div>
										<div class="item-categoery5">
											<ul>
												<li>
													<i class="flaticon-bed"></i>Beds: {a.bedrooms}
												</li>
												<li>
													<i class="flaticon-shower"></i>Baths: {a.bathrooms}
												</li>
												<li>
													<i class="flaticon-two-overlapping-square"></i>
													{a.area}
													Sqft
												</li>
											</ul>
										</div>
										<div class="item-price">
											AED {a.priceDemand}
											{/* <i>/</i>
											<span>mo</span> */}
										</div>
									</div>
								</div>
							</div>
						);
					})}
					{/* <div class="col-xl-6">
            <div
              class="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="item-img">
                <a href="single-listing1.html">
                  <img src={Blog30} alt="blog" width="220" height="170" />
                </a>
                <div class="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i class="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-content item-content-property">
                <div class="verified-area">
                  <h3 class="item-title">
                    <a href="single-listing1.html">Northwest Office Space</a>
                  </h3>
                </div>
                <div class="location-area">
                  <i class="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div class="item-categoery5">
                  <ul>
                    <li>
                      <i class="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i class="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i class="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div class="item-price">
                  $35,000<i>/</i>
                  <span>yr</span>
                </div>
              </div>
            </div>
          </div> */}
					{/* <div class="col-xl-6">
            <div
              class="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="item-img">
                <a href="single-listing1.html">
                  <img src={Blog31} alt="blog" width="220" height="170" />
                </a>
                <div class="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i class="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-content item-content-property">
                <div class="verified-area">
                  <h3 class="item-title">
                    <a href="single-listing1.html">
                      Brand New Shopping Mall Sale
                    </a>
                  </h3>
                </div>
                <div class="location-area">
                  <i class="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div class="item-categoery5">
                  <ul>
                    <li>
                      <i class="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i class="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i class="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div class="item-price">$12,000</div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="item-img">
                <a href="single-listing1.html">
                  <img src={Blog32} alt="blog" width="220" height="170" />
                </a>
                <div class="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i class="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-content item-content-property">
                <div class="verified-area">
                  <h3 class="item-title">
                    <a href="single-listing1.html">
                      Affordable Green Villa House
                    </a>
                  </h3>
                </div>
                <div class="location-area">
                  <i class="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div class="item-categoery5">
                  <ul>
                    <li>
                      <i class="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i class="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i class="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div class="item-price">
                  $17,000<i>/</i>
                  <span>mo</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="item-img">
                <a href="single-listing1.html">
                  <img src={Blog33} alt="blog" width="220" height="170" />
                </a>
                <div class="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i class="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-content item-content-property">
                <div class="verified-area">
                  <h3 class="item-title">
                    <a href="single-listing1.html">
                      Countryside Modern Lake View
                    </a>
                  </h3>
                </div>
                <div class="location-area">
                  <i class="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div class="item-categoery5">
                  <ul>
                    <li>
                      <i class="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i class="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i class="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div class="item-price">
                  $40,000<i>/</i>
                  <span>yr</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div class="item-img">
                <a href="single-listing1.html">
                  <img src={Blog34} alt="blog" width="220" height="170" />
                </a>
                <div class="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i class="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i class="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-content item-content-property">
                <div class="verified-area">
                  <h3 class="item-title">
                    <a href="single-listing1.html">Sky Pool Villa House</a>
                  </h3>
                </div>
                <div class="location-area">
                  <i class="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div class="item-categoery5">
                  <ul>
                    <li>
                      <i class="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i class="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i class="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div class="item-price">$8,000</div>
              </div>
            </div>
          </div> */}
				</div>
				<div class="property-button">
					<a onClick={() => (window.location = "/allListing")} class="item-btn">
						View All Properties
					</a>
				</div>
			</div>
		</section>
	);
};

export default LatestListing;
