"use client";
import React, { useEffect } from "react";

export default function PassengerDetails({ bookingDetails, handlePassengerDetailsChange, setCurrentStep }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    handlePassengerDetailsChange(id, value);
  };
 
    useEffect(() => {
      // Focus event
      document
        .querySelectorAll(
          ".form-comment input, .form-comment textarea, .form-comment select"
        )
        ?.forEach(function (element) {
          element?.addEventListener("focus", function () {
            this?.closest(".form-group").classList.add("focused");
          });
        });
  
      // Blur event
      document
        .querySelectorAll(
          ".form-comment input, .form-comment textarea, .form-comment select"
        )
        ?.forEach(function (element) {
          element.addEventListener("blur", function () {
            var inputValue = this.value;
            if (inputValue === "") {
              this.classList.remove("filled");
              this.closest(".form-group").classList.remove("focused");
            } else {
              this.classList.add("filled");
            }
          });
        });
  
      // Check for pre-filled inputs
      document
        .querySelectorAll(
          ".form-comment input, .form-comment textarea, .form-comment select"
        )
        ?.forEach(function (element) {
          if (element?.value !== "") {
            element?.closest(".form-group").classList.add("focused");
            element.classList.add("filled");
          }
        });
    }, []);
  
  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Passenger Details
          </h3>
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      value={bookingDetails.passengerDetails.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      id="lastName"
                      type="text"
                      value={bookingDetails.passengerDetails.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      value={bookingDetails.passengerDetails.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      type="text"
                      value={bookingDetails.passengerDetails.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-30 mb-120 wow fadeInUp">
            <button
              className="btn btn-primary btn-primary-big w-100"
              onClick={() => setCurrentStep((prev) => prev + 1)}
            >
              Continue
              <svg
                className="icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
