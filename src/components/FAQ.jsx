import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <FAQItem
        question="Why should clients choose KEA for an independent property valuation?"
        answer="KEA delivers trusted valuations supported by insightful research and deep market expertise. Our valuations strictly follow International Valuation Standards (IVS) and recognised market standards, ensuring accuracy, fairness and defensibility for banks, developers, investors and individuals. In addition to valuation, we provide professional property consultancy advisory services. KEA remains fully independent. We do not buy, sell or rent properties, ensuring complete neutrality and unwavering integrity in every assessment."
      />

      <FAQItem
        question="How does KEA handle loss assessment?"
        answer="KEA conducts professional inspections and prepares accurate loss estimates based on real market conditions. Our team delivers clear, transparent and well-documented assessment reports to support insurers and insured parties. We handle a wide range of loss assessment assignments, including marine and transit-related losses, ensuring fairness, reliability and timely reporting."
      />
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      
      
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">
          {question}
        </h3>

        
        <span className="text-xl text-gray-600">
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>

      
      {open && (
        <p className="mt-4 text-gray-700 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQ;
