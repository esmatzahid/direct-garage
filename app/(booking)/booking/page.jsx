"use client";
import { useState } from "react";
import BookingExtra from "@/components/booking/BookingExtra";
import BookingVehicles from "@/components/booking/BookingVehicles";
import PassengerDetails from "@/components/booking/PassengerDetails";
import BookingPayment from "@/components/booking/BookingPayment";
import BookingTab from "@/components/booking/BookingTab";
import toast from "react-hot-toast";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    selectedCar: "",
    selectedServices: [],
    selectedModel: "",
    date: "",
    time: "",
    passengerDetails: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });
  console.log( bookingDetails ,"bookingDetails");
  const validateStep = (step) => {
    switch (step) {
      case 0:
        if (!bookingDetails.selectedCar || !bookingDetails.selectedServices.length) {
          toast.error("Please select a car and services first");
          return false;
        }
        return true;
      case 1:
        if (!bookingDetails.selectedModel) {
          toast.error("Please select modal");
          return false;
        }
        if (!bookingDetails.date || !bookingDetails.time) {
          toast.error("Please select date and time");
          return false;
        }
        return true;
      case 2:
        const { name, lastName, email, phone } = bookingDetails.passengerDetails;
        if (!name || !lastName || !email || !phone) {
          toast.error("Please fill all  details");
          return false;
        }
        return true;
      default:
        return true;
    }
  };
  const handleStepChange = (newStep) => {
    // Only validate when moving forward
    if (newStep > currentStep) {
      if (!validateStep(currentStep)) {
        return;
      }
    }
    setCurrentStep(newStep);
  };

  const handleBookingDetailsChange = (key, value) => {
    setBookingDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePassengerDetailsChange = (key, value) => {
    setBookingDetails((prev) => ({
      ...prev,
      passengerDetails: {
        ...prev.passengerDetails,
        [key]: value,
      },
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BookingVehicles
            setCurrentStep={(step) => handleStepChange(step)}
            bookingDetails={bookingDetails}
            handleBookingDetailsChange={handleBookingDetailsChange}
          />
        );
      case 1:
        return (
          <BookingExtra
            setCurrentStep={(step) => handleStepChange(step)}
            bookingDetails={bookingDetails}
            handleBookingDetailsChange={handleBookingDetailsChange}
          />
        );
      case 2:
        return (
          <PassengerDetails
            setCurrentStep={(step) => handleStepChange(step)}
            bookingDetails={bookingDetails}
            handlePassengerDetailsChange={handlePassengerDetailsChange}
          />
        );
      case 3:
        return (
          <BookingPayment
            bookingDetails={bookingDetails}
            setCurrentStep={(step) => handleStepChange(step)}
          />
        );
      default:
        return (
          <BookingVehicles
            setCurrentStep={(step) => handleStepChange(step)}
            bookingDetails={bookingDetails}
            handleBookingDetailsChange={handleBookingDetailsChange}
          />
        );
    }
  };

  return (
    <main className="main">
      <section className="section">
        <div className="container-sub">
          <BookingTab
            currentStep={currentStep}
            setCurrentStep={handleStepChange}
          />
          {renderStep()}
        </div>
      </section>
    </main>
  );
}
