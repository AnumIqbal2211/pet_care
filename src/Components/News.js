import dog from "../assets/images/dog.png";
import item_one from "../assets/images/blog-item-one.jpg";
import item_two from "../assets/images/blog-item-two.jpg";
import item_three from "../assets/images/blog-item-three.jpg";

import test_1 from "../assets/images/test-1.jpg";
import test_2 from "../assets/images/test-2.jpg";
import test_3 from "../assets/images/test-3.jpg";

function News() {
  return (
    <div class="content-block-area gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="section-title text-center">
              <h2>
                <span>recent</span> news
              </h2>
              <div class="car-icon">
                <img src={dog} alt="car" />
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
            <div class="single-blog-item">
              <a href="#" class="zoomin">
                <img src={item_one} alt="Image Description" />
              </a>
              <div class="blog-item-info">
                <span class="blog-date">August 20, 2021</span>{" "}
                <div class="separator">|</div>
                <a class="blog-tags red" href="#">
                  <i class="fa fa-tag"></i> Day Camp
                </a>
                <a href="#">
                  <h3>Blog Title Goes to Here</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <div class="row">
                  <div class="col-7">
                    <div class="blog-item-profile">
                      <img src={test_1} alt="Image description" />{" "}
                      <a href="#">anika rimjim</a>
                    </div>
                  </div>
                  <div class="col-5 text-end">
                    <div class="blog-item-c-v-info">
                      <span>
                        <a href="#">
                          <i class="fa fa-comments-o"> 25</i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa fa-eye"> 520</i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="single-blog-item">
              <a href="#" class="zoomin">
                <img src={item_two} alt="Image Description" />
              </a>
              <div class="blog-item-info">
                <span class="blog-date">August 20, 2021</span>{" "}
                <div class="separator">|</div>
                <a class="blog-tags green" href="#">
                  <i class="fa fa-tag"></i> Grooming
                </a>
                <a href="#">
                  <h3>Blog Title Goes to Here</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <div class="row">
                  <div class="col-7">
                    <div class="blog-item-profile">
                      <img src={test_2} alt="Image description" />{" "}
                      <a href="#">anika rimjim</a>
                    </div>
                  </div>
                  <div class="col-5 text-end">
                    <div class="blog-item-c-v-info">
                      <span>
                        <a href="#">
                          <i class="fa fa-comments-o"> 25</i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa fa-eye"> 520</i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="single-blog-item">
              <a href="#" class="zoomin">
                <img src={item_three} alt="Image Description" />
              </a>
              <div class="blog-item-info">
                <span class="blog-date">August 20, 2021</span>{" "}
                <div class="separator">|</div>
                <a class="blog-tags blue" href="#">
                  <i class="fa fa-tag"></i> Training
                </a>
                <a href="#">
                  <h3>Blog Title Goes to Here</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </p>
                <div class="row">
                  <div class="col-7">
                    <div class="blog-item-profile">
                      <img src={test_3} alt="Image description" />{" "}
                      <a href="#">anika rimjim</a>
                    </div>
                  </div>
                  <div class="col-5 text-end">
                    <div class="blog-item-c-v-info">
                      <span>
                        <a href="#">
                          <i class="fa fa-comments-o"> 25</i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa fa-eye"> 520</i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
