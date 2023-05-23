import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function MainMenu() {
  return (
    <div class="main-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
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
                  </li>{" "}
                  <li class="nav-item">
                    <NavLink className="navbar-item" to="/signin">
                      SignIn
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="navbar-item" to="/signup">
                      SignUp
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="navbar-item" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="navbar-item" to="/appointment">
                      Appointment
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="navbar-item" to="/contactus">
                      Contact Us
                    </NavLink>
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
