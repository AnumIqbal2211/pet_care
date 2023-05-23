import React, { useState } from "react";
import logo from "../assets/images/logo.png";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };

    fetch("https://www.boredapi.com/api/activity", {}).then((response) =>
      console.log(response.json())
    );
  }

  // function PUT() {
  //   const element = document.querySelector("#put-request .date-updated");
  //   const requestOptions = {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: "Fetch PUT Request Example" }),
  //   };
  //   fetch("https://api.publicapis.org/entries", requestOptions).then(
  //     (response) => response.json()
  //   );
  // }

  // function POST() {
  //   async function componentDidMount() {
  //     const response = await fetch("https://catfact.ninja/fact");
  //     const data = await response.json();
  //   }
  // }

  // function GET() {
  //   async function componentDidMount() {
  //     const response = await fetch( "https://api.coindesk.com/v1/bpi/currentprice.json" );
  //     const data = await response.json();
      
  //   }
  // }

  // function DELETE() {
  //   async function deletePost() {
  //     await fetch("https://www.boredapi.com/api/activity", {
  //       method: "DELETE",
  //     });
  //   }

  //   deletePost();
  // }

  return (
    // Sign In Form Area
    <div className="content-block-area gray-bg">
      <div className="signup-form signin-form">
        <div className="logo-two">
          <a href="index.html">
            <img src={logo} alt="Logo" />
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
              onClick= {handleSubmit} 
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              Sign In
            </button>

            {/* <button
              onClick={PUT}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              PUT
            </button>
            <button
              onClick={POST}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              POST
            </button>
            <button
              onClick={GET}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              GET
            </button>
            <button
              onClick={DELETE}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              DELETE
            </button> */}
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
