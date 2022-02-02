import Banner2 from "../assets/img/banner/one.jpg";

const Banner = () => {
  return (
    <section
      class="main-banner-wrap1 main-banner-wrap4 parallaxie"
      data-bg-image={Banner2}
      style={{ background: `url(${Banner2})` }}
    >
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-xl-5 col-sm-12">
            <div class="main-banner-box4 wow slideInUp" data-wow-delay=".3s">
              <div class="banner-style-1">
                <div class="item-category-box1">
                  <div class="item-category">For Rent</div>
                </div>
                <div class="item-price">
                  $15,000/<span>mo</span>
                </div>
              </div>
              <h3 class="item-title">Furnished Luxary Apartment</h3>
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

export default Banner;
