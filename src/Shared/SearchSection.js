const SearchSection = () => {
  return (
    <div id="header-bottombar" class="header-bottombar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-9 col-lg-9">
            <form action="index4.html" class="map-form">
              <div class="row">
                <div class="col-lg-4 pl-15 pr-0">
                  <div class="control-style">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </div>
                <div class="col-lg-4 pl-15 pr-0">
                  <div class="rld-single-select mt-0">
                    <select
                      class="select single-select mr-0"
                      style={{ display: "none" }}
                    >
                      <option value="1">Property Type</option>
                      <option value="2">Family House</option>
                      <option value="3">Apartment</option>
                      <option value="3">Condo</option>
                    </select>
                    <div
                      class="nice-select select single-select mr-0"
                      tabindex="0"
                    >
                      <span class="current">Property Type</span>
                      <ul class="list">
                        <li data-value="1" class="option selected">
                          Property Type
                        </li>
                        <li data-value="2" class="option">
                          Family House
                        </li>
                        <li data-value="3" class="option">
                          Apartment
                        </li>
                        <li data-value="3" class="option">
                          Condo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 pl-15">
                  <div class="rld-single-select mt-0">
                    <select
                      class="select single-select mr-0"
                      style={{ display: "none" }}
                    >
                      <option value="1">All Cities</option>
                      <option value="2">Los Angeles</option>
                      <option value="3">Chicago</option>
                      <option value="3">Philadelphia</option>
                    </select>
                    <div
                      class="nice-select select single-select mr-0"
                      tabindex="0"
                    >
                      <span class="current">All Cities</span>
                      <ul class="list">
                        <li data-value="1" class="option selected">
                          All Cities
                        </li>
                        <li data-value="2" class="option">
                          Los Angeles
                        </li>
                        <li data-value="3" class="option">
                          Chicago
                        </li>
                        <li data-value="3" class="option">
                          Philadelphia
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xl-3 col-lg-3 d-flex justify-content-end">
            <div class="banner-search-wrap banner-search-wrap-2">
              <div class="rld-main-search rld-main-search2">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="box">
                      <div class="dropdown-filter">
                        <span>
                          <i class="fas fa-sliders-h"></i>
                        </span>
                      </div>
                      <div class="filter-button">
                        <a
                          href="single-listing1.html"
                          class="filter-btn1 search-btn"
                        >
                          <span>Search</span>
                          <i class="fas fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/ End Search Form --> */}
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="testing-explore">
              <div class="explore__form-checkbox-list explore__form-checkbox-list2 full-filter">
                <div class="row">
                  <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                    {/* <!-- Form Property Status --> */}
                    <div class="form-group bed">
                      <label class="item-bedrooms">Bedrooms</label>
                      <div class="nice-select form-control wide" tabindex="0">
                        <span class="current">Any</span>
                        <ul class="list">
                          <li data-value="1" class="option selected ">
                            For Sale
                          </li>
                          <li data-value="2" class="option">
                            For Rent
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ End Form Property Status --> */}
                  </div>
                  <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                    {/* <!-- Form Bedrooms --> */}
                    <div class="form-group bath">
                      <label class="item-bath">Bathrooms</label>
                      <div class="nice-select form-control wide" tabindex="0">
                        <span class="current">Any</span>
                        <ul class="list">
                          <li data-value="1" class="option selected">
                            1
                          </li>
                          <li data-value="2" class="option">
                            2
                          </li>
                          <li data-value="3" class="option">
                            3
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ End Form Bedrooms --> */}
                  </div>
                  <div class="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                    {/* <!-- Form Bathrooms --> */}
                    <div class="form-group garage">
                      <label class="item-garage">Garage</label>
                      <div class="nice-select form-control wide" tabindex="0">
                        <span class="current">Any</span>
                        <ul class="list">
                          <li data-value="1" class="option selected">
                            1
                          </li>
                          <li data-value="2" class="option">
                            2
                          </li>
                          <li data-value="3" class="option">
                            3
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ End Form Bathrooms --> */}
                  </div>
                  {/* <!-- Price Fields --> */}
                  <div class="main-search-field-2 col-12">
                    <div class="row">
                      <div class="col-md-6 pl-0">
                        <div class="price-range-wrapper">
                          <div class="range-box">
                            <div class="price-label">Flat Size:</div>
                            <div
                              id="price-range-filter-3"
                              class="price-range-filter"
                            ></div>
                            <div class="price-filter-wrap d-flex align-items-center">
                              <div class="price-range-select">
                                <div
                                  class="price-range"
                                  id="price-range-min-3"
                                ></div>
                                <div class="price-range">-</div>
                                <div
                                  class="price-range"
                                  id="price-range-max-3"
                                ></div>
                                <div class="price-range range-title">sft</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 pl-0">
                        <div class="price-range-wrapper">
                          <div class="range-box">
                            <div class="price-label">Distance:</div>
                            <div
                              id="price-range-filter-2"
                              class="price-range-filter"
                            ></div>
                            <div class="price-filter-wrap d-flex align-items-center">
                              <div class="price-range-select">
                                <div
                                  class="price-range"
                                  id="price-range-min-2"
                                ></div>
                                <div class="price-range">-</div>
                                <div
                                  class="price-range"
                                  id="price-range-max-2"
                                ></div>
                                <div class="price-range range-title">km</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                      <h4 class="text-dark">Amenities</h4>
                      <ul class="no-ul-list third-row">
                        <li>
                          <input
                            id="a-1"
                            class="checkbox-custom"
                            name="a-1"
                            type="checkbox"
                          />
                          <label for="a-1" class="checkbox-custom-label">
                            Air Condition
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-2"
                            class="checkbox-custom"
                            name="a-2"
                            type="checkbox"
                          />
                          <label for="a-2" class="checkbox-custom-label">
                            Bedding
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-3"
                            class="checkbox-custom"
                            name="a-3"
                            type="checkbox"
                          />
                          <label for="a-3" class="checkbox-custom-label">
                            Heating
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-4"
                            class="checkbox-custom"
                            name="a-4"
                            type="checkbox"
                          />
                          <label for="a-4" class="checkbox-custom-label">
                            Internet
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-5"
                            class="checkbox-custom"
                            name="a-5"
                            type="checkbox"
                          />
                          <label for="a-5" class="checkbox-custom-label">
                            Microwave
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-6"
                            class="checkbox-custom"
                            name="a-6"
                            type="checkbox"
                          />
                          <label for="a-6" class="checkbox-custom-label">
                            Smoking Allow
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-7"
                            class="checkbox-custom"
                            name="a-7"
                            type="checkbox"
                          />
                          <label for="a-7" class="checkbox-custom-label">
                            Terrace
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-8"
                            class="checkbox-custom"
                            name="a-8"
                            type="checkbox"
                          />
                          <label for="a-8" class="checkbox-custom-label">
                            Balcony
                          </label>
                        </li>
                        <li>
                          <input
                            id="a-9"
                            class="checkbox-custom"
                            name="a-9"
                            type="checkbox"
                          />
                          <label for="a-9" class="checkbox-custom-label">
                            Balcony
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="filter-button">
                    <a href="index4.html" class="filter-btn1">
                      Apply Filter
                    </a>
                    <a href="index4.html" class="filter-btn1 reset-btn">
                      Reset Filter<i class="fas fa-redo-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SearchSection