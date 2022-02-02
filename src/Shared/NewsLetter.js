import Shape13 from "../assets/img/figure/shape13.png";
const NewsLetter = () => {
  return (
    <section class="newsletter-wrap1">
      <div class="shape-img1">
        <img src={Shape13} alt="figure" width="356" height="130" />
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="newsletter-layout1">
              <div class="item-heading">
                <h2 class="item-title">Sign up for newsletter </h2>
                <h3 class="item-subtitle">Get latest news and update</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="newsletter-form">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter e-mail addess"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
