import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/owl.carousel.css";
import "../src/assets/css/style.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/swiper.min.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import Home from "./Components/Home.js";
import reportWebVitals from "./reportWebVitals.js";
import SignIn from "./Components/SignIn.js";
import SignUp from "./Components/SignUp.js";
import NewAppointment from "./Components/Appointment/new";
import ContactUs from "./Components/ContactUs.js";
import Gallery from "./Components/Gallery.js";
import Pricing from "./Components/Pricing.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/appointment" element={<NewAppointment />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />

        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
