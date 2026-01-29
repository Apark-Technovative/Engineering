

import React, { useEffect, useState } from "react";
import api from "../api/axios";

import { AdvancedImage } from "@cloudinary/react";
import cloudinary from "../utils/cloudinary";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Services";
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/getServices");

        const serviceData = Array.isArray(res.data?.data)
          ? res.data.data
          : [];

        setServices(serviceData);
      } catch (error) {
        console.error("Error fetching services", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading services...</p>;
  }

  if (services.length === 0) {
    return (
      <p className="text-center py-20 text-gray-500">
        No services available
      </p>
    );
  }

  return (
    <section className="bg-white py-20">
      <h2 className="text-4xl font-bold text-center mb-20">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto px-4 space-y-28">
        {services.map((service) => {
          const cldImg =
            service.image?.length > 0
              ? cloudinary
                  .image(service.image[0])
                  .format("auto")
                  .quality("auto")
              : null;

          return (
            <div
              key={service._id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image */}
              <div className="relative max-w-xl">
                <div
                  className="absolute -top-12 -left-12 w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(#d1d5db 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {cldImg && (
                  <AdvancedImage
                    cldImg={cldImg}
                    alt={service.title}
                    className="relative z-10 rounded-md shadow-lg w-full"
                  />
                )}
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-6">
                  {service.title}
                </h3>

                <div
                  className="prose max-w-none text-gray-700 leading-relaxed mb-6 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: service.description,
                  }}
                />

                <div className="flex flex-wrap gap-3">
                  {String(
                    Array.isArray(service.tag)
                      ? service.tag.join(",")
                      : service.tag
                  )
                    .split(",")
                    .map((tag, i) => (
                      <span
                        key={i}
                        className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
