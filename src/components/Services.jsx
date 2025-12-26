
import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

import service1 from "../images/service1.png";
import service2 from "../images/service1.png";
import service3 from "../images/service1.png";
import service4 from "../images/service1.png";


const servicesData = [
  {
    title: "Real Estate & Property Valuation",
    description:
      "We provide International Valuation Standards (IVS) compliant valuations for real estate properties, land, buildings, factories, machinery, vehicles and engineering structures. Our assessments are accurate, transparent and internationally recognised supporting purposes such as sales, purchases, financing and financial reporting, while ensuring credibility and trust in every valuation.",
    tags: ["Valuation", "Real Estate", "Property"],
    image: service1,
  },
  {
    title: "Marine & Transit Insurance Loss Assessment",
    description:
      "We provide professional Marine and Transit Insurance Loss Assessment services for goods transported by sea, air, rail or road. Our expert team inspects, documents and values losses caused by transit accidents, fire or explosion, theft or non-delivery, water or moisture damage and loading/unloading mishandling. We also conduct cargo condition surveys, warehouse loss assessments and container damage evaluations to ensure fair and transparent claim settlements. All assessments are performed in accordance with the Nepal Insurance Authority’s standards as well as best international practices for accuracy and credibility.",
    tags: ["Marine & Transit Insurance", "Loss Assessment"],
    image: service2,
  },
  {
    title: "Comprehensive Loss Assessment & Damage Estimation",
    description:
      "We deliver professional assessment and valuation of losses arising from various types of property and asset damages, based on current market conditions. Our expertise spans a wide range of scenarios, including damages related to property (fire, flood, burglary, earthquake, landslide, etc.), Contractors All Risk (CAR), Erection All Risk (EAR), Machinery Breakdown, Business Interruption and other non-life insurance categories. We serve non-life insurance companies, corporate clients, individuals and government entities. Along with accurate loss estimation, we facilitate effective coordination between insurers and insured parties and assist in conflict management to ensure fairness, transparency and timely resolution of claims.",
    tags: ["Loss Assessment", "Claim Settlement"],
    image: service3,
  },
  {
    title: "Real Estate & Property Advisory",
    description:
      "We offer expert advisory services to property owners, investors and developers, providing strategic guidance across all aspects of property and real estate transactions. Our services include in-depth market trend analysis, valuation insights, investment strategy formulation and development opportunity assessment to support informed and confident decision-making.",
    tags: ["Advice", "Guidance", "Insights"],
    image: service4,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-20">
      
      <h2 className="text-4xl font-bold text-center mb-20">Our Services</h2>

     
      <div className="max-w-7xl mx-auto px-4 space-y-28">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* IMAGE WITH DOTTED BACKGROUND */}
            <div className="relative">
              {/* DOTTED BACKGROUND */}
              <div
                className="absolute -top-12 -left-12 w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(#d1d5db 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 rounded-md shadow-lg w-full"
              />
            </div>

          
            <div>
              <h3 className="text-3xl font-bold mb-6">{service.title}</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
