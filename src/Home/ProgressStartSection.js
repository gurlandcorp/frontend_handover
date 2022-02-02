import Counter from "../assets/img/figure/counter-bg-2.png";
const ProgressStartSection = () => {
  return (
    <section class="progress-bar-wrap1 counter-appear">
      <div class="shape-img1 wow fadeInLeft" data-wow-delay=".4s">
        <img src={Counter} alt="progress" />
      </div>
      <div class="container">
        <div class="item-heading-bar">
          <h2 class="item-title">Real Estate by the Numbers</h2>
          <p>In 2022 things look like this percentage</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="progress-box1 wow zoomIn" data-wow-delay=".2s">
              <div class="progress-layout">
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="progress-content">
                  <div class="item-parcent">
                    <span class="counterUp" data-counter="80">
                      80
                    </span>
                    %
                  </div>
                  <label>Completed Property</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="progress-box1 wow zoomIn" data-wow-delay=".3s">
              <div class="progress-layout">
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="progress-content">
                  <div class="item-parcent">
                    <span class="counterUp" data-counter="27">
                      27
                    </span>
                    %
                  </div>
                  <label>Property Taxes</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="progress-box1 wow zoomIn" data-wow-delay=".4s">
              <div class="progress-layout">
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="progress-content">
                  <div class="item-parcent">
                    <span class="counterUp" data-counter="99">
                      99
                    </span>
                    %
                  </div>
                  <label>Satisfied Customer</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="progress-box1 wow zoomIn" data-wow-delay=".2s">
              <div class="progress-layout">
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="process-circle"></div>
                <div class="progress-content">
                  <div class="item-parcent">
                    <span class="counterUp" data-counter="55">
                      55
                    </span>
                    %
                  </div>
                  <label>Home Ownership</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressStartSection;
