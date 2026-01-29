import { useEffect } from "react";
import house from "../images/house.png";
import construction from "../images/construction.png";
import temple from "../images/temple.png";

const Hero = () => {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="w-full font-inter">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
  
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[520px]">
            <img
              src={house}
              alt="House"
              className="absolute top-0 left-0 w-[420px] h-[260px] rounded-2xl shadow-lg object-cover"
            />

            <img
              src={construction}
              alt="Construction"
              className="absolute bottom-0 left-0 w-[420px] h-[260px] rounded-2xl shadow-lg object-cover"
            />

            <img
              src={temple}
              alt="Temple"
              className="absolute top-24 left-40 w-[380px] h-[260px] rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>


        <div className="max-w-l">
          <h1 className="text-[30px] leading-tight font-extrabold text-gray-900">
            Trusted Valuations. Insightful
            Research. Accurate Loss
            Assessments.
          </h1>

          <h2 className="text-[40px] font-extrabold mt-8 text-blue-900">
            Rooted in Nepal,
            <br />
            Globally Aligned
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-gray-600 text-justify">
            The P.A. Engineering Company, established in 2022, is a premier consultancy specializing in property and real estate valuation across Nepal. Founded by a trio of visionary engineers, the company is committed to upholding the highest standards in engineering and fixed asset valuation. Our expertise spans land and property valuation, building and structure appraisal, equipment assessment, property consultancy, and comprehensive real estate appraisals.
            Guided by the International Valuation Standards (IVS) and the Nepal Valuers Association (NVA) guidelines, we deliver professional, ethical, and high-quality results. We build enduring client relationships by consistently exceeding expectations and earning trust through exceptional performance.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
