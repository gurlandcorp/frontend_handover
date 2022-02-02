import Action1 from "../assets/img/figure/action1.jpg"
const ActionStartSection = () => {
    return (
      <section class="action-wrap1 wow zoomIn" data-wow-delay=".2s">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="action-box1" data-bg-image={Action1}>
                <div class="action-layout">
                  <div class="item-title">
                    <div class="item-icon">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="item-head">
                      <h3>Become an Agent</h3>
                      <p>Agent hen an unknown printer took a galley scramble</p>
                    </div>
                  </div>
                  <div class="call-button">
                    <a href="agency-lists1.html" class="call-btn">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ActionStartSection;