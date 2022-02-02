import Shape26 from "../assets/img/figure/shape026.png";
import Shape27 from "../assets/img/figure/shape27.png";
import Shape28 from "../assets/img/figure/shape28.png";
import Shape29 from "../assets/img/about/shape29.png";
import About1 from "../assets/img/about/about1.png";
import About13 from "../assets/img/about/about13.jpg";
import About14 from "../assets/img/about/about14.jpg";
import About15 from "../assets/img/about/about15.jpg";

const AboutSection = () => {
  return (
    <section class="about-wrap-4 motion-effects-wrap">
      <div class="motion-effects8">
        <img src={Shape26} alt="shape" width="134" height="137" />
      </div>
      <div class="motion-effects9">
        <img src={Shape27} alt="shape" width="105" height="103" />
      </div>
      <div class="motion-effects10">
        <img src={Shape28} alt="shape" width="90" height="18" />
      </div>
      <div class="motion-effects11">
        <img src={Shape29} alt="shape" width="460" height="460" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="about-box6 wow fadeInUp" data-wow-delay=".2s">
              <div class="item-heading-left">
                <span class="section-subtitle">Who We Are</span>
                <h2 class="section-title">
                  We Provide You The Best Service Of Real Estate Industries
                </h2>
                <div class="bg-title-wrap" style={{ display: "block" }}>
                  <span class="background-title solid">About Us</span>
                </div>
              </div>
              <p>
                Building when an unknown printer took a galley of type and scram
                bled it to make a type specimen book. It has survived not only
                five centuries, but also the leape.
              </p>
              <p>
                when an unknown printer took a galley of type andetry scram bled
                it to make a type specimen bookhas survived not only
                centuriesalwith the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently.
              </p>
              <div class="about-button">
                <a href="contact.html" class="item-btn">
                  Contact With Us
                </a>
              </div>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-6">
            <div class="about-box7">
              <div class="row">
                <div class="col-lg-12">
                  <div class="item-img">
                    <img src={About13} alt="about" height="270" width="530" />
                  </div>
                  <div class="row justify-content-end">
                    <div class="col-xl-8">
                      <div class="about-img-style-3">
                        <img
                          src={About14}
                          alt="about"
                          height="315"
                          width="363"
                        />
                      </div>
                    </div>
                    <div class="col-xl-4">
                      <div class="about-img-style-4">
                        <img
                          src={About15}
                          alt="about"
                          height="315"
                          width="280"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-img-style-5">
                <div class="item-big-img">
                  <img src={About1} alt="about" width="425" height="654" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
