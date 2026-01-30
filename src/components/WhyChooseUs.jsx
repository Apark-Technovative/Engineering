import { FaGlobe, FaUserCheck, FaMapMarkedAlt, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGlobe />,
      title: "International Standards",
      description:
        "We strictly follow International Valuation Standards (IVS) along with guidelines from the Nepal Valuers Association."
    },
    {
      icon: <FaUserCheck />,
      title: "Registered Valuers",
      description:
        "Our valuers are formally registered with the Nepal Valuers Association (NVA), the first and only voluntary umbrella organization of professional valuers in Nepal."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Local Expertise, Global Insight",
      description:
        "Deep-rooted knowledge of Nepal’s real estate and property markets combined with international best practices."
    },
    {
      icon: <FaChartLine />,
      title: "Precision Driven",
      description:
        "Data-backed valuations with transparent, reliable methodologies."
    }
  ];

  return (
    <section className="bg-[rgb(237,243,249)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-14">
          Professional valuation services built on trust, accuracy, and global standards.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 text-3xl mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
