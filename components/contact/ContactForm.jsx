"use client";

import { activeInputFocus } from "@/utlis/activeInputFocus";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { arry, arry1 } from "./Dataapply/Data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    garage: "",
    country: "",
    city: "",
    representative: "",
    designation: "",
    contact: "",
    email: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSupportServices, setSelectedSupportServices] = useState([]);

  const handleServiceChange = (e) => {
    const { id, checked } = e.target;
    setSelectedServices((prev) =>
      checked
        ? [...prev, arry[id]]
        : prev.filter((service) => service !== arry[id])
    );
  };

  console.log(selectedServices);
  console.log(formData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSupportServiceChange = (e) => {
    const { id, checked } = e.target;
    setSelectedSupportServices((prev) =>
      checked
        ? [...prev, arry1[id]]
        : prev.filter((service) => service !== arry1[id])
    );
  };

  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.garage ||
      !formData.country ||
      !formData.city ||
      !formData.representative ||
      !formData.designation ||
      !formData.contact ||
      !formData.email
    ) {
      toast.error("All fields are required.");
      return;
    }
    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          selectedServices,
          selectedSupportServices,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Email sent successfully!");
        setResponseMessage("Email sent successfully!");
        setFormData({
          garage: "",
          country: "",
          city: "",
          representative: "",
          designation: "",
          contact: "",
          email: "",
        });
        setSelectedServices([]);
        setSelectedSupportServices([]);
      } else {
        toast.error(data.error || "Failed to send email.");
        setResponseMessage(data.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An unexpected error occurred.");
    }
  };

  console.log(formData);

  useEffect(() => {
    // Focus event
    activeInputFocus();
  }, []);
  return (
    <section className="section mt-120 mb-120">
      <div className="container-sub">
        <div className="mw-770">
          <h2 className="heading-44-medium mb-60 text-center wow fadeInUp">
            Leave us your info
          </h2>
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <label
                    className="form-label"
                    htmlFor="subject"
                    style={{ fontWeight: "bold" }}
                  >
                    Name of your Garage <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="garage"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={formData.garage}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="fullname"
                    style={{ fontWeight: "bold" }}
                  >
                    Country of Location <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="country"
                      type="text"
                      onChange={handleChange}
                      value={formData.country}
                      // defaultValue="Ali Tufan"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="fullname"
                    style={{ fontWeight: "bold" }}
                  >
                    City <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="city"
                      type="text"
                      onChange={handleChange}
                      value={formData.city}
                      // defaultValue="Ali Tufan"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                  >
                    Authorised representative{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="representative"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={formData.representative}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                  >
                    Designation <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="designation"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={formData.designation}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                  >
                    Direct contact number{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="contact"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={formData.contact}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <label
                    className="form-label"
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                  >
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="col-lg-12" style={{ marginBottom: "10px" }}>
                  <label
                    className="form-label"
                    htmlFor="subject"
                    style={{ fontWeight: "bold" }}
                  >
                    Services Offered (select all that apply)
                  </label>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                      gap: "10px",
                    }}
                  >
                    {arry.map((v, i) => {
                      return (
                        <li style={{ padding: "5px 0px", display: "flex" }}>
                          <input
                            type="checkbox"
                            id={i}
                            onChange={handleServiceChange}
                            checked={selectedServices.includes(v)}
                          />
                          <div style={{ marginLeft: "5px" }}>{v}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-12" style={{ marginBottom: "10px" }}>
                  <label
                    className="form-label"
                    htmlFor="subject"
                    style={{ fontWeight: "bold" }}
                  >
                    Support Services (if any)
                  </label>
                  <ul
                    style={{ listStyle: "none", gap: "10px", display: "grid" }}
                  >
                    {arry1.map((v, i) => {
                      return (
                        <li style={{ padding: "5px 0px", display: "flex" }}>
                          <input
                            type="checkbox"
                            id={i}
                            onChange={handleSupportServiceChange}
                            checked={selectedSupportServices.includes(v)}
                          />
                          <div style={{ marginLeft: "5px" }}>{v}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-12">
                  <button className="btn btn-primary" type="submit">
                    Get In Touch
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
