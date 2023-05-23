import { Link } from "react-router-dom";

function HomePageSlider() {
  return (
    <div class="homepage-slides-wrapper">
      {/* <!-- Slider main container --> */}
      <div class="swiper-container swiper1">
        {/* <!-- Additional required wrapper --> */}
        <div class="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div class="swiper-slide slide-bg-1">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6">
                      <h1>Offering high-quality care for your pets!</h1>
                      <p>Our friendly and experienced staff welcomes you!</p>
                      <Link to="/appointment" className="btn theme-btn">
                        make an appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide slide-bg-2">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6">
                      <h1>We treat your pets like our own ones!</h1>
                      <p>Helping pets live life to the fullest.</p>
                      <a class="btn theme-btn" href="appointment.html">
                        make an appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide slide-bg-3">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6">
                      <h1>We really care about your pet's welfare!</h1>
                      <p>
                        Call to learn more about the services we provide for
                        your pet.
                      </p>
                      <a class="btn theme-btn" href="appointment.html">
                        make an appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- If we need pagination --> */}
        <div class="swiper-pagination swiper-pagination1"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
}
export default HomePageSlider;
