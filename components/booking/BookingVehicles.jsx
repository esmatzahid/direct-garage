"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";

const carMakes = [
  "Please select...",
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "DS",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Maserati",
  "Mazda",
  "Mercedes-Benz",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Renault",
  "Seat",
  "Skoda",
  "Smart",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Vauxhall",
  "Volkswagen",
  "Volvo",
];

const services = [
  "MOT",
  "Pre MOT",
  "Full Service",
  "Major Service",
  "Interim Service",
  "Oil & Filter Change",
  "Collect & Deliver",
  "Customer Drop-off",
  "Loan Car",
  "Vehicle Safety Check",
  "Coolant Change",
  "DPF Cleaning",
  "Winter Health Check",
  "Air Conditioning Re-gas",
  "Diagnostic Check",
  "AdBlue Top Up",
  "Brake Fluid Replacement",
  "Front Wheel Alignment",
  "CVI Neutraliser for Car Interiors",
  "General Repair",
];

export default function BookingVehicles({
  bookingDetails,
  handleBookingDetailsChange,
  setCurrentStep,
}) {
  const { selectedCar, selectedServices } = bookingDetails;

  const handleSelectChange = (e) => {
    handleBookingDetailsChange("selectedCar", e.target.value);
  };

  const handleServiceChange = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    handleBookingDetailsChange("selectedServices", updatedServices);
  };

  const handleNextStep = () => {
    if (selectedCar !== "Please select..." && selectedServices.length > 0) {
      setCurrentStep(1);
    } else {
      alert("Please select a car make and at least one service.");
    }
  };

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Select Your Car
          </h3>
          <div className="list-vehicles item-vehicle wow fadeInUp">
            <div className="mb-20 w-100 wow fadeInUp">
              <label htmlFor="car-make" className="text-14-medium color-text">
                Car Make
              </label>
              <select
                id="car-make"
                className="form-select"
                value={selectedCar}
                onChange={handleSelectChange}
              >
                {carMakes.map((make, index) => (
                  <option
                    key={index}
                    value={make}
                    disabled={make === "Please select..."}
                  >
                    {make}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h3 className="heading-24-medium color-text mb-20 wow fadeInUp">
            Choose Your Services
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {services.map((service, index) => (
              <label
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: selectedServices.includes(service)
                    ? "#f0f7ff"
                    : "white",
                  borderColor: selectedServices.includes(service)
                    ? "#007bff"
                    : "#E0E0E0",
                }}
              >
                <input
                  type="checkbox"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
                {service}
              </label>
            ))}
          </div>
          <button
            className=" mt-40 btn btn-primary btn-primary-big w-100"
            onClick={handleNextStep}
          >
            Continue
          </button>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
