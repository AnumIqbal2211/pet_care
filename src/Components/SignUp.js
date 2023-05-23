import React, { useState } from "react";
import logo from "../assets/images/logo.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  function signUp() {
    let item = { name, email, password, confirmpassword };
    console.warn(item);
  }

  return (
    <div class="content-block-area gray-bg">
      <div class="signup-form">
        <div class="logo-two">
          <a href="index.html">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <form
          action="https://templates.envytheme.com/petclinic/default/signup.html"
          method="post"
        >
          <h2>Create Account</h2>
          <p class="lead">It's free and hardly takes more than 30 seconds.</p>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                name="name"
                placeholder="Name"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
              </span>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
              <input
                type="text"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
          </div>
          <div class="form-group">
            <button
              onClick={signUp}  type="submit"
              class="btn btn-primary btn-block btn-lg"
            >
              Sign Up
            </button>
          </div>
          <p class="small text-center">
            By clicking the Sign Up button, you agree to our <br></br>
            <a href="#">Terms &amp; Conditions</a>, and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </form>
        <p class="text-center">
          Already have an account? <a href="signin.html">Login here</a>.
        </p>
      </div>
    </div>
  );
}
export default SignUp;
