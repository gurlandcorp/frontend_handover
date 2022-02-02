import React, { useState } from "react";
import Blog4 from "../assets/img/blog/now.jpg";
import Blog5 from "../assets/img/blog/blog5.jpg";
import Blog6 from "../assets/img/blog/blog6.jpg";
import Blog7 from "../assets/img/blog/blog7.jpg";
import Blog8 from "../assets/img/blog/blog8.jpg";
import Blog9 from "../assets/img/blog/blog9.jpg";
// import PropertyCard from "../Shared/PropertyCard";

const PropertySection = () => {
  // const [images, setImage] = useState([
  //   Blog4,
  //   Blog5,
  //   Blog6,
  //   Blog7,
  //   Blog8,
  //   Blog9,
  // ]);
  return (
    <section class="property-wrap-8">
      <div class="container-fluid px-0">
        <div class="item-heading-center mb-20">
          <span class="section-subtitle">Latest Listings</span>
          <h2 class="section-title">Featured Property For Sale</h2>
          <div class="bg-title-wrap" style={{ display: "block" }}>
            <span class="background-title solid">Properties</span>
          </div>
        </div>
        <div class="product-slider-style-4 owl-carousel owl-theme">
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
            
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" 
                style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Rent</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $15,000/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Office</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >Triple Story House for Rent</a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Sell</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $18,500/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Commercial</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    The Most Luxarious Fitted Sells Properties
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Buy</div>
              </div>
              <div class="rent-price">
                <div class="item-price">$25,000</div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Appartment</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    Brand New Shopping Mall for Sale
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Rent</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $25,000/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Villa</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >Northwest Office Space</a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Rent</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $15,000/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Office</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >Triple Story House for Rent</a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Sell</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $18,500/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Commercial</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    The Most Luxarious Fitted Sells Properties
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Buy</div>
              </div>
              <div class="rent-price">
                <div class="item-price">$25,000</div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a
              //  href="single-listing1.html"
               >Appartment</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    Brand New Shopping Mall for Sale
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Rent</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $25,000/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Villa</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a
                  //  href="single-listing1.html"
                   >Northwest Office Space</a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a 
              // href="single-listing1.html"
              >
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Rent</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $15,000/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Office</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >Triple Story House for Rent</a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a href="single-listing1.html">
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Sell</div>
              </div>
              <div class="rent-price">
                <div class="item-price">
                  $18,500/<span>mo</span>
                </div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Commercial</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    The Most Luxarious Fitted Sells Properties
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
          <div
            class="property-box2 property-box8 wow animated fadeInUp"
            // data-wow-delay=".6s"
          >
            <div class="item-img">
              <a href="single-listing1.html">
                <img src={Blog4} alt="blog" style={{width:"510px",height:"340px"}} />
              </a>
              <div class="item-category-box1">
                <div class="item-category">For Buy</div>
              </div>
              <div class="rent-price">
                <div class="item-price">$25,000</div>
              </div>
              <div class="react-icon">
                <ul>
                  <li>
                    <a
                      // href="favourite.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Favourites"
                    >
                      <i class="flaticon-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="compare.html"
                      // data-bs-toggle="tooltip"
                      // data-bs-placement="top"
                      // title="Compare"
                    >
                      <i class="flaticon-left-and-right-arrows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-category10">
              <a 
              // href="single-listing1.html"
              >Appartment</a>
            </div>
            <div class="item-content">
              <div class="verified-area">
                <h3 class="item-title">
                  <a 
                  // href="single-listing1.html"
                  >
                    Brand New Shopping Mall for Sale
                  </a>
                </h3>
              </div>
              <div class="location-area">
                <i class="flaticon-maps-and-flags"></i>Downey, California
              </div>
              <div class="item-categoery3 item-categoery4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
