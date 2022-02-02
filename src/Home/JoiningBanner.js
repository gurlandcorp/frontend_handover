import Video from "../assets/img/svg/video-bg-2.svg";
import Banner1 from "../assets/img/banner/banner01.png";
import Shape3 from "../assets/img/figure/shape3.png";
import Shape4 from "../assets/img/figure/shape4.png";
import Shape5 from "../assets/img/figure/shape5.png";

const JoiningBanner = () => {
  return (
    <section
      class="banner-collection1 motion-effects-wrap"
      data-wow-delay=".2s"
    >
      <div class="shape-img1">
        <img src={Video} alt="figure" height="149" width="230" />
      </div>
      <div class="shape-img2">
        <img src={Video} alt="figure" height="149" width="230" />
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-7">
            <div class="banner-box1">
              <div class="item-img">
                <img
                  src={Banner1}
                  alt="banner"
                  height="252"
                  width="169"
                  class="img-bg-space"
                />
                <div class="motion-effects3">
                  {/* <img src={Shape3} alt="shape" height="113" width="113" /> */}
                </div>
                <div class="motion-effects4">
                  {/* <img src={Shape4} alt="shape" height="157" width="154" /> */}
                </div>
                <div class="motion-effects5">
                  {/* <img src={Shape5} alt="shape" height="91" width="102" /> */}
                </div>
              </div>
              <div class="item-content">
                <h2 class="heading-title">Become a Real Estate Seller</h2>
                <p>
                  We only work with the best companies around the globe to
                  survey
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5">
            <div class="banner-button">
              <a href="agency-lists1.html" class="banner-btn">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoiningBanner;
