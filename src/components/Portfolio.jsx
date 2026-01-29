import { FiGrid, FiUser, FiBriefcase } from "react-icons/fi";

const Portfolio = () => {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#EDF3F9", fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        
        <h2 className="text-center text-[24px] font-semibold text-[#111827] mb-12">
          Portfolio
        </h2>

        
        <div className="flex flex-col sm:flex-row justify-center gap-8">

          
          <div className="bg-white w-full sm:w-[360px] p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-[20px] font-normal text-[#111827]">1,000+</h3>
              <p className="text-[14px] font-normal text-[#111827] mt-1">
                Valuation Projects Completed
              </p>
            </div>
            <FiGrid size={36} className="text-[#111827]" />
          </div>

         
          <div className="bg-white w-full sm:w-[360px] p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-[20px] font-normal text-[#111827]">800+</h3>
              <p className="text-[14px] font-normal text-[#111827] mt-1">
                Happy Clients: Corporate and Individuals
              </p>
            </div>
            <FiUser size={36} className="text-[#111827]" />
          </div>

          
          <div className="bg-white w-full sm:w-[360px] p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-[20px] font-normal text-[#111827]">3+</h3>
              <p className="text-[14px] font-normal text-[#111827] mt-1">
                Servicing since 2022
              </p>
            </div>
            <FiBriefcase size={36} className="text-[#111827]" />
          </div>

          <div className="bg-white w-full sm:w-[360px] p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-[20px] font-normal text-[#111827]">3+</h3>
              <p className="text-[14px] font-normal text-[#111827] mt-1">
                Operatin Across Nepal
              </p>
            </div>
            <FiBriefcase size={36} className="text-[#111827]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
