import Banner3 from "../assets/img/banner/banner03.jpg";
const PropertyBanner = () => {
  return (
    <section
      class="property-banner-wrap1 parallaxie"
      data-bg-image={Banner3}
      style={{
        background: `url(${Banner3}) no-repeat center center / cover`,
      }}
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12">
            <div class="property-box1 wow slideInUp" data-wow-delay="100">
              <div class="item-subtitle">Let’s Take a Tour</div>
              <h3 class="item-title">
                Search Property Smarter, Quicker & Anywhere
              </h3>
              <div class="play-button">
                <div class="item-icon">
                  <a
                    href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                    class="play-btn"
                  >
                    <span class="play-icon style-1">
                      <i class="fas fa-play"></i>
                    </span>
                    <span class="play-text">Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="property-img wow fadeInUp" data-wow-delay="100">
              <div class="bg-title-wrap" style={{ display: "block" }}>
                <span class="background-title solid">Property For All</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyBanner;
