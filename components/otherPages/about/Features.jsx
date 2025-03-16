"use client";

export default function Features() {
  const garageFeatures = [
    "Full Service & MOT Testing",
    "Engine Diagnostics & Repairs",
    "Brake System Maintenance",
    "Transmission Services",
    "Air Conditioning Service & Repair",
    "Electrical System Diagnostics",
    "Tire Services & Wheel Alignment",
    "24/7 Emergency Breakdown Support",
    "Genuine Parts Guarantee",
    "Free Vehicle Health Check"
  ];

  return (
    <section className="section">
      <div className="container-sub">
        <div className="mt-60 mb-60">
          <h2 className="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">
            Professional Auto Care & Repair Services
          </h2>
          <div className="content-single wow fadeInUp">
            <p>
              At our state-of-the-art garage, we combine traditional mechanical expertise 
              with modern diagnostic technology to provide comprehensive vehicle care. 
              Our certified technicians are trained to work on all makes and models, 
              ensuring your vehicle receives the highest standard of service.
            </p>
            <p>
              We pride ourselves on transparency and reliability, offering detailed 
              inspections and clear explanations of all required repairs. With our 
              competitive pricing and commitment to quality, we ensure your vehicle 
              maintains peak performance without breaking the bank.
            </p>
            <ul className="list-ticks list-ticks-small">
              {garageFeatures.map((feature, i) => (
                <li key={i} className="text-16 mb-20">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}