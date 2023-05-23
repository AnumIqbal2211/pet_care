import React, { useState } from "react";
import dogImage from '../../assets/images/dog.png';
import Header from "../Header";
import MainMenu from "../MainMenu";
import Footer from "../Footer";

function Appointment() {

  return (
    <div>
      <Header />
      <MainMenu />
      <div class="content-block-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-title text-center">
                <h2>
                  <span>request an</span> appointment
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
            <div class="col-lg-5">
              <div class="apointment-preview-boxed man-image-bg wow fadeInUp"></div>
            </div>
            <div class="col-lg-7">
              <form
                class="appointment-form"
                action="https://templates.envytheme.com/petclinic/default/index.html"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <label>Preferred Time Of Day</label>
                    <select id="Year">
                      <option value="hide">-- Time Of Day --</option>
                      <option value="1">Morning</option>
                      <option value="2">Afternoon</option>
                      <option value="3">Evening</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <label>Patient Type</label>
                    <select id="selectServices">
                      <option value="hide">-- Select Type --</option>
                      <option value="1">New Patient</option>
                      <option value="2">Current Patient</option>
                      <option value="3">Returning Patient</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <label>Appointment Date</label>
                    <input
                      type="text"
                      id="datepicker"
                      name="appointmentDate"
                      placeholder="Appointment Date"
                      required="required"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label>Appointment Time</label>
                    <select id="Time">
                      <option value="hide">-- Choose --</option>
                      <option value="2010">09:00AM - 10:00AM</option>
                      <option value="2011">10:00AM - 11:00AM</option>
                      <option value="2012">11:00AM - 12:00PM</option>
                      <option value="2013">12:00PM - 01:00PM</option>
                      <option value="2014">01:00PM - 02:00PM</option>
                      <option value="2015">02:00PM - 03:00PM</option>
                      <option value="2015">03:00PM - 04:00PM</option>
                      <option value="2015">04:00PM - 05:00PM</option>
                      <option value="2015">05:00PM - 06:00PM</option>
                      <option value="2015">06:00PM - 07:00PM</option>
                      <option value="2015">07:00PM - 08:00PM</option>
                      <option value="2015">08:00PM - 09:00PM</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <p>Contact Details</p>
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="text"
                      value={""}
                      name="name"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="email"
                      value={""}
                      name="email"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      type="text"
                      name="yourPhone"
                      placeholder="Your Phone"
                      required="required"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <textarea
                      name="yourMessage"
                      id="yourMessage"
                      placeholder="Your Message"
                      required="required"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <button class="btn theme-btn" type="submit">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Appointment;
