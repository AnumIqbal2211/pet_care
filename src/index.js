import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./bootstrap.min.css";
import "./owl.carousel.css";
import "./style.css";
import "./magnific-popup.css";
import "./swiper.min.css";
import "./animate.css";
import "./responsive.css";
import "./style.css";
import Home from "./Components/Home.js";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./Components/SignIn.js";
import SignUp from "./Components/SignUp.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
