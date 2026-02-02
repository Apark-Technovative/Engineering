
import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import api from "../api/axios";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    document.title = "Experts";
    fetchExperts();
  }, []);

 
  const fetchExperts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/team");

      
      if (Array.isArray(res.data?.data)) {
        setExperts(res.data.data);
      } else {
        setError("Unexpected data format from server.");
      }
    } catch (err) {
      setError("Failed to load experts.");
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return <p className="py-24 text-center text-gray-600">Loading experts...</p>;
  }


  if (error) {
    return <p className="py-24 text-center text-red-500">{error}</p>;
  }

  return (
    <section className="bg-[#f7f9fb] py-20">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Our Experts
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {experts.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No experts found.
          </p>
        )}

        {experts.map((expert) => (
          <ExpertCard key={expert._id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

/* ================= CARD ================= */
const ExpertCard = ({ expert }) => {
  const [showModal, setShowModal] = useState(false);

  const plainTextDescription =
    expert.description?.replace(/<[^>]+>/g, "");

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
        <img
          src={expert.image?.[0]}
          alt={expert.name}
          className="w-full h-[350px] object-cover rounded-md mb-6"
        />

        <h3 className="text-lg font-semibold">{expert.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{expert.position}</p>

        <p className="text-sm text-gray-700 leading-6 line-clamp-6 text-justify">
          {plainTextDescription}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="text-blue-600 text-sm font-medium mt-2 hover:underline"
        >
          Read more
        </button>

        <a
          href={expert.linkedinUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 text-sm mt-auto pt-4"
        >
          <FaLinkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>

      {showModal && (
        <ExpertModal
          expert={expert}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

/* ================= MODAL ================= */
const ExpertModal = ({ expert, closeModal }) => {
  
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-3">
        <div className="relative rounded-2xl overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src={expert.image?.[0]}
              alt={expert.name}
              className="w-full h-[360px] object-cover"
            />

            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {expert.position}
              </p>

              <div
                className="text-sm text-gray-700 leading-6 prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: expert.description,
                }}
              />

              <a
                href={expert.linkedinUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-blue-600 text-sm font-medium"
              >
                <FaLinkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
