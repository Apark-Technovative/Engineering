import { useState } from "react";

export default function Careers() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="relative pt-20 pb-10">
        {/* dotted pattern (left side only) */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-24
          bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:18px_18px] opacity-50"
        />

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center mb-14">
          Careers
        </h1>

        {/* Job Title (NOT a button) */}
        <div
          onClick={() => setOpen(!open)}
          className="text-center cursor-pointer"
        >
          <p className="text-xl font-semibold text-slate-800">
            Contract-Based Report Writing Experts
          </p>
          <span className="block w-24 h-1 bg-orange-400 mx-auto mt-3 rounded"></span>
        </div>
      </div>

      {/* Job Description */}
       {open && (
        <div className="bg-slate-50 py-20">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm px-14 py-12">
            {/* Intro */}
            <p className="font-semibold text-gray-800 mb-10 leading-relaxed">
              Job Opportunity: Contract-Based Report Writing Experts <br />
              <span className="font-normal text-gray-600">
                Mode: Hybrid (Office or Remote) | Type: Contract-based, paid per report
              </span>
            </p>

            {/* About */}
            <h3 className="font-semibold text-lg mb-4">About the Role</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Kripa Engineering Associates Pvt. Ltd. (KEA) is seeking report
              writing experts to prepare high-quality professional reports for
              insurance survey and claim settlements. The scope of work includes
              Marine & Transit Insurance Loss Assessment and Comprehensive Loss
              Assessment & Damage Estimation. All assignments carry strict
              deadlines and must meet high professional standards.
            </p>

            {/* Key Details */}
            <h3 className="font-semibold text-lg mb-4">Key Details</h3>
            <ul className="list-disc list-inside text-gray-600 mb-10 space-y-2">
              <li>No prior job experience or formal qualifications required</li>
              <li>Strong learning ability required</li>
              <li>
                Updated knowledge of AI tools for efficient and accurate
                report preparation
              </li>
            </ul>

            {/* Payment */}
<h3 className="font-semibold text-lg mb-4">Payment</h3>
<ul className="list-disc list-inside text-gray-600 mb-10 space-y-2">
  <li>Assignment-based compensation (per report)</li>
</ul>

{/* Work Mode */}
<h3 className="font-semibold text-lg mb-4">Work Mode</h3>
<ul className="list-disc list-inside text-gray-600 mb-10 space-y-2">
  <li>Hybrid and flexible (office-based or remote)</li>
</ul>

            {/* Responsibilities */}
            <h3 className="font-semibold text-lg mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Prepare detailed, accurate, and professional insurance claim
                reports
              </li>
              <li>
                Ensure compliance with applicable industry standards and
                timelines
              </li>
              <li>
                Effectively utilize AI tools and advanced learning methods for
                report drafting and analysis
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
