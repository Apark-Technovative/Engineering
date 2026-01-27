import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BLUE = "#2F6FAD";

const Pricing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
          setSearchParams={setSearchParams}
        />
        <Tab
          label="Embassy/Consulate Uses"
          value="embassy"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchParams={setSearchParams}
        />
        <Tab
          label="Individuals (Except Banking Purposes)"
          value="individual"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchParams={setSearchParams}
        />
        <Tab
          label="Corporate Houses"
          value="corporate"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchParams={setSearchParams}
        />
        <Tab
          label="Big Projects"
          value="big-projects"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchParams={setSearchParams}
        />
      </div>

      <div className="flex justify-center">
        {activeTab === "banking" && <BankingPricingCard />}
        {activeTab === "embassy" && <EmbassyPricingCard />}
        {activeTab === "individual" && <IndividualPricingCard />}
        {activeTab === "corporate" && <CorporateHouse />}
        {activeTab === "big-projects" && <BigProjects />}
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

// const Tab = ({ label, value, activeTab, setActiveTab }) => (
//   <button
//     onClick={() => setActiveTab(value)}
//     className={`px-6 py-3 rounded-full text-sm font-medium transition
//       ${
//         activeTab === value
//           ? "!bg-[#2F6FAD] !text-white"
//           : "bg-white text-[#1f2d3d]"
//       }`}
//   >
//     {label}
//   </button>
// );

const Tab = ({ label, value, activeTab, setActiveTab, setSearchParams }) => (
  <button
    onClick={() => {
      setActiveTab(value);
      setSearchParams({ tab: value });
    }}
    className={`px-6 py-3 rounded-full text-sm font-medium transition
      cursor-pointer
      ${
        activeTab === value
          ? "!bg-[#2F6FAD] !text-white"
          : "bg-white text-[#1f2d3d] hover:bg-[#eaf1f9]"
      }
      active:scale-95
    `}
  >
    {label}
  </button>
);


const sendQuote = async (payload, setMessage, setLoading, resetFields) => {
  if (!payload.email) {
    setMessage("Please enter your email!");
    return;
  }
  setLoading(true);
  setMessage("");
  try {
   const res = await axios.post(`${import.meta.env.VITE_API_URL}/sendQuote`, payload);

    setMessage(res.data.message || "Email sent successfully!");
    resetFields();
  } catch (err) {
    console.error("Error response:", err.response?.data || err.message);
    setMessage("Failed to send email!");
  } finally {
    setLoading(false);
  }
};



const BankingPricingCard = () => {
  const [fairMarketValue, setFairMarketValue] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setFairMarketValue("");
    setEmail("");
  };

 const handleSubmit = () => {
  sendQuote(
    {
      title: "Banking Mortgage Loans in Nepal",
      type1: "Fair Market Value",
      type2: fairMarketValue,
      price: "", // optional
      email,
    },
    setMessage,
    setLoading,
    resetFields
  );
};


  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Banking Mortgage Loans in Nepal
      </h2>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Fair Market Value (NPR)
      </label>
      <input
        type="number"
        value={fairMarketValue}
        onChange={(e) => setFairMarketValue(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        placeholder="Enter Fair Market Value"
      />

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        placeholder="Your Email"
      />

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#255a8d]"
        }`}
      >
        {loading ? "Sending..." : "Request A Quote"}
      </button>
    </div>
  );
};

const EmbassyPricingCard = () => {
  const [type, setType] = useState("");
  const [packageType, setPackageType] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setType("");
    setPackageType("");
    setEmail("");
  };


  const handleSubmit = () => {
     if (!type || !packageType || !email) {
    setMessage("Please fill all fields!");
    return;
  }
  let price = "";

  if (type === "Properties for Foreign Studies, Visas or Foreign Court Decisions") {
    price = "NPR 5,000";
  }

  if (packageType === "Standard") {
    price = "NPR 2,000";
  }

  if (packageType === "Detailed") {
    price = "NPR 4,000";
  }

  sendQuote(
    {
      title: "Embassy/Consulate Uses",
      type1: type,
      type2: packageType,
      price: price,
      email,
    },
    setMessage,
    setLoading,
    resetFields
  );
};
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Embassy/Consulate Uses
      </h2>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Select Type <span className="text-red-500">*</span>
      </label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
      >
        <option value="">Select an option</option>
        <option value="Properties for Foreign Studies, Visas or Foreign Court Decisions">
          Properties for Foreign Studies, Visas or Foreign Court Decisions
        </option>
      </select>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Package Type <span className="text-red-500">*</span>
      </label>
      <select
        value={packageType}
        onChange={(e) => setPackageType(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
      >
        <option value="">Select a package</option>
        <option value="Standard">Standard</option>
        <option value="Detailed">Detailed</option>
      </select>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        placeholder="Your Email"
      />

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#255a8d]"
        }`}
      >
        {loading ? "Sending..." : "Request A Quote"}
      </button>
    </div>
  );
};



const IndividualPricingCard = () => {
  const [valuationType, setValuationType] = useState("");
  const [subType, setSubType] = useState(""); // package OR land size
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setValuationType("");
    setSubType("");
    setEmail("");
  };

  const handleSubmit = () => {
  let price = "";

  if (subType === "Standard Residential Property") {
    price = "NPR 6,000";
  }

  if (subType === "Luxury Residential Property") {
    price = "NPR 10,000";
  }

  if (subType === "Small Plots (up to 500 sq. meters)") {
    price = "NPR 5,000";
  }

  if (subType === "Large Plots (over 500 sq. meters)") {
    price = "NPR 8,000";
  }

  sendQuote(
    {
      title: "Individuals (Except Banking Purposes)",
      type1: valuationType,
      type2: subType,
      price,
      email,
    },
    setMessage,
    setLoading,
    resetFields
  );
};


  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Individuals (Except Banking Purposes)
      </h2>

      {/* Valuation Type */}
      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Select Valuation Type <span className="text-red-500">*</span>
      </label>
      <select
        value={valuationType}
        onChange={(e) => {
          setValuationType(e.target.value);
          setSubType(""); // reset dependent field
        }}
        className="w-full mb-6 bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]"
      >
        <option value="">Select an option</option>
        <option value="Residential Property Valuation">
          Residential Property Valuation
        </option>
        <option value="Land Valuation">Land Valuation</option>
      </select>

      {/* Residential Options */}
      {valuationType === "Residential Property Valuation" && (
        <>
          <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
            Select Package Type <span className="text-red-500">*</span>
          </label>
          <select
            value={subType}
            onChange={(e) => setSubType(e.target.value)}
            className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]"
          >
            <option value="">Select package</option>
            <option value="Standard Residential Property">
              Standard Residential Property
            </option>
            <option value="Luxury Residential Property">
              Luxury Residential Property
            </option>
          </select>
        </>
      )}

      {/* Land Options */}
      {valuationType === "Land Valuation" && (
        <>
          <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
            Select Land Size <span className="text-red-500">*</span>
          </label>
          <select
            value={subType}
            onChange={(e) => setSubType(e.target.value)}
            className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]"
          >
            <option value="">Select land size</option>
            <option value="Small Plots (up to 500 sq. meters)">
              Small Plots (up to 500 sq. meters)
            </option>
            <option value="Large Plots (over 500 sq. meters)">
              Large Plots (over 500 sq. meters)
            </option>
          </select>
        </>
      )}

      {/* Email */}
      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        placeholder="Your Email"
      />

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#255a8d]"
        }`}
      >
        {loading ? "Sending..." : "Request A Quote"}
      </button>
    </div>
  );
};


const CorporateHouse = () => {
  const [valuationType, setValuationType] = useState("");
  const [subType, setSubType] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setValuationType("");
    setSubType("");
    setEmail("");
  };


  const handleSubmit = () => {
  let price = "";

  if (subType === "Small Offices/Retail Spaces") {
    price = "NPR 15,000";
  }

  if (subType === "Large Offices/Commercial Complexes") {
    price = "NPR 25,000";
  }

  if (subType === "Small Industrial Units") {
    price = "NPR 30,000";
  }

  if (subType === "Large Industrial Units") {
    price = "NPR 50,000";
  }

  sendQuote(
    {
      title: "Corporate Houses",
      type1: valuationType,
      type2: subType,
      price,
      email,
    },
    setMessage,
    setLoading,
    resetFields
  );
};

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8">
        Corporate Houses
      </h2>

      {/* Valuation Type */}
      <label className="block text-sm font-medium mb-2">
        Select Valuation Type <span className="text-red-500">*</span>
      </label>
      <select
        value={valuationType}
        onChange={(e) => {
          setValuationType(e.target.value);
          setSubType("");
        }}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3"
      >
        <option value="">Select an option</option>
        <option value="Commercial Property Valuation">
          Commercial Property Valuation
        </option>
        <option value="Industrial Property Valuation">
          Industrial Property Valuation
        </option>
      </select>

      {/* Commercial */}
      {valuationType === "Commercial Property Valuation" && (
        <>
          <label className="block text-sm font-medium mb-2">
            Property Type <span className="text-red-500">*</span>
          </label>
          <select
            value={subType}
            onChange={(e) => setSubType(e.target.value)}
            className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3"
          >
            <option value="">Select Property Type</option>
            <option value="Small Offices/Retail Spaces">
              Small Offices/Retail Spaces
            </option>
            <option value="Large Offices/Commercial Complexes">
              Large Offices/Commercial Complexes
            </option>
          </select>
        </>
      )}

      {/* Industrial */}
      {valuationType === "Industrial Property Valuation" && (
        <>
          <label className="block text-sm font-medium mb-2">
            Select Industry Type <span className="text-red-500">*</span>
          </label>
          <select
            value={subType}
            onChange={(e) => setSubType(e.target.value)}
            className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3"
          >
            <option value="">Select Industry Type</option>
            <option value="Small Industrial Units">
              Small Industrial Units
            </option>
            <option value="Large Industrial Units">
              Large Industrial Units
            </option>
          </select>
        </>
      )}

      {/* Email */}
      <label className="block text-sm font-medium mb-2">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3"
      />

      {message && <p className="mb-4 text-center">{message}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-[#2F6FAD] text-white py-3 rounded-full"
      >
        {loading ? "Sending..." : "Request A Quote"}
      </button>
    </div>
  );
};



const BigProjects = () => {
  const [valuationType, setValuationType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const resetFields = () => {
    setValuationType("");
    setProjectSize("");
    setEmail("");
  };


const handleSubmit = () => {
  let price = "";

  if (projectSize === "Small Projects (up to 10 units)") {
    price = "NPR 50,000";
  }

  if (projectSize === "Medium Projects (11-50 units)") {
    price = "NPR 1,00,000";
  }

  if (projectSize === "Large Projects (more than 50)") {
    price = "NPR 2,00,000";
  }

  sendQuote(
    {
      title: "Big Projects",
      type1: valuationType,
      type2: projectSize,
      price,
      email,
    },
    setMessage,
    setLoading,
    resetFields
  );
};


  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md p-10">
      <h2 className="text-xl font-bold text-center mb-8 text-[#1f2d3d]">
        Big Projects
      </h2>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Select Valuation Type <span className="text-red-500">*</span>
      </label>
      <select
        value={valuationType}
        onChange={(e) => setValuationType(e.target.value)}
        className="w-full mb-6 bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]"
      >
        <option value="">Select an option</option>
        <option value="Real Estate Development Projects">
          Real Estate Development Projects
        </option>
        <option value="Infrastructure Projects">Infrastructure Projects</option>
      </select>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Select Project Size <span className="text-red-500">*</span>
      </label>
      <select
        value={projectSize}
        onChange={(e) => setProjectSize(e.target.value)}
        className="w-full mb-6 bg-white border border-[#d6e1ec] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6FAD]"
      >
        <option value="">Select an option</option>
        <option value="Small Projects (up to 10 units)">
          Small Projects (up to 10 units)
        </option>
        <option value="Medium Projects (11-50 units)">
          Medium Projects (11-50 units)
        </option>
        <option value="Large Projects (more than 50)">
          Large Projects (more than 50)
        </option>
      </select>

      <label className="block text-sm font-medium mb-2 text-[#1f2d3d]">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-6 bg-[#eef3f8] rounded-md px-4 py-3 text-sm focus:outline-none"
        placeholder="Your Email"
      />

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <button
      
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full !bg-[#2F6FAD] !text-white py-3 rounded-full text-sm font-semibold transition cursor-pointer ${
  loading ? "opacity-50 cursor-allowed" : "hover:bg-[#255a8d]"
}`}

      >
        {loading ? "Sending..." : "Request A Quote"}
      </button>
    </div>
  );
};

export default Pricing;
