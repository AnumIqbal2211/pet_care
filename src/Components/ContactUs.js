import Header from "./Header";
import MainMenu from "./MainMenu";
import Footer from "./Footer";

function ContactUs() {
  return (
    <div>
      <Header />
      <MainMenu />
      <div class="content-block-area contact-us">
        <div class="container">
          <h2 class="area-title">Contact Info</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="media">
                <div class="media-left">
                  <i class="ion-ios-location-outline"></i>
                </div>
                <div class="media-body">
                  <h4>1828 Johns Drive Glenview, IL 60025</h4>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="media">
                <div class="media-left">
                  <i class="ion-ios-telephone-outline"></i>
                </div>
                <div class="media-body">
                  <h4>
                    (224) 228-8475 <br></br> (333) 324-423455
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="media">
                <div class="media-left">
                  <i class="ion-ios-email-outline"></i>
                </div>
                <div class="media-body">
                  <h4>
                    <a
                      href="https://templates.envytheme.com/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="61121411110e131521110415020d080f08024f020e0c"
                    >
                      pet.clinic@gmail.com
                    </a>{" "}
                    <br></br>{" "}
                    <a
                      href="https://templates.envytheme.com/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="5d3c393034331d3e3c2f2e382f2b343e38733e3230"
                    >
                      pet.info@gmail.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-area">
            <h2 class="area-title">Get In Touch</h2>
            <div class="row">
              <div class="col-md-5 col-lg-4">
                <div class="contact-img-bg"></div>
              </div>
              <div class="col-md-7 col-lg-8">
                <form
                  id="contatc_form"
                  method="POST"
                  action="https://templates.envytheme.com/petclinic/default/assets/include/sendmail.php"
                  name="myform"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="contact_name"
                          name="name"
                          placeholder="Name"
                          required=""
                          data-parsley-minlength="4"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="contact_email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="sub"
                          id="contact_subject"
                          placeholder="Subject"
                          required=""
                          data-parsley-minlength="4"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="phone"
                          id="contact_phone"
                          placeholder="Phone Number"
                          data-parsley-type="integer"
                          data-parsley-minlength="6"
                          data-parsley-type-message="Only numbers"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      id="contact_message"
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                      data-parsley-trigger="keyup"
                      data-parsley-minlength="10"
                      data-parsley-minlength-message="Come on! You need to enter at least a 10 character comment.."
                    ></textarea>
                  </div>
                  <div
                    class="g-recaptcha"
                    data-sitekey="6LeMly8UAAAAAG8FJH-xbRYPyV825xNA3KzwWtcr"
                  ></div>
                  <div id="contact_send_status"></div>
                  <button type="submit" class="btn theme-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactUs;
