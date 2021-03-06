import { Link } from "react-router-dom";
import Location10 from "../assets/img/toparea/location10.jpg";
import Location11 from "../assets/img/toparea/location11.jpg";
import Location12 from "../assets/img/toparea/location12.jpg";
import Location13 from "../assets/img/toparea/location13.jpg";
import Location14 from "../assets/img/toparea/location14.jpg";
import Location15 from "../assets/img/toparea/location15.jpg";

const LocationSection = () => {
  return (
    <section className="location-wrap1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="item-heading-left">
              <span className="section-subtitle">Top Areas</span>
              <h2 className="section-title">Find Your Neighborhood</h2>
              <div className="bg-title-wrap" style={{ display: "block" }}>
                <span className="background-title solid">Locations</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="heading-button">
              <Link to={'/properties'} className="heading-btn item-btn-2">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="location-box3 wow zoomIn" data-wow-delay=".2s">
                  <div className="item-img">
                    <a href="single-listing1">
                      <img
                        src={Location10}
                        alt="location"
                        width="520"
                        height="440"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="content-body">
                      <div className="item-category">02 properties</div>
                      <div className="item-title">
                        <h3>
                          <a href="single-listing2">Melbourne</a>
                        </h3>
                      </div>
                    </div>
                    <div className="location-button">
                      <a href="single-listing3" className="location-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="location-box3 wow zoomIn" data-wow-delay=".2s">
                  <div className="item-img">
                    <a href="single-listing1">
                      <img
                        src={Location11}
                        alt="location"
                        width="520"
                        height="440"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="content-body">
                      <div className="item-category">02 properties</div>
                      <div className="item-title">
                        <h3>
                          <a href="single-listing2">Kansas</a>
                        </h3>
                      </div>
                    </div>
                    <div className="location-button">
                      <a href="single-listing3" className="location-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="location-box3 wow zoomIn" data-wow-delay=".2s">
              <div className="item-img">
                <a href="single-listing1">
                  <img
                    src={Location12}
                    alt="location"
                    width="690"
                    height="280"
                  />
                </a>
              </div>
              <div className="item-content">
                <div className="content-body">
                  <div className="item-category">02 properties</div>
                  <div className="item-title">
                    <h3>
                      <a href="single-listing2">San Francisco</a>
                    </h3>
                  </div>
                </div>
                <div className="location-button">
                  <a href="single-listing3" className="location-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="location-box3 wow zoomIn" data-wow-delay=".3s">
              <div className="item-img">
                <a href="single-listing1">
                  <img
                    src={Location13}
                    alt="location"
                    width="690"
                    height="280"
                  />
                </a>
              </div>
              <div className="item-content">
                <div className="content-body">
                  <div className="item-category">02 properties</div>
                  <div className="item-title">
                    <h3>
                      <a href="single-listing2">Albania</a>
                    </h3>
                  </div>
                </div>
                <div className="location-button">
                  <a href="single-listing3" className="location-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="location-box3 wow zoomIn" data-wow-delay=".2s">
                  <div className="item-img">
                    <a href="single-listing1">
                      <img
                        src={Location14}
                        alt="location"
                        width="520"
                        height="440"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="content-body">
                      <div className="item-category">02 properties</div>
                      <div className="item-title">
                        <h3>
                          <a href="single-listing2">New York</a>
                        </h3>
                      </div>
                    </div>
                    <div className="location-button">
                      <a href="single-listing3" className="location-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="location-box3 wow zoomIn" data-wow-delay=".2s">
                  <div className="item-img">
                    <a href="single-listing1">
                      <img
                        src={Location10}
                        alt="location"
                        width="520"
                        height="440"
                      />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="content-body">
                      <div className="item-category">02 properties</div>
                      <div className="item-title">
                        <h3>
                          <a href="single-listing2">Kansas</a>
                        </h3>
                      </div>
                    </div>
                    <div className="location-button">
                      <a href="single-listing3" className="location-btn">
                        <i className="fas fa-arrow-right"></i>
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

export default LocationSection;
