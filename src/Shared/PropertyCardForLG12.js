const PropertyCardForLG12 = (props) => {
  return (
    <div class="col-lg-12">
      <div
        class="property-box2 property-box4 wow animated fadeInUp"
        data-wow-delay=".6s"
      >
        <div class="item-img">
          <a href="single-listing1.html">
            <img src={props.img} alt="blog" width="250" height="200" />
          </a>
          <div class="item-category-box1">
            <div class="item-category">For Rent</div>
          </div>
        </div>
        <div class="item-content item-content-property">
          <div class="item-category10">
            <a href="single-listing1.html">Appartment</a>
          </div>
          <div class="react-icon react-icon-2">
            <ul>
              <li>
                <a
                  href="favourite.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Favourites"
                >
                  <i class="flaticon-heart"></i>
                </a>
              </li>
              <li>
                <a
                  href="compare.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Compare"
                >
                  <i class="flaticon-left-and-right-arrows"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="verified-area">
            <h3 class="item-title">
              <a href="single-listing1.html">Family House For Rent</a>
            </h3>
          </div>
          <div class="location-area">
            <i class="flaticon-maps-and-flags"></i>Downey, California
          </div>
          <div class="item-categoery3">
            <ul>
              <li>
                <i class="flaticon-bed"></i>Beds: 03
              </li>
              <li>
                <i class="flaticon-shower"></i>Baths: 02
              </li>
              <li>
                <i class="flaticon-two-overlapping-square"></i>
                931 Sqft
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardForLG12;
