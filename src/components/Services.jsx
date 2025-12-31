


import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/getServices"
        );
        setServices(res.data.data);
      } catch (error) {
        console.error("Error fetching services", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading services...</p>;
  }

  return (
    <section className="bg-white py-20">
      <h2 className="text-4xl font-bold text-center mb-20">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto px-4 space-y-28">
        {services.map((service) => (
          <div
            key={service._id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* IMAGE */}
            <div className="relative">
              <div
                className="absolute -top-12 -left-12 w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(#d1d5db 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              <img
                src={`http://localhost:4000/media/${service.image[0]}`}
                alt={service.title}
                className="relative z-10 rounded-md shadow-lg w-full"
              />
            </div>

            
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.tag.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
