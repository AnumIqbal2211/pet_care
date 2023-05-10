function MainMenu() {
  return (
    <div class="main-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <a href="index.html">
                <img src="../assets/images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>

          <div class="col-lg-9">
            <nav class="navbar navbar-expand-lg navbar-light">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu ms-auto">
                  <li class="nav-item dropdown active">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home<i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li class="active">
                        <a class="dropdown-item" href="index.html">
                          Home default
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="testimonials.html">
                          testimonials
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="our-team.html">
                          our team
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="pricing.html">
                          Pricing Table
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="signup.html">
                          Sign up
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="signin.html">
                          Sign in
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about-us.html">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="single-service.html">
                          BEHAVIOR COUNSELING
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="single-service-bereavement-counseling.html"
                        >
                          BEREAVEMENT COUNSELING
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="single-service-general-surgery.html"
                        >
                          GENERAL SURGERY
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="single-service-consultations.html"
                        >
                          CONSULTATIONS
                        </a>
                      </li>

                      <li>
                        <a
                          class="dropdown-item"
                          href="single-service-dagnostic-procedures.html"
                        >
                          DIABETES MANAGEMENT
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="single-service-fecal-testing.html"
                        >
                          FECAL TESTING
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gallery <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="gallery-v1.html">
                          Gallery V.1
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="appointment.html">
                      Appointment
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li class="active">
                        <a
                          class="dropdown-item"
                          href="single-blog-left-sidebar.html"
                        >
                          Left Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact-us.html">
                      Contact
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#search">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainMenu;
