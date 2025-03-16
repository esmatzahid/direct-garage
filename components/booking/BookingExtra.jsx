"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import DatePickerComponent from "../common/DatePicker";
import TimePickerComponent from "../common/TimePicker";

const carModels = {
  "Please select...": [],
  Abarth: ["500", "595", "695", "124 Spider"],
  "Alfa Romeo": ["Giulia", "Stelvio", "Tonale", "4C Spider"],
  "Aston Martin": ["DB11", "Vantage", "DBS Superleggera", "DBX"],
  Audi: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron"],
  Bentley: ["Bentayga", "Continental GT", "Flying Spur", "Mulsanne"],
  BMW: [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "7 Series",
    "X1",
    "X3",
    "X5",
    "X7",
    "i3",
    "i8",
  ],
  Chevrolet: [
    "Spark",
    "Malibu",
    "Camaro",
    "Corvette",
    "Equinox",
    "Traverse",
    "Tahoe",
    "Suburban",
    "Silverado",
  ],
  Chrysler: ["300", "Pacifica", "Voyager"],
  Citroen: ["C1", "C3", "C4", "C5 Aircross", "Berlingo"],
  Dacia: ["Sandero", "Duster", "Logan", "Lodgy"],
  Daewoo: ["Matiz", "Lanos", "Nubira", "Leganza"],
  Daihatsu: ["Cuore", "Sirion", "Terios", "Copen"],
  DS: ["DS 3", "DS 4", "DS 7 Crossback", "DS 9"],
  Fiat: ["500", "Panda", "Tipo", "500X", "500L"],
  Ford: [
    "Fiesta",
    "Focus",
    "Mondeo",
    "Mustang",
    "EcoSport",
    "Kuga",
    "Edge",
    "Explorer",
    "F-150",
  ],
  Honda: [
    "Civic",
    "Accord",
    "Fit",
    "HR-V",
    "CR-V",
    "Pilot",
    "Odyssey",
    "Ridgeline",
  ],
  Hyundai: [
    "i10",
    "i20",
    "i30",
    "Elantra",
    "Sonata",
    "Kona",
    "Tucson",
    "Santa Fe",
    "Palisade",
  ],
  Jaguar: ["XE", "XF", "XJ", "F-Type", "E-Pace", "F-Pace", "I-Pace"],
  Jeep: [
    "Renegade",
    "Compass",
    "Cherokee",
    "Grand Cherokee",
    "Wrangler",
    "Gladiator",
  ],
  Kia: [
    "Picanto",
    "Rio",
    "Ceed",
    "Stinger",
    "Soul",
    "Sportage",
    "Sorento",
    "Telluride",
  ],
  Lamborghini: ["Huracan", "Aventador", "Urus"],
  "Land Rover": [
    "Range Rover",
    "Range Rover Sport",
    "Range Rover Velar",
    "Discovery",
    "Discovery Sport",
    "Defender",
  ],
  Lexus: ["IS", "ES", "GS", "LS", "NX", "RX", "GX", "LX", "LC"],
  Maserati: ["Ghibli", "Quattroporte", "Levante", "GranTurismo"],
  Mazda: ["Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata"],
  "Mercedes-Benz": [
    "A-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "CLA",
    "CLS",
    "GLA",
    "GLC",
    "GLE",
    "GLS",
    "G-Class",
  ],
  Mini: [
    "Hardtop 2 Door",
    "Hardtop 4 Door",
    "Convertible",
    "Clubman",
    "Countryman",
  ],
  Mitsubishi: ["Mirage", "Lancer", "Outlander", "Eclipse Cross", "Pajero"],
  Nissan: [
    "Micra",
    "Versa",
    "Sentra",
    "Altima",
    "Maxima",
    "Leaf",
    "Juke",
    "Qashqai",
    "Rogue",
    "Murano",
    "Pathfinder",
    "Armada",
  ],
  Opel: ["Corsa", "Astra", "Insignia", "Crossland", "Grandland", "Mokka"],
  Peugeot: ["108", "208", "308", "508", "2008", "3008", "5008"],
  Porsche: [
    "718 Boxster",
    "718 Cayman",
    "911",
    "Panamera",
    "Macan",
    "Cayenne",
    "Taycan",
  ],
  Renault: ["Twingo", "Clio", "Megane", "Kadjar", "Koleos", "Captur"],
  Seat: ["Ibiza", "Leon", "Arona", "Ateca", "Tarraco"],
  Skoda: ["Fabia", "Scala", "Octavia", "Superb", "Karoq", "Kodiaq"],
  Smart: ["Fortwo", "Forfour"],
  Subaru: [
    "Impreza",
    "Legacy",
    "WRX",
    "BRZ",
    "Crosstrek",
    "Forester",
    "Outback",
    "Ascent",
  ],
  Suzuki: ["Swift", "Baleno", "Vitara", "S-Cross", "Jimny"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y"],
  Toyota: [
    "Yaris",
    "Corolla",
    "Camry",
    "Avalon",
    "86",
    "Supra",
    "C-HR",
    "RAV4",
    "Highlander",
    "4Runner",
    "Sequoia",
    "Land Cruiser",
    "Tacoma",
    "Tundra",
  ],
  Vauxhall: ["Corsa", "Astra", "Insignia", "Crossland", "Grandland", "Mokka"],
  Volkswagen: [
    "Polo",
    "Golf",
    "Passat",
    "Arteon",
    "T-Cross",
    "T-Roc",
    "Tiguan",
    "Touareg",
    "ID.3",
    "ID.4",
  ],
  Volvo: ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"],
};

export default function BookingExtra({
  bookingDetails,
  handleBookingDetailsChange,
  setCurrentStep,

}) {
  const { selectedCar, selectedModel, date, time } = bookingDetails;

  const availableModels = selectedCar ? carModels[selectedCar] || [] : [];

  const handleModelChange = (e) => {
    handleBookingDetailsChange("selectedModel", e.target.value);
    setCurrentStep((prev) => prev + 1);
  };

  const handleDateChange = (date) => {
    console.log(date, "date");
    handleBookingDetailsChange("date", date);
  };

  const handleTimeChange = (time) => {
    console.log(time, "time");
    handleBookingDetailsChange("time", time);
  };

  useEffect(() => {
    activeInputFocus();
  }, []);

  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30 wow fadeInUp">
            Car Details
          </h3>
          <div className="box-search-ride wow fadeInUp mb-30">
            <div className="search-item search-date">
              <div className="search-icon">
                <span className="item-icon icon-date"> </span>
              </div>
              <div className="search-inputs">
                <label className="text-14 color-grey">Date</label>
                <DatePickerComponent onChange={handleDateChange} />
              </div>
            </div>
            <div className="search-item search-time">
              <div className="search-icon">
                <span className="item-icon icon-time"> </span>
              </div>
              <div className="search-inputs">
                <label className="text-14 color-grey">Time</label>
                <TimePickerComponent onChange={handleTimeChange} />
              </div>
            </div>
          </div>
          <div className="form-contact form-comment wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label">Selected Make</label>
                    <input
                      className="form-control"
                      type="text"
                      value={selectedCar}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="model">
                      Select Model
                    </label>
                    <select
                      className="form-control"
                      id="model"
                      value={selectedModel}
                      onChange={handleModelChange}
                    >
                      <option value=""></option>
                      {availableModels.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
