import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BLUE = "#2F6FAD";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("banking");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#f3f8fc] py-24 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#1f2d3d]">
        Pricing
      </h1>

     
      <div className="flex justify-center flex-wrap gap-4 mb-14">
        <Tab
          label="Banking Mortgage Loans in Nepal"
          value="banking"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Embassy/Consulate Uses"
          value="embassy"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Individuals (Except Banking Purposes)"
          value="individual"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Corporate Houses"
          value="corporate"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Big Projects"
          value="big-projects"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

  
      <div className="flex justify-center">
        {activeTab === "banking" && <BankingPricingCard />}
        {activeTab === "embassy" && <EmbassyPricingCard />}
        {activeTab === "individual" && <IndividualPricingCard />}
        {activeTab === "corporate" && <CorporateHouse/>}
        {activeTab === "big-projects" && <BigProjects/>}
      </div>

   
      <div className="max-w-4xl mx-auto mt-16 text-sm text-[#1f2d3d]">
        <p className="font-semibold mb-2">Note:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The fees are indicative and can vary based on specific client
            requirements, property complexity, location and other factors.
          </li>
          <li>
            Additional charges may apply for travel, detailed reports and any
            extra services requested by the client.
          </li>
          <li>13% VAT is additional applied in all mentioned fees.</li>
        </ul>
        <p className="italic mt-4">
          For an accurate quote, it's recommended to contact us directly.
        </p>
      </div>
    </div>
  );
};

const Tab = ({ label, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-6 py-3 rounded-full text-sm font-medium transition
      ${
        activeTab === value
          ? "!bg-[#2F6FAD] !text-white"
          : "bg-white text-[#1f2d3d]"
      }`}
  >
    {label}
  </button>
);

const BankingPricingCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Banking Mortgage Loans in Nepal
      </h2>

      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Fair Market Value (NPR)
        </label>
        <input
          type="number"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

    
      <button className="w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold hover:bg-[#255a8d] transition">
        Request A Quote
      </button>
    </div>
  );
};

const EmbassyPricingCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Embassy/Consulate Uses
      </h2>

     
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Select Type <span className="text-red-500">*</span>
        </label>
        <select className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none">
          <option value="">Select an option</option>
          <option>
            Properties for Foreign Studies, Visas or Foreign Court Decisions
          </option>
          <option>Embassy / Consulate Purpose</option>
        </select>
      </div>

    
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Package Type <span className="text-red-500">*</span>
        </label>
        <select className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none">
          <option value="">Select a package</option>
          <option>Standard</option>
          <option>Detailed</option>
        </select>
      </div>

      
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

    
      <button className="w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold hover:bg-[#255a8d] transition">
        Request A Quote
      </button>
    </div>
  );
};

const IndividualPricingCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Individuals (Except Banking Purposes)
      </h2>

     
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Select Valuation Type <span className="text-red-500">*</span>
        </label>

        <select className="w-full bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]">
          <option value="">Select an option</option>
          <option>Residential Property Valuation</option>
          <option>Land Valuation</option>
        </select>
      </div>
         <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

   
      <button className="w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold hover:bg-[#255a8d] transition">
        Request A Quote
      </button>
    
    </div>
  );
};


const CorporateHouse = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Corporate Houses
      </h2>

     
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Select Valuation Type <span className="text-red-500">*</span>
        </label>

        <select className="w-full bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]">
          <option value="">Select an option</option>
          <option>Commercial Property Valuation</option>
          <option>Industry Property Valuation</option>
        </select>
      </div>
         <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      
      <button className="w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold hover:bg-[#255a8d] transition">
        Request A Quote
      </button>
    
    </div>
  );
};

const BigProjects = () => {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Big Projects
      </h2>
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Select Valuation Type <span className="text-red-500">*</span>
        </label>

        <select className="w-full bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]">
          <option value="">Select an option</option>
          <option>Real Estate Development Projects</option>
          <option>Infrastructure Projects</option>
        </select>
      </div>
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Select Project Size <span className="text-red-500">*</span>
        </label>

        <select className="w-full bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]">
          <option value="">Select an option</option>
          <option>Small Projects (up to 10 units)</option>
          <option>Medium Projects (11-50 units)</option>
          <option>Large Projects (more than 50) </option>
        </select>
      </div>
         <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        />
      </div>

   
      <button className="w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold hover:bg-[#255a8d] transition">
        Request A Quote
      </button>
    
    </div>
  );
};
export default Pricing;
