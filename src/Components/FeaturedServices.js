import servicesImage from "../ImportImages/services-img-one.jpg";
import dogImage from "../assets/images/dog.png";
import pet_1 from "../assets/images/Pet-1.png";
import pet_2 from "../assets/images/Pet2.png";
import pet_3 from "../assets/images/Pet-3.png";

function FeaturedServices() {
  return (
    <div class="content-block-area gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="section-title text-center">
              <h2>
                <span>Our featured</span> services
              </h2>
              <div class="car-icon">
                <img src={dogImage} alt="car" />
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="featured-boxed text-center">
              <div class="icon-boxed">
                <img src={pet_1} alt="dog-1" />
              </div>
              <h3>Day Camp</h3>
              <div class="upper-line"></div>
              <div class="bottom-line"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="featured-boxed text-center">
              <div class="icon-boxed">
                <img src={pet_2} alt="dog-1" />
              </div>
              <h3>Training</h3>
              <div class="upper-line"></div>
              <div class="bottom-line"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="featured-boxed text-center">
              <div class="icon-boxed">
                <img src={pet_3} alt="dog-1" />
              </div>
              <h3>Grooming</h3>
              <div class="upper-line"></div>
              <div class="bottom-line"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="separator-line"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="services-item">
              <div class="box">
                <img
                  src="../assets/images/services-images-one.jpg"
                  alt="Image"
                />
                <h3>Dog Walking</h3>
                <div class="box-content">
                  <h3 class="title">Dog Walking</h3>
                  <span class="post">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                  <ul class="icon">
                    <li>
                      <a class="singleImage" href="">
                        <img src={servicesImage}></img>
                        <i class="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-service.html">
                        <i class="fa fa-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-3 col-md-6">
                    <div class="services-item">
                        <div class="box">
                            <img src="../assets/images/services-images-two.jpg" alt="Image"/>
                            <h3>Pet Sitting</h3>
                            <div class="box-content">
                                <h3 class="title">Pet Sitting</h3>
                                <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <ul class="icon">
                                    <li><a class="singleImage" href="../assets/images/services-images-two.jpg"><i class="fa fa-search"></i></a></li>
                                    <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="services-item">
                        <div class="box">
                            <img src="../assets/images/services-images-three.jpg" alt="Image"/>
                            <h3>Overnight Care</h3>
                            <div class="box-content">
                                <h3 class="title">Overnight Care</h3>
                                <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <ul class="icon">
                                    <li><img class="singleImage" href="../assets/images/services-images-three.jpg"><i class="fa fa-search"></i></img></li>
                                    <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="services-item">
                        <div class="box">
                            <img src="../assets/images/services-images-four.jpg" alt="Image"/>
                            <h3>HEALTH & NUTRITION</h3>
                            <div class="box-content">
                                <h3 class="title">HEALTH & NUTRITION</h3>
                                <span class="post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <ul class="icon">
                                    <li><img class="singleImage" href="../assets/images/services-images-four.jpg"><i class="fa fa-search"></i></img></li>
                                    <li><a href="single-service.html"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}

          <div class="col-lg-12 text-center">
            <a href="services.html" class="btn theme-btn m-t-50">
              view all services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedServices;
