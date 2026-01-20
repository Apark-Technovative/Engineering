import { useEffect, useState } from "react";
import houseImg from "../images/house.png";

const insightsData = [
  {
    id: 1,
    title: "Global Property Congress 2025, Hilton Sydney",
    date: "26-29 May, 2025",
    imageUrl: houseImg,
  },
  {
    id: 2,
    title: "The 4th International Conference on Real Estate Development and Management (ICREDM 2025)",
    date: "February 3-5, 2025, Wyndham Ankara, Turkey",
    imageUrl: houseImg,
  },
  {
    id: 3,
    title: "Global Valuation Summit 2023",
    date: "24th and 25th November 2023, Mumbai, India",
    imageUrl: houseImg,
  },
  {
    id: 4,
    title: "International Valuation Standards Council (IVSC) – WAVO Global Valuation Conference 2023",
    date: "7-9 June, 2023 Christchurch, New Zealand",
    imageUrl: houseImg,
  },
  {
    id: 5,
    title: "2024 Asia Pacific Real Estate Convention",
    date: "29th to 31st August, 2024, Bankok, Thailand",
    imageUrl: houseImg,
  },
  {
    id: 6,
    title: "74th FIABCI World Real Estate Congress 2024",
    date: "May 27-31, 2024, Singapore",
    imageUrl: houseImg,
  },
  {
    id: 7,
    title: "Real Value Conference: The Confluence of Valures 2023",
    date: "8th Jan, 2023, Chennai, India",
    imageUrl: houseImg,
  },
  {
    id: 8,
    title: "5th and 6th Central Executive Commitee Member of Nepal Valuers Association",
    date: "",
    imageUrl: houseImg,
  },
  {
    id: 9,
    title: "Insurance Surveyors & Loss Assessments",
    date: "",
    imageUrl: houseImg,
  },
];

const CompanyInsights = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    document.title = "Company Insights";
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16">
     
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          color: "#e2e8f0",
        }}
      />

      <h2 className="relative text-3xl font-bold text-center mb-8">
        Company Insights
      </h2>

      <p className="relative max-w-3xl mx-auto text-center text-gray-700 mb-12 leading-relaxed">
        Sachin Bhattarai, the lead real estate appraiser of our organization, has a distinguished
        record of participation in numerous national and international events. His active involvement
        reflects his commitment to excellence and leadership in the real estate appraisal, consulting
        and insurance surveying sectors. Through his continuous engagement in industry conferences,
        training programs and professional forums, he consistently contributes to advancing valuation
        and insurance assessment practices both in Nepal and abroad.
      </p>

      <div className="relative space-y-12">
        {insightsData.map(({ id, title, date, imageUrl }) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-start gap-6 border-b border-dotted border-gray-300 pb-6"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full md:w-72 h-auto object-cover rounded-md flex-shrink-0"
            />
            <div>
              <h3
                className={`text-xl md:text-2xl font-semibold text-gray-900 cursor-pointer
                  ${activeId === id ? "underline" : ""} hover:underline`}
                onClick={() => setActiveId(id)}
              >
                {title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                {date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyInsights;
