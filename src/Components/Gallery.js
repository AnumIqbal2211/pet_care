import gallery_item_one from "../../src/assets/images/gallery-item-1.jpg";
import gallery_item_two from "../../src/assets/images/gallery-item-2.jpg";
import gallery_item_three from "../../src/assets/images/gallery-item-3.jpg";
import gallery_item_four from "../../src/assets/images/gallery-item-4.jpg";
import gallery_item_five from "../../src/assets/images/gallery-item-5.jpg";
import gallery_item_six from "../../src/assets/images/gallery-item-6.jpg";
import dogImage from "../assets/images/dog.png";
import instagram from "../assets/images/instagram.jpg";
import instagram_1 from "../assets/images/instagram-1.jpg";
import instagram_5 from "../assets/images/instagram-5.jpg";
import instagram_3 from "../assets/images/instagram-3.jpg";
import instagram_4 from "../assets/images/instagram-4.jpg";
import instagram_6 from "../assets/images/instagram-6.jpg";
import instagram_8 from "../assets/images/instagram-8.jpg";
import instagram_7 from "../assets/images/instagram-7.jpg";
import instagram_9 from "../assets/images/instagram-9.jpg";
import instagram_10 from "../assets/images/instagram-10.jpg";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Footer from "./Footer";

function Gallery() {
  return (
    <div>
      <Header />
      <MainMenu />
      <div className="content-block-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_one} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-1.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Behavior Counseling</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_two} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-2.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Bereavement Counseling</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_three} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-3.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">General Surgery</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_four} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-4.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Consultations</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_five} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-5.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Cremation Services</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 gallery-boxed"
              style={{ display: "block" }}
            >
              <div className="gallery-item-one">
                <div className="pic">
                  <img src={gallery_item_six} alt="Image Description" />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-6.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Diabetes Management</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-1.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-1.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Diagnostic Procedures</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-2.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-2.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">In-House Pharmacy</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-3.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-3.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Internal Medicine</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-4.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-4.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Intestinal Blockage</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-5.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-5.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Fecal Testing</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 gallery-boxed">
              <div className="gallery-item-one">
                <div className="pic">
                  <img
                    src="assets/images/gallery-item-6.jpg"
                    alt="Image Description"
                  />
                  <ul className="lightbox-link">
                    <li>
                      <a
                        className="lightbox"
                        href="assets/images/gallery-item-6.jpg"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gallery-content">
                  <h3 className="title">Orthopedic Services</h3>
                  <span className="post">Lorem Ipsum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-12 text-center">
              <a href="#" id="loadmore" className="btn theme-btn">
                view more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="instagram-block-area">
        <div className="section-title text-center">
          <h2>
            <span>Instagram</span>
          </h2>
          <div className="car-icon">
            <img src={dogImage} alt="car" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="swiper-container swiper3 instagram-pic">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_1} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_5} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_3} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_4} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_6} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_8} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_7} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_9} alt="Image" />
              </a>
            </div>
            <div className="swiper-slide">
              <a className="insta-lightbox" href="#">
                <img src={instagram_10} alt="Image" />
              </a>
            </div>
          </div>

          <div className="swiper-pagination swiper-pagination3"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Gallery;
