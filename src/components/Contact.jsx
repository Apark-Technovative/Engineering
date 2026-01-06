import { useState } from "react";
import api from "../api/axios";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name" && value.trim().length < 3) {
      setNameError("Name must be at least 3 characters long");
    } else {
      setNameError("");
    }

    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    }

    setSending(true);

    try {
      await api.post("/contact", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Message sending failed:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-[#eef3f7] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

       
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Contact Us
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <FaPhoneAlt className="text-xl mt-1" />
              <div>
                <p className="text-gray-600">Phone / WhatsApp</p>
                <p className="font-semibold">
                  +977-9851156669 / +977-9860288368
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <div>
                <p className="text-gray-600">Office Address</p>
                <p className="font-semibold">
                  Venkatesh Marg, Battisputali, Kathmandu
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-xl mt-1" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold">
                  info@kripaengineering.com.np
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaFacebookF className="text-xl mt-1" />
              <div>
                <p className="text-gray-600">Facebook</p>
                <a
                  href="https://www.facebook.com/engineers.kripa"
                  className="font-semibold hover:underline"
                >
                  facebook.com/engineers.kripa
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-3xl font-bold mb-2">
            Let's Discuss About Your Spaces!
          </h3>
          <p className="text-gray-500 mb-6">
            We can help you achieve your property goals
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#f3f6f9] px-4 py-3 rounded-lg outline-none"
                required
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-1">{nameError}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#f3f6f9] px-4 py-3 rounded-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f3f6f9] px-4 py-3 rounded-lg outline-none resize-none"
                required
              />
            </div>

            
            <button
              type="submit"
              disabled={sending}
              style={{
                backgroundColor: "#356fa8",
                color: "#ffffff",
                padding: "14px",
                borderRadius: "9999px",
                width: "100%",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                opacity: sending ? 0.7 : 1,
                cursor: sending ? "not-allowed" : "pointer",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <FaArrowRight />}
            </button>

            {submitted && (
              <p className="text-green-600 text-center font-medium mt-3">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Kripa Engineering Association"
            src="https://www.google.com/maps?q=Kripa%20Engineering%20Associates%20Pvt.%20Ltd,%20Kathmandu&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
