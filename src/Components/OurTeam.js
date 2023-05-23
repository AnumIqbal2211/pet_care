import dog from  "../assets/images/dog.png";
import team_one from "../assets/images/team-one.jpg";
import team_two from "../assets/images/team-two.jpg";
import team_three from "../assets/images/team-three.jpg";

function OurTeam() {
  return (
    <div class="content-block-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="section-title text-center">
              <h2>
                <span>our experienced</span> team
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
          <div class="col-lg-4 col-md-6">
            <div class="our-team">
              <div class="team-image">
                <img src={team_one} alt="team-one" />
               
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-info">
                <h3 class="title">Dr. Steven Smith</h3>
                <span class="post">Pain Management</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="our-team">
              <div class="team-image">
                <img src={team_two} alt="team-two" />
                
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-info">
                <h3 class="title">Dr. Alex Blackwell</h3>
                <span class="post">Pet Education</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div class="our-team">
              <div class="team-image">
                <img src={team_three} alt="team-three" />
               
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="team-info">
                <h3 class="title">Dr. Rachael Haynes</h3>
                <span class="post">Surgery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
