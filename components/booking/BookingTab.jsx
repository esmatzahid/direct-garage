"use client";

const tabs = [
  { id: 1, iconClass: "icon-book icon-vehicle", text: "Vehicle", number: "01" },
  { id: 2, iconClass: "icon-book icon-extra", text: "Extras", number: "02" },
  { id: 3, iconClass: "icon-book icon-pax", text: "Details", number: "03" },
  { id: 4, iconClass: "icon-book icon-payment", text: "Payment", number: "04" },
];

export default function BookingTab({ currentStep, setCurrentStep }) {
  return (
    <div className="box-booking-tabs">
      {tabs.map((tab) => (
        <div key={tab.id} className="item-tab wow fadeInUp">
          <div
            onClick={() => setCurrentStep(tab.id - 1)}
            className={`box-tab-step ${
              currentStep >= tab.id - 1 ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <div className="icon-tab">
              <span className={tab.iconClass}></span>
              <span className="text-tab">{tab.text}</span>
            </div>
            <div className="number-tab">
              <span>{tab.number}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
