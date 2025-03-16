"use client";

import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Image from "next/image";
import Link from "next/link";
import toast, { ToastBar } from "react-hot-toast";

export default function BookingPayment({ bookingDetails }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    activeInputFocus();
  }, []);

  const handleBookNow = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Booking saved successfully!");
        toast.success("Booking saved successfully!");
      } else {
        setMessage("Error saving booking. Please try again.");
      }
    } catch (error) {
      console.error('Error saving booking:', error);
      setMessage("Error saving booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Billing Address
          </h3>
          
          <div className="text-center wow fadeInUp">
            <Image
              width={80}
              height={80}
              className="mb-20"
              src="/assets/imgs/page/booking/completed.png"
              alt="luxride"
            />
            <h4 className="heading-24-medium color-text mb-10">
              Payment is only taken at the garage not online
            </h4>
            <p className="text-14 color-grey mb-40">
              Proof of the part been change is available ask for it{" "}
            </p>
          </div>
          
          {message && (
            <div className={`text-center mb-20 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </div>
          )}
            <div className="mt-30 mb-120 wow fadeInUp">
            <button
              className="btn btn-primary btn-primary-big w-100"
              onClick={handleBookNow}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Book Now'}
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
      <SideBar />
    </div>
  );
}
