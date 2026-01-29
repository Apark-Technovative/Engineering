import React from "react";
import {
  Target,
  Focus,
  Database,
  BarChart2,
  FileText,
} from "lucide-react";
import fiabci from "../images/fiabci.png";
import nepalInsurance from "../images/nepal-insurance.png";
import nepalValuers from "../images/nepal-valuers.png";

const WhatWeDo = () => {
  return (
    <div className="w-full">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We are primarily dedicated on the valuation works following the
            International Valuation Standards (IVS) that involves following key
            steps:
          </p>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Target className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Identify the Purpose</h3>
              <p className="text-sm text-gray-600">
                Determine why the valuation is needed
                <br />
                (e.g., sale, financing, investment)
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Focus className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Define the Scope</h3>
              <p className="text-sm text-gray-600">
                Specify the asset, the valuation date,
                <br />
                and any assumptions or special considerations
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Database className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Data Collection</h3>
              <p className="text-sm text-gray-600">
                Gather relevant data, including market trends,
                property specifics, and comparable sales
              </p>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <BarChart2 className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Analysis</h3>
              <p className="text-sm text-gray-600">
                Apply appropriate valuation methods
                <br />
                (e.g., market, income, or cost approach)
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <FileText className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold mb-2">Report</h3>
              <p className="text-sm text-gray-600">
                Compile the findings into a clear,
                comprehensive report that adheres to IVS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-14">
      We provide professional valuation and advisory services aligned with
      international standards and local market expertise.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Service 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-50 mb-6 mx-auto">
          <Database className="w-7 h-7 text-indigo-600" />
        </div>
        <h3 className="font-semibold text-lg mb-3">
          Property & Asset Valuation
        </h3>
        <p className="text-sm text-gray-600">
          Independent and accurate valuation of real estate and assets
          in accordance with International Valuation Standards (IVS).
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-50 mb-6 mx-auto">
          <BarChart2 className="w-7 h-7 text-indigo-600" />
        </div>
        <h3 className="font-semibold text-lg mb-3">
          Property Advisory & Market Research
        </h3>
        <p className="text-sm text-gray-600">
          Strategic advisory services supported by in-depth market research,
          feasibility studies, and investment analysis.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-50 mb-6 mx-auto">
          <Target className="w-7 h-7 text-indigo-600" />
        </div>
        <h3 className="font-semibold text-lg mb-3">
          Infrastructure & Development Project Consulting
        </h3>
        <p className="text-sm text-gray-600">
          Consulting services for infrastructure and development projects,
          from planning and feasibility to execution support.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* AFFILIATIONS SECTION */}
      {/* <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Affiliations</h2>

          <p className="text-gray-600 mb-12">
            Member of Nepal Valuers Association & Nepal Insurance Authority
            <br />
            Licensed Surveyor
          </p>

          
          <div className="flex flex-col md:flex-row items-center justify-center gap-24">
  <img
    src={fiabci}
    alt="FIABCI Singapore"
    className="h-24 object-contain"
  />
  <img
    src={nepalValuers}
    alt="Nepal Valuers Association"
    className="h-24 object-contain"
  />
  <img
    src={nepalInsurance}
    alt="Nepal Insurance Authority"
    className="h-24 object-contain"
  />
</div>

        </div>
      </section> */}
    </div>
  );
};

export default WhatWeDo;
