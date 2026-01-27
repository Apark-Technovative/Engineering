import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const navigate = useNavigate();

  const options = [
    { label: "Banking Mortgage Loans in Nepal", value: "banking" },
    { label: "Embassy/Consulate Uses", value: "embassy" },
    { label: "Individuals (Except Banking Purposes)", value: "individual" },
    { label: "Corporate Houses", value: "corporate" },
    { label: "Big Projects", value: "big-projects" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f8fc] py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold mb-3">Get a Quote</h1>
        <p className="text-gray-600 mb-14">
          Fee Structures for Valuation of Property
        </p>

        <div className="space-y-5 max-w-2xl mx-auto">
          {options.map((item) => (
            <div
              key={item.value}
              onClick={() => navigate(`/pricing?tab=${item.value}`)}
              className="
                bg-white
                h-[76px]
                px-8
                flex
                items-center
                rounded-2xl
                border
                border-gray-200
                text-[18px]
                font-semibold
                text-gray-900
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
              "
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
