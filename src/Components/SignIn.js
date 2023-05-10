import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    // Sign In Form Area
    <div className="content-block-area gray-bg">
      <div className="signup-form signin-form">
        <div className="logo-two">
          <a href="index.html">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
        </div>

        <form
          action="https://templates.envytheme.com/petclinic/default/signin.html"
          method="post"
        >
          <h2>Sign In Account</h2>
          <p className="lead">
            It's free and hardly takes more than 30 seconds.
          </p>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              /*onClick= {signIn} */ type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              Sign In
            </button>
          </div>
          <p className="small text-center">
            By clicking the Sign In button, you agree to our <br></br>
            <a href="#">Terms &amp; Conditions</a>, and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </form>
        <p className="text-center">
          You have not an account? <a href="signup.html">SignUp here</a>.
        </p>
      </div>
    </div>
  );
}
export default SignIn;
