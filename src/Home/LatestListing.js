import React, { useState, useEffect } from "react";
import Blog29 from "../assets/img/blog/blog29.jpg";
import Blog30 from "../assets/img/blog/blog30.jpg";
import Blog31 from "../assets/img/blog/blog31.jpg";
import Blog32 from "../assets/img/blog/blog32.jpg";
import Blog33 from "../assets/img/blog/blog33.jpg";
import Blog34 from "../assets/img/blog/blog34.jpg";
import api from "../services/api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LatestListing = () => {
	const history = useNavigate();
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(" https://handoverapi.herokuapp.com/property/sort/desc")
			.then(function (response) {
				// handle success
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
		<section className="property-wrap-6">
			<div className="container">
				<div className="item-heading-center mb-20">
					<span className="section-subtitle">Latest Listings</span>
					<h2 className="section-title">Featured Property For Sale</h2>
					<div className="bg-title-wrap" style={{ display: "block" }}>
						<span className="background-title solid">Properties</span>
					</div>
				</div>
				<div className="row">
					{data.slice(0, 4).map((a, index) => {
						return (
							<div className="col-xl-6" key={index}>
								<div
									className="property-box2 property-box5 wow animated fadeInUp"
									data-wow-delay=".6s"
								>
									<div className="item-img">
										<Link to={'/detailpage'} 
                    // onClick={() => {
                    //   localStorage.setItem('propertyId',a._id)
                    //   history("/detailpage", { state: { propertyId:a } });
                    // }}
                    >
											<img
												src={a.images[0]}
												alt="blog"
												style={{ width: "220px", height: "170px" }}
											/>
										</Link>
										<div className="react-icon">
											<ul>
												<li>
													<a
														// href="favourite.html"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title="Favourites"
													>
														<i className="flaticon-heart"></i>
													</a>
												</li>
												<li>
													<a
														// href="compare.html"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														title="Compare"
													>
														<i className="flaticon-left-and-right-arrows"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="item-content item-content-property">
										<div className="verified-area">
											<h3 className="item-title">
												<a 
                        // href="single-listing1.html"
                        >{a.propertyTitle}</a>
											</h3>
										</div>
										<div className="location-area">
											<i className="flaticon-maps-and-flags"></i>
											{a.location.city}
											{/* Downey, California */}
										</div>
										<div className="item-categoery5">
											<ul>
												<li>
													<i className="flaticon-bed"></i>Beds: {a.bedrooms}
												</li>
												<li>
													<i className="flaticon-shower"></i>Baths: {a.bathrooms}
												</li>
												<li>
													<i className="flaticon-two-overlapping-square"></i>
													{a.area}
													Sqft
												</li>
											</ul>
										</div>
										<div className="item-price">
											AED {a.priceDemand}
											{/* <i>/</i>
											<span>mo</span> */}
										</div>
									</div>
								</div>
							</div>
						);
					})}
					{/* <div className="col-xl-6">
            <div
              className="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">
                <a href="single-listing1.html">
                  <img src={Blog30} alt="blog" width="220" height="170" />
                </a>
                <div className="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item-content item-content-property">
                <div className="verified-area">
                  <h3 className="item-title">
                    <a href="single-listing1.html">Northwest Office Space</a>
                  </h3>
                </div>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div className="item-categoery5">
                  <ul>
                    <li>
                      <i className="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i className="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i className="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  $35,000<i>/</i>
                  <span>yr</span>
                </div>
              </div>
            </div>
          </div> */}
					{/* <div className="col-xl-6">
            <div
              className="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">
                <a href="single-listing1.html">
                  <img src={Blog31} alt="blog" width="220" height="170" />
                </a>
                <div className="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item-content item-content-property">
                <div className="verified-area">
                  <h3 className="item-title">
                    <a href="single-listing1.html">
                      Brand New Shopping Mall Sale
                    </a>
                  </h3>
                </div>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div className="item-categoery5">
                  <ul>
                    <li>
                      <i className="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i className="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i className="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div className="item-price">$12,000</div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">
                <a href="single-listing1.html">
                  <img src={Blog32} alt="blog" width="220" height="170" />
                </a>
                <div className="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item-content item-content-property">
                <div className="verified-area">
                  <h3 className="item-title">
                    <a href="single-listing1.html">
                      Affordable Green Villa House
                    </a>
                  </h3>
                </div>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div className="item-categoery5">
                  <ul>
                    <li>
                      <i className="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i className="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i className="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  $17,000<i>/</i>
                  <span>mo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">
                <a href="single-listing1.html">
                  <img src={Blog33} alt="blog" width="220" height="170" />
                </a>
                <div className="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item-content item-content-property">
                <div className="verified-area">
                  <h3 className="item-title">
                    <a href="single-listing1.html">
                      Countryside Modern Lake View
                    </a>
                  </h3>
                </div>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div className="item-categoery5">
                  <ul>
                    <li>
                      <i className="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i className="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i className="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  $40,000<i>/</i>
                  <span>yr</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="property-box2 property-box5 wow animated fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">
                <a href="single-listing1.html">
                  <img src={Blog34} alt="blog" width="220" height="170" />
                </a>
                <div className="react-icon">
                  <ul>
                    <li>
                      <a
                        href="favourite.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Favourites"
                      >
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="flaticon-left-and-right-arrows"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item-content item-content-property">
                <div className="verified-area">
                  <h3 className="item-title">
                    <a href="single-listing1.html">Sky Pool Villa House</a>
                  </h3>
                </div>
                <div className="location-area">
                  <i className="flaticon-maps-and-flags"></i>Downey, California
                </div>
                <div className="item-categoery5">
                  <ul>
                    <li>
                      <i className="flaticon-bed"></i>Beds: 03
                    </li>
                    <li>
                      <i className="flaticon-shower"></i>Baths: 02
                    </li>
                    <li>
                      <i className="flaticon-two-overlapping-square"></i>931 Sqft
                    </li>
                  </ul>
                </div>
                <div className="item-price">$8,000</div>
              </div>
            </div>
          </div> */}
				</div>
				<div className="property-button">
					<a onClick={() => (window.location = "/allListing")} className="item-btn">
						View All Properties
					</a>
				</div>
			</div>
		</section>
	);
};

export default LatestListing;
