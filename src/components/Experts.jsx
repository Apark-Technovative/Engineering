import React, { useEffect } from "react";
import sachin from "../images/sachin.png";
import expert1 from "../images/expert1.png";
import expert2 from "../images/expert2.png";
import expert3 from "../images/expert3.png";
import { FaLinkedin } from "react-icons/fa";

const Experts = () => {
  useEffect(() => {
    document.title = "Experts";
  }, []);

  return (
    <div className="bg-white">
      
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={sachin}
          alt="Sachin Bhattarai"
          className="w-full h-[550px] object-cover rounded-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-2">Sachin Bhattarai</h2>
          <p className="text-sm text-gray-600 mb-4">
            PhD Researcher, Valuation Practices | Real Estate Appraiser | Loss Assessor | FIABCI Singapore Member
          </p>
          <p className="text-sm font-semibold mb-4">
            Executive Chairman & Founder at Kripa Engineering Associates Pvt. Ltd.
          </p>

          <p className="text-sm text-gray-700 leading-7 text-justify">
            Mr. Sachin Bhattarai is a distinguished Real Estate Appraiser,
            Researcher and Consultant since May 2018 in Nepal and internationally. 
            He is licensed as a Civil Engineer by the Nepal Engineering Council 
            and an Insurance Surveyor by the Nepal Insurance Authority. He 
            is currently pursuing a PhD at Sharda University, India, focusing on global real 
            estate valuation practices and trends. As the Executive Chairman and Founder of
            Kripa Engineering Associates Pvt. Ltd., based in Kathmandu, Nepal, Mr. Bhattarai
            has led numerous high-impact projects, strengthened key client relationships and
            played a pivotal role in driving the company’s sustained growth. His expertise
            is also sought after as a part-time consultant for various organizations,
            reflecting his adaptability and industry-wide recognition. His leadership is 
            further demonstrated through his roles as a Central Executive Committee Member
            of the Nepal Valuers Association and as the first Individual Member from Nepal
            in the FIABCI Singapore Chapter. Recently, he has presented his research at the
            Global Property Congress 2025 in Sydney, Australia.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-blue-600 text-sm font-medium"
          >
            <FaLinkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </section>

 
      <section className="bg-[#f7f9fb] py-20">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Our Experts
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <ExpertCard
            image={expert1}
            name="Ashim Guragain"
            title="Real Estate Appraiser | Civil Engineer | Surveyor"
            description="Mr. Guragain is a dedicated Real Estate Appraiser, Licensed Civil Engineer by Nepal Engineering Council and an Authorized Surveyor by Nepal Insurance Authority, with seven years of professional experience. His expertise spans residential and commercial property valuations, alongside a robust background in civil engineering. His commitment to precision and quality reflects in his work, where he applies a meticulous approach to ensure accurate assessments and solutions in the real estate sector."
          />

          <ExpertCard
            image={expert2}
            name="Kripa Sharma Poudel"
            title="Civil Engineer | Surveyor | Hydro Project Specialist"
            description="Ms. Poudel is a licensed Civil Engineer with specialized experience in hydroelectric project planning, design execution and quality assurance. As a licensed Non-Life Insurance Surveyor, she extends her technical capabilities to insurance survey and loss evaluation in infrastructure projects, ensuring reliable assessments and risk analysis for both engineering and insurance sectors."
          />

          <ExpertCard
            image={expert3}
            name="Samjhana Shrestha"
            title="Senior Manager | Client Relations | Real Estate Consultant"
            description="Ms. Shrestha is a highly experienced real estate and insurance service professional, recognized for her strong client relations, market understanding and exceptional communication skills. Serving as the Senior Manager for Client Relations, she oversees key client engagements with a focus on trust, responsiveness and personalized service. Her dual expertise in real estate consulting and insurance loss assessment and claims management enables her to support clients in property transactions, portfolio decisions, risk evaluation and insurance claim processes. She is known for her ability to handle high-value and sensitive cases with professionalism, clarity and client-centric care."
          />
        </div>
      </section>
    </div>
  );
};

const ExpertCard = ({ image, name, title, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-[350px] object-cover rounded-md mb-6"
      />

      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{title}</p>

      <p
        className={`text-sm text-gray-700 leading-6 text-justify transition-all ${
          expanded ? "" : "line-clamp-6"
        }`}
      >
        {description}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 text-sm font-medium mt-2 self-start hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-blue-600 text-sm mt-auto pt-4"
      >
        <FaLinkedin className="w-5 h-5" />
        LinkedIn
      </a>
    </div>
  );
};


export default Experts;
